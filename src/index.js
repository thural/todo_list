import forms from './forms';
import style from './style.css';
import plusImg from './icons/plus-thick.svg';
import deleteImg from './icons/trash-can-outline.svg';
import pencilImg from './icons/pencil.svg';

const formElems = forms;

const content = document.querySelector('.content');
const deleteIcon = deleteImg;
const plusIcon = plusImg;
const pencilIcon = pencilImg;

const projectSection = document.querySelector('.projects');

//// List Class ///////////////////////////////////////////////////////////////
class List {
    constructor(projectName, index) {
        this.index = index;
        this.title = document.getElementById("title").value;
        this.note = document.querySelector('.form textarea').value;
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

        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        node.appendChild(checkbox);

        const checkInput = document.createElement('input');
        checkInput.type = 'checkbox';
        checkInput.id = 'checkmark';
        checkInput.checked = this.done;
        checkbox.appendChild(checkInput);

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
//// Project Class ////////////////////////////////////////////////////////////////
class Project {
    constructor(name) {
        this.name = name;
        this.title = document.getElementById("title").value;
        this.note = document.querySelector('.form textarea').value;
        this.lists = {};
        this.node = this.buildNode()
    }

    add() {
        const newList = new List(this.name, Object.keys(this.lists).length);
        this.lists[Object.keys(this.lists).length] = newList;
        this.node.appendChild(newList.node);
        content.appendChild(this.node)
    }

    buildNode() {
        const node = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = this.title;
        node.appendChild(title);

        const note = document.createElement('p');
        note.textContent = this.note;
        node.appendChild(note);

        node.classList.add('summary');

        return node

    }

};
//// Projects Class ///////////////////////////////////////////////////////////////
class Projects {
    constructor() {
        this.projects = {};
        this.node = this.buildNode();
    }

    add() {
        const name = document.querySelector('#project .title > input').value;
        this.projects[name] = new Project(name);
        this.node.appendChild(this.projects[name].node);
        console.log(this);
    }

    buildNode() {
        const node = document.createElement('div');

        const panel = document.createElement('div');
        const header = document.createElement('h2');
        header.textContent = 'Projects';
        panel.appendChild(header);

        const plusBtn = document.createElement('img');
        plusBtn.src = plusIcon;
        plusBtn.addEventListener('click', () => openProjectForm());
        panel.appendChild(plusBtn);

        node.appendChild(panel);


        for (key in this.projects) {

            const project = document.createElement('div');

            const title = document.createElement('h3');
            title.textContent = this[key].title;
            project.appendChild(title);

            const editBtn = document.createElement('img');
            editBtn.src = pencilIcon;
            project.appendChild(editBtn);

            const deleteBtn = document.createElement('img');
            deleteBtn.src = deleteIcon;
            project.appendChild(deleteBtn)

            node.appendChild(project);
        }

        return node
    }

};

//// Classes End////////////////////////////////////////////////////////////////////

let projects = new Projects();
projectSection.appendChild(projects.node);

forms.sayHi();