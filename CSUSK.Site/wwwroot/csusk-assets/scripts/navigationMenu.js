$('li.dropdown :first-child').not('.textonly').on('click', function () {
    var $el = $(this).parent();
    if ($el.hasClass('open')) {
        var $a = $el.children('a.dropdown-toggle');
        if ($a.length && $a.attr('href')) {
            location.href = $a.attr('href');
        }
    }
});

$('.navbar-nav a[href^="' + location.pathname + '"]')
    .each(function (i, element) {
        var href = $(element).attr('href');
        if (href == location.pathname || href == location.pathname + decodeURIComponent(location.search)) {
            $(element).parent().addClass('active');
        }
    }
);