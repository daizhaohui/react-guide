"use strict";

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var fibonacci = _defineProperty({}, Symbol.iterator, /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
    var pre, cur, temp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    pre = 0, cur = 1;

                case 1:
                    temp = pre;

                    pre = cur;
                    cur += temp;
                    _context.next = 6;
                    return cur;

                case 6:
                    _context.next = 1;
                    break;

                case 8:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));