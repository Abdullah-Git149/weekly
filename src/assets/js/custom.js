// SIDE MENU ACTIVE AFTER PAGE RELOAD START
$(document).ready(function () {
	jQuery(function ($) {
		var path = window.location.href;
	// because the 'href' property of the DOM element is the absolute path
	$(".navItem").each(function () {
		if (this.href === path) {
			$(this).addClass("active");
		}
	});
});
});
// SIDE MENU ACTIVE AFTER PAGE RELOAD END

/// PASSWORD SHOW HIDE START
$(".toggle-password").click(function () {

	$(this).toggleClass("fa-solid fa-eye-slash");
	var input = $($(this).attr("toggle"));
	if (input.attr("type") == "password") {
		input.attr("type", "text");
	} else {
		input.attr("type", "password");
	}
});
/// PASSWORD SHOW HIDE END


$(document).ready( function () {
	$('#myTable').DataTable( {
		language: {
			searchPlaceholder: "Search records"
		}
	});
} );


$(".checkAll").change(function () {
	$("input:checkbox").prop('checked', $(this).prop("checked"));
});