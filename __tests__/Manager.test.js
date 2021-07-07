const Manager = require("../lib/Manager");


test("creates a manager object", () => {
	const manager = new Manager("Sam", 2, "sam@wilson.com", 905);

	expect(manager.name).toBe("Sam");
	expect(manager.id).toBe(2);
	expect(manager.email).toBe("sam@wilson.com");
	expect(manager.officeNumber).toBe(905);
});

test("tests the Name method", () => {
	const manager = new Manager("Sam", 2, "sam@wilson.com", 905);

	expect(manager.getName()).toBe("Sam");
});

test("tests the Id method", () => {
	const manager = new Manager("Sam", 2, "sam@wilson.com", 905);

	expect(manager.getId()).toBe(2);
});

test("tests the Email method", () => {
	const manager = new Manager("Sam", 2, "sam@wilson.com", 905);

	expect(manager.getEmail()).toBe("sam@wilson.com");
});

test("tests the Role method", () => {
	const manager = new Manager("Sam", 2, "sam@wilson.com", 905);

	expect(manager.getRole()).toBe("Manager");
});
