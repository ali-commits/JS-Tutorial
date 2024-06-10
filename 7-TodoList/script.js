function addTask() {
    let inputValue = $('#myInput').val();
    if (inputValue == '') {
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

// 1. Add a new task to the list when the user clicks the "Add" button.
$('.addBtn').click(addTask);

// 2. Add a checkmark to a task when the user presses the "Enter" key on the keyboard.
$('#myInput').keypress(function (e) {
    if (e.which === 13) {
        addTask();
    }
});

// 3. Remove a task from the list when the user clicks the "Remove" button.
$('#Todo').on('click', '.close', function () {
    $(this).parent().hide();
});

$('.close').on('click', function () {
    $(this).parent().hide();
});

// 4. Change the background color of a task when the user clicks it and add a strikethrough line to the text. (marked as completed)
// 5. Change the background color of a task back to white when the user clicks it again and remove the strikethrough line from the text. (marked as incomplete)
$('#Todo').on('click', 'li', function () {
    $(this).toggleClass('checked');
});

// 6. Reorder the tasks in the list by dragging and dropping them.

$('#Todo').sortable({
    axis: 'y',
});
$('#Todo').disableSelection();

// Homework
// 7. Add a "Clear All" button that removes all tasks from the list.

$('#delete').click(function () {
    $('li').remove();
});
