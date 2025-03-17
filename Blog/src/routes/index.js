
var siteRouter = require('./site');
var playWithFriendRouter = require('./playWithFriend')


function routes(app) {
    app.use('/', siteRouter);
    app.use('/play', playWithFriendRouter);
}

module.exports = routes;
