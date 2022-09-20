export const activeLoading = () => {
    return {
        type: 'ACTVE',
        payload: true,
    }
}

export const removeLoading = () => {
    return {
        type: 'REMOVE',
        payload: false,
    }
}

export const openInforModal = () => {
    return {
        type: 'OPEN',
        payload: true,
    }
}

export const closeInforModal = () => {
    return {
        type: 'CLOSE',
        payload: false,
    }
}

export const changeInfor = (infor) => {
    return {
        type: 'CHANGE',
        payload: infor,
    }
}