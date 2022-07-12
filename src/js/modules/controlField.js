import{data, renderList} from "./renderListBooks.js";

export const controlField = (btn, list, offList) => {
    btn.addEventListener('click', () => {
        list.classList.toggle('fields__list_active');
        offList.classList.remove('fields__list_active');
    });
    
    list.addEventListener('click', ({target}) => {
        if (target.classList.contains('fields__button')) {
            list.classList.remove('fields__list_active');

            if (target.dataset.sort)
                data.sortBooks(target.dataset.sort)
                renderList();
            if (target.dataset.filter) {
                const filteredData = data.filterBooks(target.dataset.filter);
                renderList(filteredData);
            }
        }
    });
}; 