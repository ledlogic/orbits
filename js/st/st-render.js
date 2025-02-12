st.render = {
	init:function() {
		st.log("init render");
		st.render.renderInputs();
		st.render.renderOrbits();
	},
	renderInputs: function() {
		st.log("render inputs");
		var h = [];
		for (var i=0; i< st.orbits.maxOrbits; i++) {
			h.push("<label for=\"orbit-" + i + "\">" + (i+1) + ":</label>");
			h.push("<input type=\"number\" min=\"0\" max=\"1000\" step=\"0.01\" id=\"orbit-" + i + "\" class=\"orbit-input\"/>");
			h.push(" AU");
			h.push("<br/>");
		}
		var $inputsIn = $("#orbits-in");
		$inputsIn.html(h.join(""));
		
		$inputsIn.find(".orbit-input").on("keyup", function() {
			st.render.renderOrbits();
		});
	},
	renderOrbits: function() {
		st.log("render orbits");
		var $inputsOut= $("#orbits-out");
		
		var wpx = 800;
		var hpx = 800;

		var h = [];
		h.push("<canvas width=\"" + wpx + "\" height=\"" + hpx + "\" id=\"orbits-canvas\"></canvas>");
		$inputsOut.html(h.join(""));
		
		var c = document.getElementById("orbits-canvas");
		var ctx = c.getContext("2d");
		ctx.translate(0.5, 0.5);
		
		ctx.moveTo(wpx/2-10, hpx/2);
		ctx.lineTo(wpx/2+10, hpx/2);
		ctx.stroke();
		
		ctx.moveTo(wpx/2, hpx/2-10);
		ctx.lineTo(wpx/2, hpx/2+10);
		ctx.stroke();

		var r = [];
		var maxR = 0;
		for (var i=0; i< st.orbits.maxOrbits; i++) {
			r[i] = $("#orbit-" + i).val();
			maxR = r[i] ? r[i] : maxR;
		}
		
		for (var i=0; i< st.orbits.maxOrbits; i++) {
			if (r[i]) {
				ctx.beginPath();
				ctx.arc(wpx/2, hpx/2, r[i]/maxR * hpx /2, 0, 2 * Math.PI);
				ctx.stroke();
			}
		}

	}
};