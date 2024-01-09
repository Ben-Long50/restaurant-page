const menuList = [];

function Beer(name, price) {
    this.name = name;
    this.price = price;
}

Beer.prototype.addToMenu = function() {
    menuList.push(this)
}

const beer1 = new Beer('Cali Creamin', '10');
beer1.addToMenu();

const beer2 = new Beer('Jeremiah Red', '9');
beer2.addToMenu();

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