import style from './style.css';
import deleteImg from './icons/trash-can-outline.svg';

const content = document.querySelector('.content');
const deleteIcon = deleteImg;

class List {
    constructor(projectName, index) {
        this.index = index;
        this.title = document.getElementById("title").value;
        this.note = document.querySelector('#form textarea').value;
        this.project = projectName;
        this.priority = document.getElementById("priority").value;
        this.done = document.getElementById("done").checked;
        this.node = this.buildNode()
    }

    deleteList(node) {
        delete projects[this.project].lists[this.index];
        node.parentElement.remove();
    }

    buildNode() {
        const node = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkmark';
        checkbox.checked = this.done;
        node.appendChild(checkbox);

        const header = document.createElement('p');
        header.textContent = this.title;
        node.appendChild(header);

        const deleteBtn = document.createElement('img');
        deleteBtn.id = "delete";
        deleteBtn.src = deleteIcon;
        deleteBtn.addEventListener("click", () => this.deleteList(deleteBtn));
        node.appendChild(deleteBtn);

        node.classList.add('task');

        node.addEventListener('mouseenter', () => deleteBtn.classList.toggle('fadeIn'));
        node.addEventListener('mouseleave', () => deleteBtn.classList.toggle('fadeIn'));

        return node
    }
};

class Project {
    constructor(name) {
        this.name = name;
        this.lists = {};
        this.node = document.createElement('div')
    }

    add() {
        const newList = new List(this.name, Object.keys(this.lists).length);
        this.lists[Object.keys(this.lists).length] = newList;
        this.node.appendChild(newList.node);
        content.appendChild(this.node)
    }

};

class Projects {
    constructor() {}

    add(name) {
        this[name] = new Project(name)
    }
};

////////////////////////////////////////////////////////////////////////

let projects = new Projects();
projects.add('home');

function openForm() {
    document.querySelector(".formBkg").style.display = "block";
    document.querySelector("#form").style.display = "flex"
};

function closeForm() {
    document.querySelector(".formBkg").style.display = "none";
    document.querySelector("#form").style.display = "none"
};

document.addEventListener('keydown', event => {
    if (event.key == 'Escape') closeForm()
});

const newBtn = document.querySelector('#newTask');
newBtn.addEventListener('click', () => openForm());

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => projects.home.add());