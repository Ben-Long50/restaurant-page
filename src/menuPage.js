const menuList = [];

function Beer(name, price) {
    this.name = name;
    this.price = price;
    menuList.push(this);
}

const beer1 = new Beer('Berserker Brew', '10');
const beer2 = new Beer('Thor\'s Thunder Ale', '9');
const beer3 = new Beer('Runestone Red Ale', '9');
const beer4 = new Beer('Longship Lager', '9');
const beer5 = new Beer('Ice Giant Imperial Stout', '9');
const beer6 = new Beer('Mead Hall Honey Ale', '9');
const beer7 = new Beer('Fjord Frost IPA', '9');
const beer8 = new Beer('Odin\'s Wisdom Wheat', '9');


export default menuList;

export const renderMenu = function(parentElement) {
    menuList.forEach(beer => {
        const beerTile = document.createElement('div')
        beerTile.classList.add('beer-tile')
        const nameElement = document.createElement('h2')
        nameElement.textContent = beer.name;
        const priceElement = document.createElement('h3')
        priceElement.textContent = beer.price
        beerTile.appendChild(nameElement)
        beerTile.appendChild(priceElement)
        parentElement.appendChild(beerTile)
        if(menuList.indexOf(beer) != menuList.length - 1) {
            const lineBreak = document.createElement('hr')
            parentElement.appendChild(lineBreak)
        }

    })
}