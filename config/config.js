'use strict'

module.exports = {
    name: 'Delivery Tracking',
    version: '1.0.0',
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    //base_url: process.env.BASE_URL,
    db: {
        uri: process.env.DB_URL,
        options: {
            useNewUrlParser: true, 
            useCreateIndex: true,
            useUnifiedTopology: true
        }
    },
}