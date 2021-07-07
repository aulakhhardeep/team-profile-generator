const Manager = require("../lib/Manager");


test("creates a manager object", () => {
	const manager = new Manager("Sam", 2, "sam@wilson.com", 905);

	expect(manager.name).toBe("Sam");
	expect(manager.id).toBe(2);
	expect(manager.email).toBe("sam@wilson.com");
	expect(manager.officeNumber).toBe(905);
});