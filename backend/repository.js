import {readJSONFromFile, writeJSONToFile} from "./fs-utils.js";

export const getUsers = () => {
    return readJSONFromFile('db')
}

export const addUser = async (name) => {
    let users = await getUsers()
    users.push({id: users.length + 1, name: name})
    return writeJSONToFile('db', users)
}