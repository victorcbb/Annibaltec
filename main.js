window.addEventListener("scroll", onScroll)

function onScroll() {
    showNavOnScroll()
    showBackToTopButton()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    const sectionEndAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine

    const sectionBaundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')

    if (sectionBaundaries) {
        menuElement.classList.add('active')
    }

}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add("scroll")
    } else {
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButton() {
    if (scrollY > 500) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700
}).reveal(`
    #home, 
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
`);
