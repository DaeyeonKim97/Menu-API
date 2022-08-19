const express = require('express');
const router = express.Router();

const MenuController = require('../controllers/menu-controller');

router.get('/list', MenuController.findAllMenus);
router.get('/:menuCode', MenuController.findMenuByMenuCode);
router.post('/', MenuController.registNewMenu);
router.put('/', MenuController.updateMenu);

module.exports = router;