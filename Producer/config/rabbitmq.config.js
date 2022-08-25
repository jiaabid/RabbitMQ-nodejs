const mq = require('amqplib/callback_api')
let myChannel = null;
let queue = "myMsg"

//rabbitmq connection
mq.connect({
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}, (err, con) => {
    if (err)
        throw err

    //create channel
    con.createChannel((err, channel) => {
        if (err)
            throw err;

        //create queue,if not exist
        channel.assertQueue(queue, {
            durable: false
        })
        myChannel = channel
    })
})

//send the msg to the consumer
const publishToQueue = async (data) => {
    
    //send data to the queue
    myChannel.sendToQueue(queue, Buffer.from(data))

}

module.exports = {
    publishToQueue
}
