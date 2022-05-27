import {addUser, getUsers} from "./repository.js";
import express from "express";

const router = express.Router()


router.get('/', async (req, res) => {
    let users = await getUsers()
    console.log(users)
    res.send(users)
})
router.get('/:id', async (req, res) => {
    const userId = req.params.id
    let users = await getUsers()
    let user = users.find(u => u.id == userId)
    console.log(user)
    if (user) {
        res.send(user)
    } else {
        res.sendStatus(404)
    }
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