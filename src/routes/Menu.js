import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { getData } from '../utils/data';
import Layout from '../Layout';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

export default function Menu() {
    const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json'
    const [items, setItems] = useState([])
    useEffect(() => {
        let data = getLocalStorage(URL);
        if (data.length > 0) {
            setItems(data);
        } else {
            getData(URL)
                .then((data) => {
                    setItems(data);
                    setLocalStorage(URL, data);
                })
        }
    }, []);

    return (
        <Layout>
            <Navbar variant="dark" sticky="top" >
                <Container>
                        <Nav >
                            <Nav.Link href="#apps">Appetizers</Nav.Link>
                            <Nav.Link href="#burgers">Burgers and Sandwiches</Nav.Link>
                            <Nav.Link href="#pasta">Pasta</Nav.Link>
                            <Nav.Link href="#dessert">Dessert</Nav.Link>
                            <Nav.Link href="#house">House Favorites</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
            <h1 id='apps' className='big-text'>Appetizers</h1>
            <div className='food-card-display'>
                {items
                    .filter(item => item.category.title === 'Appetizer')
                    .map((item) => <Item key={item.id} item={item} />)}
                <hr />
            </div>
            <h1 id='burgers' className='big-text'>Burgers and Sandwiches</h1>
            <div className='food-card-display'>
                {items
                    .filter(item => item.category.title === 'Burgers' || item.category.title === 'Sandwiches')
                    .map((item) => <Item key={item.id} item={item} />)}
                <hr />
            </div>
            <h1 id='pasta' className='big-text'>Pasta</h1>
            <div className='food-card-display'>
                {items
                    .filter(item => item.category.title === 'Pasta')
                    .map((item) => <Item key={item.id} item={item} />)}
                <hr />
            </div>
            <h1 id='dessert' className='big-text'>Dessert</h1>
            <div className='food-card-display'>
                {items
                    .filter(item => item.category.title === 'Dessert')
                    .map((item) => <Item key={item.id} item={item} />)}
                <hr />
            </div>
            <h1 id='house' className='big-text'>House Favorites</h1>
            <div className='food-card-display'>
                {items
                    .filter(item => item.category.title === 'House Favorites')
                    .map((item) => <Item key={item.id} item={item} />)}
                <hr />
            </div>

        </Layout>
    );
}

const Item = ({ item }) => {
    {
        return (
            <div className='food-card'>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <h3 className='right-align'>{item.price}</h3>
            </div>
        )
    }
}

