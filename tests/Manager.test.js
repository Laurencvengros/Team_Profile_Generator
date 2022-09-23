const Manager = require("../lib/Manager");


test("Gets school from getSchool() function", () => {
    const officeNumber = "9999";
    const employee = new Manager("Lauren", "1234", "test@email.com", officeNumber);
    expect(employee.github).toBe(officeNumber);
});

test("Sets a new Office Number.", () => {
    const officeNumber = "9999";
    const employee = new Manager("Lauren", "1234", "test@email.com", officeNumber);
    expect(employee.github).toBe(officeNumber);
});

test('tests manager getRole() function', () => {
    const returnManager = "Manager"
    const employee = new Manager("Lauren", "1234", "test@email.com", returnManager);
    expect(employee.getRole()).toBe(returnManger);
});
