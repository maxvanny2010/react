/*
function doAsyncCall(success, failure) {
// Do some API call
    if (SUCCEED)
        success(resp);
    else
        failure(err);
}

success(response)
{
// Do something with response
}
failure(error)
{
// Handle error
}
doAsyncCall(success, failure);
doAsyncCall()
    .then(response => {
    }) // Do something with the response)
    .then(data => {
    })
    .catch(error => console.error(error))
doAsyncCall = async () => {
    const response = await fetch('http://someapi.com');
    const data = await response.json();
// Do something with the data
}
doAsyncCall = async () => {
    try {
        const response = await fetch('http://someapi.com');
        const data = await response.json();
// Do something with the data
    } catch (err) {
        console.error(err);
    }
}
fetch('http://someapi.com')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

fetch('http://someapi.com', {method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

fetch('http://someapi.com',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    }
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error)));

fetch('http://someapi.com',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error)));
import axios from 'axios';
axios.get('http://someapi.com')
    .then(response => console.log(response))
    .catch(error => console.log(error));
axios.post('http://someapi.com', { newObject })
    .then(response => console.log(response))
    .catch(error => console.log(error));*/
