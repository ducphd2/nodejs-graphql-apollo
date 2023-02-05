import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { addAuthor } from '../graphql-client/mutations'
import { getAuthors } from '../graphql-client/queries'

const AuthorForm = () => {
  const [newAuthor, setNewAuthor] = useState({
    name: '',
    age: '',
  })

  const { age, name } = newAuthor

  const onInputChange = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addedAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: getAuthors }],
    })
    setNewAuthor({
      name: '',
      age: '',
    })
  }

  const [addedAuthor] = useMutation(addAuthor)

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Author name'
          name='name'
          value={newAuthor.name}
          onChange={onInputChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Author age'
          name='age'
          value={newAuthor.age}
          onChange={onInputChange}
          required
        />
      </Form.Group>
      <Form.Group className='invisible'>
        <Form.Control />
      </Form.Group>
      <Button className='float-left' variant='info' type='submit'>
        Add author
      </Button>
    </Form>
  )
}

export default AuthorForm
