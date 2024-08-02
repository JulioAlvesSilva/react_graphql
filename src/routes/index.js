import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderMain from '../components/header';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import MainProject from '../pages/main';
import ListMain from '../pages/cardsList';
import AddItem from '../pages/add';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

export default function RoutesPages() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <HeaderMain />
                <Routes>
                    <Route path='/' element={<MainProject />} />
                    <Route path='/list' element={<ListMain />} />
                    <Route path='/add' element={<AddItem />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}