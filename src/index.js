import './style.css';
import { displayHomePage } from './home';
import { displayMenuPage } from './menu';
import { displayAboutPage } from './about';

lucide.createIcons();
initializeTabSwitching();
displayHomePage();

function initializeTabSwitching() {
    const homeTabElement = document.querySelector('#home');
    const menuTabElement = document.querySelector('#menu');
    const aboutTabElement = document.querySelector('#about');
    const contentElement = document.querySelector('#content');

    homeTabElement.addEventListener('click', () => {
        contentElement.textContent = null;
        displayHomePage();
    });

    menuTabElement.addEventListener('click', () => {
        contentElement.textContent = null;
        displayMenuPage();
    });

    aboutTabElement.addEventListener('click', () => {
        contentElement.textContent = null;
        displayAboutPage();
    });
}