console.log(); //global

//https://nodejs.org/en/docs/guides/timers-in-node/

function myFunc(arg){
    console.log(`arg was => ${arg}`);
}
setTimeout(myFunc,1500,'funcy');

clearTimeout();

//setInterval();
//clearInterval();

var message = '';
console.log(global.message);