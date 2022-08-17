const menuQuery = require('../database/menu-query')

exports.selectAllMenus = (connection) =>{

    return new Promise((resolve, reject)=>{
        connection.query(menuQuery.selectAllMenus(), (err, results, fields)=>{
            
            if(err){
                reject(err);
            }
            
            resolve(results)

        });
    })

}

exports.selectMenuByMenuCode = (connection, menuCode) =>{
    return new Promise((resolve, reject)=>{
        connection.query(menuQuery.selectMenuByMenuCode(), [menuCode], (err,results,fileds)=>{
            
            if(err){
                reject(err);
            }

            console.log(menuCode);
            console.log(results);
            
            resolve(results);

        })
    })
}

exports.insertNewMenu = (connection,menu) => {
    return new Promise((resolve, reject)=>{
        connection.query(
            menuQuery.insertNewMenu(),
            [menu.menuName, menu.menuPrice, menu.categoryCode, menu.orderableStatus],
            (err, results, fields)=>{
                if(err){
                    reject(err);
                }

                resolve(results);
            }
        )
    });
}