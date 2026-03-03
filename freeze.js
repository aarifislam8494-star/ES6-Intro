const king = {name: 'Mufasa', age: 55, kingdom: 'pride lands'};
// Object.freeze(king);
Object.seal(king);
delete king.age;
delete king.kingdom;
king.queen = 'Sarabi';
king.name = 'king Simba';
console.log(king);