import { isMatchWithOptions } from "date-fns/fp";

//creates Home Page
export function initialLoad() {
    const content = document.getElementById('content');

    //header
    const header = document.createElement('div');
    header.classList.add('header');
    //content for header 
    const titleEl = document.createElement('h1');
    titleEl.innerHTML = 'ToDo List';
    //svg for header
    const icon = document.createElement('img');
    icon.src = 'https://cdn-icons.flaticon.com/png/128/2623/premium/2623008.png?token=exp=1656426408~hmac=b39405062d27a72f26eff38ba58e9f58';
    icon.setAttribute('width', '40px');
    icon.setAttribute('height', '40px');



    //navbar
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    //content for navBar
    const homeText = document.createElement('div');
    homeText.innerHTML = 'Home'
    const todayText = document.createElement('div');
    todayText.innerHTML = 'Today'
    const weekText = document.createElement('div');
    weekText.innerHTML = 'This Week'
    //projectsChildren
    const text = document.createElement('div');
    text.innerHTML = 'Projects'
    text.classList.add('projectTitle')
    const chores = document.createElement('span');
    chores.innerHTML = 'Chores';
    chores.classList.add('projectsItems');
    const current = document.createElement('span');
    current.innerHTML = 'Current';
    current.classList.add('projectsItems');
    const workout = document.createElement('span');
    workout.innerHTML = 'Workout';
    workout.classList.add('projectsItems');

    const childHolder = document.createElement('div');
    childHolder.append(chores,current,workout);
    text.appendChild(childHolder)
    chores.classList.add('inactive')
    workout.classList.add('inactive')
    current.classList.add('inactive')
    //appends content to navbar
    const main = document.createElement('div');
    main.classList.add('main');

    //projects visibility toggle
    text.addEventListener('click', (e) => {
        if(e.target !== e.currentTarget) return;
        chores.classList.toggle('inactive')
        workout.classList.toggle('inactive')
        current.classList.toggle('inactive')
    })
    //main
    
    


    
    //appends content to navbar
    navBar.append(homeText,todayText,weekText,text);

    //adds titles to each main div
    header.appendChild(icon)
    header.appendChild(titleEl);
    content.appendChild(header);
    content.appendChild(navBar);
    content.appendChild(main);

}