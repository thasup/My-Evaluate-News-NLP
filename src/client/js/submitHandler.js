async function handleURL(event) {
    event.preventDefault();

    // check what url was put into the form field
    let inputURL = document.getElementById('name').value;

    function checkForURL(url) {
        console.log("::: Running checkForURL :::", url);

        let expression = "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?";
        let regex = new RegExp(expression);

        return regex.test(url);
    };

    // POST request to server side
    if(checkForURL(inputURL) === true) {

        console.log("::: Form Submitted :::");
        fetch('http://localhost:8081/data', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({url: inputURL})       
        })
        .then(res => res.json())
        .then(function(res) {
            Client.updateUI(res)
        });
    } else {
        alert("Invalid URL")
    };
};

export { handleURL }