        document.getElementById('taskForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var taskInput = document.getElementById('taskInput');
            var taskText = taskInput.value.trim();
            if (taskText !== '') {
                var listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${taskText}</span>
                    <button class="delete-btn">Delete</button>
                `;
                document.getElementById('taskList').appendChild(listItem);
                taskInput.value = '';
            }
        });

        document.getElementById('taskList').addEventListener('click', function(event) {
            if (event.target.classList.contains('delete-btn')) {
                event.target.parentElement.remove();
            }
        });
