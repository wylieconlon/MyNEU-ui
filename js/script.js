default_image = 'img/default.png'; // 200 * 160

links = {};

var housinglink = {
		id: 0,
	url: 'https://rms.neu.edu/',
}
var mealplanlink = {
		id: 1,
	url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_selmp',
}

var profilerlink = {
		id: 2,
	url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_ppinfo',
}

links['Home'] = {

	links: {
		'Husky Card Account Balances': {
			id: 3,
			url: 'https://prod-web.neu.edu/webapp6/HuskyCard/CurrentBalance/secure/retrieve/main.do',
		},
		'LaundryView': {
			id: 4,
			url: 'http://www.laundryview.com/lvs.php',
		},
		'Course Information and Registration': {
			id: 5,
			url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu',
		},
		'Husky Mail': {
			id: 6,
			url: 'http://mail.husky.neu.edu/',
			noframe: true
		}
	}
};
links['Classes'] = {
	
	subcategories: {
		
		'Registrar': {
	
			id: 'classes_registrar',
			
			links: {
				'Student Self Service': {
					id: 7,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu',
				},
				'Course Catalog': {
					id: 8,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwckctlg.p_disp_dyn_ctlg',
				},
				'Schedule of Classes': {
					id: 9,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUCLSS.p_disp_dyn_sched',
				},
				'Course Registration': {
					id: 10,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu',
				},
				'My Schedule': {
					id: 11,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
				},
				'My Grades': {
					id: 12,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
				},				
				'My Transcript': {
					id: 13,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
				},
				'My Degree Audit': {
					id: 14,
					url: 'https://prod-web.neu.edu/webapp6/DARSStudent/ChooseSystem',
				},
				'My Transcript': {
					id: 15,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
				},
				'Change of Address': {
					id: 16,
					url: 'https://prod-web.neu.edu/webapp6/bn/iah/secure/address/main.do',
				},
				'Emergency Contact Information': {
					id: 17,
					url: 'https://prod-web.neu.edu/webapp6/EmergencyContact/secure/index.jsp',
				},
				'FERPA Status': {
					id: 18,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUFERPA.p_display_ferpa',
				},
				'My Travel Plans': {
					id: 19,
					url: 'https://neuforms2.neu.edu/lfserver/Travel_Entry',
				}	
			}
		},
		
		'Study and Course Resources': {
	
			id: 'classes_resources',
			
			links: {
				'Advisor Appointment Calendar': {
					id: 20,
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
				},
				'Request a Tutor': {
					id: 21,
					url: 'https://neuforms2.neu.edu/lfserver/library_peer_tutor_request',
				},
				'Advisor Appointment Calendar': {
					id: 22,
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
				},
				'myTRACE': {
					id: 23,
					url: 'http://myneu.neu.edu/cp/ip/login?sys=trace&url=https://ce7.connectedu.net/etw/crseval.asp?i=8',
				},
				'CPS Class Evaluation Results': {
					id: 24,
					url: 'http://neu.evaluationkit.com/MyEval/StudentReport.aspx',
				},
				'Bookstore': {
					id: 25,
					url: 'http://northeastern.bncollege.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=17555&catalogId=10001',
				}
			},
		},

		'Commencement': {

			id: 'classes_commencement',

			links: {
				'Apply to Graduate': {
					id: 26,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_disp_gradapp',
				},
				'View Application to Graduate': {
					id: 27,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_view_gradapp',
				},
				'NU Commencement Website': {
					id: 28,
					url: 'http://www.northeastern.edu/commencement/',
				}
			}
		}
	},
};
links['Co-op and Career Services'] = {

	subcategories: {
		'Co-op': {
			id: 'coop_coop',
			links: {
				'Getting Started': {
					id: 29,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/gettingStarted.aspx',
				},
				'COOL': {
					id: 30,
					url: 'https://www.cool.neu.edu/students/mainmenu.aspx',
				},
				'COOL Tour': {
					id: 31,
					url: 'http://www.coolquicktour.neu.edu/',
				}
			}
		},

		'Advising': {
			id: 'coop_advising',
			links: {
				'Appointment Calendar': {
					id: 32,
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
				},
				'Contacts': {
					id: 33,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/contacts.aspx?mode=coop',
				},
				'Decide on a Career or Major': {
					id: 34,
					url: 'http://www.northeastern.edu/careerservices/majorscareers/index.html',
				},
				'Resume Services': {
					id: 35,
					url: 'http://www.northeastern.edu/careerservices/resumes/resumes.html',
				},
				'Cover Letter Critique': {
					id: 36,
					url: 'http://www.northeastern.edu/careerservices/resumes/coverletters.html',
				},
				'Mock Interviews': {
					id: 37,
					url: 'http://www.northeastern.edu/careerservices/jobsearch/interviewing.html',
				},
				'Job Search Guidance': {
					id: 38,
					url: 'http://www.northeastern.edu/careerservices/jobsearch/index.html',
				}
			}
		},

		'Resources': {
			id: 'coop_resources',
			links: {
				'Co-op Forms': {
					id: 39,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/forms.aspx?mode=coop',
				},
				'Co-op FAQ': {
					id: 40,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/faq.aspx',
				},
				'Find an Internship': {
					id: 41,
					url: 'http://www.northeastern.edu/careerservices/internships/index.html',
				},
				'Husky Career Link': {
					id: 42,
					url: 'http://northeastern.experience.com/er/security/login.jsp',
				},
				'Career Search': {
					id: 43,
					url: 'http://northeastern.experience.com/er/security/login.jsp',
				}
			}
		}	
	}
};
links['Residence/Housing'] = {

	subcategories: {
		'Room and Board': {
			id: 'residence_roomboard',
			links: {
				'Housing On-Line' : housinglink,
				'Meal Plan Changes' : mealplanlink,
				'Profiler Meal Plan Changes' : profilerlink,

				'On-Campus Mailbox Information': {
					id: 44,
					url: 'https://prod-web.neu.edu/webapp6/resmailbox/',
				},
				'Dining Services': {
					id: 45,
					url: 'http://www.nudining.com/',
				}
			}
		},
		'Informational Links': {
			id: 'residence_informational',
			links: {
				'Apply for Parking': {
					id: 46,
					url: 'https://prod-web.neu.edu/webapp6/nuparking/SignupAuth.do',
				},
				'Facilities Online Work Request': {
					id: 47,
					url: 'https://workreq.neu.edu/workrequest/',
				},

				'Husky Express': {
					id: 48,
					url: 'https://workreq.neu.edu/workrequest/',
				},
				'LaundryView': {
					id: 49,
					url: 'http://www.laundryview.com/lvs.php',
				}
			}
		},
		'Campus Doings': {
			id: 'residence_doings',
			links: {
				'Campus Calendar': {
					id: 50,
					url: 'http://www.northeastern.edu/studentlife/calendar/',
				},
				'Council for University Programs': {
					id: 51,
					url: 'http://www.cup.neu.edu/',
				},

				'Resident Student Association': {
					id: 52,
					url: 'http://www.rsa.neu.edu/wordpress/',
				},
				'Student Government Association': {
					id: 53,
					url: 'http://www.sga.neu.edu/',
				},
				'WRBB Campus Radio': {
					id: 54,
					url: 'http://wrbbradio.org/',
				}
			}
		}
	}
};
links['Finance'] = {

	subcategories: {
		'Financial Aid': {
			id: 'finance_finaid',
			links: {
				'My Financial Aid Status': {
					id: 55,
					url: 'https://www.pfw.neu.edu/NetPartnerStudent/',
				},
				'Federal Loan Entrance Interview': {
					id: 56,
					url: 'https://studentloans.gov/myDirectLoan/index.action',
				},

				'Endowed Scholarship Application': {
					id: 57,
					url: 'https://prod-web.neu.edu/webapp6/EndowedScholarship/secure/index.jsp',
				}
			}
		},
		'My Account': {
			id: 'finance_account',
			links: {
				'HuskyCard Balances': {
					id: 58,
					url: 'https://prod-web.neu.edu/webapp6/HuskyCard/CurrentBalance/secure/retrieve/main.do',
				},
				'HuskyCard Transactions': {
					id: 59,
					url: 'https://prod-web.neu.edu/webapp6/ISF/cardTxns.do',
				},
				'Student Account': {
					id: 60,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_ARMnu',
				},
				'Make a Payment': {
					id: 61,
					url: 'https://commerce.cashnet.com/cashnetc/selfserve/youraccount.aspx',
				},
				'Housing On-Line' : housinglink,
				'Meal Plan Changes' : mealplanlink,
				'Profiler Meal Plan Changes' : profilerlink,
				'Waive Health Insurance': {
					url: 'https://prod-web.neu.edu/webapp6/bn/HealthWaiver/initial.do',
				},
				'Student Refund Request': {
					id: 62,
					url: 'https://neuforms2.neu.edu/lfserver/nuloform/studentrefund',
				}
			}
		},
		'Ways to Save': {
			id: 'finance_waystosave',
			links: {
				'Zipcar at NU': {
					id: 63,
					url: 'http://www.zipcar.com/northeastern/',
				},
				'Comcast Advantage Program': {
					id: 64,
					url: 'http://www.comcast.com/neusignup/',
				},
				'Comcast Advantage Program Form': {
					id: 65,
					url: 'http://myneu.neu.edu/tag.2736ec18fe7f48ab.render.userLayoutRootNode.target.u49l1n137.uP?cw_inChannelLink=1&cw_xml=http://www.comcast-ne.com/nuspecialoffer',
				},
				'NU Apple Store': {
					id: 66,
					url: 'https://prod-web.neu.edu/webapp6/NuRedirects/appleJump.html',
				},
				'NU Dell Store': {
					id: 67,
					url: 'https://prod-web.neu.edu/webapp6/NuRedirects/redirect.jsp?store=dell_student',
				},

				'Free and Discounted Software': {
					id: 68,
					url: 'http://neu.e-academy.com',
				}
			}
		}
	}
};





/*
>>>>>>> a75ba56927e2e254e319f0967cfa4a6fbb4fd078
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
		links[l].img ? lhtml += links[l].img : lhtml += default_image;
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

// Scroll to the given subcategory
function subcatSelect(cat) {
	window.location.hash = cat;
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
		$('#title').text($(this).text());
		catSelect($(this).text());
	}
});

// $('#content-links').scroll(scrollSubheading);
$(function() {$('#home').click();});
