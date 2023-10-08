const validateInput = (text) => {
    if (text.trim().length > 2) {
        return true
    }

    return false
}

const validateDate = (date) => {
    if (date) {
        return true
    }

    return false
}


export {
    validateInput,
    validateDate
}