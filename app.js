var http = require('http');
const qs = require('querystring');
var csv = require('fast-csv');
var fs = require('fs');

function CSV(data){
	fs.createReadStream('cropdata.csv')
	.pipe(csv())
	.on('data',function(csvData){
		//console.log(data)
		var month = " ";
		var location =  " ";
		var crop = " ";
		var monthMap = {
				"January" : "1",
				"February" : "2",
				"March" : "3",
				"April" : "4",
				"February" : "2",
				"February" : "2",
				"February" : "2",
				"February" : "2",
				"February" : "2",
				"February" : "2",
				"November" : "11",
				"December" : "12",
				
		};
		console.log("outside if loop");
		console.log(data.crop);
		console.log(data.location);
		console.log(monthMap[data.month]);
		
		if (data.crop&&data.location&&monthMap[data.month]){
			console.log()
			x = data;
			console.log("got dat, in if csv");

			//console.log(data);
			//console.log(data[0]+" "+data[1]+" "+data[2]+" "+data[3]+" "+data[4]+" "+data[5])
		}
	});
	
}
compareCSV(CSV);
function compareCSV(data){
	fs.createReadStream('compare.csv')
	.pipe(csv())
	console.log("test")
	.on('data',function(data){
	//console.log(data[0])
	//console.log(data[1])
	//console.log(data[2])
	for(x; x[0]="crop";){
		console.log("in for")
		if (x[3] === data[1]){
			console.log("Little hot but you're fine!");
			
		}
		else if(data[1]>x[3] && data[2]<x[4]){
			console.log("You are perfectly ok!")
			x.fill(null);

		}
		else if(data[1]<x[3]){
			console.log("Too Hot make sure you water your plants!")
			x.fill(null);
		}
		else if( data[2]<x[4]){
			console.log("Chilly Here! Brrrrrrr")
			x.fill(null);
		}
		else if(data[3]>x[5]){
			
			console.log("Too much rain, don't need to water your plants");
			
			x.fill(null);
			}
			
		else if(data[3]<x[5]){
			console.log("not enough rain, make sure you have water!")
			x.fill(null);
		}
		else{
			
		}
	x.fill(null);



	}



	})
}

var server = http.createServer(function (req, res) {
	console.log("heard a request!");
    //console.log(req);
    displayForm(res);
    if (req.method == 'POST') {
        var body = '';

        req.on('data', function (data) {
        	console.log("received some data	");
        	console.log(data);
            body += data;
            console.log(`BODY: ${data}`);
            console.log(data.toString());
            var formdata = qs.parse(data.toString());
            console.log(formdata.crop);
            CSV(formdata);
            
            
            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.

            //console.log(post.crops);


        });

    }
});







function displayForm(res) {


    fs.readFile('FarmAlaytics.html', function (err, data) {
        if(err ){
            console.log(err);
        }


        res.writeHead(200, {

            'Content-Type': 'text/html',

        });

        res.write(data);
        res.end();

    });
}

server.listen(1142);
console.log("server listening on 1142");