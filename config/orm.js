var connection = require("./connection.js");

var orm = {

    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, data){
            if(err) throw err;
            //console.log(data);
            cb(data);
        });
    },

    insertOne: function(tableName, colName, value, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, value],
        function(err, data){
            if(err) throw err;
            cb();
        });

    },

    updateOne: function(tableName, colValue, condition, cb){
        var queryString = "UPDATE " +tableName+ " SET devoured = "+ colValue+" where "+ condition;
       
        var query = connection.query(queryString, 
            [tableName, colValue, condition],
            function(err, data){
                if(err) throw err; 
                cb(data);

        });
    }
}

module.exports = orm;
