

export const parseJSON = (req,res) => {
    res.send = (data) => {
        console.log(data)
        res.writeHead(200, {
            'Content-Type':'application/json'
        })
        res.end(JSON.stringify(data))
    }
}