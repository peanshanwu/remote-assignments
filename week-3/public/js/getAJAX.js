// creat XMLHttpRequest obj
const xhr = new XMLHttpRequest();

// define a callback function
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('it works!');
        } else {
            alert('error status');
        }
    }
};

// open a request
xhr.open('GET', 'getData');

// send a requst
xhr.send();