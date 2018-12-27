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
	{text: "UI", weight: 14},
	{text: "UX", weight: 10.5},
	{text: "Design", weight: 11},
	{text: "Coding", weight: 8},
	{text: "Photography", weight: 7},
	{text: "Cinematography", weight: 5.8},
	{text: "Video", weight: 11},
	{text: "Animation", weight: 11},
	{text: "Sound", weight: 6},
	{text: "Creative Strategy", weight: 7},
	{text: "Creative Direction", weight: 6},
	{text: "Pitching", weight: 5.8},
	{text: "Production", weight: 7},
	{text: "Resource Management", weight: 6},
	{text: "Marketing", weight: 6.5},
	{text: "Advertising", weight: 7},
	{text: "Media Planning", weight: 5.5},
	{text: "Sketch", weight: 9.4},
	{text: "Html", weight: 10},
	{text: "CSS", weight: 8},
	{text: "Python", weight: 6},
	{text: "PHP", weight: 7},
	{text: "Wordpress", weight: 6},
	{text: "Basecamp", weight: 8},
	{text: "Slack", weight: 6.2},
	{text: "MacOS", weight: 5.8},
	{text: "Linux", weight: 7},
	{text: "Terminal", weight: 8},
	{text: "Concepting", weight: 10},
	{text: "Adobe", weight: 8.2},
	{text: "Art Direction", weight: 8.6}
	/* ... */
];

$('#jqcloud').jQCloud(words, {
	width: jqWidth,
	height: 400
});
console.log(words);