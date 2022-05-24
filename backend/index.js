import http from "http";
import chalk from "chalk";


let server = http.createServer((req, res) => {

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    switch (req.url) {
        case "/":
            res.write('HOME PAGE')
            break
        case '/users':
            res.write(`[{"id": 1, "name": "Eugene"}, {"id": 2, "name": "Elina"}]`)
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

    res.end()
})

server.listen(7500, () => {
    console.clear()
    console.log(chalk.blueBright('========== SERVER STARTED =========='))
})