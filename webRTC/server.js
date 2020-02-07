const express = require('express');
const app = express();

app.use(express.static('./public'));

app.listen(8080, function(){//监听8080端口，
    console.log('http://localhost:8080');
})