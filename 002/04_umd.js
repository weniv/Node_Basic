(function (root, factory) {
	if (typeof define === 'function' && define.amd ) {
		// AMD
		define(['jquery', 'N'], factory);
	}	else if (typeof module === 'object' && typeof module.exports) {
		// CJS
		module.exports = factory(require('jquery'), require('N'));
	}	else {
		// Browser window
		root.module = factory(root.$, root.N);
  }
} (this, function($, N) {
		return {
			a: $,
			b: N,
		};
	})
);