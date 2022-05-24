import {users} from "./index.js";

export const usersController = (req, res) => {
    if (req.method === 'POST') {
        users.push({"id": users.length + 1, "name": 'Alex'})
        res.write(JSON.stringify({"success": true}))
    } else {
        res.write(JSON.stringify(users))
    }

}