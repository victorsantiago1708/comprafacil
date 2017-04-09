// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.2.0.min
//= require_tree .
//= require_self
//= require materialize/js/materialize

if (typeof jQuery !== 'undefined') {
    (function($) {
        $(document).ajaxStart(function() {
            $('.load').fadeIn();
        }).ajaxStop(function() {
            $('.load').fadeOut();
        });
    })(jQuery);

}


