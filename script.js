const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// for a multipale images
var a = document.querySelector('#elem-container');
var fix = document.querySelector('#fixed-image');
a.addEventListener('mouseenter',function(){
    fix.style.display = 'block';
})
a.addEventListener('mouseleave',function(){
    fix.style.display = 'none';
})
var elem1 = document.querySelectorAll(".elem")
elem1.forEach(function(e){
    e.addEventListener('mouseenter',function(){
        var image = e.getAttribute('data-image');
        fix.style.backgroundImage = `url(${image})`;
    });
});

// For Single image

// 
var desc = document.querySelector("#desc")
var Design = document.querySelector("#Design")
var design = document.querySelector("#design")
var Project = document.querySelector("#Project")
var Execution = document.querySelector("#Execution")
var image = document.querySelector("#page4-img")

Design.addEventListener("click",function(){
    var add = Design.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "0vw"
    Design.style.right = "2vw"
    design.style.color = "#EFEAE3"
    Execution.style.right = "0vw"
    Execution.style.color = "#504A45"
    Project.style.color = "#504A45"
})

Project.addEventListener("click",function(){
    var add = Project.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "2vw"
    Project.style.color = "#EFEAE3"
    Design.style.right = "0vw"
    design.style.color = "#504A45"
    Execution.style.color = "#504A45"
    Execution.style.right = "0vw"
})

Execution.addEventListener("click",function(){
    var add = Execution.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "0vw"
    Design.style.right = "0vw"
    Execution.style.right = "2vw"
    Execution.style.color = "#EFEAE3"
    Project.style.color = "#504A45"
    design.style.color = "#504A45"
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper",{
        slidesPerView:"auto",
        centeredSlides:true,
        spaceBetween:60,
        pafination:{
            el: ".swiper-pagination",
            clickable: true,
        },
    })
}

function menuAnimation() {

    var menu = document.querySelector("nav h4")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
menuAnimation()
loaderAnimation()