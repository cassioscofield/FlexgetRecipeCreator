$(function() 
{ 
	var sampleSeries = [ 
	'Game of Thrones'
	,'2 Broke Girls'
	,'24'
	,'30 Rock'
	,'90210'
	,'Agents of S.H.I.E.L.D.'
	,'Almost Human'
	,'American Horror Story'
	,'Archer'
	,'Arrested Development'
	,'Arrow'
	,'Banshee'
	,'Bates Motel'
	,'Battlestar Galactica'
	,'Beauty and the Beast'
	,'Being Human'
	,'Bitten'
	,'Black Sails'
	,'Blue Bloods'
	,'Boardwalk Empire'
	,'Bones'
	,'Breaking Bad'
	,'Brooklyn Nine-Nine'
	,'Californication'
	,'Castle'
	,'Chicago Fire'
	,'Chicago PD'
	,'Chuck'
	,'Community'
	,'Criminal Minds'
	,'CSI: Crime Scene Investigation'
	,'Dexter'
	,'Doctor Who'
	,'Downton Abbey'
	,'Dracula'
	,'Elementary'
	,'Enlisted'
	,'Entourage'
	,'Episodes'
	,'Falling Skies'
	,'Firefly'
	,'Friday Night Lights'
	,'Fringe'
	,'Girl Meets World'
	,'Girls'
	,'Glee'
	,'Gossip Girl'
	,'Greys Anatomy'
	,'Grimm'
	,'Hannibal'
	,'Hart of Dixie'
	,'Hawaii Five-0'
	,'Helix'
	,'Heroes'
	,'Homeland'
	,'House M.D.'
	,'House of Cards'
	,'House of Lies'
	,'How I Met Your Mother'
	,'Intelligence'
	,'Its Always Sunny in Philadelphia'
	,'Justified'
	,'Killer Women'
	,'Leverage'
	,'Looking'
	,'Lost'
	,'Lost Girl'
	,'Luther'
	,'Mad Men'
	,'Malcolm in the Middle'
	,'Masters of Sex'
	,'Mob City'
	,'Modern Family'
	,'Mr Selfridge'
	,'Nashville'
	,'NCIS'
	,'NCIS: Los Angeles'
	,'New Girl'
	,'Once Upon a Time'
	,'One Tree Hill'
	,'Orange Is the New Black'
	,'Parenthood'
	,'Parks and Recreation'
	,'Person of Interest'
	,'Pretty Little Liars'
	,'Prison Break'
	,'Psych'
	,'Rake'
	,'Ravenswood'
	,'Reign'
	,'Revenge'
	,'Revolution'
	,'Scandal'
	,'Scrubs'
	,'Shameless'
	,'Sherlock'
	,'Sleepy Hollow'
	,'Smallville'
	,'Sons of Anarchy'
	,'Spartacus: War of the Damned'
	,'Suburgatory'
	,'Suits'
	,'Supernatural'
	,'Switched at Birth'
	,'Teen Wolf'
	,'The Big Bang Theory'
	,'The Blacklist'
	,'The Carrie Diaries'
	,'The Following'
	,'The Fosters'
	,'The Good Wife'
	,'The Killing'
	,'The Mentalist'
	,'The Middle'
	,'The Mindy Project'
	,'The Musketeers'
	,'The O.C.'
	,'The Office'
	,'The Originals'
	,'The Strain'
	,'The Tomorrow People'
	,'The Tudors'
	,'The Vampire Diaries'
	,'The Walking Dead'
	,'The Wire'
	,'True Blood'
	,'True Detective'
	,'Two and a Half Men'
	,'Under the Dome'
	,'Veronica Mars'
	,'Vikings'
	,'Weeds'
	,'White Collar'
	,'Workaholics'
	]; 
	$("#inputSeriesName" ).autocomplete(
			{ 
				source: sampleSeries,
				messages: 
				{
					noResults: '',
					results: function() {}
				} 
			}
		); 
}); 