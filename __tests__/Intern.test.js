const Intern = require('../lib/Intern');

test('Can we pass in a githuburl and access it?', () => {
    const testSchool = 'College';
    const employeeInstance = new Intern('Jacob', 3, 'test@contoso.com', testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test('Test the getSchool function is able to return the School', () => {
    const testSchool = 'College';
    const employeeInstance = new Intern('Jacob', 3, 'test@contoso.com', testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test('Test the getRole function is able to return the role', () => {
    const returnValue = 'Intern';
    const employeeInstance = new Intern('Jacob', 3, 'test@contoso.com', 'College');
    expect(employeeInstance.getRole()).toBe(returnValue);
});