var curDir = "~"
var fileStructure = {
	"root": {
		type: "directory",
		children: ["home"],
		data: null,
		"home": {
			type: "directory",
			children: ["test.txt", "readme.txt"],
			data: null,
			"test-txt": {
				type: "file",
				children: [null],
				data: "This is a test.",
			},
			"readme-txt": {
				type: "file",
				children: [null],
				data: "Welcome to HackShell! Enjoy your stay.",
			},
		},
	}
}
var dirs = {
    "~" : "stuff",
    "~/stuff" : "files",
    "~/stuff/files" : "test"}
var userfiles = {
    "~" : "readme",
    "~/readme" : "fuckingshitballs",
    "~/stuff/files" : "lol.txt",
    "~/stuff/files/lol.txt" : "haha lol :P"
}
    
var curDir = fileStructure.root.home;
var fullFile;

var commands = function (input, cb) {
	var inParts = input.split(' ');
	var cmd = inParts[0];
	var params = inParts.shift().join(' ');
	if(cmd === 'ls' || cmd === 'dir') {
		var lsr = ls(inParts[1]);
        return cb(lsr[0], lsr[1]);
	} else if(cmd === 'cd') {
		var cdr = cd(inParts[1]);
        return cb(cdr[0], cdr[1]);
	} else if(cmd === 'wget') {
		// Download File
	} else if(cmd === 'exit' || cmd === 'quit') {
		// Quit
	} else if(cmd === 'help' || cmd === '?') {
		return cb(null, help());
	} else if(cmd === 'mail') {
		// Mail
	} else if(cmd === 'cat') {
		cat(params, function(err,res) {
			if (err) {
				return cb(err);
			} else {
				return cb(null, res);
			}
		});
	} else {
		return cb('No such function');
	}
}

// Callback structure:
// cb(err, data);

var help = function(cb) {
	var info = " ls - List files in current directory.\n \
cd <dir> - Change to directory <dir>.\n \
wget <file> - Download file <file> from remote server.\n \
help - This.\n \
mail - Read your mail.\n \
cat - Output the contents of a file.\n \
exit - Quit the terminal.";
	return info;
}

var ls = function(dir) {
    if (!dir){
        dir = curDir;
    }
    var dirlist = dirs[dir];
    var filelist = userfiles[dir];
    var list = [dirlist, filelist];
    return [null, list];
}

var cd = function(dir) {
    //curDir = dirs[dir];
    //console.log(curDir.split("/")[0]);
    if (dir === "..") {
        finDir = curDir.split("/");
        finDir.pop();
        curDir = finDir.join("/");
    } else {
        console.log(dirs[dir]);
        curDir = curDir + "/" + dir;
    } 
    return [null, curDir];
}

var cat = function (file) {
    file = curDir + "/" + file;
    return [null, userfiles[file]]
var exit = function (cb) {
  self.close ();
}

var cat = function (file, cb) {
	file = file.replace('.', '-');
	if (file.indexOf('/') > 1) {
		file = file.split('/');
		var fullFile = curDir;
		for (i = 0; i < file.length-1; i++) {
			fullFile = fullFile.file[i];
		}
		return cb(null, fullFile.data);
	} else if (file.indexOf('/') > -1) {
		fullFile = fileStructure;
		for (i = 1; i < file.length-1; i++) {
			fullFile = fullFile.file[i];
		}
		return cb(null, fullFile.data);
	} else {
		fullFile = curDir.file;
		cb(null, fullFile.data);
	}
	if(file.type === 'file') {
		return file.data;
	} else {
		return cb('That is not a file')
	}
}
