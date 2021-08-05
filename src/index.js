import { homePageTemplate } from '../modules/home.js';
import { menuPageTemplate } from '../modules/menu.js';
import { contactPageTemplate } from '../modules/contact.js';

const content = document.getElementById('content');

const container = document.createElement('div');
const navBar = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const contactTab = document.createElement('li');
const homeTabLink = document.createElement('a');
const menuTabLink = document.createElement('a');
const contactTabLink = document.createElement('a');

container.setAttribute('id','container');
navBar.classList.add('nav','tab-list');
homeTab.setAttribute('id','home');
menuTab.setAttribute('id','menu');
contactTab.setAttribute('id','contact');
homeTabLink.setAttribute('href','#');
homeTabLink.setAttribute('tabindex','0');
homeTabLink.setAttribute('title','Home');
menuTabLink.setAttribute('href','#');
menuTabLink.setAttribute('title','Menu');
contactTabLink.setAttribute('href','#');
contactTabLink.setAttribute('title','Contact');

homeTabLink.innerHTML = "Home";
menuTabLink.innerHTML = "Menu";
contactTabLink.innerHTML = "Contact";

homeTab.appendChild(homeTabLink);
menuTab.appendChild(menuTabLink);
contactTab.appendChild(contactTabLink);
navBar.appendChild(homeTab);
navBar.appendChild(menuTab);
navBar.appendChild(contactTab);

content.appendChild(navBar);
content.appendChild(container);

let currentPage = 'home';


container.appendChild(homePageTemplate);

function changeTab(tab) {
    if (tab == currentPage) {
        return;
    } else if (tab == 'home') {
        const el = document.querySelector('.page');
        el.parentNode.removeChild(el);
        container.appendChild(homePageTemplate);
    } else if (tab === 'menu') {
        const el = document.querySelector('.page');
        el.parentNode.removeChild(el);
        container.appendChild(menuPageTemplate);
    } else if (tab === 'contact') {
        const el = document.querySelector('.page');
        el.parentNode.removeChild(el);
        container.appendChild(contactPageTemplate);
    }

}

document.getElementById('home').addEventListener('click', function() {
    changeTab('home');
    currentPage = 'home';
});

document.getElementById('menu').addEventListener('click', function() {
    changeTab('menu');
    currentPage = 'menu';
});

document.getElementById('contact').addEventListener('click', function() {
    changeTab('contact');
    currentPage = 'contact';
});