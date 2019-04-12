
$(function () {
    function after_form_submitted(data) {
        if (data.result == 'success') {
            $('form#contactForm').hide();
            $('#success_message').show();
            $('#error_message').hide();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function () {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if (label) {
                    $btn.prop('type', 'submit');
                    $btn.text(label);
                    $btn.prop('orig_label', '');
                }
            });

            $('#showFormBtn').on('click', function () {
                $('#success_message').hide();
                $('#error_message').hide();
                $('form#contactForm').trigger("reset");
                $('form#contactForm').show();
            })

            /* $('form#contactForm').addClass("hidden");
            $('#success_message').addClass("visible animate bounceInRight");
            $('#error_message').addClass("hidden"); */

        }
        else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors, function (key, val) {
                $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();
            $('#showFormBtn').on('click', function () {
                $('#success_message').hide();
                $('#error_message').hide();
            })


            /* $('form#contactForm').addClass("hidden");
            $('#success_message').addClass("hidden");
            $('#error_message').addClass("visible animate bounceInRight"); */

            //reverse the response on the button
            $('button[type="button"]', $form).each(function () {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if (label) {
                    $btn.prop('type', 'submit');
                    $btn.text(label);
                    $btn.prop('orig_label', '');
                }
            });

        }//else
    }

    $('#contactForm').submit(function (e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function () {
            $btn = $(this);
            $btn.prop('type', 'button');
            $btn.prop('orig_label', $btn.text());
            $btn.text('Enviando...');
        });


        $.ajax({
            type: "POST",
            url: 'handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json'
        });

    });
});
