var call = document.getElementsByClassName('element')
console.log(call)
call[0].innerText = "elements"

var div = document.getElementById('dom_js')
div.children[0].textContent = "doms"
console.log(div)

var querySelector = document.querySelector('#dom_js h1')
var querySelector = document.querySelectorAll('.element')
console.log(querySelector)

var elmentStyle = document.getElementsByClassName('element_style')

for (var i = 0; i < elmentStyle.length; i++) {
    elmentStyle[i].classList.add('bg-primary', 'text-white')
}

elmentStyle[0].classList.remove('text-white')
elmentStyle[0].classList.toggle('p-5')
elmentStyle[1].style.height = '30px'


console.log(elmentStyle)

// getElementsByClassName => HTMLCollection in console.log
// querySelectorAll => NodeList in console.log

function showFirstImage() {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "none";
}

function showSecondImage() {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "block";
}

function handelMous(flag, element) {
    element.style.width = "4%";
    if (flag === 'hoverIn') {
        element.style.backgroundColor = "#0c65ed";
        element.style.color = "white";
        element.style.transition = "0.3s";
    } else if (flag === 'hoverOut') {
        element.style.backgroundColor = "";
        element.style.color = "";
    }
}