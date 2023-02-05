import { Container } from 'react-bootstrap'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import BookList from './components/BookList'
import Forms from './components/Forms'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className='py-3 mt-3' style={{ backgroundColor: 'lightcyan' }}>
        <h1 className='text-center text-info mb-3'>Cửa hàng sách của tôi</h1>
        <hr />
        <Forms />
        <hr />
        <BookList />
      </Container>
    </ApolloProvider>
  )
}

export default App
