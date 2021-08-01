var tableLength = 12;
var tourDestination = ['conxbazar', 'shylet', 'vutan', 'parish'];

tourDestination.indexOf('vutan');
var fouthDestination = tourDestination[3];
tourDestination[1] = 'srilanka';
tourDestination.push('London');
tourDestination.pop();

if (tourDestination[1] == 'china') {
    console.log('Chaiana ami jamuna');
}
else if (tourDestination.length == 4) {
    console.log('Amar onek taka ami abar jabo');
}
else {
    console.log('Bashay Boshe Mosha Marbo');
}
var myBudget = 32;
var eggPrice = 32;
if (eggPrice <= myBudget) {
    console.log('Ami dim Khamo Ekhon');
}