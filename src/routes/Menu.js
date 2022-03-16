import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { getData } from '../utils/data';

export default function Menu() {
  const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json';
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage();
    if (data.length > 0) {
      setItems(data);
    } else {
      getData(URL)
        .then((data) => {
          setItems(data);
          setLocalStorage(data);
        })
    }
  }, []);
}