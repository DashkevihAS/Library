import {getBooks,  getLabels, API_URI, deleteBooks, editBook} from "./serviceBook.js"; 
import {router} from "./router.js"

const bookContainer = document.querySelector('.book__container');
const btnDelete = document.querySelector('.header__btn_delete');
const bookLabel = document.querySelector('.footer__btn.book__label');

btnDelete.addEventListener('click', async () => {
    await deleteBooks(btnDelete.dataset.id);
    router.navigate('/');
});
let timerId ;    
const changeLabel = async ({target}) => {
    const labels = await getLabels();
    const labelsKeys = Object.keys(labels);
    const labelNow = target.dataset.label;
    const index = labelsKeys.indexOf(labelNow);

    const indexNext = (index +1) % labelsKeys.length;
    let labelNext = labelsKeys[indexNext];

    document.querySelectorAll('.book__label').forEach(btn => {
        btn.dataset.label = labelNext;
        btn.textContent = labels[labelNext];
    });

    clearInterval(timerId);
    timerId = setTimeout(()=> {
        editBook(target.dataset.id, {label: labelNext});
    }, 1000);
}

const getStarsBook = (rating) => {
    const stars = [];

    for (let i=0; i<5; i++) {
        if ( i===0) {
            stars.push(`<img class="cart__rating-star" src="img/star.svg" alt="рэйтинг ${rating} из 5">`);
        } else  if (i<rating) {
            stars.push(`<img class="cart__rating-star" src="img/star.svg" alt="">`);
        } else {
            stars.push(`<img class="cart__rating-star" src="img/star-o.svg" alt="">`);
        }
    }
    return stars;
};

export const renderBook = async (id) => {
    const [books, labels] = await Promise.all([getBooks(id),  getLabels()]);
    const {author, description, image, label, rating, title} = books;

    bookContainer.innerHTML= `
        <div class="book__wrapper">
            <img class="book__image" src="${API_URI}${image}" alt="обложка книги ${title}">
            
            <button class="book__label book__label_img" data-label="${label}" data-id="${id}">${labels[label]}</button>
        </div>

        <div class="book__content">
            <h2 class="book__title">${title}</h2>

            <p class="book__author">${author}</p>

            <div class="book__rating">
                ${getStarsBook(rating).join('')}
            </div>

            <h3 class="book__subtitle">Описание</h3>

            <p class="book__description">${description}</p>
        </div>
    `;

    const btnLabel = document.querySelector('.book__label_img');
    btnLabel.addEventListener('click', changeLabel);
    bookLabel.addEventListener('click', changeLabel);
    btnLabel.dataset.id = id;
    bookLabel.dataset.id = id;


    btnDelete.dataset.id = id;
    bookLabel.dataset.label = label;
    bookLabel.textContent = labels[label];
};


