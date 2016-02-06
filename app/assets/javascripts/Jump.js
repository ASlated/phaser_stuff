$( document ).ready(function(){
 
    // Sets up click behavior on all button elements with the alert class
    // that exist in the DOM when the instruction was executed
    $( "#jump_link" ).on( "click", function() {
        console.log( "A button with the alert class was clicked!" );
    });

});