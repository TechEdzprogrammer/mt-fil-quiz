//script for Filipino Quiz

const engIds = ['ans1', 'ans2', 'ans3', 'ans4', 'ans5'];
let engScore = 0;
let forms = document.querySelector('form');
let engQ1 = document.getElementById(engIds[0]);
let engQ2 = document.getElementById(engIds[1]);
let engQ3 = document.getElementById(engIds[2]);
let engQ4 = document.getElementById(engIds[3]);
let engQ5 = document.getElementById(engIds[4]);

let pupName = document.getElementById('name');

let engbtn = document.getElementById('engbtn');

engbtn.addEventListener('click', function(){

    if(engQ1.value == "C"){
        engScore += 1;
     }
     if(engQ2.value == "B"){
        engScore += 1;
     }
  
     if(engQ3.value == "B"){
        engScore += 1;
     }
  
     if(engQ4.value == "C"){
        engScore += 1;
     }
  
     if(engQ5.value == "A"){
        engScore += 1;
     }


    window.alert(`Si ${pupName.value} ay nakakuha ng ${engScore} puntos`);
    forms.reset();
    engScore -= engScore;
})

