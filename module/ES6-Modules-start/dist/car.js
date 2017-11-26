"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Car;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("Car", Car = function () {
                function Car(x, y) {
                    _classCallCheck(this, Car);

                    this.x = x;
                    this.y = y;
                }

                _createClass(Car, [{
                    key: "method",
                    value: function method() {
                        return "方法";
                    }
                }]);

                return Car;
            }());

            _export("Car", Car);
        }
    };
});
//# sourceMappingURL=car.js.map
