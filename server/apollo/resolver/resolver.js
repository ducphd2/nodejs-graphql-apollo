export const resolvers = {
  Query: {
    books: async (parent, args, { req, methods }) => await methods.getAllBooks(),

    book: async (parent, { id }, { req, methods }) => await methods.getBookById(id),

    authors: async (parent, args, { req, methods }) => await methods.getAllAuthors(),

    author: async (parent, { id }, { req, methods }) => await methods.getAuthorById(id),
  },

  Book: {
    author: async ({ authorId }, args, { req, methods }) => await methods.getAuthorById(authorId),
  },

  Author: {
    books: async ({ id }, args, { req, methods }) => await methods.getAllBooks({ authorId: id }),
  },

  Mutation: {
    createAuthor: async (parent, args, { req, methods }) => {
      return await methods.createAuthor(args);
    },

    createBook: async (parent, args, { req, methods }) => {
      const book = await methods.createBook(args);
      return book;
    },
  },
};
