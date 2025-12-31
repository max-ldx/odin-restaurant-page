export { displayAboutPage };

function displayAboutPage() {
    const contentElement = document.querySelector('#content');

    const aboutElement = document.createElement('h1');
    aboutElement.textContent = 'About';
    contentElement.appendChild(aboutElement)

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'This is a simple restaurant website. It is part of The Odin Project curriculum. The goals of this project are to use webpack and reinforce DOM manipulation skills.';
    contentElement.appendChild(descriptionElement);
}