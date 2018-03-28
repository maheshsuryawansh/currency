var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

/* app.set('view engine', 'pug'); */


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mahesh1');
var Users = [];
var personSchema = mongoose.Schema({
   name: String,
   contact:Number,
   email:String,
   address:String,
   password:String,
   confirm_password:String
   
   
});

var currencySchema=mongoose.Schema({
	
	currencies:String,
	mynumber:Number,
	userIdd:String,
	name:String,
	currencyName:String
});



var Person = mongoose.model("Person", personSchema);
var Currency=mongoose.model("Currency",currencySchema);




app.get('/',function(req,res)
{

   res.render('authentication');

});



app.post('/authentication',function(req, res,next){

	 if(!req.body.name || !req.body.password){
          res.send("Invalid details!");
   } else {
    Person.find({name: req.body.name,password: req.body.password}, function(err, response){
		
        req.session.user = response[0];
		//console.log(req.session.user);
		if(req.session.user && req.session.user.password == req.body.password && req.session.user.name == req.body.name){
			res.json(response[0]);
		}else{
			
			var err=new Error("fdgggf");
			next(err);
			
		}
	  
      });
	 }
});

app.get("/personlist/:_id", function(req, res){
	//console.log(req.params._id);
		Currency.find({ userIdd : req.params._id }).limit(10).exec(function(err, response){
		if(err){
			return res.json({error : "Data file error"});	
		}else{
		
		//console.log(response);
		res.json(response);
		//console.log(response);
		}
	})
});



var auth = function(req,res,next){
if (req.session && req.session.user)
{
	next();
	
}
else
{
	res.send("you arwe not authenticated");
	
}

}



app.post('/submit',function(req, res){
   var personInfo = req.body; //Get the parsed information
  
   var input=input||{
		 name: personInfo.name,
		 contact:personInfo.contact,
		 email:personInfo.email,
		 address:personInfo.address,
		 password:personInfo.password,
		 confirm_password:personInfo.confirm_password
		 
   }
	var mahesh = new Person(input);
   

 mahesh.save(function(err, Person){
		 if(err)
		 {
			res.json({message: "Database error", type: "error"});
		 }
	else
	{
			res.send({message: "New person added", type: "success", person:Person});
	}
	  });
   
});

app.post('/currencies',function(req,res){
	var CurrencyInfo=req.body;
	
    var inputcurrencies=inputcurrencies||{
	    currencies: CurrencyInfo.currencies,
		mynumber: CurrencyInfo.mynumber,
		userIdd:CurrencyInfo.userIdd,
		name:CurrencyInfo.name,
		currencyName:CurrencyInfo.currencyName
		}
		//console.log(inputcurrencies);
		var Currency1=new Currency(inputcurrencies);
		
	Currency1.save(function(err,response){
		if(err){
		res.json({message:"database error",type:"error",error:err});
		}
	else
	{
		res.json({message:"new currency added to currencies",type:"success",currency:response});
		//console.log(Currency1);
	}
	});
});




app.get('/logout',function(req,res){
	req.session.destroy();
	
		res.json('logout successfully');
	
});
	

app.get('*', function(req, res){
   
   var error = '<html><h1>Error 404!</h1><p>Requested page is not found.</p></html>';
   
   res.send(error);
});

app.use(function(err, req, res, next) {
   res.status(500);
   res.send("you are not authenticated");
});


app.listen(4000);