const BASE_API = 'https://636db526b567eed48ac70bc3.mockapi.io'

export const getItem = (path, callback) => {
    fetch(`${BASE_API}/${path}`)
        .then(res => res.json())
        .then(callback)
}

export const postItem = (path, data, callback) => {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(`${BASE_API}/${path}`, options)
        .then(res => res.json())
        .then(callback)
}

export const putItem = ( path, data, callback ) => {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(`${BASE_API}/${path}`, options)
            .then(res => res.json())
            .then(callback)
}

export const deleteItem = ( path, callback ) => {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }

    fetch(`${BASE_API}/${path}`, options)
            .then(res => res.json())
            .then(callback)
}

