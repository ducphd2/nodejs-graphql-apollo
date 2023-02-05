import Book from '../models/book.model';
import Author from '../models/author.model';

export const repositoryMethods = {
  getAllBooks: async (condition = null) => {
    const books = condition === null ? await Book.find() : await Book.find(condition);
    return books;
  },

  getBookById: async (id) => {
    const book = await Book.findById(id);
    return book;
  },

  getAllAuthors: async () => await Author.find(),

  getAuthorById: async (id) => {
    const author = await Author.findById(id);
    return author;
  },

  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },

  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
};
