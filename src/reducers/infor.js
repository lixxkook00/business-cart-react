const initialState = {
    name: 'Le Quang Default',
    address : 'Go Vap, HCM',
    email: 'default@gmail.com',
    phone: '086 68 68 68 68'
}

const cardInfor = (state = initialState , action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                name: action.payload.name,
                address : action.payload.address,
                email: action.payload.email,
                phone: action.payload.phone
            }

        default:
            return state;
    }
}

export { cardInfor };