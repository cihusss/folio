var rand;

(function rotateIt() {

	document.querySelectorAll("div.folio-panel").forEach(function(node) {
		rand = Math.floor(Math.random() * 11) - 5;

		if (rand !== 0) {
			node.setAttribute("style", "transform:rotate(" + rand + "deg)");
		}
		else {
			rand = rand - 2;
			node.setAttribute("style", "transform:rotate(" + rand + "deg)");
		}
	});

}());

// jqcloud

var windowWidth = window.innerWidth;
var jqWidth;

if (windowWidth > 640) {
  jqWidth = windowWidth - 20;
}
else {
  jqWidth = 300;
}

var words = [
	{text: "UI", weight: 19},
	{text: "UX", weight: 15},
	{text: "Design", weight: 16},
	{text: "Coding", weight: 12},
	{text: "Photography", weight: 12},
	{text: "Cinematography", weight: 11},
	{text: "Video", weight: 14},
	{text: "Animation", weight: 14},
	{text: "Sound Engineering", weight: 12},
	{text: "Creative Strategy", weight: 14},
	{text: "Creative Direction", weight: 13},
	{text: "Pitching", weight: 12.3},
	{text: "Production", weight: 11},
	{text: "Resource Management", weight: 12},
	{text: "Marketing", weight: 13},
	{text: "Advertising", weight: 13.5},
	{text: "Media Planning", weight: 11},
	{text: "Sketch", weight: 14},
	{text: "HTML5", weight: 15},
	{text: "CSS", weight: 16},
	{text: "Python", weight: 12.5},
	{text: "PHP", weight: 11.5},
	{text: "Wordpress", weight: 11},
	{text: "Basecamp", weight: 12},
	{text: "Slack", weight: 12},
	{text: "MacOS", weight: 12},
	{text: "Linux", weight: 13},
	{text: "Terminal", weight: 12},
	{text: "Concepting", weight: 11},
	{text: "Adobe", weight: 12},
	{text: "Art Direction", weight: 14},
	{text: "Media Campaigning", weight: 10},
	{text: "DCO", weight: 15},
	{text: "Data Visualization", weight: 11},
	{text: "Final Cut Pro", weight: 12},
	{text: "Git", weight: 15},
	{text: "Illustration", weight: 13},
	{text: "Branding", weight: 13},
	{text: "Filming", weight: 11},
	{text: "Editing", weight: 12},
	{text: "Interactive Prototyping", weight: 12},
	{text: "Leadership", weight: 11},
	{text: "Bonsai", weight: 13},
	{text: "AppNexus", weight: 12.5},
	{text: "Google Ad Manager", weight: 12},
	{text: "Javascript", weight: 14},
	{text: "jQuery", weight: 13}


	/* ... */
];

$("#jqcloud").jQCloud(words, {
	width: jqWidth,
	height: 400
});
console.log(words);

/* show more */

function showMore(event) {
	console.log("click");
	var x = document.querySelectorAll(".hidden");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "flex";
	}
	document.getElementById("btn-more").style.display = "none";
}

document.getElementById("btn-more").addEventListener("click", showMore);

/* modal */

function closeModal(event) {
	document.getElementById("modal").style.top = "100%";
	// document.getElementsByClassName("thegrid")[0].style.display = "block";
	document.getElementById("body").style.overflowY = "scroll";
	document.getElementById("close").style.display = "none";
}

function popModal(event) {
	
	console.log("click");
	document.getElementById("modal").scroll(0,0);
	document.getElementById("modal").style.top = "0%";
	// document.getElementsByClassName("thegrid")[0].style.display = "none";
	document.getElementById("body").style.overflowY = "hidden";
	document.getElementById("close").style.display = "block";
}

function popContent(id, data) {
	console.log(id);
	console.log(data);

	// remove images
	images = document.querySelectorAll(".img");
	console.log(images);
	for (let i = 0; i < images.length; i++) {
		images[i].parentNode.removeChild(images[i]);
		console.log("removed!");
	}

	try {
		var client = data.data[id].client;
		var property = data.data[id].property;
		var objective = data.data[id].objective;
		var deliverable = data.data[id].deliverable;
		var skills = data.data[id].skills;
		var overview = data.data[id].overview;
		var link = data.data[id].link;
		var img = data.data[id].img;

		document.getElementById("client").innerHTML = client;
		document.getElementById("property").innerHTML = property;
		document.getElementById("objective").innerHTML = objective;
		document.getElementById("deliverable").innerHTML = deliverable;
		document.getElementById("skills").innerHTML = skills;
		document.getElementById("overview").innerHTML = overview;
		document.getElementById("link").href = link;

		for (let i = 0; i < img.length; i++) {
			console.log("b00");
			var element = document.createElement("img");
			element.src = img[i];
			element.setAttribute("class", "img");
			document.getElementById("modal").appendChild(element);
		}

		popModal();
	}
	catch {
		alert("no data match");
	}

	if (link == "") {
		document.getElementById("link").innerHTML = "";
	}
	else {
		document.getElementById("link").innerHTML = "Details";
	}
}

/* trigger modal/data on panel click */

var elements = document.getElementsByClassName("folio-panel");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", function() {
		// console.log(i);
		getData(i);
	});
}

document.getElementById("close").addEventListener("click", closeModal);

/* parse data */

// get and parse json data
function getData(id) {

	var url = "json/content.json";
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			// success!
			data = JSON.parse(request.responseText);
			popContent(id, data);
		} else {
			// error msg from server
		}
	}

	request.onerror = function() {
		// there was a connection error of some sort
  }

  request.send();
}