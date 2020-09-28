const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "PMP Adminstración de proyectos",
				weight: 12.3
			}, {
				text: "Vmware",
				weight: 8
			}, {
				text: "Linux",
				weight: 14
			}, {
				text: "Windows",
				weight: 3
			}, {
				text: "JavaScript",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "AWS",
				weight: 9
			}, {
				text: "ITIL",
				weight: 15
			}, {
				text: "HPUX",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"Mis conocimientos laborales.", "curriculum profesional.", "Licenciado en Informática"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
