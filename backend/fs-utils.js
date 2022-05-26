import fs from "fs";

export const readJSONFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        })
    })
}

