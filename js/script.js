default_image = 'img/default.png'; // 200 * 160

links = {};

var housinglink = {
	url: 'https://rms.neu.edu/',
}
}
var mealplanlink = {'Meal Plan Changes': {
	url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_selmp',
}
}

var profilerlink = {'Profiler Meal Plan Changes': {
	url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_ppinfo',
}
}

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
};
links['Classes'] = {

	id: '',
	
	subcategories: {
		
		'Registrar': {
	
			id: 'classes_registrar',
			
			links: {
				'Student Self Service': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu',
				},
				'Course Catalog': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwckctlg.p_disp_dyn_ctlg',
				},
				'Schedule of Classes': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUCLSS.p_disp_dyn_sched',
				},
				'Course Registration': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu',
				},
				'My Schedule': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
				},
				'My Grades': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
				},				
				'My Transcript': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
				},
				'My Degree Audit': {
					url: 'https://prod-web.neu.edu/webapp6/DARSStudent/ChooseSystem',
				},
				'My Transcript': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
				},
				'Change of Address': {
					url: 'https://prod-web.neu.edu/webapp6/bn/iah/secure/address/main.do',
				},
				'Emergency Contact Information': {
					url: 'https://prod-web.neu.edu/webapp6/EmergencyContact/secure/index.jsp',
				},
				'FERPA Status': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUFERPA.p_display_ferpa',
				},
				'My Travel Plans': {
					url: 'https://neuforms2.neu.edu/lfserver/Travel_Entry',
				}	
			}
		},
		
		'Study and Course Resources': {
	
			id: 'classes_resources',
			
			links: {
				'Advisor Appointment Calendar': {
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
				},
				'Request a Tutor': {
					url: 'https://neuforms2.neu.edu/lfserver/library_peer_tutor_request',
				},
				'Advisor Appointment Calendar': {
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
				},
				'myTRACE': {
					url: 'http://myneu.neu.edu/cp/ip/login?sys=trace&url=https://ce7.connectedu.net/etw/crseval.asp?i=8',
				},
				'CPS Class Evaluation Results': {
					url: 'http://neu.evaluationkit.com/MyEval/StudentReport.aspx',
				},
				'Bookstore': {
					url: 'http://northeastern.bncollege.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=17555&catalogId=10001',
				}
			},
		},

		'Commencement': {

			id: 'classes_commencement',

			links: {
				'Apply to Graduate': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_disp_gradapp',
				},
				'View Application to Graduate': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_view_gradapp',
				},
				'NU Commencement Website': {
					url: 'http://www.northeastern.edu/commencement/',
				}
			}
		}
	},
};
links['Co-op and Career Services'] = {
	id: '',
	subcategories: {
		'Co-op': {
			id: 'coop_coop',
			links: {
				'Getting Started': {
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/gettingStarted.aspx',
				},
				'COOL': {
					url: 'https://www.cool.neu.edu/students/mainmenu.aspx',
				},
				'COOL Tour': {
					url: 'http://www.coolquicktour.neu.edu/',
				}
			}
		},

		'Advising': {
			id: 'coop_advising',
			links: {
				'Appointment Calendar': {
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
				},
				'Contacts': {
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/contacts.aspx?mode=coop',
				},
				'Decide on a Career or Major': {
					url: 'http://www.northeastern.edu/careerservices/majorscareers/index.html',
				},
				'Resume Services': {
					url: 'http://www.northeastern.edu/careerservices/resumes/resumes.html',
				},
				'Cover Letter Critique': {
					url: 'http://www.northeastern.edu/careerservices/resumes/coverletters.html',
				},
				'Mock Interviews': {
					url: 'http://www.northeastern.edu/careerservices/jobsearch/interviewing.html',
				},
				'Job Search Guidance': {
					url: 'http://www.northeastern.edu/careerservices/jobsearch/index.html',
				}
			}
		},

		'Resources': {
			id: 'coop_resources',
			links: {
				'Co-op Forms': {
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/forms.aspx?mode=coop',
				},
				'Co-op FAQ': {
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/faq.aspx',
				},
				'Find an Internship': {
					url: 'http://www.northeastern.edu/careerservices/internships/index.html',
				},
				'Husky Career Link': {
					url: 'http://northeastern.experience.com/er/security/login.jsp',
				},
				'Career Search': {
					url: 'http://northeastern.experience.com/er/security/login.jsp',
				}
			}
		}	
	}
};
links['Residence/Housing'] = {
	id: '',
	subcategories: {
		'Room and Board': {
			id: 'residence_roomboard',
			links: {
				'Housing On-Line' : housinglink,
				'Meal Plan Changes' : mealplanlink,
				'Profiler Meal Plan Changes' : profilerlink,

				'On-Campus Mailbox Information': {
					url: 'https://prod-web.neu.edu/webapp6/resmailbox/',
				},
				'Dining Services': {
					url: 'http://www.nudining.com/',
				}
			}
		},
		'Informational Links': {
			id: 'residence_informational',
			links: {
				'Apply for Parking': {
					url: 'https://prod-web.neu.edu/webapp6/nuparking/SignupAuth.do',
				},
				'Facilities Online Work Request': {
					url: 'https://workreq.neu.edu/workrequest/',
				},

				'Husky Express': {
					url: 'https://workreq.neu.edu/workrequest/',
				},
				'LaundryView': {
					url: 'http://www.laundryview.com/lvs.php',
				}
			}
		},
		'Campus Doings': {
			id: 'residence_doings',
			links: {
				'Campus Calendar': {
					url: 'http://www.northeastern.edu/studentlife/calendar/',
				},
				'Council for University Programs': {
					url: 'http://www.cup.neu.edu/',
				},

				'Resident Student Association': {
					url: 'http://www.rsa.neu.edu/wordpress/',
				},
				'Student Government Association': {
					url: 'http://www.sga.neu.edu/',
				},
				'WRBB Campus Radio': {
					url: 'http://wrbbradio.org/',
				}
			}
		}
	}
};
links['Finance'] = {
	id: '',
	subcategories: {
		'Financial Aid': {
			id: 'finance_finaid',
			links: {
				'My Financial Aid Status': {
					url: 'https://www.pfw.neu.edu/NetPartnerStudent/',
				},
				'Federal Loan Entrance Interview': {
					url: 'https://studentloans.gov/myDirectLoan/index.action',
				},

				'Endowed Scholarship Application': {
					url: 'https://prod-web.neu.edu/webapp6/EndowedScholarship/secure/index.jsp',
				}
			}
		},
		'My Account': {
			id: 'finance_account',
			links: {
				'HuskyCard Balances': {
					url: 'https://prod-web.neu.edu/webapp6/HuskyCard/CurrentBalance/secure/retrieve/main.do',
				},
				'HuskyCard Transactions': {
					url: 'https://prod-web.neu.edu/webapp6/ISF/cardTxns.do',
				},
				'Student Account': {
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_ARMnu',
				},
				'Make a Payment': {
					url: 'https://commerce.cashnet.com/cashnetc/selfserve/youraccount.aspx',
				},
				'Housing On-Line' : housinglink,
				'Meal Plan Changes' : mealplanlink,
				'Profiler Meal Plan Changes' : profilerlink,
				'Waive Health Insurance': {
					url: 'https://prod-web.neu.edu/webapp6/bn/HealthWaiver/initial.do',
				},
				'Student Refund Request': {
					url: 'https://neuforms2.neu.edu/lfserver/nuloform/studentrefund',
				}
			}
		},
		'Ways to Save': {
			id: 'finance_waystosave',
			links: {
				'Zipcar at NU': {
					url: 'http://www.zipcar.com/northeastern/',
				},
				'Comcast Advantage Program': {
					url: 'http://www.comcast.com/neusignup/',
				},
				'Comcast Advantage Program Form': {
					url: 'http://myneu.neu.edu/tag.2736ec18fe7f48ab.render.userLayoutRootNode.target.u49l1n137.uP?cw_inChannelLink=1&cw_xml=http://www.comcast-ne.com/nuspecialoffer',
				},
				'NU Apple Store': {
					url: 'https://prod-web.neu.edu/webapp6/NuRedirects/appleJump.html',
				},
				'NU Dell Store': {
					url: 'https://prod-web.neu.edu/webapp6/NuRedirects/redirect.jsp?store=dell_student',
				},

				'Free and Discounted Software': {
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
