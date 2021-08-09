
require('dotenv').config({ path: 'config.env' });
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const swal=require("sweetalert");
const md5=require("md5");
var port=process.env.PORT||3000;

app.use(express.static("public"));


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


/*connecting to the server:*/
const url= process.env.DB_URL;
mongoose.connect(url,
{useUnifiedTopology:true,
useNewUrlParser: true,
useCreateIndex:true});


const usersSchema=new mongoose.Schema({
  name:String,
  email:String,
  password:String,
});



const bookingsSchema=new mongoose.Schema({
  country:String,
  email:String,
  phone:String,
  fname:String,
  lname:String,
  date:String,
});


const cancelbookingsSchema=new mongoose.Schema({
  email:String,
  phone:String,
  fname:String,
  lname:String,
  date:String,
});

const User=mongoose.model("User",usersSchema);

const Booking=mongoose.model("Booking",bookingsSchema);

const Cancelbookings=mongoose.model("Cancelbooking",cancelbookingsSchema);


app.get("/",function(request,response){
  response.sendFile(__dirname+"/index.html");
});

app.get("/rooms",function(request,response){
  response.sendFile(__dirname+"/rooms.html");
});

app.get("/register",function(request,response){
  response.sendFile(__dirname+"/register.html");
});

app.get("/login",function(request,response){
  response.sendFile(__dirname+"/login.html");
});

app.get("/booking",function(request,response){
  response.sendFile(__dirname+"/booking.html");
});

app.get("/cancelbooking",function(request,response){
  response.sendFile(__dirname+"/cancelbooking.html");
});





app.post("/register",function(req,res){



User.findOne({
       email: req.body.email,
   }, function(err, user) {
    if (user) {
res.write(
          '<script>window.alert("User already exists.Please directly login");window.location="/login"; </script>'

   );
               console.log('there was a user');
               //res.redirect("/register");
              return false;
            }
               else{
                 const newUser=new User({
                   name:req.body.username,
                   email:req.body.email,
                   password:md5(req.body.password),
                 });

                 newUser.save(function(err){
                 res.redirect("/login");
              });
               }
             });
   });



app.post("/login",function(req,res){
  const username=req.body.email;
  const password=md5(req.body.password);
  User.findOne({email:username},function(err,foundUser){
  if(foundUser){
        if(foundUser.password===password)
          {res.redirect("/rooms");}
          else{
            res.write(
       '<script>window.alert("Password incorrect.Please try again!");window.location="/login"; </script>'
      );
      return false;
          }
        }
        else{
          res.write(
     '<script>window.alert("Please sign up and then login");window.location="/register"; </script>'
    );

          console.log("User not signed up and trying to login");
          return false;
        }
      });

});



app.post("/booking",function(req,res){
Booking.countDocuments({date:req.body.date}, function (err, count) {
    if (count==3){
      res.write(
 '<script>window.alert("Sorry!All rooms for that day are booked!");window.location="/rooms"; </script>'
);

      return false;
    }
 else{
      const newBooking=new Booking({
      country:req.body.country,
      email:req.body.email,
      phone:req.body.phone,
      fname:req.body.fname,
      lname:req.body.lname,
      date:req.body.date,
      });

      Booking.countDocuments({email:req.body.email}, function (err, count1) {
            if (count1==1){
              res.write(
         '<script>window.alert("Sorry!You can book a single room only from one email-id!");window.location="/rooms"; </script>'
        );

              return false;
            }
    else{

  newBooking.save(function(err){
      if(err){
          console.log(err);
          swal("Oh Oh!", "Some unexpected error!Try Again!", "error");}
        else{
          res.write(
     '<script>window.alert("Congratulations!Your room has been booked!");window.location="/rooms"; </script>'
    );

          return false;
          res.redirect("/rooms");
        }
      });
    }
});
}
});
});


app.post("/cancelbooking",function(req,res){

  Booking.findOne({email:req.body.email},function(err,foundUser){

      if(foundUser){

     if((foundUser.fname===(req.body.fname))&&(foundUser.lname===(req.body.lname))&&(foundUser.date===(req.body.date))){
          Booking.deleteOne({email:req.body.email},function(err,deleteUser){
            if(err){
              console.log(err);
            }
          else{
              const cancelnewBooking=new Cancelbookings({
              email:req.body.email,
              phone:req.body.phone,
              fname:req.body.fname,
              lname:req.body.lname,
              date:req.body.date,
              });
              cancelnewBooking.save(function(err){
              if(err){
                  console.log(err);}
                else{
              res.write(
         '<script>window.alert("Booking Cancelled!");window.location="/rooms"; </script>'
        );
        return false;
            }
          });
        }
      });
    }

    else if(foundUser.fname!=req.body.fname){
         res.write(
    '<script>window.alert("Please Check your First name and enter that one which you entered at the time of booking!");window.location="/cancelbooking"; </script>'
    );return false;
      }

      else if(foundUser.lname!=req.body.lname){
           res.write(
      '<script>window.alert("Please Check your Last name and enter that one which you entered at the time of booking!");window.location="/cancelbooking"; </script>'
      );return false;
        }
        else if(foundUser.date!=req.body.date){
             res.write(
        '<script>window.alert("Please Check your Date of booking and enter that one which you entered at the time of booking!");window.location="/cancelbooking"; </script>'
        );return false;
          }

  }
      else{
           res.write(
     '<script>window.alert("You have not booked any room...So you cannot cancel any booking!Please check your email-id if you have booked the room");window.location="/rooms"; </script>'
    );
   console.log("Room not booked by user ,still trying to cancel");
          return false;
        }

});
    });

app.listen(port,function(){
  console.log("Server started on port "+port+" successfully");
});
