// BUILD A MOVIE SEARCH APP WITH THE OMBD API
//******************************************************************************
// *** - DONE - *** GO TO THE OMBD API WEBSIDE 'ombdapi.com' TO START USING THE API DOCUMENTATION
//******************************************************************************
//initial IIFE to modulate
!function() {
  //strict
  'use strict';
  //******************************************************************************
  // *** - DONE - *** REQUEST DATA FROM THE OMBD API TO DISPLAY MOVIE INFORMATION: JSON FORMAT!!!
  // *** - DONE - *** *use OMBd's 'By Search' parameters to return movie data based on value of field
  //******************************************************************************
  //set event listener for form submit
  $('form').submit(function(evt) {
    //prevent default
    evt.preventDefault();
    //set value resest in variables to use for search query
    var ombdAPI = 'http://www.omdbapi.com/?'
    var $title = $('#search').val();
    var $year = $('#year').val();
    var $dataQuery = {
      s: $title,
      y: $year,
    };
    $.getJSON(ombdAPI, $dataQuery, showResults);
  });
  //******************************************************************************
  // DISPLAY SEARCH RESULTS ON THE PAGE
  // *data should load inside the #movies <ul>
  // *see comments in index.html for samples that need to be dynamically created
  // *each movie returned render an <li> dipslaying:
  //    **movie title
  //    **year of release
  //    **movie poster
  //        ***render an <img> taht displays a poster image via src attr
  // *make sure to use the exact names provided in the css
  //******************************************************************************
  //set function for showResults()
  function showResults(response) {

  }
  //******************************************************************************
  // DISPLAY A PLACEHOLDER ICON WHEN THE API DOES NOT RETURN POSTER DATA
  // *should NOT display broken images
  // *render placeholder icon shown in index.html notes if poster returns 'N/A'
  //******************************************************************************

  //******************************************************************************
  // LET USERS KNOW WHEN SEARCH RETURNS NO MOVIE DATA
  // *if no data returned, display the text "No movies found that math: 'title'"
  // *sample located in index.html
  //******************************************************************************

  //******************************************************************************
  // ADD COMMENTS TO DOCUMENT HOW THE CODE WORKS
  //******************************************************************************

  //******************************************************************************
  // USE JSHINT TO ANALYSE SCRIPT AND IDENTIFY AN ERRORS OR CODE-STYLE PROBLEMS
  //******************************************************************************

  //******************************************************************************
  // MAKE SURE PROGRAM IS FREE OF SYNTAX ERRORS
  //******************************************************************************

  //******************************************************************************
  // XTRA CRED: FILTER SEARCH BY YEAR OF RELEASE
  // *see serach form comments in index.html to display 'year' field
  //******************************************************************************
  //hide year initially
  $('#year').hide();
  //event listener to show year only if the search has a value and lenth
  $('#search').keyup(function() {
    if ($('#search').val().length > 0) {
      $('#year').show();
    } else {
      $('#year').hide();
    }
  });
  //******************************************************************************
  // XTRA CRED: LINK A MOVIE TO ITS IMBD PAGE
  // *wrap the poster image -- or everying in the <li> -- in a <a> tag to link to IMBd
  //******************************************************************************

  //******************************************************************************
  // XTRA CRED: LOAD OR LINK TO A DESCRIPTION PAGE DISPLAYING A MOVIES TITLE, YEAR, POSTER, PLOT INFO AND IMBD RATING
  // *laod or link to a driscription page
  // *write new css for new page
  // *see 'description-page.png' mockup in examples folder
  //******************************************************************************
}();
