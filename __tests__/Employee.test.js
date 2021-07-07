const Employee = require("../lib/Employee");
// name, id, email, getName(), getId(), getEmail(), getRole()

test("creates an employee object", () => {
	const employee = new Employee("Sam", 2, "sam@wilson.com");

	expect(employee.name).toBe("Sam");
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.id).toEqual(2);
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.email).toEqual("sam@wilson.com");
});

test("tests the Name method", () => {
	const employee = new Employee("Sam", 2, "sam@wilson.com");

	expect(employee.getName()).toBe("Sam");
});

test("tests the Id method", () => {
	const employee = new Employee("Sam", 2, "sam@wilson.com");

	expect(employee.getId()).toBe(2);
});

test("tests the Email method", () => {
	const employee = new Employee("Sam", 2, "sam@wilson.com");

	expect(employee.getEmail()).toBe("sam@wilson.com");
});

test("tests the Role method", () => {
	const employee = new Employee("Sam", 2, "sam@wilson.com");

	expect(employee.getRole()).toBe("Employee");
});
