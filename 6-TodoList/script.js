$('#Todo').sortable({ axis: 'y' });

$('#Todo').on('click', '.close', function () {
    $(this).parent().remove();
});

$('#Todo').on('click', 'li', function () {
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
