var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(request.url === "/"){
        response.write("<h1>Olet juuressa</h1>")
    }
    else if(request.url === "/homepage"){
        response.write("<h1>HOMEPAGE</h1>")
    }
 
    else if(request.url === "/table"){
        response.write(`
        
        <style>
        
        table, th, tr{
			font-family:Arial Black;
            color:white;
            background-color:black;
            border:2px white;
            padding:10px;
        }
        
        </style>
        <table>
            <tr>
                <th>Nimi</th>
                <th>Osoite</th>
                <th>Kaupunki</th>
            </tr>
            <tr>
                <th>Matti</th>
                <th>Osoite 1</th>
                <th>Juva</th>
            </tr>
            <tr>
                <th>Teppo</th>
                <th>Osoite 2</th>
                <th>Puumala</th>
             </tr>
        </table>
        `)

    }
response.end();
}).listen(8081);

console.log('Running at http://127.0.0.1:8081/')