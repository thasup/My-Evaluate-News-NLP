function updateUI(data) {
    const resultPolarity = document.querySelector('#polarity');
    const resultAgreement = document.querySelector('#agreement');
    const resultSubjectivity = document.querySelector('#subjectivity');
    const resultIrony = document.querySelector('#irony');
    const resultConfidence = document.querySelector('#confidence');
    
    resultPolarity.innerHTML = `<p>Polarity : ${data.score_tag}</p>`;
    resultAgreement.innerHTML = `<p>Agreement : ${data.agreement}</p>`;
    resultSubjectivity.innerHTML = `<p>Subjectivity : ${data.subjectivity}</p>`;
    resultIrony.innerHTML = `<p>Irony : ${data.irony}</p>`;
    resultConfidence.innerHTML = `<p>Confidence : ${data.confidence}</p>`;
}
export { updateUI }