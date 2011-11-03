default_image = 'img/default.png'; // 200 * 160

links = {};
links['Classes'] = {

	'Registrar': {
	
		id: 'classes_registrar',
	
		'Student Self Service': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu',
			frame: true
		},
	
		'Course Catalog': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/bwckctlg.p_disp_dyn_ctlg',
			frame: true
		},
	
		'Schedule of Classes': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUCLSS.p_disp_dyn_sched',
			frame: true
		},
	
		'Course Registration': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu',
			frame: true
		},
	
		'My Schedule': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
			frame: true
		},
	
		'My Grades': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
			frame: true
		},
		
		'My Transcript': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
			frame: true
		},
		
		'My Degree Audit': {
			url: 'https://prod-web.neu.edu/webapp6/DARSStudent/ChooseSystem',
			frame: true
		},
		
		'My Transcript': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
			frame: true
		},
		
		'Change of Address': {
			url: 'https://prod-web.neu.edu/webapp6/bn/iah/secure/address/main.do',
			frame: true
		},
	
		'Emergency Contact Information': {
			url: 'https://prod-web.neu.edu/webapp6/EmergencyContact/secure/index.jsp',
			frame: true
		},
	
		'FERPA Status': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUFERPA.p_display_ferpa',
			frame: true
		},
		
		'My Travel Plans': {
			url: 'https://neuforms2.neu.edu/lfserver/Travel_Entry',
			frame: true
		}
	},

	'Study and Course Resources': {
	
		id: 'classes_resources',
	
		'Advisor Appointment Calendar': {
			url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
			frame: true
		},
		
		'Request a Tutor': {
			url: 'https://neuforms2.neu.edu/lfserver/library_peer_tutor_request',
			frame: true
		},
		
		'Advisor Appointment Calendar': {
			url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
			frame: true
		},
		
		'myTRACE': {
			url: 'http://myneu.neu.edu/cp/ip/login?sys=trace&url=https://ce7.connectedu.net/etw/crseval.asp?i=8',
			frame: true
		},
		
		'CPS Class Evaluation Results': {
			url: 'http://neu.evaluationkit.com/MyEval/StudentReport.aspx',
			frame: true
		},
		
		'Bookstore': {
			url: 'http://northeastern.bncollege.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=17555&catalogId=10001',
			frame: true
		}
	}
}

/*
Categories to be done:

Home
Classes
	Registrar
	Study and Course resources
	Commencement

Co-op and Career SErvices
	COOL
	Advising
	International
	Resources

Residence/Housing
	Room and board
	Informational links
	Campus Doings	
Finance
	Financial Aid
	My account
	Ways to Save
Calendars
University Links
Settings
*/

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
		lnks += "<h3 id='"+ links[cat][subcat].id + "'>"+subcat+"</h3>";
		for(name in links[cat][subcat]) {
			if(name !== 'id') {
				lnks += '<li><a href="' + links[cat][subcat][name].url + '"';
				if(!links[cat][subcat][name].frame) {
					lnks += ' class="noiframe"';
				}
				lnks += '><img src="';
				if(typeof(links[cat][subcat][name].img) == 'undefined') {
					lnks += default_image;
				} else {
					lnks += links[cat][subcat][name].img;
				}
				lnks += '">' + name + '</a></li>';
			}
		}
	}
	$('#content-links').html(lnks);
}

// Scroll to the given subcategory
function subcatSelect(cat) {
	// Fetch html from server?
	/*
	$.get('http://myneu-improved/?fetch='+cat, function(data) {
		$('#content-links').html(data);
	});
	*/
	window.location.hash = cat;
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
});

$('#menu a').click(function() {
	window.location.hash = '';
	if($(this).parent().parent().hasClass('acitem')) {
		subcatSelect($(this).attr('href'));
	} else {
		catSelect($(this).text());
	}
});

$('#content-wrapper').scroll(scrollSubheading);
