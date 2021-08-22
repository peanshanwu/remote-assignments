// // creat XMLHttpRequest obj
// const xhr = new XMLHttpRequest();

// // define a callback function
// xhr.onreadystatechange = function () {
// 	if (xhr.readyState === 4) {
// 		if (xhr.status === 200) {
// 			console.log(xhr.responseText);
// 		}
// 		else {
// 			alert("error status");
// 		}
// 	} 
// };

// // open a request
// xhr.open("GET", "http://13.230.176.178:4000/api/1.0/remote-w4-data");

// // send a request
// xhr.send();


function ajax(src, callback) {
	// creat XMLHttpRequest obj
	const xhr = new XMLHttpRequest();

	// define a callback function
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				callback(xhr.responseText);
				// function(response){
				// 	render(response);
				// }
			}
			else {
				alert("error status");
			}
		} 
	};

	// open a request
	xhr.open("GET", src);

	// send a request
	xhr.send();
}

function render(data) {
	// const content = JSON.parse(data);
	// console.log(typeof content)


	// creat element
	const p = document.createElement("p");
	// creat textnode
	const textnode = document.createTextNode(data);
	p.appendChild(textnode);
	// append it into .div1
	document.querySelector(".div1").appendChild(p);

}

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data",
	function (response) {
render(response);
});