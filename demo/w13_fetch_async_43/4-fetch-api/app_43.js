const button = document.querySelector('.btn');
const url = './api/person.json';
let persons = [];
button.addEventListener('click', () => {
    persons = getDataByFetchAPI2(url);
})

const getDataByFetchAPI2 = (url) => {
    fetch(url)
        .then((response) => response.json()) 
        .then((data) => { 
            console.log('data', data); 
            displayItems(data); 
        })
        .catch((err) => console.log(err));
};

const displayItems = (persons) => {
    const displayData = persons
        .map((person) => {
            return `<p>${person.name}</p>`;
        })
        .join(''); // 連接所有 HTML 字符串

    const element = document.createElement('div');
    element.innerHTML = displayData;

    document.body.appendChild(element);
};