

function appReducer(state, action) {
    switch (action.type) {
        case 'into':
            return intoperson(state, action)

        case 'add-person':
            return addperson(state, action)

        case 'delete':
            return deletePerson(state, action)

    }
}

let addperson = (state, action) => {
    let { person } = action.payload

    return {
        // ...state,
        person: [
            ...state.person,
            person]
    }
}

let intoperson = (state, action) => {
    const { person } = action.payload
    
    return {
        ...state,
        person: [person]
        // person : [person]
    }
}

let deletePerson = (state, action) => {
    let { key } = action.payload
    let newList = state.person.map((item) => item.filter(del => del.key !== key))
    console.log(state);
    return {
        ...state,
        person: newList
    }
}


export default appReducer