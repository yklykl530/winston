var isStream = module.exports = function (stream) {
    return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
};