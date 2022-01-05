const angryFace = document.querySelector('.angry')
const enragedFace = document.querySelector('.enraged')
const closedFace = document.querySelector('.close')
const openFace = document.querySelector('.open')
const whiteEgg = document.querySelector('.egg')
const hatchEgg = document.querySelector('.hatch')
const font = document.querySelector('.Head')
//add Event Listener

//Angry-Enraged
angryFace.addEventListener('click', () => {
    if (enragedFace.classList.contains('enraged')) {
        enragedFace.classList.add('active');
        angryFace.classList.remove('active');
    }
})

enragedFace.addEventListener('click', () => {
    if (angryFace.classList.contains('angry')) {
        angryFace.classList.add('active');
        enragedFace.classList.remove('active');
    }
})

// Monkey Cover Ear-Eyes
closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
})

openFace.addEventListener('click',() => {
    if(closedFace.classList.contains('close')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
})

// Egg-Hatched Egg
whiteEgg.addEventListener('click', () => {
    if(hatchEgg.classList.contains('hatch')) {
        hatchEgg.classList.add('active');
        whiteEgg.classList.remove('active');
    }
})

hatchEgg.addEventListener('click', () => {
    if (whiteEgg.classList.contains('egg')) {
        whiteEgg.classList.add('active');
        hatchEgg.classList.remove('active');
    }
})

