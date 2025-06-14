const readlineSync=require('readline-Sync');//name of module imported (require) load the module
const username=readlineSync.question('May I know your name?');
console.log('Welcome, ${username}!');

const userage=readlineSync.question('May I know your age?');
const userageNum=Number(userage)//converting string into number