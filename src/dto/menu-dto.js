class MenuDTO{
    menuCode;
    menuName;
    menuPrice;
    categoryCode;
    isOrderable;
    description;

    constructor(data){
        this.menuCode = data.menuCode;
        this.menuName = data.menuName;
        this.menuPrice = data.menuPrice;
        this.categoryCode = data.categoryCode;
        this.orderableStatus = data.orderableStatus;
        this.description = data.description;
    }
}

module.exports = MenuDTO;