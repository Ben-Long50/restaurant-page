import './styles/main.css'
import forest from './assets/forest.jpg'

const generateLayout = function() {
    const container = document.querySelector('.container')
    container.style.backgroundImage = `url('${forest}')`

    const nameHeader = document.createElement('h1')
    nameHeader.classList.add('name-header')
    nameHeader.textContent = 'Longhouse Tavern'
    container.appendChild(nameHeader)

    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')
    container.appendChild(navBar)

    const navText = ['Home', 'Menu', 'Contact']
    navText.forEach(text => {
        const navButton = document.createElement('button')
        navButton.classList.add('nav-button')
        navButton.textContent = text
        navBar.appendChild(navButton)
    })
}

generateLayout();