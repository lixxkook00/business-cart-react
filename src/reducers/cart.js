const initialState = [
    {
        img: 'card-front-02.jpg',
        name : 'Card 01',
        price: 100000,
        quantity: 1
    }
]

const cart = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_CART':
            let result = [...state]
            result.push(action.payload)

            return [...result]

        default:
            return state;
    }
}

export { cart };


// {
//     img: '',
//     name : '',
//     price: 0,
//     quantity: 1
// }