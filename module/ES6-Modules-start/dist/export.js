"use strict";

System.register([], function (_export, _context) {
	"use strict";

	var firstName, lastName, year;

	function foo() {
		console.log("foo");
	}

	return {
		setters: [],
		execute: function () {
			_export("firstName", firstName = "A");

			_export("lastName", lastName = "B");

			_export("year", year = "2017");

			_export("firstName", firstName);

			_export("lastName", lastName);

			_export("year", year);

			_export("fooName", foo);

			_export("fooNewName", foo);
		}
	};
});
//# sourceMappingURL=export.js.map
