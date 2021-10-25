const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cors = require('cors')

//const { response } = require("express")


app.use(cors())


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


var DB = {
    games: [
        {
            id: 23, 
            title: 'Call of duty',
            year: 2019,
            price: 60
        },
        {
            id: 21, 
            title: 'Sea of thieves',
            year: 2018,
            price: 45
        },
        {
            id: 2, 
            title: 'Minecraft',
            year: 2005,
            price: 15
        }
    ]
}

app.listen(45678, () => {
    console.log("API rodando :) ")
})


/* 
if(game != undefined){
            let {title, price, year} = req.body
            if(title != undefined){
                game.title = title
            }
            if(prince != undefined){
                game.price = price
            }
            if(year != undefined){
                game.year = year
            }
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
*/