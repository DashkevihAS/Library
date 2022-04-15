import Navigo from 'navigo';
import {renderListBooks } from './renderListBooks.js';
import {renderBook} from './renderBook.js';


const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const addBtns = document.querySelectorAll('.header__btn-add, .library__btn-add');
const backBtn = document.querySelector('.book__btn_back');

export const router = new Navigo('/', {
    hash: true,
});

const closeAllPage = () => {
    library.classList.add('hidden');
    book.classList.add('hidden');
    add.classList.add('hidden');
};

export const initRouter = () => {
    router.on({
        '/': ()=> {
            closeAllPage();
            library.classList.remove('hidden');
            document.body.classList.remove('body_gradient');
            renderListBooks();
        },
        'book': ({params:{id}}) => {
            closeAllPage();
            book.classList.remove('hidden');
            document.body.classList.add('body_gradient');
            renderBook(id);
            console.log(id); // нужно вызвать функцию, которая отрисует книгу по id
        },
        'add': () => {
            closeAllPage();
            add.classList.remove('hidden');
            document.body.classList.add('body_gradient');
        }
    }).resolve();
    
    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            router.navigate('add');
        });
    });
    
    backBtn.addEventListener('click', () => {
            router.navigate('/');
    });
};