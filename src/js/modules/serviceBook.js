export const API_URI = ' http://localhost:3024/';

export const getBooks = async (id) => {
    const response = await fetch(`${API_URI}api/books/${id || ''}`);

    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
};

export const getSearchBooks = async (search) => {
    const response = await fetch(`${API_URI}api/books/?search=${search}`);

    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
};

export const addBooks = async (data) => {
    const response = await fetch(`${API_URI}api/books/`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
};

export const getLabels = async () => {
    const response = await fetch(`${API_URI}api/label/`);

    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
};

export const deleteBooks = async (id) => {
    const response = await fetch(`${API_URI}api/books/${id}`, { 
        method: 'DELETE'
    });

    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
};

export const editBook = async (id, data) => {
    const response = await fetch(`${API_URI}api/books/${id}`, { 
        method: 'PATCH',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
};