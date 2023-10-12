const fs = require("fs");

function rqListener(req, res) {
  const url = req.url;
  if (url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <title>Crating server with nodejs</title>
        <body>
        <h1>Send Form</h1>
        <form method="POST" action="/message">
        <input type="text" required name="message"/>
        <button type="submit">Send</button>
        </form>
        </body>
        </html>
        `);
        return res.end()
  } else if (url == "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <title>Crating server with nodejs</title>
        <body>
        <h1>My Products</h1>
        </body>
        </html>
        `);
        res.end()
  }

  if (url == "/message" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", (err) => {
      const parsedData = Buffer.concat(body).toLocaleString();
      fs.writeFile("message.txt", parsedData.split("=")[1], (err) => {
       res.statusCode = 302;
       res.setHeader("Location", "/products");
       return res.end();
    });
});
  }
}

module.exports = rqListener;
