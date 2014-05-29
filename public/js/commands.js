var curDir = "~"

var baseUrl = 'http://' + window.location.host;
var dirs = {
    "~" : "Missions/",
    "~/Missions" : ""
}
var userfiles = {
    "~" : "readme.txt",
    "~/readme.txt" : "Hello there Mr.Kitnick, I'm Edmen Snowman and I'll be \nyour manager, prepare for utter death and destruction! (I'm kidding you know) \n\
\n\
This may be only your first day on the job, but we're in need of people like you \nso you better get started right away, in fact \nI may have a mission ready for you, check for it in your 'Missions' folder.",
    "~/Missions" : "mission1.txt",
    "~/Missions/mission1.txt" : "\n\nMission #1\n\
----------\n\n\
Your mission, should you choose to accept it, is to find information \nfrom the computer of one of our own employees, Michael Groves.\n\
Mr. Groves is suspected of working for our rival, Cortex Industries.  \nCortex is in many ways a similar company to NitroSoft, but they are \nbuilding a so-called 'life improvement framework' which we beleive they may be planning \non using for brainwashing of all who use their services.\n\n\
Procedure:\n\
----------\n\n\
You will need to get into Groves's system, luckily we happen to have a\n\
security camera right above all employee's desk, as is standard practice\n\
and we captured " + baseUrl + "/clickable/test.html" + " picture, see if you can find anything from it.\n\
When you have aquired his password, use the 'ssh' command like so to get into his system:\n\
ssh mgroves@cortex.pizza <password for login>"

}

var commands = function (input, cb) {
	var inParts = input.split(' ');
	var cmd = inParts[0];
    if(cmd === 'ls' || cmd === 'dir') {
		var lsr = ls(inParts[1]);
        return cb(lsr[0], lsr[1]);
	} else if(cmd === 'cd') {
		var cdr = cd(inParts[1]);
        return cb(cdr[0], cdr[1]);
	} else if(cmd === 'ssh') {
		// ssh
//ssh(inParts[1], inParts[2], function(err, res) {
//           return cb(err,res);
//        });
        var sshr = ssh(inParts[1], inParts[2], cb);
        //return cb(sshr[0], sshr[1]);
/*
  } else if(cmd === 'exit' || cmd === 'quit') {
		// Quit
*/
	} else if(cmd === 'help' || cmd === '?') {
		return cb(null, help());
	} else if(cmd === 'mail') {
		// Mail
	} else if(cmd === 'cat') {
		// Echo file
        var catr = cat(inParts[1]);
        return cb(catr[0], catr[1]);
	} else {
		return cb('No such function');
	}
}

// Callback structure:
// cb(err, data);

var ssh = function(whereto, pass, cb) {
    if (whereto === "mgroves@cortex.pizza" && pass === 'password1') {
        return cb(null, "Success! You have completed mission #1!");
    }
    return cb('Wrong user or pass!');
}

var help = function(cb) {
	var info = " ls - List files in current directory.\n \
cd <dir> - Change to directory <dir>.\n \
help - This.\n \
cat <file> - Output the contents of a file.\n \
To get started, use the ls command to find any files, and cat to read them";
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
    if (dir.slice(-1) === "/") {
    	dir = dir.substring(0, dir.length - 1);
    }
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
}
