const content = document.querySelector('.content');

class List {
    constructor(projectName, index) {
        this.index = index;
        this.title = document.getElementById("title").value;
        this.project = projectName;
        this.priority = document.getElementById("priority").value;
        this.done = document.getElementById("done").checked;
        this.node = this.buildNode()
    }

    deleteList(node) {
        delete projects[this.project].lists[this.index];
        node.parentElement.remove();
        //test
        logProjectList();
        logProjectNode();
    }

    buildNode() {
        const node = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkmark';
        checkbox.checked = 'false';
        node.appendChild(checkbox);

        const header = document.createElement('h2')
        header.textContent = this.title;
        node.appendChild(header)

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", () => this.deleteList(deleteBtn));
        node.appendChild(deleteBtn);
        
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






////////////////////////////////

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

///////////////////////////////////////test functions
const logProjectList = () => {
    console.log(projects.home.lists);
};

const logProjectNode = () => {
    console.log(projects.home.node);
}