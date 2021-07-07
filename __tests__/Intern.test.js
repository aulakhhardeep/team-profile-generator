const Intern = require("../lib/Intern");

test("creates an intern object", () => {
	const intern = new Intern("Sam", 2, "sam@wilson.com", "York");

	expect(intern.name).toBe("Sam");
	expect(intern.id).toBe(2);
	expect(intern.email).toBe("sam@wilson.com");
	expect(intern.college).toBe("York");
});


test("tests the Name method", () => {
	const intern = new Intern("Sam", 2, "sam@wilson.com", "York");

	expect(intern.getName()).toBe("Sam");
});

test("tests the Id method", () => {
	const intern = new Intern("Sam", 2, "sam@wilson.com", "York");

	expect(intern.getId()).toBe(2);
});

test("tests the Email method", () => {
	const intern = new Intern("Sam", 2, "sam@wilson.com", "York");

	expect(intern.getEmail()).toBe("sam@wilson.com");
});

test("tests the College method", () => {
	const intern = new Intern("Sam", 2, "sam@wilson.com", "York");

	expect(intern.getCollege()).toBe("York");
});

test("tests the Role method", () => {
	const intern = new Intern("Sam", 2, "sam@wilson.com", "York");

	expect(intern.getRole()).toBe("Intern");
});