// Main page -----------------------------------------------------------------

function openSearch() {
  hideHelp();
  hideMore();
  $("#searchbar").slideToggle("fast");
}

function hideSearch() {
  $("#searchbar").hide();
}

function openMore() {
  hideHelp();
  hideSearch();
  $("#moremenu").slideToggle("fast");
}

function hideMore() {
  $("#moremenu").hide();
}

function openHelp() {
  hideMore();
  hideSearch();
  $("#helpmenu").slideToggle("fast");
}

function hideHelp() {
  $("#helpmenu").hide();
}

function openMain() {
  // go to main page
  $.mobile.changePage($("#main"));

  // hide everything
  $(".pagecontent").hide();
  $("#searchbar").hide();
  hideHelp();
  hideMore();
  hideSearch();

  $("#maincontent").show();

  // don't highlight the home button as active!
  $(".homebutton").removeClass("ui-btn-active");
  $(".backbutton").removeClass("ui-btn-active");
}

// Career page ---------------------------------------------------------------

function openCareerInfo() {
  $(".careerpagecontent").hide();
  $("#infocontent").show();
}

function openXP() {
  $(".careerpagecontent").hide();
  $("#XPcontent").show();
}

function openFavorites() {
  $(".careerpagecontent").hide();
  $("#favoritescontent").show();
}

function openHistory() {
  $(".careerpagecontent").hide();
  $("#historycontent").show();
}

// Company pages -------------------------------------------------------------

// 'opening' a company means creating a page for said company in the DOM
// and then navigating to it
function openCompany(companyId) {
  // get company page
  var companyPage = $("#company");

  // TODO: load company-specific content...
  
  // redirect to company page
  $.mobile.changePage(companyPage);
}

// 'closing' a company means cleaning up that company's page in the DOM
// This will help to prevent the document object model from getting overly 
// large and slowing things down.
function closeCompany(companyId) {
  getCompanyPage(companyId).remove();
}

function openCompanyInfo() {
  $(".companypagecontent").hide();
  $("#companyinfocontent").show();
}

function openCompanyReviews() {
  $(".companypagecontent").hide();
  $("#companyreviewscontent").show();
}

function openCompanyContacts() {
  $(".companypagecontent").hide();
  $("#companycontactscontent").show();
}

function openCompanyInterviews() {
  $(".companypagecontent").hide();
  $("#companyinterviewscontent").show();
}

function removeFavoriteCompany(id){
  //TODO remove favorite from database!!!

  $("li#fav"  + id).remove();
	$("#favoritecompanies").listview("refresh");
}

function removeFavoriteField(id){
  //TODO remove favorite from database!!!
  $("li#favfield"  + id).remove();
	$("#favoritefields").listview("refresh");
}

// Page load script ----------------------------------------------------------

// MAIN PAGE LOAD
$('#main').live('pageinit', function(event) {
  openMain();

  // set up event handlers
  $(".mainlevel1").not("#morebutton").click(hideMore);
  $("#morebutton").click(openMore);
  $("#helpbutton").click(openHelp);
  $(".homebutton").click(openMain);
  $("#searchbutton").click(openSearch);

  // position navigational elements
  var header = $("#header");
  var footer = $("#footer");
  var contentpages = $(".pagecontent");

  header.css("z-index", "1");
  contentpages.css("position", "absolute");
  contentpages.css("top", "64px");
  footer.css("z-index", "1");
  footer.css("position", "absolute");
  footer.css("bottom", "0");

  // set up handlers for dialog boxes in more menu
  $(document).delegate('#graphbutton', 'click', function() {
    $('<div>').simpledialog2({
      mode: 'blank',
      headerText: 'Some Stuff',
      headerClose: true,
      blankContent : "<p>Options for how to view the graph will go here.</p>"
    })
  });

  $(document).delegate('#recsbutton', 'click', function() {
    $('<div>').simpledialog2({
      mode: 'blank',
      headerText: 'Some Stuff',
      headerClose: true,
      blankContent : "<p>Recommendations will go here.</p>"
    })
  });

  $(document).delegate('#filterbutton', 'click', function() {
    $('<div>').simpledialog2({
      mode: 'blank',
      headerText: 'Some Stuff',
      headerClose: true,
      blankContent : "<p>Options for how to filter the graph will go here.</p>"
    })
  });
});

// CAREER PAGE LOAD
$('#career').live('pageinit', function(event) {
  openCareerInfo();

  // set up event handlers
  $("#infobutton").click(openCareerInfo);
  $("#xpbutton").click(openXP);
  $("#favoritesbutton").click(openFavorites);
  $("#historybutton").click(openHistory);

  $(".homebutton").click(openMain);

  // asynchronously load concentrations list
  $.ajax({
    url: "handler.php",
    type: "POST",
    data: {
      opcode: 0
    }
  }).done(function(msg) {
    var concentrations = $.parseJSON(msg);
    var selector = $("#concentration");

    // clear current contents of selector
    selector.children().remove();

    // update initial 'display' option
    $("<option/>", {
      value: "",
      html: "Select Concentration..."
    }).appendTo(selector);

    // include option for each concentration
    for (i in concentrations) {
      $("<option/>", {
  	value: concentrations[i].uid,
  	html: concentrations[i].name
      }).appendTo(selector);
    }

    // refresh display of selectmenu
    selector.selectmenu("refresh");
  });

  // populate career page tabs
  
  // 'experience' tab
  // TODO: get data for user FROM DATABASE
  var experienceList = [{"company":"Aunt Jemima's", "startDate":"06/2011", 
  			 "endDate":"08/2011", "position":"syrup intern", "id":"3"},
  			{"company":"McDonalds", "startDate":"06/2010", 
  			 "endDate":"08/2010", "position":"junior burger flipper", "id":"7"}];

  for(var i in experienceList){
    var newListItem = $("<li/>", {
      "data-companyid": experienceList[i].id
    });
    $("<div/>", {
      html: experienceList[i].company
    }).appendTo(newListItem);
    $("<br/>").appendTo(newListItem);
    $("<div/>", {
      html: experienceList[i].startDate + "-" + experienceList[i].endDate
    }).appendTo(newListItem);
    $("<br/>").appendTo(newListItem);
    $("<div/>", {
      html: experienceList[i].position
    }).appendTo(newListItem);

    newListItem.click(function(event) {
      openCompany((this).getAttribute("data-companyid"));
    });
  
    $("#experiencelist").append(newListItem);
  }
  
  $("#experiencelist").listview("refresh");					
  
  // 'favorites' tab
  // TODO: get data for user FROM DATABASE

  var favoriteCompanies = [{"company":"Aunt Jemima's", "id":"3"},
  			   {"company":"McDonalds", "id":"7"},
  			   {"company":"Meals on Wheels", "id":"5068"}];

  for(var i in favoriteCompanies) {

    var newListItem = $("<li/>", {
      id: 'fav' + favoriteCompanies[i].id,
      "data-companyid": favoriteCompanies[i].id
    });

    var gridADiv = $("<div/>", {
      class: "ui-grid-a"
    }).appendTo(newListItem);

    var blockADiv = $("<div/>", {
      class: "ui-block-a",
      html: favoriteCompanies[i].company
    }).click(function(event) {
      // TODO: actually open company with correct ID
      openCompany((this).getAttribute("data-companyid"));
    }).appendTo(gridADiv);

    var blockBDiv = $("<div/>", {
      class: "ui-block-b right-aligning"
    }).appendTo(gridADiv);

    $("<img/>", {
      class: "remove-icon",
      src: "images/remove-icon.png",
      alt: "Remove",
      "data-companyid": favoriteCompanies[i].id
    }).click(function(event) {
      removeFavoriteCompany((this).getAttribute("data-companyid"));
    }).appendTo(blockBDiv);
    
    // add to listview
    $("#favoritecompanies").append(newListItem);
  }  

  // refresh listview
  $("#favoritecompanies").listview("refresh");					

  // TODO: get data for user FROM DATABASE
  var favoriteFields = [{"field":"Food", "id":"3"},{"field":"Bunny Science", "id":"7"},{"field":"Lulz forevah", "id":"5068"}];

  for(var i in favoriteFields) {

    var newListItem = $("<li/>", {
      id: 'favfield' + favoriteFields[i].id
    });

    var gridADiv = $("<div/>", {
      class: 'ui-grid-a'
    }).appendTo(newListItem);

    var blockADiv = $("<div/>", {
      class: 'ui-block-a',
      html: favoriteFields[i].field
    }).click(function(event) {
      // TODO: not really sure what, though. needs to be discussed
    }).appendTo(gridADiv);

    var blockBDiv = $("<div/>", {
      class: 'ui-block-b right-aligning'
    }).appendTo(gridADiv);

    $("<img/>", {
      class: 'remove-icon',
      src: 'images/remove-icon.png',
      alt: 'Remove',
      "data-fieldid": favoriteFields[i].id
    }).click(function(event) {
      removeFavoriteField((this).getAttribute("data-fieldid"))
    }).appendTo(blockBDiv);

    $("#favoritefields").append(newListItem);
  }

  $("#favoritefields").listview("refresh");					
  // position navigational elements
  var header = $("#careerheader");
  var footer = $("#footer");
  var contentpages = $(".careerpagecontent");

  header.css("z-index", "1");
  contentpages.css("position", "absolute");
  contentpages.css("top", "64px");
  footer.css("z-index", "1");
  footer.css("position", "absolute");
  footer.css("bottom", "0");
});

// COMPANY PAGE LOAD
$('#company').live('pageinit', function(event) {
  openCompanyInfo();

  // set up event handlers
  $("#companyinfobutton").click(openCompanyInfo);
  $("#companyreviewsbutton").click(openCompanyReviews);
  $("#companycontactsbutton").click(openCompanyContacts);
  $("#companyinterviewsbutton").click(openCompanyInterviews);

  $(".homebutton").click(openMain);

  // position navigational elements
  var header = $("#companyheader");
  var footer = $("#companyfooter");
  var contentpages = $(".companypagecontent");

  header.css("z-index", "1");
  contentpages.css("position", "absolute");
  contentpages.css("top", "64px");
  footer.css("z-index", "1");
  footer.css("position", "absolute");
  footer.css("bottom", "0");
});