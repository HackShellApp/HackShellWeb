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

module.exports = fileStructure;