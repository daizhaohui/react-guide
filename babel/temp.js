'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var a = [1, 2, 3].concat([4, 5], []);

var b = _extends(_extends({
    no: 1,
    sex: 2,
    name: 'name1'
}, {
    a1: 1
}), {
    no: 2
});


var _math = require("lib/math");

var math = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}

function sum(x, y) {
    return x + y;
}
var pi = exports.pi = 3.141593;

console.log("2π = " + math.sum(math.pi, math.pi));