import {getBooks,  getLabels, API_URI} from "./serviceBook.js"; 



export const renderBook = async (id) => {
    const [books, labels] = await Promise.all([getBooks(id),  getLabels()]);


};