// const car = {
//     ogirligi: 1500,
//     uzunligi: '4 m',
//     tezlik: function(){
//         console.log("22000km/h");
//     }
// }


// const nexia2 = {
//     rang: "oq"
// }

// // eski usul 

// nexia2.__proto__=car
// console.log(nexia2.ogirligi);

// yangi usul
// Object.prototypeOf(nexia2,car)
// console.log(nexia2.ogirligi);

// const gentra = Object.create(car)
// console.log(gentra.uzunligi);



const market1 = {
    suv: "cola",
    sabzovot: "Sabzi",
    meva: "olma",
    sig: "sigaret"
}
// const market2 = {
//     meva2: "banan",
//     suv2: "pivo"
// }

// market2.__proto__ = market1
// console.log(market2.sig);

// Object.getPrototypeOf(market2,market1)
// console.log(market2.sabzovot);

const mark = Object.create(market1)
const mark2 = Object.create(market1)
console.log(mark.sabzovot);




