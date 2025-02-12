st.render = {
	init:function() {
		st.log("init render");
		st.render.renderInputs();
		st.render.renderOrbits();
	},
	renderInputs: function() {
		st.log("render inputs");
		var h = [];
		var maxOrbits = 20;
		for (var i=0; i< maxOrbits;i++) {
			h.push("<label for=\"orbit-" + i + "\">" + (i+1) + ":</label>");
			h.push("<input type=\"number\" min=\"0\" max=\"1000\" step=\"0.01\" id=\"orbit-" + i + "\" class=\"orbit-input\"/><br/>")
		}
		var $inputsIn = $("#orbits-in");
		$inputsIn.html(h.join(""));
		
		$(".orbit-input").on("keyup", function() {
			st.render.renderOrbits();
		});
	},
	renderOrbits: function() {
		st.log("render orbits");
	}

};