import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { Card, CardColumns, Col, Row } from 'react-bootstrap'
import { getBooks } from '../graphql-client/queries'
import BookDetail from './BookDetail'

const BookList = () => {
  const [bookSelected, setBookSelected] = useState(null)
  const { loading, error, data } = useQuery(getBooks)
  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error when loading books...</p>

  return (
    <Row>
      <Col xs={8}>
        <CardColumns>
          {data.books.map((book) => {
            return (
              <Card
                border='info'
                text='info'
                className='text-center shadow'
                key={book.id}
                onClick={setBookSelected.bind(this, book.id)}
              >
                <Card.Body>{book.name}</Card.Body>
              </Card>
            )
          })}
        </CardColumns>
      </Col>
      <Col>
        <BookDetail bookId={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookList
