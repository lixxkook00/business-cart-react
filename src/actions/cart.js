export const addNewCard = (card) => {
    return {
        type: 'ADD',
        payload: card,
    }
}