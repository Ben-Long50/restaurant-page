const introParagraph = 'Welcome to the Longhouse Tavern, a captivating refuge for those drawn to the allure of Viking lore. Step into a world where the echoes of ancient Norse legends resonate through every corner, creating an ambiance that transports you to the heart of a Viking saga. Our tap house, fashioned after the legendary longhouses of old, beckons you to embark on a journey through time. Take a seat next to the roaring fire and let the warmth envelop you as you indulge in a selection of handcrafted beers, each bearing names that echo the heroic tales of Norse mythology. The Longhouse Tavern invites you to savor the essence of Viking camaraderie and revel in a drinking adventure like no other. Skål!'

import vikingShip from './assets/viking-ship.png'

export const renderHome = function(parentElement) {
    const homeContainer = document.createElement('div')
    homeContainer.classList.add('home-container')
    parentElement.appendChild(homeContainer)
    const homeTitle = document.createElement('h1')
    homeTitle.classList.add('home-title')
    homeTitle.textContent = 'Where Legends Gather, Ales Flow, and Norse Spirit Roars!'
    homeContainer.appendChild(homeTitle)
    const imageElement = document.createElement('img')
    imageElement.classList.add('home-image')
    imageElement.src = vikingShip
    homeContainer.appendChild(imageElement)
    const introElement = document.createElement('p')
    introElement.classList.add('intro-paragraph')
    introElement.textContent = introParagraph
    homeContainer.appendChild(introElement)

}