//create a function to display form when projects is clicked


export function displayForm() {
    //listen for click on projects Element
    const projectsEl = document.getElementById('projects');

        //name form variables
        const main = document.getElementById('main');
        const header = document.getElementById('header');
        const formContainer = document.createElement('span');
        const form = document.createElement('form');
        const formInput = document.createElement('input');
        const submitButton = document.createElement('button');
        formContainer.classList.add('inactive');
        //form attributes
        form.setAttribute('id', 'formContainer')
        form.innerHTML = 'New Task';
        form.setAttribute('name', 'myForm');
        //label for input 1
        const label1 = document.createElement('label');
        label1.innerHTML = 'Name:';
        label1.setAttribute('for', 'label1');
        label1.classList.add('label1');
        //form input1 NAME OF PROJ
        formInput.setAttribute('id', 'label1');
        formInput.setAttribute('type', 'text');
        formInput.setAttribute('placeholder', 'type task here');

        //label for input 2 
        const label2 = document.createElement('label');
        label2.innerHTML = 'Due:';
        label2.setAttribute('for', 'label2');
        label2.classList.add('label1');
         //form input2 DUEDATE OF PROJ
        const formInput2 = document.createElement('input');
        formInput2.setAttribute('id', 'label2');
        formInput2.setAttribute('type', 'date');
        formInput2.setAttribute('placeholder', 'type Due Date here');

        //label for input 3 
        const label3 = document.createElement('label3');
        label3.innerHTML = 'Details:';
        label3.setAttribute('for', 'label3');
        label3.classList.add('label3');

        //input 3 details
        const formInput3 = document.createElement('input');
        formInput3.setAttribute('id', 'label3');
        formInput3.setAttribute('type', 'text');
        formInput3.setAttribute('placeholder', 'Details');

        //priority area
        const priorityContainer = document.createElement('label');
        priorityContainer.innerHTML = 'Priority Level:';
        const colorContainer = document.createElement('h5');
        colorContainer.classList.add('colors');

        const colorLabel1 = document.createElement('label');
        colorLabel1.innerHTML = 'Low';
        const color1 = document.createElement('input');
        color1.setAttribute('value', 'Low');
        color1.setAttribute('id', 'c1');
        color1.setAttribute('type', 'radio');
        color1.classList.add('colorEl');
        color1.setAttribute('name', 'color');
       
        colorLabel1.appendChild(color1);

        const colorLabel2 = document.createElement('label');
        colorLabel2.innerHTML = 'Med';
        const color2 = document.createElement('input');
        color2.setAttribute('value', 'Med');
        color2.setAttribute('id', 'c2');
        color2.setAttribute('type', 'radio');
        color2.classList.add('colorEl');
        color2.setAttribute('name', 'color');

        colorLabel2.appendChild(color2);

        const colorLabel3 = document.createElement('label');
        colorLabel3.innerHTML = 'High';
        const color3 = document.createElement('input');
        color3.setAttribute('value', 'High');
        color3.setAttribute('id', 'c3');
        color3.setAttribute('type', 'radio');
        color3.classList.add('colorEl');
        color3.setAttribute('name', 'color');

        colorLabel3.appendChild(color3);


        //dom manip for the colors
        colorContainer.append(colorLabel1, colorLabel2, colorLabel3);
        priorityContainer.classList.add('priorityContainer')

         //form button
         submitButton.innerHTML = 'Submit';
         submitButton.setAttribute('id', 'submitButton')
         submitButton.setAttribute('type', 'button');
         submitButton.setAttribute('value', 'submit');
         //submitButton.addEventListener('click', submitForm);

         //clear list button 
         const clearButton = document.createElement('button');
         clearButton.setAttribute('type', 'button');
         clearButton.setAttribute('id', 'clearButton');
         clearButton.innerHTML = 'CLEAR LIST';

        //append form to projects el
        header.appendChild(clearButton)
        label1.appendChild(formInput);
        form.appendChild(label1);
        label2.appendChild(formInput2);
        form.appendChild(label2);
        label3.appendChild(formInput3);
        form.appendChild(label3);
        form.appendChild(priorityContainer);
        form.appendChild(colorContainer);
        formContainer.appendChild(form);
        form.appendChild(submitButton);
        projectsEl.appendChild(formContainer);
        //function to toggle form visibility 
        projectsEl.addEventListener('click', (e) => {
            if(e.target !== e.currentTarget)
            return;
            formContainer.classList.toggle('inactive');
        })
        
    }


  