// function getmax(arr){
//     let max = arr[0];
//     for(let num of arr){
//         if(num > max) max = num
//     }
//     return max
// }
// console.log(getmax([10,5,70,35]));


// function jm(arr){
//     let max = arr[0];
//     for(let num of arr){
//         if (num > 0) return 'Musbat'
//         if (num < 0) return 'Manfiy'
//         if (num = 0 ) return 'Zero'
//     }
//     return max
// }
// console.log(jm([10,5,70,35]));

// function number(num){
//     if (num > 0) return 'Musbat'
//     if (num < 0) return 'Manfiy'
//     if (num = 0 ) return 'Zero'
// }
// console.log(number(5));
// number()


// Function

// Function Decloretion === Function ishga tushishidan oldin chaqiradi, va uni yuqorida ham ishga tushirsa bo'ladi.

// function showHello() {
//     console.log('Hello world');
// }
// showHello()

// let age = 20 // Global o'zgaruvchi
// function showName(name, age) {
//     age = 18 // Local o'zgaruvchi
//     console.log(`Hello! ${name} he is ${age} years old`);
// }
// showName('Kamol')
// console.log(age);

// function calc(a, b) {
//     console.log(a * b);
// }
// calc(3, 8)

// function calc(a, b) {
//     return a + b
// }
// const pluCalc = calc(4, 8)
// console.log(pluCalc + 10);

// const oneCalc = calc(2, 8)
// console.log(oneCalc + 20);


// Function Expression === Kod ketma ketligida function yaratiladi, va faqat undan keyin ishga tushirish mumkin.


// const showHellow = function(){
//     console.log('Hello world');
// }
// showHellow()

// const calc = function(a, b){
//     return a + b 
// }
// const calculation = calc(2, 5);
// console.log(calculation);

// Arrow function === Cantac this mavjud emas

// const calc = (a, b) => {
//     console.log(3 + 8);
// }
// calc()

// const calc = (a, b) => {
//     return a + b
// }
// console.log(calc(3, 9));

// const calc = (a, b) => a + b
// console.log(calc(3, 9));

// const kvadrat = n => n ** 2
// console.log(kvadrat(6));


// Massivdagi eng katta sonni topuvchi function

// function getMax(arr){
//     let max = arr[0];
//     for(let num of arr){
//         if(num > max) max = num
//     }
//     return max
// }
// console.log(getMax([10, 5, 70, 35]));

// massivdagi orta arifmetigini topuvchi funktion
// sonni musbat yoki manfiyligini topuvchi funksiya
// function number(num){
//     if(num > 0) return 'Muspat';
//     if(num < 0) return 'Manfiy';
//     return 'Zero'
// }
// console.log(number(5));
// console.log(number(-5));
// console.log(number(0));



// 1-misol
// function sonqosh(son){
//     let qosh = 0
//     for(let sons of son){
//         qosh += sons
//     }
//     return qosh
// }
// console.log(sonqosh([4,8,10,7,89,11]));

//3 misol

// function juftSon(rrr) {
//     const rrrnum = rrr.filter(num => num % 2 === 0)
//     return rrrnum
// }
// const son = [44,67,21,33,45,78,99,101,23,61];
// const rrrnumn = juftSon(son);
// console.log(rrrnumn)

// 4 misol
// function a(son) {
//     return son.length;
// }
// console.log(a("mexanizm"));
