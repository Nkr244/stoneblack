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

    gallery.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            modal.style.display = "flex";
            modalImg.src = event.target.src;
        }
    });

    closeModal.addEventListener("click", function () {
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
    window.addEventListener("scroll", function() {

        let wHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        let scrollHeight = window.scrollY || document.documentElement.scrollTop;
        let position = wHeight - 1100
        console.log(targetElement)
        if (scrollHeight >= position) {
            targetElement.classList.add("scrolled");
        } else {
            targetElement.classList.remove("scrolled");
        }
    });

