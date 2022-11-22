const Employee = require('../lib/Employee');

describe('Employee',()  => {
    test('Can we create a new Employee object?', () => {
        const employeeTest = new Employee();
        expect(typeof(employeeTest)).toBe('object');
    })
    
    test('Can we pass in a name and access it?', () => {
        const name = 'Jacob';
        const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
        expect(employeeTest.name).toBe(name);
    })
    
    test('Can we pass in an ID and access it?', () => {
        const id = '3';
        const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
        expect(employeeTest.id).toBe(id);
    })
    
    test('Can we pass in a name and access it?', () => {
        const email = 'test@contoso.com';
        const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
        expect(employeeTest.email).toBe(email);
    })
    
    test('Test the getName function is able to return the name', () => {
        const name = 'Jacob';
        const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
        expect(employeeTest.getName()).toBe(name);
    })
    
    test('Test the getID function is able to return the ID', () => {
        const id = '3';
        const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
        expect(employeeTest.getId()).toBe(id);
    })
    
    test('Test the getEmail function is able to return the email', () => {
        const email = 'test@contoso.com';
        const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
        expect(employeeTest.getEmail()).toBe(email);
    })
    
    test('Can we use the getRole function to return the employee role', () => {
        const role = 'Employee';
        const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
        expect(employeeTest.getRole()).toBe(role);
    })
})