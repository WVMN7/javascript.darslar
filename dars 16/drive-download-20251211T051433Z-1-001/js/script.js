//DOM - Document object Model

// eski usuli
// Id boyicha chaqirish
// const boxId = document.getElementById("box")
// console.log(boxId);

// Class boyicha chaqirish
// const boxclass = document.getElementsByClassName("box")
// console.log(boxclass);


// tag name boyicha chaqirish
// const buttonTegName = document.getElementsByClassName('button')
// console.log(buttonTegName);


// Yangi usul Node List qaytaradi

// const boxId = document.querySelector('#box')
// console.log(boxId);

// class boyicha chaqirish
// const boxClass  = document.querySelector('.box')
// console.log(boxClass);






// const wrapper = document.querySelector('.wrapper')
// console.log(wrapper);



// Elementlar blan ishlash
const boxId = document.querySelector('#box')
const buttons = document.querySelectorAll('button')
const circule = document.querySelectorAll('.circle')
const div = document.createElement('div')
const wrapper = document.querySelector('.wrapper')
// boxId.style.borderRadius = '150px'
// boxId.style.backgroundColor = 'Green'


// buttons[1].style.borderRadius = '50px'
// buttons[2].style.width = '200px'
// buttons[3].style.backgroundColor = 'blue'

// circule[1].style.borderRadius = '0'

// for(let i = 0; i<circule.length; i++){
//     circule[i].style.borderRadius = '0'
// }


div.classList.add('heart')
div.style.backgroundColor = 'black'

// document.body.append('div')

// wrapper.append(div)   append - divni oxiriga qoshadi
// wrapper.prepend(div) prepend - divni oldiga qoshadi

circule[0].remove()
buttons[3].remove()
