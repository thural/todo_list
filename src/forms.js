const project = () => {

    const form = document.createElement('div');
    form.id = 'project';
    form.class = 'form';
    //form.style.display = 'none';

    const header = document.createElement('h3');
    header.textContent = 'Add New Task';
    form.appendChild(header);

    const title = document.createElement('input');
    title.type = 'text';
    title.id = title;
    title.maxLength = '30';
    title.placeholder = 'Task';
    title.required = true;
    task.appendChild(title);

    const noteParent = document.createElement('div');
    const note = document.createElement('textarea');
    note.rows = '6';
    note.cols = '50';
    note.maxLength = '300';
    note.placeholder = 'Note';
    noteParent.appendChild(note);
    form.appendChild(noteParent);

    const selectors = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit';
    submitBtn.classList.add('button');
    selectors.appendChild(submitBtn);

    form.appendChild(selectors);

    return form
};

const list = () => {
    const form = document.createElement('div');
    form.id = 'task';
    form.class = 'form';
    //form.style.display = 'none';

    const header = document.createElement('h3');
    header.textContent = 'Add New Task';
    form.appendChild(header);

    const task = document.createElement('div');
    task.classList.add('task');
    const checkboxParent = document.createElement('div');
    checkboxParent.classList.add('checkbox');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxParent.appendChild(checkbox);
    task.appendChild(checkboxParent);

    const title = document.createElement('input');
    title.type = 'text';
    title.id = title;
    title.maxLength = '30';
    title.placeholder = 'Task';
    title.required = true;
    task.appendChild(title);

    const noteParent = document.createElement('div');
    const note = document.createElement('textarea');
    note.rows = '6';
    note.cols = '50';
    note.maxLength = '300';
    note.placeholder = 'Note';
    noteParent.appendChild(note);
    form.appendChild(noteParent);

    const selectors = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit';
    submitBtn.classList.add('button');
    selectors.appendChild(submitBtn);

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'dueDate';
    selectors.appendChild(dueDate);

    const priority = document.createElement('select');
    priority.id = 'priority';

    const options = document.createElement('optgroup');
    const option1 = document.createElement('option');
    option1.value = '1';
    option1.textContent = 'High';
    options.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = '2';
    option2.textContent = 'Medium';
    options.appendChild(option2);

    const option3 = document.createElement('option');
    option3.value = '3';
    option3.textContent = 'Low';
    option3.appendChild(option3);

    priority.appendChild(options);
    selectors.appendChild(priority);

    form.appendChild(selectors);

    return form
};

const test = () => {
    console.log('Hi, Its working!')
};

export default {project,list, test}
