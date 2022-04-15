const btnSearch = document.querySelectorAll('.header__btn_search');
const search = document.querySelector('.search');
const btnHeaderAdd = document.querySelector('.header__btn-add');

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
        document.body.addEventListener('click', closeSearch, true);
    });
});