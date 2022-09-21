const Intern = require("../lib/Intern");

test("Sets a new school", () => {
    const school = "test university";
    const employee = new Intern("Lauren", "1234", "test@email.com", school);
    expect(employee.school).toBe(school);
});

test("Gets school from getSchool() function", () => {
    const testSchool = "test university";
    const employee = new Intern("Lauren", "1234", "test@email.com", testSchool);
    expect(employee.school).toBe(testSchool);
});

test("Tests intern getRole function", () => {
    const returnIntern = "Intern";
    const employee = new Intern("Lauren", "1234", "test@email.com", returnIntern);
    expect(employee.getRole()).toBe(returnIntern);
});
