const HttpStatus = require('http-status');
const menuService = require('../services/menu-service');
const MenuDTO = '';

exports.findAllMenus = async (req,res,next)=>{
    const results = await menuService.findAllMenus();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message : 'OK',
        results : results,
    })
}

exports.findMenuByMenuCode = async (req,res,next) => {
    const menu = await menuService.findMenuByMenuCode(req.params.menuCode);
    console.log(menu)

    if(menu && menu.length>0)
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message:'OK',
            results:menu,
        })
    
    if(menu&&menu.length===0){
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message : 'NOT_FOUND',
            code : -999999,
            links: [
                {
                    rel: 'menu.find',
                    method: 'GET',
                    href: 'https://api.dykim.com/api/v1/menus/find',
                }
            ]
        })
    }
}

exports.registNewMenu = async (req, res, next) =>{
    const result = await menuService.registNewMenu(new MenuDTO(req.body));

    if(result){
        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED, //201
            message: 'new menu created successfully',
            createdContent: {
                menuCode: 22,
                menuName : result.menuName
            },
            contentLocation: '/menus/22'
        })
    }
    else{
        res.status(HttpStatus.CONFLICT).send({
            status: HttpStatus.CONFLICT, //409
            message : 'data confilct error',
            code : -888888,
            links: [
                {
                    rel: 'menu.regist',
                    method: 'POST',
                    href: 'https://api.dykim.com/v1/menu/post'
                }
            ]
        })
    }
}