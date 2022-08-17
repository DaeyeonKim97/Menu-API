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