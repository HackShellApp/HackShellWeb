var fileStructure = {
	"/": {
		type: "directory",
		children: ["home"],
		data: null,
	},
	"/home": {
		type: "directory",
		children: ["test.txt", "readme.txt"],
		data: null,
	},
	"/home/test.txt": {
		type: "file",
		children: [null],
		data: "This is a test.",
	},
	"/home/readme.txt": {
		type: "file",
		children: [null],
		data: "Welcome to HackShell! Enjoy your stay.",
	},
}