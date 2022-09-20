export const activeLoading = (status) => {
    return {
        type: 'ACTVE',
        payload: status,
    }
}

export const removeLoading = (status) => {
    return {
        type: 'REMOVE',
        payload: status,
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