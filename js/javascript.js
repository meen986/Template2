// to include header footer sidebar bottombar starts

fetch('includes/header.html')
	.then(response => response.text()) // Convert the response to text
	.then(data => {
		document.getElementById('header').innerHTML = data; // Insert the content into the div
	})
	.catch(error => console.error('Error fetching the HTML:', error));

fetch('includes/footer.html')
	.then(response => response.text()) // Convert the response to text
	.then(data => {
		document.getElementById('footer').innerHTML = data; // Insert the content into the div
	})
	.catch(error => console.error('Error fetching the HTML:', error));

fetch('includes/sidebar.html')
	.then(response => response.text()) // Convert the response to text
	.then(data => {
		document.getElementById('sidebar').innerHTML = data; // Insert the content into the div
	})
	.catch(error => console.error('Error fetching the HTML:', error));

// to include header footer sidebar bottombar ends

window.onload = function () {
       scrolly();
    }; 