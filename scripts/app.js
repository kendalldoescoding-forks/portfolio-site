var darkBtn = document.querySelector(".dark-mode");
var lightBtn = document.querySelector(".light-mode");

lightBtn.addEventListener("click", function () {
    darkBtn.classList.remove('hide');
    lightBtn.classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');

});
darkBtn.addEventListener("click", function () {
    lightBtn.classList.remove('hide');
    darkBtn.classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
});
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        lightBtn.classList.remove("hide");
        darkBtn.classList.add("hide");
    }
}
var home_link = document.querySelector('.home-link');
var about_link = document.querySelector('.about-link');
var skill_link = document.querySelector('.skill-link');
var qual_link = document.querySelector('.qual-link');
var certi_link = document.querySelector('.certi-link');
var prjt_link = document.querySelector('.prjt-link');
var cntct_link = document.querySelector('.cntct-link');

var selectedBtn;
selectedBtn = home_link;

home_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    home_link.classList.add('slctBtn');
    selectedBtn = home_link;
})
about_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    about_link.classList.add('slctBtn');
    selectedBtn = about_link;
})
skill_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    skill_link.classList.add('slctBtn');
    selectedBtn = skill_link;
})
qual_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    qual_link.classList.add('slctBtn');
    selectedBtn = qual_link;
})
certi_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    certi_link.classList.add('slctBtn');
    selectedBtn = certi_link;
})
prjt_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    prjt_link.classList.add('slctBtn');
    selectedBtn = prjt_link;
})
cntct_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    cntct_link.classList.add('slctBtn');
    selectedBtn = cntct_link;
})

var typed = new Typed('.type', {
    strings: ['a Web Developer.', 'a C++ Programmer.', 'a QA Tester.', 'a Gamer.'],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 50,
    backDelay: 1000,
    backSpeed: 40,
    loop: true,
});

//SCROLL SECTIONS (TODO)

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".menu a[href*=" + sectionId + "]").classList.add("slctBtn");

            if (sectionId != "home") {
                document.querySelector(".home-scLink").classList.add("sc-fixed");
            } else {
                document.querySelector(".home-scLink").classList.remove("sc-fixed");
            }
            if (sectionId === "home") {
                document.querySelector(".top-btn").classList.add("hide");
            } else {
                document.querySelector(".top-btn").classList.remove("hide");
            }
        } else {
            document.querySelector(".menu a[href*=" + sectionId + "]").classList.remove("slctBtn");
        }
    });
});