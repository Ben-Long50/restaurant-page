const contactParagraph = 'To contact the Longhouse Tavern, embrace the spirit of the Vikings and send your messages with the grace of a messenger raven. Gazing towards the northern skies, release your words into the wind, and let your desires soar on the wings of our feathered emissaries. If you prefer to contact the Longhouse Tavern by more conventional means, please use the following information.'

const contactInfo = {
    email: 'Loki@longhouse-tavern.com',
    phone: '(555)-odin-son',
    address: '1869 Fjord Way, Stavanger, Norway'
}

import raven from './assets/raven.png'

export const renderContact = function(parentElement) {
    const contactTitle = document.createElement('h1')
    contactTitle.classList.add('contact-title')
    contactTitle.textContent = 'Contact Us'
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')
    parentElement.appendChild(contactContainer)
    const imageElement = document.createElement('img')
    imageElement.classList.add('contact-image')
    imageElement.src = raven
    const contactDescription = document.createElement('p')
    contactDescription.classList.add('contact-description')
    contactDescription.textContent = contactParagraph
    const infoContainer = document.createElement('div')
    infoContainer.classList.add('info-container')
    contactContainer.appendChild(contactTitle)
    contactContainer.appendChild(imageElement)
    contactContainer.appendChild(contactDescription)
    contactContainer.appendChild(infoContainer)
    for(let i = 0; i != Object.entries(contactInfo).length; i++) {
        const infoElement = document.createElement('p')
        const keys = Object.keys(contactInfo)
        const values = Object.values(contactInfo)
        infoElement.textContent = keys[i] + ': ' + values[i]
        infoContainer.appendChild(infoElement)
    }
}