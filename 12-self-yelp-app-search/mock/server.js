var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

// router.get('/', function (ctx, next) {
//     ctx.body = 'hello koa !'
// });

// router.get('/api', function (ctx, next) {
//     ctx.body = 'test data'
// });
const homeAdData = require('./home/ad.js')
router.get('/api/homead', function (ctx, next) {
    ctx.body = homeAdData
})

const homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function (ctx, next) {
    console.log(`city is ${ctx.params.city}`);
    console.log(`page is ${ctx.params.page}`);
    ctx.body = homeListData;
})

const homeCategories = require('./home/category.js')
router.get('/api/homecategories', function(ctx, next) {
    ctx.body = homeCategories
})

const cities = require('./city/cityList.js')
router.get('/api/citylist', function(ctx, next){
    ctx.body = cities
})

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
