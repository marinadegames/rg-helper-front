import dotenv from 'dotenv'
import chalk from "chalk";
import os from "os";
import {Application} from "./framework/Application.js";
import {parseJSON} from "./framework/parseJSON.js";
import {userRouter} from "./src/user-router.js";

const PORT = process.env.PORT || 4000
const app = new Application()
dotenv.config()

console.clear()
console.log(chalk.greenBright('===== SERVER STARTED ====='))
console.log(chalk.blueBright('PROCESS №:', process.pid))
console.log(chalk.blueBright('PORT:', process.env.PORT))
console.log(chalk.blueBright('MODE:', process.env.NODE_ENV))
console.log(chalk.blueBright('OS:', os.platform()))
console.log(chalk.blueBright("CPU's", os.cpus().length))

app.use(parseJSON)
app.addRouter(userRouter)
app.listen(PORT, () => console.log(chalk.greenBright('===== SERVER IS RUNNING... =====')))
