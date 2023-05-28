//Задание 1
console.log(new Date());
//Задание 2

console.log('[ Игра угадай число ]')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let genNum = Math.round(Math.random() * 100)

const game = () => {
readline.question('Введите число от 0 до 100: ', user_number => {
    if(user_number<genNum){
console.log(`user_number +'Больше'`);
    
    }
    else if (user_number>genNum){
console.log(`user_number + Меньше`);
    }
    else if (user_number==genNum){
        Console.log(`Вы угадали ${genNum}`);
    }
    else{
        console.log(`Ответ: "${genNum}"\n`);
        readline.close();

    }
    readline.close();
})}
   

game()
