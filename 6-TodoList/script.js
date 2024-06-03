$('#Todo').sortable({axis: 'y'});

$('.close').click(function () {$(this).parent().hide()});

$('#Todo').on('click', 'li', function () {$(this).toggleClass('checked')});

$('.addBtn').click(function () {
    let inputValue = $('#myInput').val();
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let task = $('<li></li>').html(
            '<span class="task">' + inputValue + '</span>'
        );
        let closeBtn = $('<span></span>').addClass('close').text('🗑');
        task.append(closeBtn);
        $('#Todo').append(task);
        $('#myInput').val('');
    }
});
