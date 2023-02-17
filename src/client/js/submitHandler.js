function handleURL(event) {
  event.preventDefault();

  const button = document.querySelector("#submit-btn");
  const span = document.querySelector("#loading");
  const text = document.querySelector("#text-btn");
  const disabled = document.createAttribute("disabled");

  const result = document.getElementsByClassName("results")[0];

  // check what url was put into the form field
  const inputURL = document.getElementById("name").value;

    const isValidUrl = Client.checkForURL(inputURL);

  // POST request to server side
  if (isValidUrl) {
    const path =
    "https://thasup-sentiment-analysis.onrender.com" ||
    "http://localhost:8081";

    // Uppdate button
    button.setAttributeNode(disabled);
    span.classList.add("show");
    text.textContent = "Loading...";
    // Fetch data
    fetch(`${path}/data`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: inputURL }),
    })
      .then((res) => res.json())
      .then(function (res) {
        // Uppdate button
        button.removeAttributeNode(disabled);
        span.classList.remove("show");
        text.textContent = "Submit";
        // Update UI
        Client.updateUI(res);
        result.classList.add("show");
      });
  } else {
    alert("Invalid URL");
  }
}

export { handleURL };
