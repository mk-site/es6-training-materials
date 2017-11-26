"use strict";

System.register(["./export_default"], function (_export, _context) {
	"use strict";

	var e;

	_export("default", function (x) {
		return x + 1;
	});

	function fo() {
		return "cc";
	}

	_export("fo", fo);

	return {
		setters: [function (_export_default) {
			var _exportObj = {};

			for (var _key in _export_default) {
				if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _export_default[_key];
			}

			_export(_exportObj);
		}],
		execute: function () {
			_export("e", e = 123);

			_export("e", e);
		}
	};
});
//# sourceMappingURL=extends.js.map
