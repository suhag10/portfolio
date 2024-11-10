
document.querySelectorAll(".masonary_menu button").forEach(function (button) {
    button.addEventListener("click", function (event) {
        const siblings = button.parentElement.querySelectorAll(".active");
        siblings.forEach(function (sibling) {
            sibling.classList.remove("active");
        });
        
        button.classList.add("active");
        event.preventDefault();
    });
});
