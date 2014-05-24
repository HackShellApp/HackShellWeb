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
		// Help
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
	var info = 'ls - List files in current directory.
				cd <dir> - Change to directory <dir>.
				dl <file> - Download file <file> from remote server.
				help - This.
				mail - Read your mail.
				cat - Output the contents of a file.
				exit - Quit the terminal.'
	cb(null, info);
} 

