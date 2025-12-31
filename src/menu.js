import imageOne from './assets/images/image-one.jpg';
import imageTwo from './assets/images/image-two.jpg' ;
import imageThree from './assets/images/image-three.jpg';

export { displayMenuPage };

function displayMenuPage() {
    const contentElement = document.querySelector('#content');

    const menuElement = document.createElement('h1');
    menuElement.textContent = 'Menu';
    contentElement.appendChild(menuElement);

    const containerElement = document.createElement('div');
    containerElement.classList.add('container');

    const cardsData = [
        {
            image: imageOne,
            title: 'Boulettes à la liégoise',
            description: 'Belgian meatballs in a rich sweet-sour sauce. Flavored with caramelized onions and Liège syrup. A classic dish from Liège, often served with fries.'
        },
        {
            image: imageTwo,
            title: 'Shining Star',
            description: 'The classic cool drink made at Proxima Centauri. Cooled to absolute zero before serving.'
        },
        {
            image: imageThree,
            title: 'Light speed',
            description: 'Protein bar made at Sirius. Gives high protein in a small form factor. Ideal when exercising.'
        }
    ];

    cardsData.forEach(({ image, title, description }) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imageContainerElement = document.createElement('div');
        imageContainerElement.classList.add('card-image-container');

        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.width = 200;

        const nameElement = document.createElement('h2');
        nameElement.textContent = title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;

        imageContainerElement.appendChild(imageElement);
        cardElement.appendChild(imageContainerElement);
        cardElement.appendChild(nameElement);
        cardElement.appendChild(descriptionElement);

        containerElement.appendChild(cardElement);
    });

    contentElement.appendChild(containerElement);
}