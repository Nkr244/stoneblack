document.addEventListener("DOMContentLoaded", function () {
    let burgerIcon = document.getElementById("burger-icon");
    let menu = document.getElementById("menu");
    let burgerIconClose = document.getElementById("burger-icon-close")

    burgerIcon.addEventListener("click", function () {
        menu.style.right = menu.style.right === "0px" ? "-250px" : "0";
        burgerIcon.style.visibility = 'hidden';
        burgerIconClose.style.display = "block";
    });
    burgerIconClose.addEventListener('click', function () {
        burgerIcon.style.visibility = 'unset';
        burgerIconClose.style.display = "none";
        menu.style.right = menu.style.right === "0" ? "0" : "-100%";
    })
});
document.addEventListener("DOMContentLoaded", function () {
    let gallery = document.getElementById("gallery");
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let closeModal = document.getElementById("close-modal");

    gallery?.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            modal.style.display = "flex";
            modalImg.src = event.target.src;
        }
    });

    closeModal?.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const leftToRightLinks = document.querySelectorAll('.left-to-right');
    const rightToLeftLinks = document.querySelectorAll('.right-to-left');

    function handleAnimation() {
        leftToRightLinks.forEach((link, index) => {
            link.style.transitionDelay = `${index * 0.1}s`;
        });

        rightToLeftLinks.forEach((link, index) => {
            link.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        leftToRightLinks.forEach(link => {
            const linkTop = link.getBoundingClientRect().top;

            if (linkTop < windowHeight) {
                link.style.opacity = 1;
                link.style.transform = 'translateX(0)';
            }
        });

        rightToLeftLinks.forEach(link => {
            const linkTop = link.getBoundingClientRect().top;

            if (linkTop < windowHeight) {
                link.style.opacity = 1;
                link.style.transform = 'translateX(0)';
            }
        });
    }


    handleAnimation();


    window.addEventListener('scroll', checkVisibility);

    window.addEventListener('resize', checkVisibility);

    setTimeout(()=> {
        checkVisibility();
    }, 50)
});



let targetElement = document.getElementById("scrollButton");

jQuery(document).ready(function($) {
    $(window).scroll(function() {

        var docHeight = $(document).height();


        var windowHeight = $(window).height();


        var scrollPos = $(window).scrollTop();


        var scrollPercent = (scrollPos / (docHeight - windowHeight)) * 100;


        if (scrollPercent >= 85) {
            targetElement.classList.add("scrolled");
        } else {
            // В противном случае убираем класс
            targetElement.classList.remove("scrolled");
        }
    });
});

