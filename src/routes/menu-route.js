const express = require('express');
const router = express.Router();

const MenuController = require('../controllers/menu-controller');

router.get('/list', MenuController.findAllMenus);
router.get('/search', MenuController.findMenuByMenuCode);
router.post('/regist', MenuController.registNewMenu)

module.exports = router;