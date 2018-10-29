const express = require('express');
const router = express.Router();

const passport = require('passport');

const Artikal = require('../models/arikal');

const multer = require('multer')
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/artikli')
    },

    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            var ext = file.originalname.split('.').pop();//.jpg   .

            cb(null, raw.toString('hex') + Date.now() + '.' + ext);
        });
    }


});

var upload = multer({ storage: storage });

router.post('/add', upload.single('file'), function (req, res, next) {

   
    var itsMe = JSON.parse(req.body.thisArti);

    let arti = new Artikal(itsMe);
    arti.fileArt = req.file.filename;
    console.log(req.file);
    Artikal.addArtikal(arti, (err, user) => {
        if (err) {
            
            res.json({ success: false, msg: 'Failed to add arikal' });
        } else {
            res.json({ success: true, msg: 'arikal dodat' });
        }
    });

});

router.get('/image/:image', (req, res) => {

    if (!fs.existsSync(path.join(__dirname, '../uploads/artikli/', req.params.image)))
        res.send("no")
    else res.status(200).sendFile(path.resolve(path.join(__dirname, '../uploads/artikli/', req.params.image)));

});
//passport.authenticate('jwt',{session:false}),
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //deleteFile(req.body.fileArt);

    Artikal.getArtikalById(req.params.id.toString(), (err, art) => {
        art.remove((err) => {
            if (err)
                return res.status(500).send("Server error");

                
            return res.status(204).send("property removed!");
        });
    });
});
router.delete('/brisi/:image',passport.authenticate('jwt',{session:false}), (req, res) => {

    if (fs.existsSync(path.join(__dirname, '../uploads/artikli/', req.params.image))) {
        fs.unlink('./uploads/artikli/' + req.params.image, (err) => {
            if (err) throw err;

            res.json({ success: true, msg: 'izbrisao sliku' });
        });
       
    }
   else{
   res.json({ success: false, msg: 'greska pri brisanju' });
   }
});
router.get('/all', (req, res, next) => {

    Artikal.findAllArtikle(req.query, (err, art) => {
        if (err)
            return res.status(500).send("Server error!");
        //saljemo sve pronadjenje
        return res.status(200).json({ obj: art });
    });
});





module.exports = router;