var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  salt : bcrypt.genSaltSync()
  // defaults: {
  // },
  // initialize: function(){
    // this.on('creating', function(model, attrs, options){
      // do something like below for salt?
      // var shasum = crypto.createHash('sha1');
      // shasum.update(model.get('url'));
      // model.set('code', shasum.digest('hex').slice(0, 5));
    // });
  // }
});

module.exports = User;
