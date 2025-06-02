document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('taskInput');
    const btn = document.getElementById('addBtn');
    const list = document.getElementById('taskList');

    btn.addEventListener('click', () => {
        if (input.value.trim() === '') return;
        const li = document.createElement('li');
        li.textContent = input.value;
        const delBtn = document.createElement('button');
        delBtn.textContent = '❌';
        delBtn.onclick = () => list.removeChild(li);
        li.appendChild(delBtn);
        list.appendChild(li);
        input.value = '';
    });
});
