import { router } from "./router.js";
import { clearPreview } from "./upload.js";
import { addBooks } from "./serviceBook.js";
import toBase64 from "./toBase64.js";

const fieldsets = document.querySelectorAll('.add__fieldset');
const addBtn = document.querySelector('.add__btn');
const form = document.querySelector('.add__form');
const btnBack = document.querySelector('.add__btn-back');

let count = 0;

const sendBook = async () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.image = await toBase64(data.image); 
    const book = await addBooks(data);  // данные с сервера
    if (book) {
        form.reset();
        clearPreview();
        router.navigate('/');
        // count = 0;
        addBtn.textContent = 'Далее';
    }
};

const changeFieldset = () => {
    if (count === fieldsets.length - 1){
        addBtn.textContent = 'Добавить книгу';
    } else {
        addBtn.textContent = 'Далее';
    }

    fieldsets[count].classList.remove('hidden');

};

const initFieldset = ()=> {

    addBtn.addEventListener('click', () => {
        const fieldset = fieldsets[count];
    
        let valid = true;
    
        for (const elem of fieldset.elements) {
            if (!elem.checkValidity()) {
                elem.classList.add('no-valid');
                valid = false;
            } else {
                elem.classList.remove('no-valid');
            }
        }
    
        if (!valid) { return; }
    
        fieldset.classList.add('hidden');
        count +=1;
    
        if (count === fieldsets.length){
            count =0;
            sendBook();
        }
    
        changeFieldset();
    });
    
    btnBack.addEventListener('click', () => {
        if (count === 0) {
            form.reset();
            clearPreview();
            router.navigate('/');
            return;
        }
    
        fieldsets[count].classList.add('hidden');
        count--;
        changeFieldset();
    });
};
    
export default initFieldset;
