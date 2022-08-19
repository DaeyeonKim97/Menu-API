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

            connection.commit();
            console.log('commit successfully');

            const insertedMenu = await menuRepository.selectMenuByMenuCode(connection, result.insertId);

            resolve(insertedMenu)

        }catch(err){
            connection.rollback();
            console.log(`rollback successfully`);

            reject(err);
        } finally{
            connection.end();
        }

    })
}

exports.updateMenu = (menu)=>{
    return new Promise( async (resolve, reject)=>{
        const connection = getConnection();

        connection.beginTransaction();

        try{
            
            const result = await menuRepository.updateMenu(connection, menu);

            connection.commit();
            console.log('commit successfully');
            
            const updatedMenu = await menuRepository.selectMenuByMenuCode(connection, menu.menuCode);

            resolve(updatedMenu)

        }catch(err){
            connection.rollback();
            console.log(`rollback successfully`);

            reject(err);
        } finally{
            connection.end();
        }

    })
}

exports.deleteMenu = (menuCode) => {
    return new Promise( async(resolve,reject)=>{
        const connection = getConnection();
        connection.beginTransaction();

        try{
            const result = await menuRepository.deleteMenu(connection,menuCode);
            connection.commit();
            console.log('commit successfully');

            console.log(result);

            resolve(result);
        }catch(err){
            connection.rollback();
            console.log('rollback successfully');
            reject(err);
        } finally{
            connection.end();
        }

    })
}