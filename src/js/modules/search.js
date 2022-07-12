import { getSearchBooks } from "./serviceBook.js";
import {renderList} from "./renderListBooks.js";

const btnSearch = document.querySelectorAll('.header__btn_search');
const search = document.querySelector('.search');
const btnHeaderAdd = document.querySelector('.header__btn-add');
const searchForm = document.querySelector('.search__form');

const closeSearch = ({target}, flag) => {
    if (target.closest('.search, .header__btn_search') && !flag) {
        return;
    }
    search.classList.remove('search_active');
    btnHeaderAdd.classList.remove('hidden');
    document.body.removeEventListener('click', closeSearch);
    searchForm.reset();

};

btnSearch.forEach(btn => {
    btn.addEventListener('click', () => {
        search.classList.add('search_active');
        btnHeaderAdd.classList.add('hidden');
        document.body.addEventListener('click', closeSearch, true);
    });
});

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const books = await getSearchBooks(searchForm.searchInput.value);
    renderList(books);
    searchForm.reset();
    closeSearch(e, true);

});