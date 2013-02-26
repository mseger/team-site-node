// Dialog Form
$("#dialog-form").dialog({
  autoOpen: false,
  height: 250,
  width: 600,
  modal: true,
});

// Popup Trigger
$("#open-form" )
  .click(function() {
    $( "#dialog-form" ).dialog( "open" );
});

// Hide Dialog Titlebar
$(".ui-dialog-titlebar").hide()     

// Remove Styling for Text Input
$("#name").accordion({ clearStyle: true });

// Post Button
$("#button-idea").click(function() {
	var name = $("#name").val();
	var idea = $("#idea").val();
	console.log(name);

	$.post('/ideas/new', {'name': name, 'idea': idea}, function() {
		$( "#dialog-form" ).dialog( "close" );
		location.reload(true);
	});
});

