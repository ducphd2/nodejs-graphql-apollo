import React from 'react'
import { Col, Row } from 'react-bootstrap'

import AuthorForm from './AuthorForm'
import BookForm from './BookForm'

const Forms = () => {
  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <AuthorForm />
      </Col>
    </Row>
  )
}

export default Forms
