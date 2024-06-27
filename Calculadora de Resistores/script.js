jQuery(document).ready(function($) {
    $('.colorSelect').on('change', function() {
        var selectedOption = $(this).find('option:selected');
        var bgColor = selectedOption.css('background-color');
        var textColor = selectedOption.css('color');
        $(this).css('background-color', bgColor);
        $(this).css('color', textColor);
    });
});