const userControllers = require('./user');
const productControllers = require('./product');
const orderControllers = require('./order');

module.exports = { // ovo se importuje u rutama (user, product, order)
    userControllers,
    productControllers,
    orderControllers
}