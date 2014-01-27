function Recipe() 
{
	var series = [];
	
	var rss = [];
	
	var directory = "/mnt/data/Series";
	var intervalCount = 1;
	var intervalType = "hour";
	var qualityRangeMin = "NONE";
	var qualityRangeMax = "NONE";
	
	this.setDirectory = function(value)
	{
		directory = value;
	}
	
	this.setIntervalCount = function(value)
	{
		intervalCount = value;
	}
	
	this.setIntervalType = function(value)
	{
		intervalType = value;
	}
	
	this.setQualityRangeMin = function(value)
	{
		qualityRangeMin = value;
	}
	
	this.setQualityRangeMax = function(value)
	{
		qualityRangeMax = value;
	}
	
	this.addSerie = function(value)
	{
		series.push(value);
	}
	
	this.addRss = function (value)
	{
		rss.push(value);
	}
	
	this.toConfig = function()
	{
		var templateString = "templates:";
		
		templateString += "\n  tv:";
		templateString += "\n    download: "+ directory;
		templateString += "\n    exists_series: "+ directory;
		
		if(series.length !=0)
		{
			templateString += "\n    series:";
			
			for(var i=0; i <series.length;i++)
			{
				templateString += "\n        - " + series[i];
			}
		}
		
		var tasksString = "\n";
		if(rss.length !=0)
		{
			tasksString += "\ntasks:";
			for(var i=0; i <rss.length;i++)
			{
				tasksString += "\n  task"+(i+1) + ":";
				tasksString += "\n    priority: " + (i+1);
				tasksString += "\n    rss: " + rss[i];
				tasksString += "\n    template: tv";
				tasksString += "\n    verify_ssl_certificates: no";
			}   
		}
		
		var scheduleString = "\n\nschedule:";
		scheduleString += "\n  - tasks: '*'\n    interval:";
		scheduleString += "\n      " + intervalType + ": " + intervalCount;
		
		return templateString + tasksString + scheduleString + "\n";
	}
};

