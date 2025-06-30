// require('dotenv').config({path: '/.env'})
import dotenv from 'dotenv'

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
    app.on("error", (error) => {
        console.log("ERROR", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch( (err) => {
    console.log("MONGO db connection failed !!!", err);
})

/*
import express from "express"
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.PORT.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

Note : we always use try and catch, async await keyword to handle error coming due to receiving wrong data/URL 
from database or MONGODB connection error.
*/