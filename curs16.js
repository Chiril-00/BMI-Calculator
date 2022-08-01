document.querySelector('.verify').addEventListener('click', function() {
    let masa = document.querySelector('.input').value;;
    let inaltimea = document.querySelector('.input1').value;;
    let bmi;

    bmi = masa / (inaltimea ** 2);
    document.querySelector('.result').textContent = (`BMI este ${bmi}`);
})