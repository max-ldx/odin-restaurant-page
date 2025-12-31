export { displayHomePage };

function displayHomePage() {
    const contentElement = document.querySelector('#content');

    const restaurantNameElement = document.createElement('h1');
    restaurantNameElement.textContent = 'Galactic Restaurant';
    contentElement.appendChild(restaurantNameElement);

    const restaurantDescriptionElement = document.createElement('p');
    restaurantDescriptionElement.textContent = 'The best dishes from all over the Galaxy. From classic Earth preparations to exotic Proxima Centauri drinks, you got it all!';
    contentElement.appendChild(restaurantDescriptionElement);

    const menuDescriptionElement = document.createElement('p');
    menuDescriptionElement.textContent = 'The menu is composed by the most renowned chefs from the galaxy. Take a look at it!';
    contentElement.appendChild(menuDescriptionElement);
}