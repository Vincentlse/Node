const conn = require('./modeles/mysqlconfig.js');

exports.getAll = function(table,callback){
    var sql="SELECT * FROM " + table;
                            conn.query(sql,function(error,rows){
                                if (error){
                                    console.log(error);
                                }
                                
                                callback(rows);
                            })

}

exports.cretaarticle = function(table, datas, callback) {
    conn.query("INSERT INTO articles VALUES(?,?,?,?)",[null,datas.nom,datas.description,datas.stock],function(error,callback){
        
            if(error){console.log(error);}
            callback();
        })
}

exports.update = function(table, id, datas, callback) {
    var sql ="UPDATE " + table + " SET description = '" + datas.description +"', nom = '"+ datas.nom +"', qté = "+datas.stock+" WHERE id= "+id;
    console.log(sql);
            conn.query(sql, function(error){
                if(error){ console.log(error);}
            callback();
            })
}