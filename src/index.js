const content = document.querySelector('.content');

class List {
    constructor(name) {
        this.title = document.getElementById("title").value;
        this.project = name;
        this.priority = document.getElementById("priority").value;
        this.done = document.getElementById("done").checked
    }
    showForm() {

    }

    deleteList(deleteBtn) {
        delete this;
        deleteBtn.parentElement.remove()
        console.log(projects.home)
    }

    newListElem () {
        const list = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkmark';
        checkbox.checked = 'false';
        list.appendChild(checkbox);
        const header = document.createElement('h2')
        header.textContent = this.title;
        list.appendChild(header)
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", () => this.deleteList(deleteBtn));
        list.appendChild(deleteBtn);
        return list
    }
};

class Project {
constructor(name){
    this.name = name;
    this.lists = [];
    this.listElems = document.createElement('div')
}
    addList() {
        this.lists.push(new List(this.name))
    }

    appendLists() {
        this.lists.forEach(list => {
        this.listElems.appendChild(list.newListElem())
        })
    }

    appendProject() {
        this.appendLists();
        content.appendChild(this.listElems)
    }

};

class Projects {
    constructor() {}

    add(name) {
        this[name] = new Project(name)
    }
};

let projects = new Projects();
projects.add('home');
console.log(projects.home);

function addList() {
    projects.home.addList();
    projects.home.appendProject()
};

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