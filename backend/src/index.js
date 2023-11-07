import app from "./app.js";
import mongoose from "mongoose";


const port = 3000;

// database connection mongoDB

(async () => {
    try {
        // db connection
        await mongoose.connect('db String')
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

