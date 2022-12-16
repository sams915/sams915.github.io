/*eslint-env es6*/
/*eslint-env browser*/

const faders = document.querySelectorAll('.fade-in');

const fadersOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, fadersOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
