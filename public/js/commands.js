var curDir = fileStructure.root.home;
var fullFile;

var commands = function (input, cb) {
	var inParts = input.split(' ');
	var cmd = inParts[0];
	var params = inParts.shift().join(' ');
	if(cmd === 'ls' || cmd === 'dir') {
		// List directory
	} else if(cmd === 'cd') {
		// Change Directory
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
		})
	} else {
		return cb('No such function');
	}
}

// Callback structure:
// cb(err, data);

var help = function(cb) {
	var info = "ls - List files in current directory.\ncd <dir> - Change to directory <dir>.\ndl <file> - Download file <file> from remote server.\nhelp - This.\nmail - Read your mail.\ncat - Output the contents of a file.\nexit - Quit the terminal.";
	return info;
}

var cd = function(cb) {
	if(!curDir) {
		curDir = '/home';
	}
	cb(null,'TODO');
}

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
