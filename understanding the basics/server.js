/*Our first server using core NodeJS
Date: 05-10-2023
Author: Markonuoha6@gmail.com
*/
const http = require('http');
const handler = require("./routes")

const server = http.createServer(handler);
server.listen(3000);