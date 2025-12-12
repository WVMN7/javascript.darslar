// const numberOfseres = +prompt("Nechta serial kordingiz ?")

// const seriesDB = {
//     count: numberOfseres,
//     series: {},
//     actors: {},
//     genres: [],
//     privat: false
// }
// for (let l=0; l<2;  l++){
//     const a = promt(`Oxirgi ko'rgan serialingiz ? ${i}`)
//     const b = +prompt(`nechta baxo berasiz ? ${i}`)

//     if(a !== null && b !== null && a !== '' && b !== ''){
//         seriesDB.series[a] = b
//     }else {
//         i--
//     }
// }
// if(seriesDB.count > 5){
//     console.log("Kam serial ko'rgansiz");
// }else if(seriesDB.count>=5 && seriesDB.count < 10){
//     console.log("Siz classic tomashabin ekansiz");
// }else if (seriesDB.count >= 10){
//     console.log("Siz serialchi zvezda ekansiz");
// }
// for(let i = 0; i < 2; i++ ){
//     const c = promt(`erkak actorlarni qaysilarini bilasiz? ${1}`)
//     const d = promt(`ayol actorlarni`)
// }
// console.log(seriesDB);


// seriesDB.series[a] = b
// seriesDB.series[c] = d

// const actor1 = promt("Yaxshi korgan aktiyoringiz ?")
// seriesDB.actors[actor1] = actor1

// const janr1 = promt("yaxshi korgan janringiz ?")
// seriesDB.genres[janr1] = janr1

// const e = prompt("Oxirgi ko'rgan aktyoringiz?");
// const u = prompt("Necha baho berasiz?");

// const y = prompt("Oxirgi ko'rgan aktyoringiz?");
// const z = prompt("Necha baho berasiz?");

// seriesDB.actors[e] = u;
// seriesDB.actors[y] = z; 

// console.log(seriesDB);
// console.log(seriesDB);

let num = [4,8,15,16,23,42]
for(let i = 0; i<num.length; i++){
    if (num[i] % 2 !== 0)
        console.log(num[i]);
        
}