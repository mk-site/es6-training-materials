'use strict';

System.register(['./car'], function (_export, _context) {
  "use strict";

  var Car, car;
  return {
    setters: [function (_car) {
      Car = _car.Car;
    }],
    execute: function () {
      car = new Car(10, 20);


      console.log(car.method());
      console.log(111123);
    }
  };
});
//# sourceMappingURL=main.js.map
