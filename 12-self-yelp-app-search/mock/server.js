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

var searchListData = require('./search/data.js')
router.get('/api/search/:page/:city/:category/:keyword', function (ctx, next) {
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('Page is:' + paramsPage)
    console.log('City is:' + paramsCity)
    console.log('Category is:' + paramsCategory)
    console.log('Keyword is:' + paramsKeyword)

    ctx.body = searchListData
})

router.get('/api/search/:page/:city/:category', function (ctx, next) {
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('Page is: ' + paramsPage)
    console.log('City is: ' + paramsCity)
    console.log('Category is: ' + paramsCategory)

     ctx.body = searchListData
})

const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function (ctx, next) {

    const params = ctx.params
    const id = params.id

    console.log('Restaurant id: ' + id)

    ctx.body = detailInfo
})

const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function (ctx, next) {

    const params = ctx.params
    const page = params.page
    const id = params.id

    console.log('Restaurant id: ' + id)
    console.log('Page: ' + page)

    ctx.body = detailComment
})


app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
