import Twitter from 'twitter';


const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
});

export const getTweet = (id) => {
    return client.get(`statuses/show`, { id })
        .then((tweet) => {
            return tweet;
        })
        .catch((error) => {
            throw 404;
        });
}