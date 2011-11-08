default_image = 'img/default.png'; // 200 * 160

links = {};
links['Home'] = {

	id: '',

	links: {
		'Husky Card Account Balances': {
			url: 'https://prod-web.neu.edu/webapp6/HuskyCard/CurrentBalance/secure/retrieve/main.do',
		},
		'LaundryView': {
			url: 'http://www.laundryview.com/lvs.php',
		},
		'Course Information and Registration': {
			url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu',
		},
		'Husky Mail': {
			url: 'http://mail.husky.neu.edu/',
			noframe: true
		}
	}
}
links['Classes'] = {

	id: '',
	
	subcategories: {
		
		'Registrar': {
	
			id: 'classes_registrar',
			
			links: {
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
			}
		},
		
		'Study and Course Resources': {
	
			id: 'classes_resources',
			
			links: {
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
		},
		'Commencement': {
		
			id: 'classes_commencement',
			
			links: {
				'Apply to Graduate': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_disp_gradapp',
					frame: true
				},
				'View Application to Graduate': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_view_gradapp',
					frame: true
				},
				'NU Commencement Website': {
					url: 'http://www.northeastern.edu/commencement/',
					frame: true
				}
			}
		}
	},
};
links['Co-op and Career Services'] = {

	'Co-op': {
		'Getting Started': {
				url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/gettingStarted.aspx',
				frame: true
		},
		'COOL': {
				url: 'https://www.cool.neu.edu/students/mainmenu.aspx',
				frame: true
		},

		'COOL Tour': {
				url: 'http://www.coolquicktour.neu.edu/',
				frame: true
		}
	},

	'Advising': {
		'Appointment Calendar': {
				url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
				frame: true
		},
		
		'Contacts': {
				url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/contacts.aspx?mode=coop',
				frame: true
		},
		
		'Decide on a Career or Major': {
				url: 'http://www.northeastern.edu/careerservices/majorscareers/index.html',
				frame: true
		},
		
		'Resume Services': {
				url: 'http://www.northeastern.edu/careerservices/resumes/resumes.html',
				frame: true
		},

		'Cover Letter Critique': {
				url: 'http://www.northeastern.edu/careerservices/resumes/coverletters.html',
				frame: true
		},
		'Mock Interviews': {
				url: 'http://www.northeastern.edu/careerservices/jobsearch/interviewing.html',
				frame: true
		},
		'Job Search Guidance': {
				url: 'http://www.northeastern.edu/careerservices/jobsearch/index.html',
				frame: true
		}


	},


	'Resources': {
		'Co-op Forms': {
				url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/forms.aspx?mode=coop',
				frame: true
		},
		
		'Co-op FAQ': {
				url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/faq.aspx',
				frame: true
		},
		
		'Find an Internship': {
				url: 'http://www.northeastern.edu/careerservices/internships/index.html',
				frame: true
		},
		
		'Husky Career Link': {
				url: 'http://northeastern.experience.com/er/security/login.jsp',
				frame: true
		},
		'Career Search': {
				url: 'http://northeastern.experience.com/er/security/login.jsp',
				frame: true
		}

		
	}	
		
}
links['Residence/Housing'] = {
	'Room and Board': {
		'Housing On-Line': {
				url: 'https://rms.neu.edu/',
				frame: true
		},
		'Meal Plan Changes': {
				url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_selmp',
				frame: true
		},

		'Profiler Meal Plan Changes': {
				url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_ppinfo',
				frame: true
		},
		'On-Campus Mailbox Information': {
				url: 'https://prod-web.neu.edu/webapp6/resmailbox/',
				frame: true
		},
		'Dining Services': {
				url: 'http://www.nudining.com/',
				frame: true
		}
	},
	'Informational Links': {
		'Apply for Parking': {
				url: 'https://prod-web.neu.edu/webapp6/nuparking/SignupAuth.do',
				frame: true
		},
		'Facilities Online Work Request': {
				url: 'https://workreq.neu.edu/workrequest/',
				frame: true
		},

		'Husky Express': {
				url: 'https://workreq.neu.edu/workrequest/',
				frame: true
		},
		'LaundryView': {
				url: 'http://www.laundryview.com/lvs.php',
				frame: true
		}
	},
	'Campus Doings': {
		'Campus Calendar': {
				url: 'http://www.northeastern.edu/studentlife/calendar/',
				frame: true
		},
		'Council for University Programs': {
				url: 'http://www.cup.neu.edu/',
				frame: true
		},

		'Resident Student Association': {
				url: 'http://www.rsa.neu.edu/wordpress/',
				frame: true
		},
		'Student Government Association': {
				url: 'http://www.sga.neu.edu/',
				frame: true
		},
		'WRBB Campus Radio': {
				url: 'http://wrbbradio.org/',
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

hrefence/Housing
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
	$('#content-links').html(jsonToLinks(links[cat], cat));
}

function parse(links) {
	var lhtml = '';
	for(l in links) {
		lhtml += '<li class="tile"><a href="' + links[l].url + '" class="image-container';
		if(links[l].noframe) { lhtml += ' noiframe'; };
		lhtml += '"><img src="';
		links[l].img ? lhtml += links[l].img : lhmtl += default_image;
		lhtml += '"></a><a href="' + links[l].url + '" class="name">' + l + '</a></li>';
	}
	return lhtml;
}


function jsonToLinks(data, category) {
	var lnks = '',
		ls = '',
		subs = '',
		subheading = '',
		id = '';
		
	for(subcat in data) {
		switch(subcat) {
			case 'id':
				if(data.id != '') {
					subheading = "<h3 id='"+ data.id + "'>"+category+"</h3>";
				}
				break;
			case 'links':
				ls = parse(data.links);
				break;
			case 'subcategories':
				for(sub in data.subcategories) {
					subs += jsonToLinks(data.subcategories[sub], sub);
				}
				break;
			default:
				break;
		}
	}
	
	lnks += subheading + ls + subs;
	
	return lnks;
	
}
	
/*	
	
		lnks += "<h3 id='"+ links[cat][subcat].id + "'>"+subcat+"</h3>";
		for(name in links[cat][subcat]) {
			if(name !== 'id') {
				lnks += '<li class="tile"><a href="' + links[cat][subcat][name].url + '" class="image-container';
				if(!links[cat][subcat][name].frame) {
					lnks += ' noiframe';
				}
				lnks += '"><img src="';
				if(typeof(links[cat][subcat][name].img) == 'undefined') {
					lnks += default_image;
				} else {
					lnks += links[cat][subcat][name].img;
				}
				lnks += '"></a><a href="' + links[cat][subcat][name].url + '" class="name">' + name + '</a></li>';
			}
		}
	}
}

*/

// Scroll to the given subcategory
function subcatSelect(cat) {
	window.location.hash = cat;
}

/*
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
*/

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
		$('#title').text($(this).text());
		catSelect($(this).text());
	}
});

//$('#content-links').scroll(scrollSubheading);
$(function() {$('#home').click();});
