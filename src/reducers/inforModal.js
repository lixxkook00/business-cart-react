const initialState = false

const inforModal = (state = initialState , action) => {
    switch (action.type) {
        case 'OPEN':
            return true

        case 'CLOSE':
            return false

        default:
            return false;
    }
}

export { inforModal };