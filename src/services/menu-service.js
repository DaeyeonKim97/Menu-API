const getConnection = require('../database/connection');
const menuRepository = require('../repositories/menu-repository');

exports.findAllMenus = () =>{

    return new Promise((resolve, reject) =>{

        const connection = getConnection();
    
        const results = menuRepository.selectAllMenus(connection);
    
        connection.end();
    
        resolve(results);

    })
    
}

exports.findMenuByMenuCode = (menuCode) =>{
    return new Promise((resolve, reject)=>{
        
        const connection = getConnection();
        
        const result = menuRepository.selectMenuByMenuCode(connection,menuCode);

        connection.end();

        resolve(result);

    })
}

exports.registNewMenu = (menu)=>{
    return new Promise( async (resolve, reject)=>{
        const connection = getConnection();

        connection.beginTransaction();

        try{
            
            const result = await menuRepository.insertNewMenu(connection, menu);
            console.log('insert result', result);

            connection.commit();
            console.log('commit successfully');

            const insertedMenu = await menuRepository.selectMenuByMenuCode(connection, result.insertId);
            console.table(insertedMenu);

            resolve(insertedMenu)

        }catch(err){
            connection.rollback();
            console.log(`rollback successfully`);

            reject(err);
        } finally{
            connection.end();
            console.log('connection closed successfully');
        }

    })
}