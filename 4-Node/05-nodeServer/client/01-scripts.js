function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text();
        })
        .then(function (text) {
            console.log(text)
        })
}
//2 POST

function postToOne() {
    let url = 'http://localhost:3000/test/one';

    fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'applicaton/json'
            })
        }).then(
            function (response) {
                return response.text()
            })
        .catch(
            function (error) {
                console.log('Error:', error)
            }
        )
        .then(
            function (response) {
                console.log('Success:', response);
            }
        )
}
//POST Arrow Function
postToOneArrow = () => {
    let url = 'http://localhost:3000/test/one';

    fetch(url, {
            method: 'POST',
            headers: new Headers({
                "Content-Type": 'application/json'
            })
        }).then(res => res.text())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
};

// POST Data

function postData() {
    let content = {
        testdata: {
            item: 'This was saved!'
        }
    };
    let testDataAfterFetch = document.getElementById('test-data');
    let createdAfterFetch = document.getElementById('created-at');
    fetch('http://localhost:3000/test/seven', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .then(function (text) {
            console.log(text);
            testDataAfterFetch.innerHTML = text.testdata.testdata;
            createdAfterFetch.innerHTML = text.testdata.createdAt;
        });
};

//get from one display data

function fetchFromOneDisplayData() {
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');

    fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            function (response) {
            return response.json()
        })
        .catch(
            function (error) {
                console.log('Error:', error)
            }
        )
        .then(
            function (results) {
                let myList = document.querySelector('#getjson');

                for (r of results) {
                    console.log('Response:', r.testdata);
                    let listItem = document.createElement('li');
                    listItem.innerHTML = r.testdata;
                    myList.appendChild(listItem);
                }
            }
        )
};