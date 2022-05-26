import chalk from "chalk";
import os from "os";
import dotenv from "dotenv";
import express from 'express'
import cors from 'cors'
import users from "./usersRouter.js";

// params
const port = 7500
const app = express()
dotenv.config()
app.use(cors())

// routers
app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('TASKS')
})

// default
app.use(async (req, res) => {
    res.send('404 NOT FOUND')
})

console.clear()
console.log(chalk.greenBright('===== SERVER STARTED ====='))
console.log(chalk.blueBright('PROCESS №:', chalk.cyanBright(process.pid)))
console.log(chalk.blueBright('PORT:'), chalk.cyanBright(process.env.PORT))
console.log(chalk.blueBright('MODE:'), chalk.cyanBright(process.env.NODE_ENV))
console.log(chalk.blueBright('OS:'), chalk.cyanBright(os.platform()))
console.log(chalk.blueBright("CPU's"), chalk.cyanBright(os.cpus().length))

app.listen(port, () => {
    console.log(chalk.greenBright(`===== SERVER IS RUNNING... =====`))
})




