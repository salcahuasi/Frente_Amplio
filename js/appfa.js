
$(document).ready(function(){

	var useruid = window.location.hash.substring(1);
	  console.log(useruid); 

	    firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	            var containerContact = $('#follower-other');
	                   var usercod = user.uid;
	                   console.log(usercod);
				    firebase.database().ref('/user/' + usercod + '/data').on('value', function(snapshot) {
				       console.log(snapshot.child('photo').val());
				       console.log(snapshot.child('name').val());
				       console.log(snapshot.val().photo);
				       console.log(snapshot.val().name);

						
						var userPhoto = $('<img>', {
						  'class': 'responsive-img circle',
						  'src': snapshot.val().photo
						});

						var pName = $('<h5/>', {
						  'class': 'user-name-profile',
						}).text(snapshot.val().name);

						var pAnnex = $('<h5/>', {
						  'class': 'user-annex-profile',
						}).text(snapshot.val().annex);


						$('#user-photo').append(userPhoto);
						$('#user-name').append(pName);
						$('#user-annex').append(pAnnex);
				    });
	        }
	    });
	
	   $('#signout').click(function(){
		 	      
	       firebase.auth().signOut().then(function() {
			  // Sign-out successful.
			   window.location.href = 'register.html';
			}).catch(function(error) { 
			  // An error happened.
		    });
	   });
		
});