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
  }); // end submit
  //******************************************************************************
  // *** - DONE - *** DISPLAY SEARCH RESULTS ON THE PAGE
  // *** - DONE - *** *data should load inside the #movies <ul>
  // *** - DONE - *** *see comments in index.html for samples that need to be dynamically created
  // *** - DONE - *** *each movie returned render an <li> dipslaying:
  //    *** - DONE - *** **movie title
  //    *** - DONE - *** **year of release
  //    *** - DONE - *** **movie poster
  //        *** - DONE - *** ***render an <img> taht displays a poster image via src attr
  // *** - DONE - *** *make sure to use the exact names provided in the css
  //******************************************************************************
  //set function for showResults()
  function showResults(response) {
    $('#movies').html('');
    console.log(response);
    if (response.Error) {
      var errorHTML = '<li class="no-movies"><i class="material-icons icon-help">help_outline</i>No movies found that match: ' + $('#search').val() +'.</li>';
      $('#movies').append(errorHTML);
    } // end showResults
    //set up html format for each response
    var resultHTML = '<li class="movie-list">';
    $.each(response.Search, function(i, movie) {
      if (movie.Poster === 'N/A') {
        resultHTML += '<a href="http://www.imdb.com/title/' + movie.imdbID + '"><div class="poster-wrap"><i class="material-icons poster-placeholder">crop_original</i></div>';
      } else {
          resultHTML += '<a href="http://www.imdb.com/title/' + movie.imdbID + '"><div class="poster-wrap"><img class="movie-poster" src="' + movie.Poster + '"></div>';
      }
      resultHTML += '<span class="movie-title">' + movie.Title + '</span>';
      resultHTML += '<span class="movie-year">' + movie.Year + '</span></a>';
    }); // end each
    resultHTML += '</li>';
    $('#movies').append(resultHTML);
  }
  //******************************************************************************
  // *** - DONE - *** DISPLAY A PLACEHOLDER ICON WHEN THE API DOES NOT RETURN POSTER DATA
  // *** - DONE - *** *should NOT display broken images
  // *** - DONE - *** *render placeholder icon shown in index.html notes if poster returns 'N/A'
  //******************************************************************************

  //******************************************************************************
  // *** - DONE - *** LET USERS KNOW WHEN SEARCH RETURNS NO MOVIE DATA
  // *** - DONE - *** *if no data returned, display the text "No movies found that math: 'title'"
  // *** - DONE - *** *sample located in index.html
  //******************************************************************************

  //******************************************************************************
  // *** - DONE - *** ADD COMMENTS TO DOCUMENT HOW THE CODE WORKS
  //******************************************************************************

  //******************************************************************************
  // *** - DONE - *** USE JSHINT TO ANALYSE SCRIPT AND IDENTIFY AN ERRORS OR CODE-STYLE PROBLEMS
  //******************************************************************************

  //******************************************************************************
  // *** - DONE - *** MAKE SURE PROGRAM IS FREE OF SYNTAX ERRORS
  //******************************************************************************

  //******************************************************************************
  // *** - DONE - *** XTRA CRED: FILTER SEARCH BY YEAR OF RELEASE
  // *** - DONE - *** *see serach form comments in index.html to display 'year' field
  //******************************************************************************
  //hide year initially
  $('#year').hide();
  //event listener to show year only if the search has a value and lenth
  $('#search').keyup(function() {
    if ($('#search').val().length > 0) {
      $('#year').show();
    } else {
      $('#year').val('');
      $('#year').hide();
    }
  }); // end search keyup
  //******************************************************************************
  // *** - DONE - *** XTRA CRED: LINK A MOVIE TO ITS IMBD PAGE
  // *** - DONE - *** *wrap the poster image -- or everying in the <li> -- in a <a> tag to link to IMBd
  //******************************************************************************

}(); // end iife
