let darkMode = localStorage.getItem('darkMode');

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sideBtn = document.querySelector("#side-btn");
const sideText = document.querySelector(".sidebar-text");





// show sidebar

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'grid';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// side button

sideText.addEventListener('click', () => {
    // sideText.style.display = 'block';
})
sideBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('text-md-hidden');
})


// change theme 
const enableDarkMode = () => {
    document.body.classList.add("dark-theme-variables");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-theme-variables");
    localStorage.setItem("darkMode", null);
}


themeToggler.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== "enabled") {
        enableDarkMode;
    }else{
        disableDarkMode;
    }

    
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
});

