window.onload = function() {
  if (typeof(jsToolBar) != "undefined") {
jsToolBar.prototype.elements.repo={
	type:"button",title:"Add Repository link",fn:{wiki:function(){$(function() {
	$dialog = $('<div></div>')
               .html('<iframe style="border: 0px; " src="jqueryfiletree/show?dir="" width="100%" height="100%"></iframe>')
               .dialog({
                   autoOpen: false,
                   modal: false,
                   height: 400,
                   width: 300,
                   title: "Repository browser",
		   resizable: true
               });
$dialog.dialog('open');
});}}}

    //Move help to the end for optical readons
    e = jsToolBar.prototype.elements
    help = e.help
    delete e.help
    jsToolBar.prototype.elements.help = help

    // redraw toolbar to get the new buttons to show
    wikiToolbar.draw();
  }
};
