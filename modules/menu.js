const menuPage = document.createElement('div');
const menuCat = document.createElement('ul');
const drinks = document.createElement('li');
const appetizers = document.createElement('li');
const entrees = document.createElement('li');
const deserts = document.createElement('li');
const scrollToTopWrapper = document.createElement('li');
const drinksLink = document.createElement('a');
const appetizersLink = document.createElement('a');
const entreesLink = document.createElement('a');
const desertsLink = document.createElement('a');
const scrollToTopLink = document.createElement('a');
const menuContent = document.createElement('div');
const menuSeperatorDrinks = document.createElement('div');
const menuSeperatorAppetizers = document.createElement('div');
const menuSeperatorEntrees = document.createElement('div');
const menuSeperatorDeserts = document.createElement('div');
const menuSeperatorDrinksH2 = document.createElement('h2');
const menuSeperatorAppetizersH2 = document.createElement('h2');
const menuSeperatorEntreesH2 = document.createElement('h2');
const menuSeperatorDesertsH2 = document.createElement('h2');
const rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopLink.addEventListener("click", scrollToTop);

function createMenuItem(title, price, details) {

    const menuItemContainer = document.createElement('div');
    const menuItemTitle = document.createElement('div');
    const menuItemLower = document.createElement('div');
    const menuItemDetails = document.createElement('div');
    const menuItemDetailsText = document.createElement('p');
    const menuItemPrice = document.createElement('div');

    menuItemTitle.innerHTML = title;
    menuItemPrice.innerHTML = price;
    menuItemDetailsText.innerHTML = details;

    menuItemDetails.appendChild(menuItemDetailsText);
    menuItemLower.appendChild(menuItemDetails);
    menuItemLower.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItemTitle);
    menuItemContainer.appendChild(menuItemLower);

    menuItemDetails.classList.add('menu-item-details');
    menuItemLower.classList.add('menu-item-lower');
    menuItemTitle.classList.add('menu-item-title');
    menuItemContainer.classList.add('menu-item');
    menuItemPrice.classList.add('menu-item-price');

    return (menuItemContainer);
}

function createMenuCategories() {
    
    drinks.appendChild(drinksLink);
    appetizers.appendChild(appetizersLink);
    entrees.appendChild(entreesLink);
    deserts.appendChild(desertsLink);
    scrollToTopWrapper.appendChild(scrollToTopLink);
    menuCat.appendChild(drinks);
    menuCat.appendChild(appetizers);
    menuCat.appendChild(entrees);
    menuCat.appendChild(deserts);
    menuCat.appendChild(scrollToTopWrapper);

    drinksLink.innerHTML = "Drinks";
    appetizersLink.innerHTML = "Appetizers";
    entreesLink.innerHTML = "Entrees";
    desertsLink.innerHTML = "Deserts";

    drinksLink.setAttribute('href','#drinks-section');
    appetizersLink.setAttribute('href','#appetizers-section');
    entreesLink.setAttribute('href','#entrees-section');
    desertsLink.setAttribute('href','#deserts-section');
    drinksLink.setAttribute('title','Jump to Drinks');
    appetizersLink.setAttribute('title','Jump to Appetizers');
    entreesLink.setAttribute('title','Jump to Entrees');
    desertsLink.setAttribute('title','Jump to Deserts');
    scrollToTopWrapper.classList.add('scroll-to-top-wrapper');
    scrollToTopLink.setAttribute('id','scroll-to-top-link');
    scrollToTopLink.setAttribute('title','Back to Top');
    scrollToTopLink.classList.add('icon-chevron-up');
    scrollToTopLink.setAttribute('aria-label','Scroll to Top');
    // scrollToTopLink.setAttribute('href','#top');

    drinks.setAttribute('id','drinks');
    appetizers.setAttribute('id','appetizers');
    entrees.setAttribute('id','entrees');
    deserts.setAttribute('id','deserts');
    menuCat.classList.add('menu-cat');

    return (menuCat);
}

function createMenuPage() {
    
    menuContent.classList.add('menu-content');
    menuPage.classList.add('page');
    menuPage.setAttribute('id','menu-page');
 
    menuSeperatorDrinks.classList.add('menu-seperator');
    menuSeperatorDrinks.setAttribute('id','drinks-section');
    menuSeperatorDrinks.appendChild(menuSeperatorDrinksH2);
    menuSeperatorDrinksH2.innerHTML = 'DRINKS';
    menuContent.appendChild(menuSeperatorDrinks);

    drinkList.forEach(function (item) {
        const newItem = createMenuItem(item.name, item.price, item.details);
        menuContent.appendChild(newItem);
    });

    menuSeperatorAppetizers.classList.add('menu-seperator');
    menuSeperatorAppetizers.setAttribute('id','appetizers-section');
    menuSeperatorAppetizers.appendChild(menuSeperatorAppetizersH2);
    menuSeperatorAppetizersH2.innerHTML = 'APPETIZERS';
    menuContent.appendChild(menuSeperatorAppetizers);

    appetizerList.forEach(function (item) {
        const newItem = createMenuItem(item.name, item.price, item.details);
        menuContent.appendChild(newItem);
    });

    menuSeperatorEntrees.classList.add('menu-seperator');
    menuSeperatorEntrees.setAttribute('id','entrees-section');
    menuSeperatorEntrees.appendChild(menuSeperatorEntreesH2);
    menuSeperatorEntreesH2.innerHTML = 'ENTREES';
    menuContent.appendChild(menuSeperatorEntrees);

    entreeList.forEach(function (item) {
        const newItem = createMenuItem(item.name, item.price, item.details);
        menuContent.appendChild(newItem);
    });

    menuSeperatorDeserts.classList.add('menu-seperator');
    menuSeperatorDeserts.setAttribute('id','deserts-section');
    menuSeperatorDeserts.appendChild(menuSeperatorDesertsH2);
    menuSeperatorDesertsH2.innerHTML = 'DESERTS';
    menuContent.appendChild(menuSeperatorDeserts);

    desertList.forEach(function (item) {
        const newItem = createMenuItem(item.name, item.price, item.details);
        menuContent.appendChild(newItem);
    });

    menuPage.appendChild(menuContent);

    const menuCatItem = createMenuCategories();
    menuPage.appendChild(menuCatItem);


    return (menuPage);

}

const drinkList = [
    {
        name: 'Cosmo',
        price: '$7.99',
        details: 'Cosmo Details Here',
    },
    {
        name: 'Red Wine',
        price: '$9.99',
        details: 'Red Wine Details Here',
    },
    {
        name: 'White Wine',
        price: '$8.99',
        details: 'White Wine Details Here',
    },
    {
        name: 'Soft Drink',
        price: '$2.99',
        details: 'Soft Drink Details Here',
    },
    {
        name: 'Bottled Water',
        price: '$2.99',
        details: 'Bottled Water Details Here',
    },
];

const appetizerList = [
    {
        name: 'Mozzarella Sticks',
        price: '$6.99',
        details: 'Mozzarella Sticks Details Here',
    },
    {
        name: 'Chicken Wings',
        price: '$11.99',
        details: 'Chicken Wings Details Here',
    },
    {
        name: 'Boiled Peanuts',
        price: '$7.99',
        details: 'Boiled Peanuts Details Here',
    },
    {
        name: 'Potato Skins',
        price: '$9.99',
        details: 'Potato Skins Details Here',
    },
    {
        name: 'Tomato Soup',
        price: '$5.99',
        details: 'Tomato Soup Details Here',
    },
];

const entreeList = [
    {
        name: 'Bacon Cheeseburger',
        price: '$13.99',
        details: 'Bacon Cheeseburger Details Here',
    },
    {
        name: 'Hickory Chicken Sandwich',
        price: '$15.99',
        details: 'Hickory Chicken Sandwich Details Here',
    },
    {
        name: 'Pork Steak',
        price: '$18.99',
        details: 'Pork Steak Details Here',
    },
    {
        name: 'Pasta Primavera',
        price: '$19.99',
        details: 'Pasta Primavera Details Here',
    },
    {
        name: 'Shrimp Scampi',
        price: '$21.99',
        details: 'Shrimp Scampi Details Here',
    },
];

const desertList = [
    {
        name: 'Chocolate Lava Cake',
        price: '$9.99',
        details: 'Chocolate Lava Cake Details Here',
    },
    {
        name: 'Brownies and Ice Cream',
        price: '$9.99',
        details: 'Brownies and Ice Cream Details Here',
    },
    {
        name: 'Root Beer Float',
        price: '$8.99',
        details: 'Root Beer Float Details Here',
    },
    {
        name: 'Cherry Pie',
        price: '$5.99',
        details: 'Cherry Pie Details Here',
    },
    {
        name: 'Peach Cobbler',
        price: '$8.99',
        details: 'Peach Cobbler Details Here',
    },
];

export const menuPageTemplate = createMenuPage();








