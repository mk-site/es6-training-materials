"use strict";

System.register([], function (_export, _context) {
	"use strict";

	var counter;
	function incCounter() {
		_export("counter", counter += 1);
	}

	_export("incCounter", incCounter);

	return {
		setters: [],
		execute: function () {
			_export("counter", counter = 3);

			_export("counter", counter);
		}
	};
});
//# sourceMappingURL=counter.js.map
