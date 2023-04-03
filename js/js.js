//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



/*=====counter start=====*/
let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;

        let speed = 200;
        counters.forEach((counter, index) => {
            function UpdateCounter() {
                const targetNumber = +counter.dataset.target;
                const initialNumber = +counter.innerText;
                const incPerCount = targetNumber / speed;
                if (initialNumber < targetNumber) {
                    counter.innerText = Math.ceil(initialNumber + incPerCount);
                    setTimeout(UpdateCounter, 40);
                }
            }
            UpdateCounter();

            if (counter.parentElement.style.animation) {
                counter.parentElement.style.animation = '';
            } else {
                counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
            }
        });
        observer.unobserve(section_counter);
    }, {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
    }
);

CounterObserver.observe(section_counter);

/*======counter end======*/

/*===form reset====*/
function myfun() {
    document.getElementById("form3Example2").value = null;
}
/*===form reset====*/