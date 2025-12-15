// // Callaback - bu bitta function bajarilgandan keyin ishlaydigan funksiya


// const firslog = () => {
//     setTimeout(function() {
//         console.log(1);
//     }, 4000)
// }

// const secondlog = () => {
//     console.log(2);
    
// }

// firslog()
// secondlog()

// function hello (Callaback){
//     console.log('hello world');
//     Callaback()
    
// }
// hello(function() {
//     console.log(1);
    
// })
// function Callaback() {
//     console.log(2);
    
// }
// hello(Callaback)


const person = {
    firstName : 'Asad',
    lastName: 'Aliyev',
    age : 23 , 
    hobbi: {
        sport: 'football',
        music: 'Rock'
    }

}
// console.log(Object, key );

// in faqat objectlarda ishlatiladi
// of massivlarda yani arraylarda ishlatiladi

for (let key in person) {
    if(typeof person[key] === "object"){
        for(let i in person[key]){
            console.log(`Proparty ${i}: value: ${person[key][i]} `);
            
        }
    }else{
        `proparty ${key}`
    }
}