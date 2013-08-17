module.exports = forEach

var toString = Object.prototype.toString

function forEach(list, iterator, context) {
    if (toString.call(iterator) !== '[object Function]') {
        throw new TypeError('iterator must be a function')
    }

    var isArray = toString.call(list) === '[object Array]'
        , isString = typeof list === 'string'
        , keys = isString ? list : Object.keys(list)

    if (arguments.length < 3) {
        context = this
    }

    for (var i = 0, len = keys.length; i < len; i++) {
        var key = isString || isArray ? i : keys[i]
            , value = isString ? keys.charAt(i) : list[key]

        iterator.call(context, value, key, list)
    }
}

