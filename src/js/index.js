import Navigo from 'navigo';

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const addBtns = document.querySelectorAll('.header__btn-add, .library__btn-add');
const backBtns = document.querySelectorAll('.header__btn_back');
const btnSearch = document.querySelectorAll('.header__btn_search');
const search = document.querySelector('.search');
const btnHeaderAdd = document.querySelector('.header__btn-add');

const router = new Navigo('/', {
    hash: true,
});

const closeAllPage = () => {
    library.classList.add('hidden');
    book.classList.add('hidden');
    add.classList.add('hidden');
};

router.on({
    '/': ()=> {
        closeAllPage();
        library.classList.remove('hidden');
    },
    'book': () => {
        closeAllPage();
        book.classList.remove('hidden');
        search.classList.remove('search_active');
    },
    'add': () => {
        closeAllPage();
        add.classList.remove('hidden');
    }
}).resolve();

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        router.navigate('add');
    });
});

backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        router.navigate('/');
    });
});



const closeSearch = ({target}) => {
    if (target.closest('.search, .header__btn_search')) {
        return;
    }
    search.classList.remove('search_active');
    btnHeaderAdd.classList.remove('hidden');
    document.body.removeEventListener('click', closeSearch);
};

btnSearch.forEach(btn => {
    btn.addEventListener('click', () => {
        search.classList.add('search_active');
        btnHeaderAdd.classList.add('hidden');
        document.body.addEventListener('click', closeSearch);
    });
});
