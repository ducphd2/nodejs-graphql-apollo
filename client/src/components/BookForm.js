import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { useQuery, useMutation } from '@apollo/client'
import { getAuthors, getBooks } from '../graphql-client/queries'
import { addBook } from '../graphql-client/mutations'

const BookForm = () => {
  const [newBook, setNewBook] = useState({
    name: '',
    genre: '',
    authorId: '',
  })

  const { name, authorId, genre } = newBook

  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('newBook', newBook)
    addedBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooks }],
    })
    setNewBook({
      name: '',
      authorId: '',
      genre: '',
    })
  }

  const { loading, data } = useQuery(getAuthors)

  const [addedBook] = useMutation(addBook)

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Book name'
          name='name'
          value={name}
          onChange={onInputChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Book genre'
          name='genre'
          value={genre}
          onChange={onInputChange}
          required
        />
      </Form.Group>
      <Form.Group>
        {loading ? (
          <p>Loading authors...</p>
        ) : (
          <Form.Control
            as={'select'}
            onChange={onInputChange}
            name='authorId'
            value={authorId}
            required
          >
            <option value={''} disabled>
              Select author
            </option>
            {data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Form.Control>
        )}
      </Form.Group>
      <Button className='float-left' variant='info' type='submit'>
        Thêm tác phẩm
      </Button>
    </Form>
  )
}

export default BookForm
