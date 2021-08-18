function getAjax() {

    // creat XMLHttpRequest obj
    const xhr = new XMLHttpRequest();

    // define a callback function
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                
                const inputeValue = document.querySelector('#number');
                const value = inputeValue.value;
                alert(value);

                const totalText = document.querySelector('.input');
                totalText.innerHTML = `${xhr.responseText}`;
                alert(xhr.responseText);

            } else {
                alert('error status');
            }
        }
    };
    // open a request
    xhr.open('GET', 'http://localhost:3000/getData?number='+document.querySelector('#number').value);  //會從這個網址抓這個檔案的資料

    // send a requst
    xhr.send();
};

const form = document.querySelector('form');
form.addEventListener('submit', getAjax);