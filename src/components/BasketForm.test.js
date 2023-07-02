// import React from 'react';
// import { render, fireEvent, waitFor, act } from '@testing-library/react';
// import BasketForm from './BasketForm';
// import axios from 'axios';

// jest.mock('axios');

// const basketDataHM = {
//     "basketNameStr": "2023 Bitcoin",
//     "user_IDStr": "646678e5024aad67cf201bfb",
//     "indexDateStr": "01-01-2023",
//     "initialBasketValueInt": 1000,
//     "presentBasketValueInt": 2000,
//     "percentReturnInt": 100,
//     "asset1HM": {
//         "asset1NameStr": "Bitcoin",
//         "asset1IndexPriceInt": 10000, 
//         "asset1QuantityInt": 0.1, 
//         "asset1WeightInt": 100,
//         "asset1APIKeyStr": "bitcoin",
//         "asset1LoSStr": "long"
//     },
//     "asset2HM": {
//         "asset2NameStr": "",
//         "asset2IndexPriceInt": 0, 
//         "asset2QuantityInt": 0,
//         "asset2WeightInt": 0,
//         "asset2APIKeyStr": "",
//         "asset2LoSStr": "long"
//     },
//     "asset3HM": {
//         "asset3NameStr": "",
//         "asset3IndexPriceInt": 0,
//         "asset3QuantityInt": 0,
//         "asset3WeightInt": 0,
//         "asset3APIKeyStr": "",
//         "asset3LoSStr": "long"
//     },
//     "asset4HM": {
//         "asset4NameStr": "",
//         "asset4IndexPriceInt": 0,
//         "asset4QuantityInt": 0,
//         "asset4WeightInt": 0,
//         "asset4APIKeyStr": "",
//         "asset4LoSStr": "long"
//     },
//     "asset5HM": {
//         "asset5NameStr": "",
//         "asset5IndexPriceInt": 0, 
//         "asset5QuantityInt": 0,
//         "asset5WeightInt": 0,
//         "asset5APIKeyStr": "",
//         "asset5LoSStr": "long"
//     }
// }

// test ('submits form data to API endpoint', async () => {
//     const view = render(<BasketForm />);
//     const basketNameInput = view.screen.getByLabelText('basket-norm');
//     const indexDateInput = view.screen.getByLabelText('')
//     const submitButton = view.screen.getByLabelText('submit');

//     axios.post.mockResolvedValueOnce({ data: basketDataHM});

//     act(() => {
//         fireEvent.change(basketNameInput), {target: {value: basketDataHM.basketNameStr}}
//         fireEvent.change()
//     })
    
    
    
//     })
// })