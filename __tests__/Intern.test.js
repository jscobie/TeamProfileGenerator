const Intern = require('../lib/Intern');

test('Accept typed school', () => {
    const testSchool = 'College';
    const employeeInstance = new Intern('Jacob', 3, 'test@contoso.com', testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test('Typed school returns school', () => {
    const testSchool = 'College';
    const employeeInstance = new Intern('Jacob', 3, 'test@contoso.com', testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test('Testing role.', () => {
    const returnValue = 'Intern';
    const employeeInstance = new Intern('Jacob', 3, 'test@contoso.com', 'College');
    expect(employeeInstance.getRole()).toBe(returnValue);
});