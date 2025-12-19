

// const adv = document.querySelectorAll(".promo__adv img");
//     ganer = document.querySelector(".promo__genre");
//     warpper = document.querySelector(".promo__bg");
//     films = document.querySelector(".promo__interactive-list");

//     const serialDb = {
//         serials: [
//             "OMAR",
//             "The Final Legacy",
//             "ERTUGRUL",
//             "MAGNIFICENT CENTURY",
//             "GREAT SELJUKS: GUARDIANS..."
//         ]      
//     }

// // Reaklama o'chirildi
// adv.forEach(item => {
//     item.remove();
// })
// // yozuvni o'zgartirish
// ganer.textContent = "Comedy";

// // IMG .ni o'zgartirdm
// warpper.style.backgroundImage = "url('img/bg.jpg')";

// films.innerHTML = ""

// serialDB.series.forEach((item, idx) => {
//     films.innerHTML += `
//     <li class="promo__interactive-item">]
//     ${idx + 1} ${item}
//         <div class="delete"></div>
//     </li>
//     `;
// })


const adv = document.querySelector('.promo__adv'),
    but = document.querySelector('button'),
    nav = document.querySelectorAll(".nav-item dropdown"),
    dis = document.querySelector(".nav-link disabled"),
    navv = document.querySelector(".navbar")

adv.remove()

but.style.borderRadius = '20px'
but.style.backgroundColor = 'green'

nav.remove()
dis.remove()
nav.style.backgroundImage =  "url("")";



