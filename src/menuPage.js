const menuList = [];

function Beer(name, description, abv) {
    this.name = name;
    this.description = description;
    this.abv = abv;
    menuList.push(this);
}

new Beer('Berserker Brew', 'A bold and intense ale with a kick that rivals the ferocity of a berserker in battle, leaving your taste buds awakened and invigorated.', '5.4%');
new Beer('Thor\'s Thunder Ale', 'This robust brew packs a powerful punch, echoing the strength of the mighty god of thunder. Expect a storm of flavor with every sip.', '4.7%');
new Beer('Runestone Red Ale', 'Infused with the mystique of ancient runes, this red ale is a tribute to the history of the Vikings, delivering a flavorful journey through time.', '7.8%');
new Beer('Freyja\'s Bounty Bock', 'Rich and indulgent, this bock celebrates the goddess Freyja\'s abundance, offering a delightful symphony of malt sweetness and warmth.', '6.0%');
new Beer('Longship Lager', 'Embark on a flavorful voyage with this Lager inspired by the iconic longships. Its crisp profile mirrors the smooth sailing of these legendary vessels.', '4.5%');
new Beer('Ice Giant Imperial Stout', 'Brace yourself for the bold and imposing flavors of this imperial stout, inspired by the formidable Ice Giants of Norse mythology.', '8.9%');
new Beer('Mjolnir Malt Porter', 'This porter is a force to be reckoned with, just like Thor\'s mighty hammer. Savor the complex layers of maltiness with each sip.', '14.2%');
new Beer('Mead Hall Honey Ale', 'Sweetened with the nectar of the gods, this honey ale captures the essence of a festive mead hall celebration, delivering a delightful balance of sweetness.', '5.3%');
new Beer('Fjord Frost IPA', 'Immerse yourself in the cool, refreshing taste of this IPA, reminiscent of the crisp air and frosty landscapes of the Nordic fjords.', '8.6%');
new Beer('Norse Nectar Hazy', 'Inspired by the sweetness of Norse mythology, this pale ale boasts a burst of fruity hop flavors, creating a harmonious and enjoyable experience.', '6.9%');
new Beer('Odin\'s Wisdom Wheat', 'A brew inspired by the wisdom of Odin himself, this wheat beer offers a smooth, contemplative experience with subtle notes of enlightenment.', '5.2%');


export default menuList;

export const renderMenu = function(parentElement) {
    menuList.forEach(beer => {
        const beerTile = document.createElement('div')
        beerTile.classList.add('beer-tile')
        const nameElement = document.createElement('h2')
        nameElement.classList.add('beer-name')
        nameElement.textContent = beer.name
        const abvElement = document.createElement('h3')
        abvElement.classList.add('beer-abv')
        abvElement.textContent = beer.abv
        const descriptionElement = document.createElement('p')
        descriptionElement.classList.add('beer-description')
        descriptionElement.textContent = beer.description
        beerTile.appendChild(nameElement)
        beerTile.appendChild(abvElement)
        beerTile.appendChild(descriptionElement)
        parentElement.appendChild(beerTile)
        if(menuList.indexOf(beer) != menuList.length - 1) {
            const lineBreak = document.createElement('hr')
            parentElement.appendChild(lineBreak)
        }

    })
}