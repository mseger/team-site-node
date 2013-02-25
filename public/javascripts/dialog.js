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