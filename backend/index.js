import http from "http";
import chalk from "chalk";


let server = http.createServer((req, res) => {

    switch (req.url){
        case "/":
            res.write('HOME PAGE')
            break
        case '/tasks':
            res.write('TASKS PAGE')
            break
        default: res.write('404 - PAGE NOT FOUND')
    }

    // res.write(`<h1>HELLO nodejs!</h1>`)
    res.end()
})

server.listen(7500, () => {
    console.clear()
    console.log(chalk.blueBright('========== SERVER STARTED =========='))
})