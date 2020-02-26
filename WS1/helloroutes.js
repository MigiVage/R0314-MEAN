var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(request.url === "/"){
        response.write("<h1>Olet juuressa</h1>")
    }
    else if(request.url === "/kotisivu"){
        response.write("<h1>KOTISIVU</h1>")
    }
 
    else if(request.url === "/uusi"){
        response.write("<h1>UUSI!!!</h1>")
    }
	
    else if(request.url === "/table"){
        response.write(`
        
        <style>
        
        table, th, tr{
	font-family:Arial Black;
	color:red;
	background-color:black;

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
