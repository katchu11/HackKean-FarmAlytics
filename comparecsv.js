/**
 * http://usejsdoc.org/
 */
var fs = require('fs');
var csv = require('fast-csv');
var x;
fs.createReadStream('cropdata.csv')
.pipe(csv())
.on('data',function(data){
//console.log(data)
var month = "1";
var location = "NJ";
var crop = "Corn";
	if (data[0]==="Corn" && data[1]==="NJ" &&data[2]==="4"){
		x = data;
		console.log("Your month is " + "January");
		console.log("Your state is " + location);
		console.log("Your crop is " + crop);
		//console.log(data);
		//console.log(data[0]+" "+data[1]+" "+data[2]+" "+data[3]+" "+data[4]+" "+data[5]);

	}



})

//.on('end',function(data){
//
//});


fs.createReadStream('compare.csv')
.pipe(csv())
.on('data',function(data){
//console.log(data[0])
//console.log(data[1])
//console.log(data[2])
for(x; x[0]="crop";){
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


.on('end',function(data){
	console.log('Read Finished')


});




