const Tweet = require('../models/Tweet');

module.exports = {
    async index(request, response) {
        const tweets = await Tweet.find({}).sort('-createdAt');

        return response.json(tweets);
    },

    async store(request, response) {
        const tweet = await Tweet.create(request.body);

        return response.json(tweet);
    }
};