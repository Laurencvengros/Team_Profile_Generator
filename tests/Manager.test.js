const Manager = require("../lib/Manager");


test("Sets a new Office Number.", () => {
    const officeNumber = "9999";
    const employee = new Manager("Lauren", "1234", "test@email.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});


test("Gets officeNumber from getOfficeNumber() function", () => {
    const officeNumber = "9999";
    const employee = new Manager("Lauren", "1234", "test@email.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test('tests manager getRole() function', () => {
    const returnManager = "Manager"
    const employee = new Manager("Lauren", "1234", "test@email.com", returnManager);
    expect(employee.getRole()).toBe(returnManager);
});
