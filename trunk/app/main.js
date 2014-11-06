// Create recipe and download file
var r = new Recipe();

function downloadRecipe()
{
	createRecipe();
	console.log(r.toConfig().toString());
	
	var blob = new Blob([r.toConfig().toString()], {type: "application/x-yml;charset=utf-8"});
	saveAs(blob, "config.yml");
};

function createRecipe()
{
	r = new Recipe();
	
	// Series
	for(var i=0;i<document.getElementsByClassName("serie").length;i++)
		r.addSerie(document.getElementsByClassName("serie")[i].innerHTML);
	
	// RSS
	for(var i=0;i<document.getElementsByClassName("rss").length;i++)
		r.addRss(document.getElementsByClassName("rss")[i].innerHTML);
	
	// Settings
	var directory = document.getElementById("inputDirectory").value;
	if(directory == "" || directory == null)
		return alert("Torrent Download Directory is empty, to create a valid recipe, you must input a value on the settings page first");
	else
		r.setDirectory(directory);
	
	r.setIntervalCount(document.getElementById("inputIntervalCount").value);
	r.setIntervalType(document.getElementById("inputIntervalType").value);
	
	r.setQualityRangeMin(document.getElementById("inputQualityRangeMin").value);
	r.setQualityRangeMax(document.getElementById("inputQualityRangeMax").value);
	
};

function emailRecipe()
{
	createRecipe();
	console.log(r.toConfig().toString());
	
	// https://mandrillapp.com/api/docs/
	// http://www.codecademy.com/courses/javascript-beginner-en-EID4t/0/1?curriculum_id=5122e6f8b2cb8a8e97000a01
};

// Add, remove, reorder Series and RSS

function removeSerie(context)
{
	return removeClosesTr(context)
};

function removeRss(context)
{
	$(context).closest('tr').remove();
	console.log('reordering...');
	addOrderOnRssTable();
	return false;
};

function removeClosesTr(context)
{
	$(context).closest('tr').remove(); 
	return false;
};

function addOrderOnRssTable()
{
	for(var i=0;i<document.getElementsByClassName("rssOrder").length;i++)
		document.getElementsByClassName("rssOrder")[i].innerHTML = (i+1) + '.';
};

function addSerie()
{
	var inputSeriesName = document.getElementById("inputSeriesName").value;
	addSerieWithDescription(inputSeriesName);
	document.getElementById("inputSeriesName").value = "";
};

function addSerieWithDescription(desciption)
{
	$( "#tbodySeries" ).append( "<tr><td class='serie'>" + desciption + "</td><td><button onclick='removeSerie(this); return false;' type='submit' class='btn btn-default btn-sm' style='margin-left:12px'><span class='glyphicon glyphicon-minus'></span></button></td></tr>" );
};

function addRss()
{
	var inputFeedUrl = document.getElementById("inputFeedUrl").value;
	addRssWithUrl(inputFeedUrl);
	document.getElementById("inputFeedUrl").value = "";
};

function addRssWithUrl(url)
{
	var number = (document.getElementsByClassName("rss").length + 1) + "."
	$( "#tbodyRss" ).append("<tr><td class='rssOrder'>" + number + "</td><td class='rss'>" + url + "</td><td><button type='submit' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-arrow-up'></span></button></td><td><button type='submit' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-arrow-down'></span></button></td><td><button onclick='removeRss(this);return false;' type='submit' class='btn btn-default btn-sm' style='margin-left:12px'><span class='glyphicon glyphicon-minus'></span></button></td></tr>");
};

function moveRssDown(context)
{
	var closestTr = $(context).closest('tr');
	var closestNextTr = $(context).closest('tr').next()
	if(closestNextTr.length!=0)
	{
		closestTr.remove();
		closestTr.insertAfter(closestNextTr);
		addOrderOnRssTable();
	}
};

function moveRssUp(context)
{
	var closestTr = $(context).closest('tr');
	var closestNextTr = $(context).closest('tr').prev()
	console.log('up');
	console.log(closestNextTr);
	console.log(closestTr);
	if(closestNextTr.length!=0)
	{
		console.log('not first');
		closestTr.remove();
		closestTr.insertBefore(closestNextTr);
		addOrderOnRssTable();
	}
};

// Tab show/hide functions
function showFeeds()
{
	$( "#series" ).hide();
	$( "#settings" ).hide();
	$( "#feeds" ).show();
	
	$('#settingsButton').removeClass();
	$('#seriesButton').removeClass();
	$('#feedsButton').addClass("active");
};

function showSeries()
{
	$( "#feeds" ).hide();
	$( "#settings" ).hide();
	$( "#series" ).show();
	
	$('#settingsButton').removeClass();
	$('#feedsButton').removeClass();
	$('#seriesButton').addClass("active");
};

function showSettings()
{
	$( "#feeds" ).hide();
	$( "#series" ).hide();
	$( "#settings" ).show();
	
	$('#seriesButton').removeClass();
	$('#feedsButton').removeClass();
	$('#settingsButton').addClass("active");
};

$(document).ready(function () {
	//$('#loginModal').modal('show');
	$( "#feeds" ).hide();
	$( "#settings" ).hide();
	$( "#series" ).show();
});