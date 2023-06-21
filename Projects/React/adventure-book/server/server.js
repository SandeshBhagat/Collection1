const express = require('express');
const app = express();
require('./db/conn');
const router = require('./routes/router')
const port = 8005;

app.use(router)
app.listen(port, () => {
	console.log(`server started at port - ${port}`);
});
