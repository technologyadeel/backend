import app from "./app.js";
import mongoose from "mongoose";

// mongodb+srv://adeel:adeel342@cluster0.gah82ed.mongodb.net/todo

const port = 3000;

// database connection mongoDB

(async () => {
    try {
        // db connection
        await mongoose.connect('mongodb+srv://adeel:adeel342@cluster0.gah82ed.mongodb.net/todo')
        console.log("DB connected successfully");

        app.on("error", (err) => {
            console.log("Error", err)    
        })

        const onListening = () => {
            console.log(`Listening on port ${port}`);
        }
        app.listen(port, onListening)

    } catch (error) {
        console.log(error);
    }
})()

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// })

