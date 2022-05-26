import {addUser, getUsers} from "./repository.js";

export const usersController = async (req, res) => {
    if (req.method === 'POST') {
        let result = await addUser("Alex")
        res.write(JSON.stringify({"success": true}))
        res.end()
    } else {
        let users = await getUsers()
        console.log(users)
        res.write(JSON.stringify(users))
        res.end()
    }
}