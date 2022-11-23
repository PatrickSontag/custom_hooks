import axios from 'axios';
import uuid from "uuid";
import { useState } from 'react';
// import React, { useState } from 'react';

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const getData = async () => {
        const response = await axios.get(`${url}`)
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }
    return [cards, getData]
}

export default useAxios;