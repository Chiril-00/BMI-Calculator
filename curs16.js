document.querySelector('.verify1').addEventListener('click', function() {
let masa1 = document.querySelector('.input11').value;
let masa2 = document.querySelector('.input21').value;
let inaltimea1 = document.querySelector('.input12').value;
let inaltimea2 = document.querySelector('.input22').value;
let nume1 = document.querySelector('.name1').value;
let nume2 = document.querySelector('.name2').value;
let bmi1;
let bmi2;

bmi1 = masa1 / (inaltimea1 ** 2);
bmi2 = masa2 / (inaltimea2 ** 2);

        document.querySelector('.result1').textContent = (`BMI lui ${nume1} este ${bmi1}`);
        document.querySelector('.result2').textContent = (`BMI lui ${nume2} este ${bmi2}`);

if (bmi1 > bmi2) {
        document.querySelector('.compare-result').textContent = (`${nume1} are BMI mai mare`);
} else {
        document.querySelector('.compare-result').textContent = (`${nume2} are BMI mai mare`);
}
})