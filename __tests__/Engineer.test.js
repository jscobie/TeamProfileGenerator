const Engineer = require('../lib/Engineer');

test('Can we pass in a github URL and access it?', () => {
    const testGithub = 'jscobie';
    const employeeInstance = new Engineer('Jacob', 3, 'test@contoso.com', testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test('Test the getGithub function is able to return the github', () => {
    const testGithub = 'jscobie';
    const employeeInstance = new Engineer('Jacob', 3, 'test@contoso.com', testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});
