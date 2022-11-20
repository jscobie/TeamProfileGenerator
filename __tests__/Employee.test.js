const Employee = require('../lib/Employee');

test('Check a new employee is created', () => {
    const employeeTest = new Employee();
    expect(typeof(employeeTest)).toBe('object');
})

test('Test name typed is accepted', () => {
    const name = 'Jacob';
    const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
    expect(employeeTest.name).toBe(name);
})

test('Test ID typed is accepted', () => {
    const id = '3';
    const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
    expect(employeeTest.id).toBe(id);
})

test('Test email typed is accepted', () => {
    const email = 'test@contoso.com';
    const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
    expect(employeeTest.email).toBe(email);
})

test('Test name typed accessibile to getName', () => {
    const name = 'Jacob';
    const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
    expect(employeeTest.getName()).toBe(name);
})

test('Test ID typed accessible to getID', () => {
    const id = '3';
    const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
    expect(employeeTest.getId()).toBe(id);
})

test('Test email typed accessible to getEmail', () => {
    const email = 'test@contoso.com';
    const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
    expect(employeeTest.getEmail()).toBe(email);
})

test('Test role selected accessible to getRole', () => {
    const email = 'Employee';
    const employeeTest = new Employee('Jacob', '3', 'test@contoso.com');
    expect(employeeTest.getRole()).toBe(email);
})