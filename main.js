
const select = document.querySelector(".filter");
select.addEventListener("change", function (e) {
    const chosen_mounment = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_mounment}`);
    
    currently_visible.forEach(function (mounment) {
        mounment.classList.remove("active")

    });

    make_visible.forEach(function (mounment) {
        mounment.classList.add("active")

    });


});