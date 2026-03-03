// const product = {
//  name: 'iphone',
//  price: 799,
//  discription: 'A smartPhone by Apple'
// };

// const newprice = product.price + 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const mname = product.name;


// const product = { name: 'iphone', price: 799, brand: 'Aple' };
const price = 5555;
const {name, price: phonePrice, camera = '12Mp'} = { name: 'iphone', price: 799, brand: 'Aple', camera: '48MP' };
// console.log(camera);


const [first, second] = [10, 20, 30, 50];
console.log(first,second);