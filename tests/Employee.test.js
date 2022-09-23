const Employee = require('../lib/Employee.js');

test("Can create an new employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Sets a new employee Name", () => {
    const name = "Lauren"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
   
});

test("Sets a new employee ID", () => {
    const id = "1234";
    const employee = new Employee("Lauren", id);
    expect(employee.id).toBe(id);
});

test("Sets a new employee email", () => {
    const email = "test@email.com";
    const employee = new Employee("Lauren", "1234", email);
    expect(employee.email).toBe(email);
});

test("gets name from getName() function", () => {
    const testName = "Lauren"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test("gets id from getID() function", () => {
    const testID = "1234";
    const employee = new Employee("Lauren", testID);
    expect(employee.getId()).toBe(testID);
});

test("gets email from getEmail() function", () => {
    const testEmail = "test@email.com";
    const employeeInstance = new Employee("Lauren", "1234", testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});

test('test getRole() function', () => {
    const testGetRole = "Employee"
    const employee = new Employee("Lauren", "1234", "test@email.com");
    expect(employee.getRole()).toBe(testGetRole);
});
