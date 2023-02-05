import { gql } from '@apollo/client'

export const getBooks = gql`
  query getBooksQuery {
    books {
      id
      name
    }
  }
`
export const getBook = gql`
  query getBookQuery($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
          genre
        }
      }
    }
  }
`
export const getAuthors = gql`
  query getAuthorsQuery {
    authors {
      id
      name
    }
  }
`

export const getAuthor = gql`
  query getAuthorQuery($id: ID!) {
    author(id: $id) {
      id
      name
      books {
        id
        name
        genre
      }
    }
  }
`
