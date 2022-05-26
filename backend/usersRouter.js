import {addUser, getUsers} from "./repository.js";
import express from "express";

const router = express.Router()

router.get('/', async (req, res) => {
    res.send(`<h1>HOME PAGE</h1>`)
})
router.get('/', async (req, res) => {
    let users = await getUsers()
    console.log(users)
    res.send(users)
})
router.post('/', async (req, res) => {
    await addUser("Robot")
    res.send({"success": true})
})


// router.get('/', function(req, res){
//     res.send('Birds home page')
// })
// router.get('/', function(req, res){
//     res.send('About birds')
// })


// export const usersRouter = async (req, res) => {
//     if (req.method === POST) {
//         let result = await addUser("TEST")
//         res.write(JSON.stringify({"success": true}))
//         res.end()
//     }
//     if (req.method === GET) {
//         let users = await getUsers()
//         console.log(users)
//         res.write(JSON.stringify(users))
//         res.end()
//     }
// }

export default router