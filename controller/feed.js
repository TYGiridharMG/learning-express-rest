exports.getPosts = (req, res, next) => {
    res.status(200).json(
        [{
            title: 'Post1',
            summary: 'some summary'
        }, {
            title: 'Post2',
            summary: 'some summary'
        }, {
            title: 'Post3',
            summary: 'some summary'
        }]);
}