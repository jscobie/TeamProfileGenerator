const Manager = require('../lib/Manager');

describe('Manager',()  => { 
    test('Test the getOfficeNumber function is able to return the office number typed', () => {
        const testOfficeNumber = '45';
        const employeeInstance = new Manager('Jacob', '3', 'test@contoso.com', testOfficeNumber);
        expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
    });
    
    test('Test the getRole function is able to return the role', () => {
        const returnValue = 'Manager';
        const employeeInstance = new Manager('Jacob', '3', 'test@contoso.com', '45');
        expect(employeeInstance.getRole()).toBe(returnValue);
    });
});
