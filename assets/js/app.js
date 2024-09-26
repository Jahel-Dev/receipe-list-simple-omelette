document.getElementById('toggleDarkMode').addEventListener('click', function(){
    document.body.classList.toggle('dark-mode')

    const darkModeIcon = document.querySelector('.dark-mode-icon')
    darkModeIcon.src = "./assets/image/moonDarkMode.svg"

    if(document.body.classList.includes('dark-mode')) {
        darkModeIcon.src = "./assets/image/moonDarkMode.svg"
    } else {
        darkModeIcon.src = "./assets/image/moon.svg"
    }
})