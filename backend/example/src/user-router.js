import chalk from "chalk";
import {Router} from "../framework/Router.js";

export const userRouter = new Router()
let users = [
    {id: 1, name: 'Eugene'},
    {id: 2, name: 'Elina'},
    {id: 3, name: 'Bob'},
]

userRouter.get('/users', (req, res) => {
    // console.log(res)
    res.send(users)
})

userRouter.post('/users', (req, res) => {
    console.log(req.body)
    const user = req.body;
    users.push(user)
    res.send(users)
})
