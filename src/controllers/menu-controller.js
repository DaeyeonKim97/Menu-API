const menuService = require('../services/menu-service');

exports.findAllMenus = async (req,res,next)=>{
    const results = await menuService.findAllMenus();

    console.log('controller results : ',results);
}

exports.findMenuByMenuCode = async (menuCode) => {
    const result = await menuService.findMenuByMenuCode(menuCode);

    console.log('controller result : ', result);
}

exports.registNewMenu = async (menu) =>{
    const result = await menuService.registNewMenu(menu);
    console.log('controller results : ', result)
}