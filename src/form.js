
//constructor for new project
export function Project(name, date, details, priority) {
  this.name = name;
  this.date = date;
  this.details = details;
  this.priority = priority;
}

//creates a new proj & pushes
export function makeNewProject(formInput, formInput2, formInput3, formInput4) {
  let myProjects = JSON.parse(localStorage.getItem("tasks"));
  if (myProjects == null) {
    myProjects = [];
    const name = formInput;
    const date = formInput2;
    const details = formInput3;
    const priority = formInput4;
    const newProject = new Project(name, date, details, priority);
    myProjects.push(newProject);
    myProjects.forEach(function (item) {
      createDivs(item);
    });
    localStorage.setItem("tasks", JSON.stringify(myProjects));
    return myProjects;
  } else {
    const name = formInput;
    const date = formInput2;
    const details = formInput3;
    const priority = formInput4;
    const newProject = new Project(name, date, details, priority);
    myProjects.push(newProject);
    myProjects.forEach(function (item) {
      createDivs(item);
    });
    localStorage.setItem("tasks", JSON.stringify(myProjects));
    return myProjects;
  }
}

export function updateDisplay() {
  const list = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = list[i].name + " " + list[i].date;
    main.appendChild(card);
  }
}

export function submitForm() {
  let formInput = document.getElementById("label1").value;
  let formInput2 = document.getElementById("label2").value;
  let formInput3 = document.getElementById("label3").value;
  let formInput4 = "";
  if (document.getElementById("c1").checked) {
    formInput4 = document.getElementById("c1").value;
  } else if (document.getElementById("c2").checked) {
    formInput4 = document.getElementById("c2").value;
  } else if (document.getElementById("c3").checked) {
    formInput4 = document.getElementById("c3").value;
  }
  if (
    formInput === "" ||
    formInput2 === "" ||
    formInput3 === "" ||
    formInput4 === ""
  ) {
    alert("Error - All task fields are mandatory.");
    return;
  }
  makeNewProject(formInput, formInput2, formInput3, formInput4);
}

export function retrieveStorage() {
  let myProjects = JSON.parse(localStorage.getItem("tasks"));
  if (myProjects == null) {
    return;
  } else {
    myProjects.forEach(function (item) {
      createDivs(item);
    });
  }
  return myProjects;
}

//function for clearing the list/storage
export function clearList() {
  localStorage.clear();
  location.reload();
}

//function to display only events that are happening today
export function displayToday() {
  let myProjects = JSON.parse(localStorage.getItem("tasks"));

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }
  let fullDate = year + "-" + month + "-" + day;
  myProjects.forEach(function (item) {
    if (item.date === fullDate) {
      main.replaceChildren();
      createDivs(item);
    }
  });
}

export function displayAll() {
  let myProjects = JSON.parse(localStorage.getItem("tasks"));
  main.replaceChildren();
  if (myProjects == null) {
    return;
  }
  myProjects.forEach(function (item) {
    createDivs(item);
  });
}

function createDivs(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", `${item.name}`);
  const nameEl = document.createElement("div");
  const dateEl = document.createElement("div");
  nameEl.innerHTML = item.name;
  dateEl.innerHTML = item.date;
  let detailsEl = item.details;
  if (item.priority === "Low") {
    card.style.borderLeft = "12px solid green";
  } else if (item.priority === "Med") {
    card.style.borderLeft = "12px solid yellow";
  } else if (item.priority === "High") {
    card.style.borderLeft = "12px solid red";
  }
  card.append(nameEl, dateEl);
  main.appendChild(card);
  card.addEventListener("click", () => {
    main.replaceChildren();
    const focusContainer = document.createElement("div");
    focusContainer.classList.add("focusContainer");
    focusContainer.innerHTML = `${item.name} details:`;
    const focusText = document.createElement("div");
    focusText.classList.add("focusText");
    focusText.innerHTML = item.details;
    focusContainer.appendChild(focusText);
    main.appendChild(focusContainer);

    //create button to return to list
    const returnButton = document.createElement("button");
    returnButton.setAttribute("type", "button");
    returnButton.innerHTML = "Return";
    focusContainer.appendChild(returnButton);
    returnButton.addEventListener("click", () => {
      displayAll();
    });
  });
}