const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const ArtikalShema = mongoose.Schema({
    imeArtikla: {
        type: String,
        required: true
    },
    sifra: {
        type: String,
        required: true
    },
    cena: {
        type: String,
        required: true
    },
    opis: {
        type: String,
        required: true
    },
    fileArt: {
        type: String,
        required: true
    },
    akcija:{
        type:Boolean,
        require:false
    }


});


const Artikal = module.exports=mongoose.model('Artikal',ArtikalShema);

module.exports.getArtikalById=function(id,callback){
    Artikal.findById(id,callback);
}

module.exports.addArtikal=function(artikal,callback){
    artikal.save(callback);
}

module.exports.findAllArtikle=function(query,callback){
    Artikal.find(query).populate().exec(callback);
}