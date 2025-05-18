const button = document.querySelector('.btn');
const url = './api/person.json';
button.addEventListener('click', () => {
    fetchData(url);
})

const fetchData = (url) => {
    const xhr = new XMLHttpRequest();
    console.log('xhr0', xhr);
    
    xhr.open('GET', url);
    console.log('xhr', xhr);
    
    xhr.onreadystatechange = () => {
        console.log('xhr', xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('data', data)
            // console.log('data in string', JSON.stringify(data))
            const displayData = data.map((item => 
                `<p>${item.name}</p>`
            )).join('');
            const element = document.createElement('div');
            element.innerHTML = displayData;
            document.body.appendChild(element);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
    };
    
    xhr.send();
}
