import React from 'react'
import { Card } from 'react-bootstrap'

import { useQuery } from '@apollo/client'
import { getBook } from '../graphql-client/queries'

const BookDetail = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBook, {
    variables: {
      id: bookId,
    },
    skip: bookId === null,
  })

  if (loading) return <p>Loading book...</p>
  if (error) {
    console.log('error', error)
    return <p>Error when loading book...</p>
  }

  const book = bookId !== null ? data.book : null

  return (
    <Card bg='info' text='white' className='shadow'>
      <Card.Body>
        {book === null ? (
          <Card.Text>Hãy chọn 1 quyển sách để xem chi tiết</Card.Text>
        ) : (
          <>
            <Card.Title>Tác phẩm: {book.name}</Card.Title>
            <Card.Subtitle>Thể loại: {book.genre}</Card.Subtitle>
            <p>Tên tác giả: {book.author.name}</p>
            <p>Tuổi: {book.author.age}</p>
            <p>Tất cả tác phẩm của tác giả này:</p>
            <ul>
              {book.author.books.map((b) => {
                return <li key={b.id}>{b.name}</li>
              })}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default BookDetail
