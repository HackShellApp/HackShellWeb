var curDir = "/home"
var fileStructure = fileStructure
var commands = function (input, cb) {
	var inParts = input.split(' ');
	var cmd = inParts[0];
	if(cmd === 'ls' || cmd === 'dir') {
		// List directory
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
dl <file> - Download file <file> from remote server.\n \
help - This.\n \
mail - Read your mail.\n \
cat - Output the contents of a file.\n \
exit - Quit the terminal.";
	return info;
}

var cd = function(curDir, newdir) {
    console.log(JSON.stringify(fileStructure));
    if ((curDir.charAt(0) === "/") || (curDir.charAt(0) === "~")){
        return [null, curDir.charAt(0)]
    } else if(!curDir){
		curDir = '/home';
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
