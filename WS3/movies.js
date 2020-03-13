var http = require("http");
var json;

const PORT = process.env.PORT || 5000;
var http = require("http");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    var req = http.request(
      "www.omdbapi.com/?t=the+godfather&apikey=b3ad12d7",
      res => {
        var data = "";

        res.on("data", chunk => {
          data += chunk;
        });
        res.on("end", () => {
          json = JSON.parse(data);
          console.log(json);
          for (let i = 0; i < json.Search.length; i++) {
            response.write(
              `<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Movie search</title>
            <meta charset="utf-8"/>
        </head>
        <body>
            <table style="border: 2px solid black;">
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Year</td>
                        <td>Genre</td>
                    </tr>
                    <tr>
                        <td>` +
                json.Title +
                `</td>
                        <td>` +
                json.Year +
                `</td>
                        <td>` +
                json.Genre +
                `</td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html>`
            );
          }
          response.end();
        });
      }
    );

    req.on("error", e => {
      console.log(e.message);
    });

    req.end();
  })
  .listen(PORT);

console.log("Server running at http://127.0.0.1:8081");
