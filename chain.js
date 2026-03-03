const employee = {
 name: 'Johe Doe',
 1: 'desk one',
 'home-address': '123 Main St',
 salary: 50000,
 family: {
  father: 'Richard Doe',
  mother: {
   name: 'jone Doe',
   age: 55
  }
 },
 position: 'Software Enginner'
};

const value = employee.name;
console.log(employee.family.mother?.age)