const firstName = 'arif';
const lastName = "islam";

const aboutMe = `My name is ${firstName}`;
const givMe = `give me money ${(10+20) * 2 + 500}`
console.log(givMe);
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

function getCard(name, description, price){
 const div = `
 <div class = "card">
 <h2>${name}</h2>
 <p>price: $ ${price}</p>
 <p>${description}</p>
 </div>
 `;
 console.log(div);

}

getCard('i phone 12', 'this is the latest iphone model', 999);

