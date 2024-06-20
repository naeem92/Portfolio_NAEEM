var togggle = document.querySelectorAll('.togggle');
var menu = document.querySelector('.bx-menu');
var container = document.getElementById('container');
let d = true;

menu.addEventListener("click", function () {

    if (d) {
        for (let i = 0; i < togggle.length; i++) {
            togggle[i].style.display = "block";
            d = false;
        }
    }
    else {
        for (let i = 0; i < togggle.length; i++) {
            togggle[i].style.display = "none";
            d = true;
            location.reload();
        }
    }
});
dot = document.querySelector('.dot');
out = document.querySelector('.outline');
window.addEventListener('mousemove', function (det) {
    x = det.x
    y = det.y
    out.style.left = `${det.x}px`
    out.style.top = `${det.y}px`
    dot.style.left = `${det.x}px`
    dot.style.top = `${det.y}px`
});

window.addEventListener('scroll', function () {
    up = document.querySelector('.up');
    up.classList.toggle('sticky', window.scrollY > 500);
})

//      ===========   amination Work Experience     ===========
document.addEventListener('DOMContentLoaded', function () {
    let counterElement = document.getElementById('counter');
    let count = -9;
    const stopAt = 6;
    let observer;

    function updateCounter() {
        if (count < stopAt) {
            count++;
            counterElement.textContent = count;
            counterElement.classList.add('animate');
            setTimeout(() => counterElement.classList.remove('animate'), 1000); // Animation duration
            setTimeout(updateCounter, 100); // Update interval
        }
    }

    function onIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(entry.target); // Stop observing after starting the animation
            }
        });
    }

    observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
    observer.observe(counterElement);
});