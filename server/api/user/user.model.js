'use strict';

var mongoose = require('mongoose');

var WishSchema = new mongoose.Schema({
        app: {type: mongoose.Schema.Types.ObjectId, ref: 'Application'},
        added_date: { type: Date, required: true }
});

var AppSchema = new mongoose.Schema({
        app: {type: mongoose.Schema.Types.ObjectId, ref: 'Application'},
        added_date: { type: Date, required: true },
});

var FollowAppSchema = new mongoose.Schema({
        app: {type: mongoose.Schema.Types.ObjectId, ref: 'Application'}
});

var UserSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true, trim: true},
        email: { type: String, required: true , unique: true, trim: true},
        password: { type: String, required: true },
        account: { type: Number, required: true },
        squestion: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
        sanswer: { type: String, required: true }, 
        wishlist: [WishSchema],
        applist: [AppSchema],
        follow_app: [FollowAppSchema],
        power: { type: String, required: true }
});

UserSchema.path('password').validate(function (value) {
        if(value && value.length >= 7){
            return true;
        }
        else{
            return false;
        }
}, 'Invalid length!(Should be greater than 7)!');

module.exports = mongoose.model('User', UserSchema);
