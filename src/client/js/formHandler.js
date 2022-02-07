function updateUI(data) {
    const resultAgreement = document.querySelector("#agreement");
    const resultSubjectivity = document.querySelector("#subjectivity");
    const resultIrony = document.querySelector("#irony");
    const resultConfidence = document.querySelector("#confidence");

    resultAgreement.innerHTML = `<p><span class="keys">Agreement :</span><span class="values"> ${data.agreement}</span></p>`;
    resultSubjectivity.innerHTML = `<p><span class="keys">Subjectivity :</span><span class="values"> ${data.subjectivity}</span></p>`;
    resultIrony.innerHTML = `<p><span class="keys">Irony :</span><span class="values"> ${data.irony}</span></p>`;
    resultConfidence.innerHTML = `<p><span class="keys">Confidence :</span><span class="values"> ${data.confidence} %</span></p>`;
}
export { updateUI };
