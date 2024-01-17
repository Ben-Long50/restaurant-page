import './styles/main.css'
import forest from './assets/forest.jpg'
import { renderHome } from './homePage.js'
import { renderMenu } from './menuPage.js'
import { renderContact } from './contactPage.js'


const container = document.querySelector('.container')
container.style.backgroundImage = `url('${forest}')`

const nameHeader = document.createElement('h1')
nameHeader.classList.add('name-header')
nameHeader.textContent = 'Longhouse Tavern'
container.appendChild(nameHeader)

const navBar = document.createElement('div')
navBar.classList.add('nav-bar')
navBar.classList.add('content-tile')
container.appendChild(navBar)

const navText = ['Home', 'Menu', 'Contact']
navText.forEach(text => {
    const navButton = document.createElement('button')
    navButton.classList.add('nav-button')
    navButton.textContent = text
    navBar.appendChild(navButton)
})

const contentContainer = document.createElement('div')
contentContainer.classList.add('home-content')
contentContainer.classList.add('content-tile')
container.appendChild(contentContainer)

const removeContent = function() {
    while(contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild)
    }
}

const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'Home') {
            removeContent()
            renderHome(contentContainer)
        }
        else if(button.textContent === 'Menu') {
            removeContent()
            renderMenu(contentContainer)
        }
        else if(button.textContent === 'Contact') {
            removeContent()
            renderContact(contentContainer)
        }
    })
})

renderHome(contentContainer)
