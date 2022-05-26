import chalk from "chalk";
import {usersController} from "./usersController.js";
import os from "os";
import dotenv from "dotenv";
import http from "http";

const PORT = process.env.PORT || 7500
dotenv.config()

const CORS = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true
    }
    return false
}


let server = http.createServer((req, res) => {
    if (CORS(req, res)) return
    switch (req.url) {
        case "/":
            res.write('HOME PAGE')
            break
        case '/users':
            usersController(req, res).then(res => {
                console.log(res)
            })
            break
        case '/tasks':
            res.write('TASKS PAGE')
            break
        case '/lessons':
            res.write('LESSONS')
            break
        default:
            res.write('404 - PAGE NOT FOUND')
    }
})

console.clear()
console.log(chalk.greenBright('===== SERVER STARTED ====='))
console.log(chalk.blueBright('PROCESS №:', chalk.cyanBright(process.pid)))
console.log(chalk.blueBright('PORT:'), chalk.cyanBright(process.env.PORT))
console.log(chalk.blueBright('MODE:'), chalk.cyanBright(process.env.NODE_ENV))
console.log(chalk.blueBright('OS:'), chalk.cyanBright(os.platform()))
console.log(chalk.blueBright("CPU's"), chalk.cyanBright(os.cpus().length))

server.listen(PORT, () => {
    console.log(chalk.greenBright('===== SERVER IS RUNNING... ====='))
})



