var Cc = Components.classes;
var Ci = Components.interfaces;


/* Get the URI of the player (due to Flash security) */
var em = Components.classes["@mozilla.org/extensions/manager;1"].
         getService(Components.interfaces.nsIExtensionManager);
var file = em.getInstallLocation('nicofox@littlebtc').getItemFile('nicofox@littlebtc', "player/nicofox_player.htm");

var uri = Cc["@mozilla.org/network/io-service;1"]
.getService(Ci.nsIIOService).newFileURI(file);

var player_src = uri.spec;

function load()
{

	/* Find the path */
	if(!window.arguments || !window.arguments[0])
	{
		return;
	}
  document.title = window.arguments[0].title + ' - NicoFox Player';
  browser = document.createElement("browser");
  browser.setAttribute("id", "sample-browser");
  browser.setAttribute("name", "sample-browser");
//  browser.setAttribute("type", "content-primary");
  browser.setAttribute("width", "520");
  browser.setAttribute("height", "500");
  document.documentElement.appendChild(browser);
  // set restrictions as needed
  browser.webNavigation.allowAuth = true;
  browser.webNavigation.allowImages = true;
  browser.webNavigation.allowJavascript = true;
  browser.webNavigation.allowMetaRedirects = true;
  browser.webNavigation.allowPlugins = true;
  browser.webNavigation.allowSubframes = false;


// load a page
 browser.contentDocument.location.href = player_src+'?video='+encodeURI(window.arguments[0].video)+'&comment='+encodeURI(window.arguments[0].comment);

}
