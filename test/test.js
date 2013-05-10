var test = require("tape")
    , forEach = require("..")

test("forEach calls each iterator", function (t) {
    var count = 0
    t.plan(4)
    forEach({ a: 1, b: 2 }, function (value, key) {
        if (count === 0) {
            t.equal(value, 1)
            t.equal(key, "a")
        } else {
            t.equal(value, 2)
            t.equal(key, "b")
        }
        count++
    })
})

test("forEach calls iterator with correct this value", function (t) {
    var thisValue = {}

    t.plan(1)

    forEach([0], function () {
        t.equal(this, thisValue)
    }, thisValue)
})

