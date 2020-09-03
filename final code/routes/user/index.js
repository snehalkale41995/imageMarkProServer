var express = require('express');
var router = express.Router();
var assert = require('assert');
const sharp = require('sharp');
 

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+ ".jpg")
    }
});
var upload = multer({storage: storage});


router.post('/fileUpload', upload.single('image'), async(req, res, next) => {
  res.json({'message': 'File uploaded successfully'});
});

module.exports = router;
