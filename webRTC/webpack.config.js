module.exports = {
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    output:{
        path:__dirname + '/public/',
        filename:'[name].js'
    }
}