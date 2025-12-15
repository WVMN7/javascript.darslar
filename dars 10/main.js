// metodlar

// string metodlar

// const text = 'hello world'
// console.log(text.length); //uzunligini hisoblaydi
// console.log(text.charAt(4)); //belgilarni oladi
// console.log(text[8]); //belgilarni oladi 2 usul
// console.log(text.toUpperCase()); //hamma harifini katta qiladi
// console.log(text.toLowerCase()); //hamma harifni kichik qiladi
// console.log(text.indexOf("r")); //indexni aniqlab beradi
// console.log(text.slice(0,5)); //kesish


// const password = '       wertrewerg      '
// console.log(password.trim()); //bosh joylani olib tashlaydi
// console.log(password.trimStart()); //boshidan bosh joylani olib tashlaydi
// console.log(password.trimEnd()); //oxiridan bosh joylani olib tashlaydi


// number metodlari


// const num = 12.543
// console.log(num.toFixed(2)); //yaxlitlash
// console.log(Math.round(num));//eng yaqin songa yaxlitlaydi
// console.log(Math.floor(num)); //faqat butun qismini oladi

// const width = '78.4543543'
// console.log(parseInt(width));
// console.log(parseFloat(width));



 const numberOfseres = +prompt("Nechta serial kordingiz ?")

const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    privat: true
}
for (let l=0; l<2;  l++){
    const a = promt(`Oxirgi ko'rgan serialingiz ? ${i}`)
    const b = +prompt(`nechta baxo berasiz ? ${i}`)

    if(a !== null && b !== null && a !== '' && b !== ''){
        seriesDB.series[a] = b
    }else {
        i--
    }
}
if(seriesDB.count > 5){
    console.log("Kam serial ko'rgansiz");
}else if(seriesDB.count>=5 && seriesDB.count < 10){
    console.log("Siz classic tomashabin ekansiz");
}else if (seriesDB.count >= 10){
    console.log("Siz serialchi zvezda ekansiz");
}
for(let i = 0; i < 2; i++ ){
    const c = promt(`erkak actorlarni qaysilarini bilasiz? ${1}`)
    const d = promt(`ayol actorlarni`)
}
console.log(seriesDB);


seriesDB.series[a] = b
seriesDB.series[c] = d

const actor1 = promt("Yaxshi korgan aktiyoringiz ?")
seriesDB.actors[actor1] = actor1

const janr1 = promt("yaxshi korgan janringiz ?")
seriesDB.genres[janr1] = janr1

const e = prompt("Oxirgi ko'rgan aktyoringiz?");
const u = prompt("Necha baho berasiz?");

const y = prompt("Oxirgi ko'rgan aktyoringiz?");
const z = prompt("Necha baho berasiz?");

seriesDB.actors[e] = u;
seriesDB.actors[y] = z; 


