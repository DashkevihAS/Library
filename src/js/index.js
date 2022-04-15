import { initRouter } from './modules/router.js';
import './modules/search.js';
import initFieldset from './modules/changeFieldset.js'; 
import { controlField } from './modules/controlField.js';  
import  './modules/upload.js';

const fieldsBtnSort = document.querySelector('.fields__btn_sort');
const fieldsListSort = document.querySelector('.fields__list_sort');
const fieldsBtnFilter = document.querySelector('.fields__btn_filter');
const fieldsListFilter = document.querySelector('.fields__list_filter');

const init = () => {
    initRouter();

    controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
    controlField(fieldsBtnFilter, fieldsListFilter, fieldsListSort);

    initFieldset();
};


init();


