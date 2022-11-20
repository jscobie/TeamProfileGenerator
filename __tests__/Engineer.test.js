const Engineer = require('../lib/Engineer');

test('Check Github is passed', () => {
    const testGithub = 'jscobie';
    const employeeInstance = new Engineer('Jacob', 3, 'test@contoso.com', testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test('Github typed is returned', () => {
    const testGithub = 'jscobie';
    const employeeInstance = new Engineer('Jacob', 3, 'test@contoso.com', testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});
