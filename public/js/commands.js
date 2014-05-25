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
var commands = function (input, cb) {
	var inParts = input.split(' ');
	var cmd = inParts[0];
	if(cmd === 'ls' || cmd === 'dir') {
		var lsr = ls(inParts[1]);
        return cb(lsr[0], lsr[1]);
	} else if(cmd === 'cd') {
		var cdr = cd(inParts[1]);
        return cb(cdr[0], cdr[1]);
	} else if(cmd === 'dl') {
		// Download File
	} else if(cmd === 'exit' || cmd === 'quit') {
		// Quit
	} else if(cmd === 'help' || cmd === '?') {
		return cb(null, help());
	} else if(cmd === 'mail') {
		// Mail
	} else if(cmd === 'cat') {
		// Echo file
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
    var ret = dirs[dir];
    return [null, ret];
}

var cd = function(dir) {
    //curDir = dirs[dir];
    //console.log(curDir.split("/")[0]);
    if (dir === "..") {
        finDir = curDir.split("/");
        curDir = finDir.pop().join("/");
    } else {
        console.log(dirs[dir]);
        curDir = curDir + "/" + dir;
    } 
    return [null, curDir];
}

var cat = function (file, cb) {
	if(file.type === 'file') {
		return file.data;
	} else {
		return cb('That is not a file')
	}
}
