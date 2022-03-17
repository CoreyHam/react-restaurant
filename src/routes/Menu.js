import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { getData } from '../utils/data';
import Layout from '../Layout';

export default function Menu() {
    console.log("MENU RAN")
    const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json'
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log("Use Effect Ran")
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
        console.log(data)
    }, []);
    return (
        <Layout>
            <h1>MENU ITEMS</h1>
        </Layout>
    );
}