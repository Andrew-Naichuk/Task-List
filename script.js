let url = 'https://61a7b9a9387ab200171d2e7e.mockapi.io/task';
let urlArray = 'https://61a7b9a9387ab200171d2e7e.mockapi.io/myArray';
const body = document.querySelector('body');
const taskList = document.querySelector('.task-list');
const btn = document.querySelector('#add-task');
const textInput = document.querySelector('#input');
const update = document.querySelector('#update')
let count = 0;

async function getData(source) {
    let response = await fetch(source)
    let data = await response.json()
    while (count != data.length){
        let p = document.createElement('p')
        p.innerHTML = '🔶 ' + data[count].taskcont
        p.id = 'taskNum' + data[count].id
        taskList.appendChild(p)
        count = ++count
    }
};

async function postData(source) {
    let response = await fetch(source,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskcont: textInput.value
        })
    })
};


btn.addEventListener('click', () => {
    if (textInput.value.length > 4){
        postData(url)
        textInput.value = 'Task added!'
    } else {
        textInput.value = 'Min. 5 symbols here!'
    }
});

textInput.addEventListener('click', () => {
    textInput.value = ''
});

update.addEventListener('click', () => {
    getData(url)
});



