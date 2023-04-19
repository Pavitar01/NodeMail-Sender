const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var path = require("path");
require("dotenv").config();

const app = express();

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Index.html"));
});

// Handle the form submission and send the email
app.post("/send", (req, res) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "mickeynegi924@gmail.com",
      pass: "jskysdfiqboppqbb",
    },
  });

  const mail = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  };

  transport.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
      res.send(`<html>
      <head>
          <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Condensed:100,200,300,400" rel="stylesheet">
      
          </head><body class="loading">
        <h1>500</h1>
        <h2>Unexpected Error <b>:(</b></h2>
        <div class="gears">
          <div class="gear one">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <div class="gear two">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <div class="gear three">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script type="text/javascript">
          $(function() {
        setTimeout(function(){
          $('body').removeClass('loading');
        }, 1000);
      });
      
        </script>
        <style>
          /**/
      :root {
        --main-color: #eaeaea;
        --stroke-color: black;
        
      }
      /**/
      body {
        background: var(--main-color);
      }
      h1 {
        margin: 100px auto 0 auto;
        color: var(--stroke-color);
        font-family: 'Encode Sans Semi Condensed', Verdana, sans-serif;
        font-size: 10rem; line-height: 10rem;
        font-weight: 200;
        text-align: center;
      }
      h2 {
        margin: 20px auto 30px auto;
        font-family: 'Encode Sans Semi Condensed', Verdana, sans-serif;
        font-size: 1.5rem;
        font-weight: 200;
        text-align: center;
      }
      h1, h2 {
        -webkit-transition: opacity 0.5s linear, margin-top 0.5s linear; /* Safari */
        transition: opacity 0.5s linear, margin-top 0.5s linear;
      }
      .loading h1, .loading h2 {
        margin-top: 0px;
        opacity: 0;  
      }
      .gears {
        position: relative;
        margin: 0 auto;
        width: auto; height: 0;
      }
      .gear {
        position: relative;
        z-index: 0;
        width: 120px; height: 120px;
        margin: 0 auto;
        border-radius: 50%;
        background: var(--stroke-color);
      }
      .gear:before{
        position: absolute; left: 5px; top: 5px; right: 5px; bottom: 5px;
        z-index: 2;
        content: "";
        border-radius: 50%;
        background: var(--main-color);
      }
      .gear:after {
        position: absolute; left: 25px; top: 25px;
        z-index: 3;
        content: "";
        width: 70px; height: 70px;
        border-radius: 50%;
        border: 5px solid var(--stroke-color);
        box-sizing: border-box;
        background: var(--main-color);
      }
      .gear.one {
        left: -130px;
      }
      .gear.two {
        top: -75px;
      }
      .gear.three {
        top: -235px;
        left: 130px;
      }
      .gear .bar {
        position: absolute; left: -15px; top: 50%;
        z-index: 0;
        width: 150px; height: 30px;
        margin-top: -15px;
        border-radius: 5px;
        background: var(--stroke-color);
      }
      .gear .bar:before {
        position: absolute; left: 5px; top: 5px; right: 5px; bottom: 5px;
        z-index: 1;
        content: "";
        border-radius: 2px;
        background: var(--main-color);
      }
      .gear .bar:nth-child(2) {
        transform: rotate(60deg);
        -webkit-transform: rotate(60deg);
      }
      .gear .bar:nth-child(3) {
        transform: rotate(120deg);
        -webkit-transform: rotate(120deg);
      }
      @-webkit-keyframes clockwise {
        0% { -webkit-transform: rotate(0deg);}
        100% { -webkit-transform: rotate(360deg);}
      }
      @-webkit-keyframes anticlockwise {
        0% { -webkit-transform: rotate(360deg);}
        100% { -webkit-transform: rotate(0deg);}
      }
      @-webkit-keyframes clockwiseError {
        0% { -webkit-transform: rotate(0deg);}
        20% { -webkit-transform: rotate(30deg);}
        40% { -webkit-transform: rotate(25deg);}
        60% { -webkit-transform: rotate(30deg);}
        100% { -webkit-transform: rotate(0deg);}
      }
      @-webkit-keyframes anticlockwiseErrorStop {
        0% { -webkit-transform: rotate(0deg);}
        20% { -webkit-transform: rotate(-30deg);}
        60% { -webkit-transform: rotate(-30deg);}
        100% { -webkit-transform: rotate(0deg);}
      }
      @-webkit-keyframes anticlockwiseError {
        0% { -webkit-transform: rotate(0deg);}
        20% { -webkit-transform: rotate(-30deg);}
        40% { -webkit-transform: rotate(-25deg);}
        60% { -webkit-transform: rotate(-30deg);}
        100% { -webkit-transform: rotate(0deg);}
      }
      .gear.one {
        -webkit-animation: anticlockwiseErrorStop 2s linear infinite;
      }
      .gear.two {
        -webkit-animation: anticlockwiseError 2s linear infinite;
      }
      .gear.three {
        -webkit-animation: clockwiseError 2s linear infinite;
      }
      .loading .gear.one, .loading .gear.three {
        -webkit-animation: clockwise 3s linear infinite;
      }
      .loading .gear.two {
        -webkit-animation: anticlockwise 3s linear infinite;
      }
        </style>
      </body>
      </html>`);
      return;
    }
    console.log("Message sent: " + info.response);
    res.send(`<html>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">
    </head>
      <style>
        body {
          text-align: center;
          padding: 40px 0;
          background: #EBF0F5;
        }
          h1 {
            color: #88B04B;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-weight: 900;
            font-size: 40px;
            margin-bottom: 10px;
          }
          p {
            color: #404F5E;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-size:20px;
            margin: 0;
          }
        i {
          color: #9ABC66;
          font-size: 100px;
          line-height: 200px;
          margin-left:-15px;
        }
        .card {
          background: white;
          padding: 60px;
          border-radius: 4px;
          box-shadow: 0 2px 3px #C8D0D8;
          display: inline-block;
          margin: 0 auto;
        }
      </style>
      <body>
        <div class="card">
        <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
          <i class="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p>Message Sent Successfully;<br/> You'll be in touch shortly!</p>
        </div>
      </body>
  </html>`);
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
