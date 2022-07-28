document.querySelector('.verify').addEventListener('click', function() {
    let masa = document.querySelector('.input').value;;
    let inaltimea = document.querySelector('.input1').value;;
    let bmi;

    bmi = masa / (inaltimea ** 2);
    document.querySelector('.result').textContent = (`BMI este ${bmi}`);
})




// document.querySelector(".btn").addEventListener('click', function() {
//     document.querySelector('.testclasa').textContent = "Acesta este un test";
// })

// 
//     let text = ""
//     let n = document.querySelector('.input').value;
//     let nOriginal = n;
//     let nInvers = "";
//     while(n != 0) {
//         nInvers = nInvers + (n % 10);
//         n = (n - (n % 10)) / 10;
//     }
//     nOriginal == nInvers ? text = "Da, este palindrom" : text = "Nu, nu este palindrom";
//     document.querySelector('.testclasa').textContent = text;

// })