//@codekit-prepend "../bower_components/jquery/dist/jquery.js"
//@codekit-prepend "comparator.js"

$(document).ready(function() {
	Date.prototype.isLeapYear = function() {
	    var year = this.getFullYear();
	    if((year & 3) != 0) return false;
	    return ((year % 100) != 0 || (year % 400) == 0);
	};

	// Get Day of Year
	Date.prototype.getDOY = function() {
	    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	    var mn = this.getMonth();
	    var dn = this.getDate();
	    var dayOfYear = dayCount[mn] + dn;
	    if(mn > 1 && this.isLeapYear()) dayOfYear++;
	    return dayOfYear;
	};

	var horoscopes = [
		[[80, 109], 'url'],		// ARIES
		[[110, 140], 'url'],	// TAURUS
		[[141, 171], 'url'],	// GEMINI
		[[172, 203], 'url'],	// CANCER
		[[204, 234], 'url'],	// LEO
		[[234, 265], 'url'],	// VIRGO
		[[266, 295], 'url'],	// LIBRA
		[[296, 325], 'url'],	// SCORPIO
		[[326, 355], 'url'],	// SAGITTARIUS

		[[356, 365], 'url'],	// CAPRICORN
		[[0, 19], 'url'],		// CAPRICORN

		[[20, 49], 'url'],		// AQUARIUS
		[[50, 79], 'url'],		// PISCES
	];

	$('#date-selector').on('submit', function(e){
		e.preventDefault();

		var month = parseInt($('#month').val()),
			day = parseInt($('#day').val()),
			date = new Date(1985, month - 1, day),
			doy = date.getDOY(),
			selected;

		$.each(horoscopes, function(index, val) {
			if ((val[0][0] <= doy) && (val[0][1] >= doy)) {
				selected = val;
			};
		});

		console.log(selected);

	})
});