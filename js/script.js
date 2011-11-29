default_image = 'img/default.png'; // 200 * 160
unsaved = '<img src="img/unsaved.jpeg" class="bookmark" alt="Bookmark">';
saved = '<img src="img/saved.jpeg" class="bookmark" alt="Bookmarked">';

links = {};

var housinglink = {
	id: 0,
	url: 'https://rms.neu.edu/',
	img: 'img/tiles/housing_on-line.png'
}
var mealplanlink = {
	id: 1,
	url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_selmp',
	img: 'img/tiles/meal_plan_changes.png'
}

var profilerlink = {
	id: 2,
	url: 'https://bnr8ssbp.neu.edu/udcprod8/bzskoacc.p_ppinfo',
	img: 'img/tiles/profiler_meal_plan_changes.png'
}

links['Home'] = {

	links: {
		'Husky Card Account Balances': {
			id: 3,
			url: 'https://prod-web.neu.edu/webapp6/HuskyCard/CurrentBalance/secure/retrieve/main.do',
			img: 'img/tiles/husky_card_account_balances.png'
		},
		'LaundryView': {
			id: 4,
			url: 'http://www.laundryview.com/lvs.php',
			img: 'img/tiles/laundryview.png'
		},
		'Course Information and Registration': {
			id: 5,
			url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu',
			img: 'img/tiles/course_information_and_registration.png'
		},
		'Husky Mail': {
			id: 6,
			url: 'http://mail.husky.neu.edu/',
			img: 'img/tiles/huskymail.png',
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
					img: 'img/tiles/student_self_service.png'
				},
				'Course Catalog': {
					id: 8,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwckctlg.p_disp_dyn_ctlg',
					img: 'img/tiles/course_catalog.png'
				},
				'Schedule of Classes': {
					id: 9,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUCLSS.p_disp_dyn_sched',
					img: 'img/tiles/schedule_of_classes.png'
				},
				'Course Registration': {
					id: 10,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu',
					img: 'img/tiles/course_registration.png'
				},
				'My Schedule': {
					id: 11,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
					img: 'img/tiles/my_schedule.png'
				},
				'My Grades': {
					id: 12,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskfshd.P_CrseSchdDetl',
					img: 'img/tiles/my_grades.png'
				},				
				'My Transcript': {
					id: 13,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
					img: 'img/tiles/my_transcript.png'
				},
				'My Degree Audit': {
					id: 14,
					url: 'https://prod-web.neu.edu/webapp6/DARSStudent/ChooseSystem',
					img: 'img/tiles/my_degree_audit.png'
				},
				'My Transcript': {
					id: 15,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskotrn.P_ViewTermTran',
					img: 'img/tiles/my_transcript.png'
				},
				'Change of Address': {
					id: 16,
					url: 'https://prod-web.neu.edu/webapp6/bn/iah/secure/address/main.do',
					img: 'img/tiles/change_of_address.png'
				},
				'Emergency Contact Information': {
					id: 17,
					url: 'https://prod-web.neu.edu/webapp6/EmergencyContact/secure/index.jsp',
					img: 'img/tiles/emergency_contact_information.png'
				},
				'FERPA Status': {
					id: 18,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/NEUFERPA.p_display_ferpa',
					img: 'img/tiles/FERPA_status.png'
				},
				'My Travel Plans': {
					id: 19,
					url: 'https://neuforms2.neu.edu/lfserver/Travel_Entry',
					img: 'img/tiles/my_travel_plans.png'
				}	
			}
		},
		
		'Study and Course Resources': {
	
			id: 'classes_resources',
			
			links: {
				'Advisor Appointment Calendar': {
					id: 20,
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
					img: 'img/tiles/advisor_appointment_calendar.png'
				},
				'Request a Tutor': {
					id: 21,
					url: 'https://neuforms2.neu.edu/lfserver/library_peer_tutor_request',
					img: 'img/tiles/request_a_tutor.png'
				},
				'myTRACE': {
					id: 23,
					url: 'http://myneu.neu.edu/cp/ip/login?sys=trace&url=https://ce7.connectedu.net/etw/crseval.asp?i=8',
					img: 'img/tiles/myTRACE.png'
				},
				'CPS Class Evaluation Results': {
					id: 24,
					url: 'http://neu.evaluationkit.com/MyEval/StudentReport.aspx',
					img: 'img/tiles/CPS_class_evaluation_results.png'
				},
				'Bookstore': {
					id: 25,
					url: 'http://northeastern.bncollege.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=17555&catalogId=10001',
					img: 'img/tiles/bookstore.png'
				}
			},
		},

		'Commencement': {

			id: 'classes_commencement',

			links: {
				'Apply to Graduate': {
					id: 26,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_disp_gradapp',
					img: 'img/tiles/apply_to_graduate.png'
				},
				'View Application to Graduate': {
					id: 27,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/bwskgrad.p_view_gradapp',
					img: 'img/tiles/view_application_to_graduate.png'
				},
				'NU Commencement Website': {
					id: 28,
					url: 'http://www.northeastern.edu/commencement/',
					img: 'img/tiles/NU_commencement_website.png'
				}
			}
		}
	},
};
links['Co-op and Career Services'] = {

	subcategories: {
		'COOL': {
			id: 'coop_cool',
			links: {
				'Getting Started': {
					id: 29,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/gettingStarted.aspx',
					img: 'img/tiles/getting_started.png'
				},
				'COOL': {
					id: 30,
					url: 'https://www.cool.neu.edu/students/mainmenu.aspx',
					img: 'img/tiles/COOL.png'
				},
				'COOL Tour': {
					id: 31,
					url: 'http://www.coolquicktour.neu.edu/',
					img: 'img/tiles/COOL_tour.png'
				}
			}
		},

		'Advising': {
			id: 'coop_advising',
			links: {
				'Appointment Calendar': {
					id: 32,
					url: 'https://prod-web.neu.edu/webapp6/public/calendar/booking/app/secure/main.action?',
					img: 'img/tiles/advisor_appointment_calendar.png'
				},
				'Contacts': {
					id: 33,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/contacts.aspx?mode=coop',
					img: 'img/tiles/contacts.png'
				},
				'Decide on a Career or Major': {
					id: 34,
					url: 'http://www.northeastern.edu/careerservices/majorscareers/index.html',
					img: 'img/tiles/decide_on_a_career_or_major.png'
				},
				'Resume Services': {
					id: 35,
					url: 'http://www.northeastern.edu/careerservices/resumes/resumes.html',
					img: 'img/tiles/resume_services.png'
				},
				'Cover Letter Critique': {
					id: 36,
					url: 'http://www.northeastern.edu/careerservices/resumes/coverletters.html',
					img: 'img/tiles/cover_letter_critique.png'
				},
				'Mock Interviews': {
					id: 37,
					url: 'http://www.northeastern.edu/careerservices/jobsearch/interviewing.html',
					img: 'img/tiles/mock_interviews.png'
				},
				'Job Search Guidance': {
					id: 38,
					url: 'http://www.northeastern.edu/careerservices/jobsearch/index.html',
					img: 'img/tiles/job_search_guidance.png'
				}
			}
		},

		'Resources': {
			id: 'coop_resources',
			links: {
				'Co-op Forms': {
					id: 39,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/tools/forms.aspx?mode=coop',
					img: 'img/tiles/co-op_forms.png'
				},
				'Co-op FAQ': {
					id: 40,
					url: 'http://neubos3es100.nunet.neu.edu/myNEU/coop/faq.aspx',
					img: 'img/tiles/co-op_faq.png'
				},
				'Find an Internship': {
					id: 41,
					url: 'http://www.northeastern.edu/careerservices/internships/index.html',
					img: 'img/tiles/find_an_internship.png'
				},
				'Husky Career Link': {
					id: 42,
					url: 'http://northeastern.experience.com/er/security/login.jsp',
					img: 'img/tiles/husky_career_link.png'
				},
				'Career Search': {
					id: 43,
					url: 'http://northeastern.experience.com/er/security/login.jsp',
					img: 'img/tiles/career_search.png'
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
					img: 'img/tiles/on-campus_mailbox_information.png'
				},
				'Dining Services': {
					id: 45,
					url: 'http://www.nudining.com/',
					img: 'img/tiles/dining_services.png'
				}
			}
		},
		'Informational Links': {
			id: 'residence_informational',
			links: {
				'Apply for Parking': {
					id: 46,
					url: 'https://prod-web.neu.edu/webapp6/nuparking/SignupAuth.do',
					img: 'img/tiles/apply_for_parking.png'
				},
				'Facilities Online Work Request': {
					id: 47,
					url: 'https://workreq.neu.edu/workrequest/',
					img: 'img/tiles/facilities_online_work_request.png'
				},

				'Husky Express': {
					id: 48,
					url: 'https://workreq.neu.edu/workrequest/',
					img: 'img/tiles/husky_express.png'
				},
				'LaundryView': {
					id: 49,
					url: 'http://www.laundryview.com/lvs.php',
					img: 'img/tiles/laundryview.png'
				}
			}
		},
		'Campus Doings': {
			id: 'residence_doings',
			links: {
				'Campus Calendar': {
					id: 50,
					url: 'http://www.northeastern.edu/studentlife/calendar/',
					img: 'img/tiles/campus_calendar.png'
				},
				'Council for University Programs': {
					id: 51,
					url: 'http://www.cup.neu.edu/',
					img: 'img/tiles/council_for_university_programs.png'
				},

				'Resident Student Association': {
					id: 52,
					url: 'http://www.rsa.neu.edu/wordpress/',
					img: 'img/tiles/resident_student_association.png'
				},
				'Student Government Association': {
					id: 53,
					url: 'http://www.sga.neu.edu/',
					img: 'img/tiles/student_government_association.png'
				},
				'WRBB Campus Radio': {
					id: 54,
					url: 'http://wrbbradio.org/',
					img: 'img/tiles/WRBB_campus_radio.png'
				}
			}
		}
	}
};
links['Finance'] = {

	subcategories: {
		'Financial Aid': {
			id: 'finance_aid',
			links: {
				'My Financial Aid Status': {
					id: 55,
					url: 'https://www.pfw.neu.edu/NetPartnerStudent/',
					img: 'img/tiles/my_financial_aid_status.png'
				},
				'Federal Loan Entrance Interview': {
					id: 56,
					url: 'https://studentloans.gov/myDirectLoan/index.action',
					img: 'img/tiles/my_financial_aid_status.png'
				},

				'Endowed Scholarship Application': {
					id: 57,
					url: 'https://prod-web.neu.edu/webapp6/EndowedScholarship/secure/index.jsp',
					img: 'img/tiles/my_financial_aid_status.png'
				}
			}
		},
		'My Account': {
			id: 'finance_account',
			links: {
				'HuskyCard Account Balances': {
					id: 58,
					url: 'https://prod-web.neu.edu/webapp6/HuskyCard/CurrentBalance/secure/retrieve/main.do',
					img: 'img/tiles/husky_card_account_balances.png'
				},
				'HuskyCard Transactions': {
					id: 59,
					url: 'https://prod-web.neu.edu/webapp6/ISF/cardTxns.do',
					img: 'img/tiles/husky_card_transactions.png'
				},
				'Student Account': {
					id: 60,
					url: 'https://bnr8ssbp.neu.edu/udcprod8/twbkwbis.P_GenMenu?name=bmenu.P_ARMnu',
					img: 'img/tiles/student_account.png'
				},
				'Make a Payment': {
					id: 61,
					url: 'https://commerce.cashnet.com/cashnetc/selfserve/youraccount.aspx',
					img: 'img/tiles/make_a_payment.png'
				},
				'Housing On-Line' : housinglink,
				'Meal Plan Changes' : mealplanlink,
				'Profiler Meal Plan Changes' : profilerlink,
				'Waive Health Insurance': {
					url: 'https://prod-web.neu.edu/webapp6/bn/HealthWaiver/initial.do',
					img: 'img/tiles/waive_health_insurance.png'
				},
				'Student Refund Request': {
					id: 62,
					url: 'https://neuforms2.neu.edu/lfserver/nuloform/studentrefund',
					img: 'img/tiles/student_refund_request.png'
				}
			}
		},
		'Ways to Save': {
			id: 'finance_waystosave',
			links: {
				'Zipcar at NU': {
					id: 63,
					url: 'http://www.zipcar.com/northeastern/',
					img: 'img/tiles/zipcar_at_NU.png'
				},
				'Comcast Advantage Program': {
					id: 64,
					url: 'http://www.comcast.com/neusignup/',
					img: 'img/tiles/comcast_advantage_program.png'
				},
				'Comcast Advantage Program Form': {
					id: 65,
					url: 'http://myneu.neu.edu/tag.2736ec18fe7f48ab.render.userLayoutRootNode.target.u49l1n137.uP?cw_inChannelLink=1&cw_xml=http://www.comcast-ne.com/nuspecialoffer',
					img: 'img/tiles/comcast_advantage_program_form.png'
				},
				'NU Apple Store': {
					id: 66,
					url: 'https://prod-web.neu.edu/webapp6/NuRedirects/appleJump.html',
					img: 'img/tiles/NU_apple_store.png'
				},
				'NU Dell Store': {
					id: 67,
					url: 'https://prod-web.neu.edu/webapp6/NuRedirects/redirect.jsp?store=dell_student',
					img: 'img/tiles/NU_dell_store.png'
				},

				'Free and Discounted Software': {
					id: 68,
					url: 'http://neu.e-academy.com',
					img: 'img/tiles/free_and_discounted_software.png'
				}
			}
		}
	}
};





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
	$('#back').css('visibility', 'visible');
	$('#back').click(function() {
		close(category);
	});
}

// Closes an open link
function close(title) {
	$('#content-frame').fadeOut();
	$('#back').css('visibility', 'hidden');
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
	$('#content-links').html(jsonToHTML(links[cat], cat));
}

function parse(links) {
	var lhtml = '';
	for(l in links) {
		lhtml += '<li class="tile">';

		if(favorites) {
			lhtml += '<div class="bookmark';
			
			$.inArray('' + links[l].id, favorites) == -1 ? lhtml += " unsaved" : lhtml += " saved";
			
			lhtml += '" alt="Bookmark"></div>';
		}

		lhtml += '<a href="' + links[l].url + '" class="image-container';
		if(links[l].noframe) { lhtml += ' noiframe'; };
		lhtml += '" id="' + links[l].id + '" >';
		lhtml += '<img src="';
		links[l].img ? lhtml += links[l].img : lhtml += default_image;
		lhtml += '"></a><a href="' + links[l].url + '" class="name">';
		

		
		lhtml += l + '</a></li>';
	}
	return lhtml;
}

function bookmark(id) {
	var ia = $.inArray(id, favorites);
	if(ia == -1) {
		favorites.push(id);
	} else {
		favorites.splice(ia, ia);
	}
	$.cookie('favorites', favorites.join(), { expires: 7 });
}

function jsonToHTML(data, category) {
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
				subs += jsonToHTML(data.subcategories[sub], sub);
			}
			break;
		default:
			break;
		}
	}

	lnks += subheading + ls + subs;

	return lnks;
}

function filterLinks(data, id) {
	var subcategory, subcat, a;
	for(subcategory in data) {
		for(subcat in data[subcategory]) {
			switch(subcat) {
				case 'links':
					for(a in data[subcategory][subcat]) {
						if(data[subcategory][subcat][a].id == id) {
							return {
								name: a,
								rest: data[subcategory][subcat][a]
							};
						}
					}
					break;
				case 'subcategories':
					var result = filterLinks(data[subcategory][subcat], id);
					if(result) {
						return result;
					}
					break;
				case 'id':
					break;
				default:
					break;
			}
		}
	}
}

function favs() {
	var bookmarks = {
		links: {}
	};
	for(l in favorites) {
		var lynk = filterLinks(links, favorites[l]);
		bookmarks.links[lynk.name] = lynk.rest;
	}
	$('#content-links').html(jsonToHTML(bookmarks));
}

// Scroll to the given subcategory
function subcatSelect(cat) {
	window.location.hash = cat;
}

// Get the user's favorites
favorites = $.cookie('favorites');
if(favorites) {
	favorites = favorites.split(",");
} else {
	favorites = [];
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
		if($(this).text() == 'Favorites') {
			favs();
		} else {
			catSelect($(this).text());
		}
	}
});

$('.bookmark').live('click', function() {
	var el = $(this);
	bookmark(el.next().attr('id'));
	if(el.hasClass('saved')) {
		el.removeClass('saved');
		el.addClass('unsaved');
	} else {
		el.removeClass('unsaved');
		el.addClass('saved');
	}
});

$(window).resize(function() {
	$('#content-frame').width($(window).width() - 300);
});

// $('#content-links').scroll(scrollSubheading);
$(function() {
	$('#home').click();
	$('#content-frame').width($(window).width() - 300);
});
