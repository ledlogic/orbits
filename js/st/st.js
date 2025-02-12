/* st.js */

var st = {
	log: function(s) {
		if (typeof(window.console) != "undefined") {
			console.log(s);
		}
	},

	init: function() {
		st.orbits.init();
		st.render.init();
	}
};

$(document).ready(st.init);
