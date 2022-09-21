const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const github = "githubtestaccount";
    const employee = new Engineer("Lauren", "1234", "test@email.com", github);
    expect(employee.github).toBe(github);
});

test("Gets gitHub", () => {
    const testGithub = "githubtestaccount";
    const employee = new Engineer("Lauren", "1234", "test@email.com", testGithub);
    expect(employee.getGitHub()).toBe(testGithub);
});

test("Tests engineer getRole function", () => {
    const returnEngineer = "Engineer";
    const employee = new Engineer("Lauren", "1234", "test@email.com", returnEngineer);
    expect(employee.getRole()).toBe(returnEngineer);
});

