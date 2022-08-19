const { text } = require("express");

exports.selectAllMenus = () =>{
    return `
        SELECT
              A.MENU_CODE
            , A.MENU_NAME
            , A.MENU_PRICE
            , A.CATEGORY_CODE
            , A.ORDERABLE_STATUS
        FROM TBL_MENU A
        WHERE ORDERABLE_STATUS = 'Y'
    `;
}

exports.selectMenuByMenuCode = () =>{
    return `
        SELECT
              A.MENU_CODE
            , A.MENU_NAME
            , A.CATEGORY_CODE
            , A.ORDERABLE_STATUS
        FROM TBL_MENU A
        WHERE A.MENU_CODE= ?
    `
}

exports.insertNewMenu = () =>{
    return`
        INSERT
            INTO TBL_MENU
        (
            MENU_NAME, MENU_PRICE, CATEGORY_CODE, ORDERABLE_STATUS
        )
        VALUES
        (
            ? , ? , ?, ?
        )
    `
}

exports.updateMenu = (menuCode, menuName, menuPrice, categoryCode, orderableStatus) =>{
    const menuCodeQuery = `MENU_NAME='${menuName}',\n`;
    const menuPriceQuery = `MENU_PRICE=${menuPrice},\n`;
    const categoryCodeQuery = `CATEGORY_CODE=${categoryCode},\n`;
    const orderableStatusQuery = `ORDERABLE_STATUS='${orderableStatus}',\n`;

    let query = `MENU_CODE = MENU_CODE,\n` 
            + (menuCodeQuery??null) 
            + (menuPriceQuery??null) 
            + (categoryCodeQuery??null) 
            + (orderableStatusQuery??null);
    query = query.substring(0,query.length-2);

    return`
        UPDATE
            TBL_MENU
        SET
            ${query}
        WHERE MENU_CODE = ${menuCode}
    `
}

exports.deleteMenu = () =>{
    return`
        INSERT
            INTO TBL_MENU
        (
            MENU_NAME, MENU_PRICE, CATEGORY_CODE, ORDERABLE_STATUS
        )
        VALUES
        (
            ? , ? , ?, ?
        )
    `
}