const Engineer = require("../lib/Engineer");


test("creates an engineer object", () => {
	const engineer = new Engineer("Sam", 2, "sam@wilson.com", "samwilson");

	expect(engineer.name).toBe("Sam");
	expect(engineer.id).toBe(2);
	expect(engineer.email).toBe("sam@wilson.com");
	expect(engineer.github).toBe("samwilson");
});

test("tests the Name method", () => {
	const engineer = new Engineer("Sam", 2, "sam@wilson.com", "samwilson");

	expect(engineer.getName()).toBe("Sam");
});

test("tests the Id method", () => {
	const engineer = new Engineer("Sam", 2, "sam@wilson.com", "samwilson");

	expect(engineer.getId()).toBe(2);
});

test("tests the Email method", () => {
	const engineer = new Engineer("Sam", 2, "sam@wilson.com", "samwilson");

	expect(engineer.getEmail()).toBe("sam@wilson.com");
});

test("tests the Github method", () => {
	const engineer = new Engineer("Sam", 2, "sam@wilson.com", "samwilson");

	expect(engineer.getGithub()).toBe("samwilson");
});

test("tests the Role method", () => {
	const engineer = new Engineer("Sam", 2, "sam@wilson.com", "samwilson");

	expect(engineer.getRole()).toBe("Engineer");
});