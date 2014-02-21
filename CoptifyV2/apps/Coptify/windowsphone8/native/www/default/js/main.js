
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	document.getElementById("header").style.cssText = "height:4em;";
	$("#feedTextarea").hide();
}

$(window).on('load', function () {
    $(this).trigger('resize');
});


	/*document.getElementById("content").style.cssText = 
		"margin-top:";+document.getElementById("header").style.height+";";

*/
var feedOpen = false;
$("#head-icon").mousedown(function(){
	document.getElementById("head-icon").src = "images/head-icon-touch.png";
}).mouseup(function(){
	document.getElementById("head-icon").src = "images/head-icon.png";
}).mouseout(function() {
	document.getElementById("head-icon").src = "images/head-icon.png";
});
function openFeed(){
	if(!feedOpen)
	{
		$("#header").animate({height:"30em"});
		$("#feedTextarea").show();
		feedOpen = true;
	}
	else
	{
		$("#header").animate({height:"4em"});
		feedOpen = false;
	}
	/*$.mobile.changePage( "#FeedPage", {
	    transition: "slideup",
	    reverse: true
	});*/
	
}

function closeFeed(){
	$.mobile.changePage( "#HomePage", {
	    transition: "slidedown",
	    reverse: true
	});
	
}
//For Call-Icon
$("#call-icon").mousedown(function(){
	document.getElementById("call-icon").src = "images/call-icon-touch.png";
}).mouseup(function(){
	document.getElementById("call-icon").src = "images/call-icon.png";
	$.mobile.changePage( "#CallPage", {
	    transition: "slide",
	    reverse: false
	});
}).mouseout(function() {
	document.getElementById("call-icon").src = "images/call-icon.png";
});

//For Camera-icon
$("#camera-icon").mousedown(function(){
	document.getElementById("camera-icon").src = "images/camera-icon-touch.png";
}).mouseup(function(){
	document.getElementById("camera-icon").src = "images/camera-icon.png";
	alert("Open Camera");
	captureCamera();
}).mouseout(function() {
	document.getElementById("camera-icon").src = "images/camera-icon.png";
});

//For EditImage-icon
$("#edit-icon").mousedown(function(){
	document.getElementById("edit-icon").src = "images/editimage-icon-touch.png";
}).mouseup(function(){
	document.getElementById("edit-icon").src = "images/editimage-icon.png";
	alert("edit image");
}).mouseout(function() {
	document.getElementById("edit-icon").src = "images/editimage-icon.png";
});


//For contact-icon
$("#contact-icon").mousedown(function(){
	document.getElementById("contact-icon").src = "images/contact-icon-touch.png";
}).mouseup(function(){
	document.getElementById("contact-icon").src = "images/contact-icon.png";
	$.mobile.changePage( "#ContactPage", {
	    transition: "slide",
	    reverse: false
	});
}).mouseout(function() {
	document.getElementById("contact-icon").src = "images/contact-icon.png";
});

//choose method to add image
function AddNewImage(){
	captureCamera();
}


//Capture the image
function captureCamera() {	
	alert("55");
	console.log("in capturePhoto()");
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 10,
      destinationType: navigator.camera.DestinationType.DATA_URL });
 }

//success callBack.
function onPhotoDataSuccess(imageData) {
	console.log("in onPhotoDataSuccess()");
	var smallImage = $('#captareImageImg');	
	$('#captareImageImg').attr('src', "data:image/jpeg;base64," + imageData);
	smallImage.src = "data:image/jpeg;base64," + imageData;
	smallImage.show();
  }

//failed callBack.
function onFail(message) {
	console.log("in onFail() - " + message);
    // alert('Failed because: ' + message);
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = document.getElementById("listview");
ul.onclick = function(event) {
    var target = getEventTarget(event);
    var listarray = target.innerHTML.split("<br>");
    alert(listarray[0]);
    alert(listarray[1]);
    $.mobile.changePage( "#dialogContact", {
	    transition: "fade",
	    reverse: false
	});
    document.getElementById('dialogPNO').innerHTML = listarray[0];
    document.getElementById('dialogName').innerHTML = listarray[1];
    document.getElementById('buttonCall').href = "tel:"+listarray[0];
};
/* JavaScript content from js/main.js in folder windowsphone8 */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}