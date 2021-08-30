module.exports = function(options){
    var button = '<a href="http://www.facebook.com/">' + options.fn(this) + '</a>'
    return button;
};
