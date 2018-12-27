var rand;

(function rotateIt() {

	document.querySelectorAll('div.folio-panel').forEach(function(node) {
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
  jqWidth = 320;
}

var words = [
	{text: "UI", weight: 15},
	{text: "UX", weight: 10.5},
	{text: "Design", weight: 11},
	{text: "Coding", weight: 8},
	{text: "Photography", weight: 7},
	{text: "Cinematography", weight: 7.5},
	{text: "Video", weight: 11},
	{text: "Animation", weight: 11},
	{text: "Sound Engineering", weight: 8},
	{text: "Creative Strategy", weight: 7},
	{text: "Creative Direction", weight: 8.8},
	{text: "Pitching", weight: 6.5},
	{text: "Production", weight: 7},
	{text: "Resource Management", weight: 7.5},
	{text: "Marketing", weight: 8.5},
	{text: "Advertising", weight: 7},
	{text: "Media Planning", weight: 7},
	{text: "Sketch", weight: 9.4},
	{text: "HTML5", weight: 10},
	{text: "CSS", weight: 14},
	{text: "Python", weight: 6.8},
	{text: "PHP", weight: 7},
	{text: "Wordpress", weight: 6},
	{text: "Basecamp", weight: 8},
	{text: "Slack", weight: 6.2},
	{text: "MacOS", weight: 6.5},
	{text: "Linux", weight: 7},
	{text: "Terminal", weight: 8},
	{text: "Concepting", weight: 10},
	{text: "Adobe", weight: 8.2},
	{text: "Art Direction", weight: 8.6},
	{text: "Media Campaigning", weight: 7.7},
	{text: "DCO", weight: 10},
	{text: "Data Visualization", weight: 9.5},
	{text: "Final Cut Pro", weight: 8},
	{text: "Git", weight: 11},
	{text: "Illustration", weight: 8.7},
	{text: "Branding", weight: 9.2},
	{text: "Filming", weight: 7.2},
	{text: "Editing", weight: 8.2},
	{text: "Interactive Prototyping", weight: 7.9}

	/* ... */
];

$('#jqcloud').jQCloud(words, {
	width: jqWidth,
	height: 400
});
console.log(words);