export const controlField = (btn, list, offList) => {
    btn.addEventListener('click', () => {
        list.classList.toggle('fields__list_active');
        offList.classList.remove('fields__list_active');
    });
    
    list.addEventListener('click', ({target}) => {
        if (target.classList.contains('fields__button')) {
            list.classList.remove('fields__list_active');
        }
    });
}; 