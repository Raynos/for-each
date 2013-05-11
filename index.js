module.exports = forEach

function forEach(list, iterator, context) {
    if (typeof iterator !== 'function') {
        throw new TypeError('iterator must be a function')
    }

    var isArray = Object.prototype.toString.call(list) === '[object Array]'
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

