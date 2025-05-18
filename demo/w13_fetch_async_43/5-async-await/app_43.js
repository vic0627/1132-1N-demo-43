const button = document.querySelector('.btn');
const url = './api/person.json';
button.addEventListener('click', () => {
    getDataAsyncAwait(url); 
})

const getDataAsyncAwait = async (url) => {
    try {
        const response = await fetch(url);  
        const data = await response.json(); 
        console.log('data', data);          
        displayItems(data);                 
    } catch (err) {
        console.error('Error occurred:', err); 
    }
};

const getDataByFetchAPI2 = (url) => {
    fetch(url)
        .then((response) => response.json()) 
        .then((data) => {
            console.log('data', data);       
            displayItems(data);              
        })
        .catch((err) => console.error('Error occurred:', err)); 
};

const displayItems = (persons) => {
    const displayData = persons
        .map((person) => {
            return `<p>${person.name}</p>`;
        })
        .join(''); 

    const element = document.createElement('div');
    element.innerHTML = displayData;

    document.body.appendChild(element);
};