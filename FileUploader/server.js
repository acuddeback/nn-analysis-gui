// server.js

const path = require('path');
const http = require('http');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

var { exec } = require('child_process');

const DIR = 'src/assets/uploads';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, 'add.py');
  }
});
let upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '/dist/FileUpload')));

app.use(function(req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api', function(req, res) {
  res.end('file catcher example');
});

app.post('/api/upload', upload.single('file'), function(req, res) {
  if (!req.file) {
    console.log('No file received');
    return res.send({
      success: false
    });
  } else {
    console.log('file received');
    exec('python src/assets/execute.py > src/assets/result_file.txt', (err, stdout, stderr) => {
      if (err) {
        console.log('Hit an error: ' + err);
        // node couldn't execute the command
        return;
      }
      return res.send({
        success: true
      });
    });
  }
});

const PORT = process.env.PORT || 8888;

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/FileUpload/index.html'));
});

const server = http.createServer(app);

server.listen(PORT, function() {
  console.log('Node.js server is running on port ' + PORT);
});
