document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(top < screen - 100){
            card.classList.add("show");
        }
    });
});