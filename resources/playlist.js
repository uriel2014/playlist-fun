/* It is time to start the javascript after the main heading of the
webpage styling*/

/*We need to start the playlist with coding */


var Trackster = {};

/* Set the main variable of trackster as an object*/

/* Our goal is to utilize the search key to search for a track. We need to
program the search button to search for the track. Then we need to render the
track and make the correspondence to the search */


const API_KEY = '336a3737af9be634072f5a4c03d2c607';



$(document).ready(
	function() {
  $('#search-button').click(function() {
Trackster.searchTracksByTitle($('#search-input').val());
  });
});

/* Once you click the id attribute referenced, it will activate the function to
search the track name by title in the id attribute search input */

/*-----------------------------------------------------------------------------
-------------------------------------------------------------------------------
----------------------------------------------------------------------------*/
/* Create a section that renders the track by setting the main variable
Trackster.renderTracks and set equal to a functions that takes in the value
of tracks. This is because we will be searching a search button and taking in
a value tracks as it searches.*/

Trackster.renderTracks = function(tracks) {
  var $trackList = $('#track-list');
/* Here we set the variable equal to the id attribute in the html page*/

	$trackList.empty();
	/* Here we empty the prjoject to start from scratch*/


/*Lets create a for loop to create a trackIndex of the trackss and put the
track as an array. */

	for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
var track = tracks[trackIndex];

		    var mediumAlbumArt = track.image[1]["#text"];
/* Select a variable to represent the AlbumArt the next entry of the array */

			    var htmlTrackRow =
 '<div class="row track">' +
'  <div class="col-xs-1 col-xs-offset-1 play-button">' +
 '    <a href="'+ track.url + '" target="_blank">' +
 '<i class="fa fa-play-circle-o fa-2x"></i>' +
 '    </a>' +
      '  </div>' +
      '  <div class="col-xs-4">' + track.name + '</div>' +
      '  <div class="col-xs-2">' + track.artist + '</div>' +
      '  <div class="col-xs-2"><img src="' + mediumAlbumArt + '"/></div>' +
      '  <div class="col-xs-2">' + track.listeners + '</div>' +
      '</div>';

/* Create a variable to write out the whole Track Row with classes row and track.
in the next line we have bootstrap styling and offsetting a play-button in col 2 This
will all be in a div. In the div we place a link with href equal to track.url.
Next we place an icon to be pressed when link is activated. This will close off
the second column.

Next we need to add to the other column of the row. So we fo to the next column and
track.name will be placed there and span 4 column spaces. After that a col span of 2
will be for track.artist. After that a col span of 2 will be for the mediumAlbumArt.
to make up the last two columns we add the track.listeners. Thus this will end the
htmlTrackRow*/

/* Next we append the trackRow to the trackList*/

   $trackList.append(htmlTrackRow);
  }

};

/*these will render the tracks to the id attribute of tracklist*/


Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
			/*information that matches will render the tracks to the placed in the tracklist */
    }
  });
};
