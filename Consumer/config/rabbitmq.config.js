const mq = require('amqplib/callback_api')
let queue = "myMsg"


//connection
mq.connect({
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}, (err, con) => {
    if (err)
        throw err

    //create queue
    con.createChannel((err, channel) => {
        if (err)
            throw err;

        channel.assertQueue(queue, {
            durable: false
        })
    
        channel.consume(queue, function (msg) {
            console.log("[Publisher]:", msg.content.toString());
        }, {
            noAck: false
        });
    })
})


