
const provinces = Array.prototype.slice.call(document.getElementsByClassName('province'));


provinces.forEach(element => {
    element.onclick = (e) => {
        provinces.forEach(el => {
            //el.style.fill = 'maroon';
            el.classList.remove("selected");
            el.classList.add("province");
        })
        //element.style.fill = 'pink';
        element.classList.add("selected");
        element.classList.remove("province");
        console.log(element, element.className);
    }
});

const header = document.getElementById('header');

header.onclick = (e) => {
    if (!(header.classList.contains("vanished"))) {
        header.classList.add("vanished");
    } else {
        header.classList.remove("vanished");
    }
}

// emperor prallax

window.addEventListener('scroll', (e) => {
    const emperor = document.querySelector('.emperor');
    const quote = document.querySelector('.quote');

    let dist = window.scrollY * -1;

    emperor.style.transform = 'translate3d('+dist+'px, 0px, 0px)'
    quote.style.transform = 'translate3d('+(-dist)+'px, 0px, 0px)'
})