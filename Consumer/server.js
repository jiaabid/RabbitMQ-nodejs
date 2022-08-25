const express = require('express');
const app = express();
require("./config/rabbitmq.config") //mq config

//start server
app.listen(3003, () => console.log('server started of Consumers'))