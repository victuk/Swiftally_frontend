const general = document.querySelector(".form-scroll");
general.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("btn")) {
        const page = e.target.dataset.page;
        const nextPage = document.querySelector(`#page${page}`);
        console.log(page)
    nextPage.scrollIntoView({ behavior: "smooth" });
  }
 
});