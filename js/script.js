/* Author: Eric Kelly

*/

// Opens a link
function open(url, title) {
	var category = $('#title').val();
	// Load url into iframe
	$('#content-frame').attr('src', url);
	window.frames['#content-frame'].location.reload();
	// Fade in content
	$('#content-wrapper').fadeIn();
	// Change title
	$('#title').text(title);
	// Set back button behavior
	$('#back').fadeIn();
	$('#back').click(function() {
		close(category);
	});
}

// Closes an open link
function close(title) {
	$('#content-frame').fadeOut();
	$('#back').fadeOut();
	$('#title').text(title);
}

// Called when a category is selected
function catSelect(cat) {
	$('#'+cat).addClass('active');
}

// Detects when a heading reaches the top of the page
// And marks it active in the sidebar
function scrollSubheading() {
	var scrollPos = window.scrollTop,
		subheadings = $('#content .subheading'),
		subcategory;

	for(var i = 0, l = subheadings.length; i < l; i++) {
		if(scrollPos < subheadings[i].offsetTop) {
			subcategory = subheadings[i-1].id;
			break;
		}
	}
}


// Sets up click & scroll handlers
$('#content a').click(function() {
	open($(this).href, $(this).text());
})


$('#sidebar a').click(function() {
	catSelect($(this).text());
})

$('#content').scroll(scrollSubheading);








