import fs from "fs";

export let users = [
    {"id": 1, "name": "Eugene"},
    {"id": 2, "name": "Elina"},
    {"id": 3, "name": "Bob"}
]


export const getUsers = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('db', function (err, buf) {
            resolve(JSON.parse(buf.toString()))
        })
    })
}

export const addUser = (name) => {
    users.push({id: users.length + 1, name: name})
}