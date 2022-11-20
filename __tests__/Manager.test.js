const Manager = require('../lib/Manager');

test('Create office number', () => {
    const testOfficeNumber = '2';
    const employeeInstance = new Manager('Jacob', '3', 'test@contoso.com', testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test('Can return typed office number in function', () => {
    const testOfficeNumber = '45';
    const employeeInstance = new Manager('Jacob', '3', 'test@contoso.com', testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test('Can return role', () => {
    const returnValue = 'Manager';
    const employeeInstance = new Manager('Jacob', '3', 'test@contoso.com', '45');
    expect(employeeInstance.getRole()).toBe(returnValue);
});