document.querySelectorAll('.link').forEach((listitem) => {
    listitem.addEventListener('click', () => {
        console.log("click");
        let topPosition = document.getElementById(listitem.dataset.page).offsetTop - 100;
        window.scrollTo({
            top: topPosition,
            left: 0,
            behavior: 'smooth'
        })
    });
})

function displayMobileNav() {
    let x = document.getElementsByClassName("div-block");
    let logo = document.getElementById("logo")
    if (x[0].style.display === "flex") {
        x[0].style.display = "none";
        logo.style.display = "flex";
    } else {
        x[0].style.display = "flex";
        logo.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide');
    splide.mount();
});