var commands = function (input, cb) {
	var inParts = input.split(' ');
	var cmd = inParts[0];
	if(cmd === 'ls' || cmd === 'dir') {
		// List directory
	} else if(cmd === 'cd') {
		// Change Directory
	} else if(cmd === 'dl') {
		// Download File
	} else if(cmd === 'exit' || cmd === 'quit') {
		// Quit
	} else if(cmd === 'help' || cmd === '?') {
		return cb(help());
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
	var info = "ls - List files in current directory.\ncd <dir> - Change to directory <dir>.\ndl <file> - Download file <file> from remote server.\nhelp - This.\nmail - Read your mail.\ncat - Output the contents of a file.\nexit - Quit the terminal.";
	return info;
}

var cd = function(cb) {
	if(!curDir) {
		curDir = '/home';
	}
	cb(null,'TODO');
}
