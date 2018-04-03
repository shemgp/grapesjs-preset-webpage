$(function () {
    // remove borders when added by bug which adds borders on newly added divs
    $('div').on('click', function () {
        $('#wrapper div').each (function () {
            if ($(this).attr('style') == 'top:0;right:0;left:0;bottom:0;max-width:autopx;border:solid black;perspective:0;')
                $(this).removeAttr('style');
        });
    });
})
