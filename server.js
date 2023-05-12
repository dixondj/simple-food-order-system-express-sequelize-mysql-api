const express = require("express")

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./routes/foodItemRouter.js')
app.use('/api',router)



const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})