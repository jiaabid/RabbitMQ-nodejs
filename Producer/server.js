const express = require('express');
const app = express();
const { publishToQueue } = require("./config/rabbitmq.config")


//route to send the msg to the queue
app.get("/send/:msg", async (req, res) => {
    try {
        await publishToQueue(req.params.msg);
        return res.status(200).json({ msg: "Send to the queue" })
    } catch (err) {
        console.log(err)
        return res.status(400).json(err)
    }

})

//server started
app.listen(3002, () => console.log('server started of Producers'))