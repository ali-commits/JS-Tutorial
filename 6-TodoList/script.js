$('#Todo').sortable({ axis: 'y' });

$('.close').click(function () {
    $(this).parent().hide();
});

$('#Todo li').on('click', function () {
    $(this).toggleClass('checked');
});

$('.addBtn').click(addTask);

$('#myInput').keypress(function (e) {
    if (e.which === 13) {
        addTask();
    }
});

function addTask() {
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
}
