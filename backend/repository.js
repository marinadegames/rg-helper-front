import fs from "fs";
import chalk from "chalk";
import {readJSONFromFile} from "./fs-utils.js";

export let users = [
    {"id": 1, "name": "Eugene"},
    {"id": 2, "name": "Elina"},
    {"id": 3, "name": "Bob"}
]


export const getUsers = () => {
    return readJSONFromFile('db')
}

export const addUser = async (name) => {
    let users = await getUsers()
    users.push({id: users.length + 1, name: name})
    return new Promise((res, rej) => {
        fs.writeFile('db', JSON.stringify(users), (err) => {
            if (err) {
                rej(err)
                console.log(chalk.red(err))
            }
            console.log(chalk.greenBright('ADD USER SUCCESSFUL! '))
            res()
        })
    })
}