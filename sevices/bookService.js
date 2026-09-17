import * as bookModel from '../models/bookModel.js';

export const fetchAllBOoks = async() => {
    const books = await bookModel.fetchAllBOoks();
    return books;

}