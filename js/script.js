links = {};
links['home'] = {
	'subcategory': {
		'name1': {
			url: 'http://www.google.com/',
			frame: false
		},
		'name2': {
			url: 'http://www.google.com/2',
			frame: true
		},
		'name3': {
			url: 'http://www.google.com/3',
			frame: true
		}
	},
	'subcategory2': {
		'name4': {
			url: 'url',
			frame: true
		},
		'name5': {
			url: 'url',
			frame: true
		},
		'name6': {
			url: 'url',
			frame: true
		}
	}
};

/* Author: Eric Kelly


Bugs:
Clicking a link on the side doesn't change the content view
Allow single-menu items to show up as selected

Todo:
Categorize links more
STYLING!!!
Hover Menu?

*/

// Opens a link
function openinframe(url, title) {
	console.log("Opening link " + title + ": " + url);
	var category = $('#title').text();
	// Load url into iframe
	$('#content-frame').attr('src', url);
	//window.frames['content-frame'].location.reload();
	// Fade in content
	$('#content-frame').fadeIn();
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
	// Fetch html from server?
	/*
	$.get('http://myneu-improved/?fetch='+cat, function(data) {
		$('#content-links').html(data);
	});
	*/
	var lnks = '';
	for(subcat in links[cat]) {
		lnks += "<h3>"+subcat+"</h3>";
		for(name in links[cat][subcat]) {
			lnks += '<li><a href="' + links[cat][subcat][name].url + '"';
			if(!links[cat][subcat][name].frame) {
				lnks += ' class="noiframe"';
			}
			lnks += '>' + name + '</a></li>';
		}
	}
	$('#content-links').html(lnks);
}

// Detects when a heading reaches the top of the page
// And marks it active in the sidebar
function scrollSubheading() {
	var scrollPos = window.scrollTop,
		subheadings = $('#content-wrapper .subheading'),
		subcategory;

	for(var i = 0, l = subheadings.length; i < l; i++) {
		if(scrollPos < subheadings[i].offsetTop) {
			subcategory = subheadings[i-1].id;
			break;
		}
	}
}



// Sets up click & scroll handlers
$('#content-wrapper a').live('click', function(event) {
	console.log($(this).text() + " link clicked");
	event.preventDefault();
	if($(this).hasClass('noiframe')) {
		window.open($(this).attr('href'));
	} else {
		openinframe($(this).attr('href'), $(this).text());
	}
})

$('#sidebar a').live('click', function() {
	catSelect($(this).text());
})

$('#content-wrapper').scroll(scrollSubheading);
