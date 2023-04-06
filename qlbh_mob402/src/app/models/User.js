const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const User = new mongoose.Schema({
    name: { type: String, require: true },
    adress: { type: String },
    password: { type: String },
    email: { type: String },
    slug: {type: String, slug : 'name'},
}, { 
    timestamps: true,
});

module.exports = mongoose.model('User', User);