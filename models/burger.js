var orm = require('../config/orm.js');



var burger = {

    selectAll: function(cb){
        orm.selectAll("burgers",function(data){
            cb(data)
        });
        
    },

    insertOne: function(colName, value ,cb){
        orm.insertOne("burgers", colName, value, function(){
            cb();    
        });
        
    },

    updateOne: function(colName, colValue, condition, cb){
        orm.updateOne("burgers",colValue, condition, function(data){
            cb(data);
        });
    }
}

module.exports = burger