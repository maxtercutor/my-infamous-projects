$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
    
$('input[type="tel"]').mask("8(999) 999 99 99");
    
$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(2); 
});

$('form').on("submit", function(e) {
    e.preventDefault();

    var form = $(this),
        name = form.find('input[type="text"]'),
        tel = form.find('input[type="tel"]'),
        btn = form.find('button[type="submit"]');
    
    btn.attr('disabled', true).addClass('disabled');

    var data = form.serialize();

    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: data,
    }).done(function(data) {
        $('.modal-header button.close').click();

        console.log("Ok! " + data);

        setTimeout(function() {
            $('#modalSuccess').find('p.date').html('<p>Ваша заявка получена ' + (new Date().toLocaleString()) + '</p>');
            $('#modalSuccess').modal('show');
        }, 2000);

        form.find('input').val('');
        btn.removeAttr('disabled').removeClass('disabled'); 
    }).fail(function() {
        $('.modal-header button.close').click();

        console.log("Error from mail!!!" + data);

        setTimeout(function() {
            $('#modalError').modal('show');
        }, 2000);

        btn.removeClass('disabled');
        btn.removeAttr('disabled').removeClass('disabled'); 
    });
});
