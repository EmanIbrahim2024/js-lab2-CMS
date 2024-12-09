let userName
let nameFormat
let infoContainer=document.getElementById('userInfo');

do{
 userName=prompt("Enter your Name:");
 nameFormat= /^[A-Za-z -]+$/;
console.log(nameFormat.test(userName))

}while(!nameFormat.test(userName))

let nameElem=document.createElement('p');
nameElem.innerText=`Welcome dear guest ${userName}`;
infoContainer.appendChild(nameElem);

let userphone
let phoneFormat

do{
 userphone=prompt("Enter your phone number:");
 phoneFormat= /^[0-9]{8}$/;
console.log(phoneFormat.test(userphone))

}while(!phoneFormat.test(userphone))

let phoneElem=document.createElement('p');
phoneElem.innerText=`Your Telehone number is  ${userphone}`;
infoContainer.appendChild(phoneElem);


do{

    userMobilephone=prompt("Enter your Mobile number:");
    MobileFormat= /^(011|012|010)\d{8}$/;
    console.log(MobileFormat.test(userMobilephone));  
}while(!MobileFormat.test(userMobilephone))

let MobileElem=document.createElement('p');
MobileElem.innerText=`Your Mobile number is  ${userMobilephone}`;
infoContainer.appendChild(MobileElem);

let userEmail;
let emailFormat;

do{
userEmail=prompt("Enter your Email:");
emailFormat= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
console.log(emailFormat.test(userEmail));  
}while(!emailFormat.test(userEmail))

let emailElem=document.createElement('p');
emailElem.innerText=`Your Email address is  ${userEmail}`;
infoContainer.appendChild(emailElem);


let dateToday=new Date();

let dateDay=document.createElement('p');
dateDay.innerText=`today is ${dateToday.getDate()}`

infoContainer.appendChild(dateDay);

let dateMonth=document.createElement('p');
dateMonth.innerText=`We are in month ${dateToday.getMonth()+1}`
infoContainer.appendChild(dateMonth);



console.log(`Welcome dear guest ${userName}`);
console.log(`Your Telehone number is  ${userphone}`)
console.log(`Your Mobile number is  ${userMobilephone}`)
console.log(`Your Email address is  ${userEmail}`)
console.log(`today is ${dateToday.getDate()}`)
console.log(`We are in month ${dateToday.getMonth()+1}`)


/////////////////////////ex2////////////////////

let userInputString=prompt("Enter a string");

console.log(checkletter(userInputString))


function checkletter (userInputString){
    let max='';
    let convertString=userInputString.split(" ");

    console.log(convertString);
    for (let i=0;i<convertString.length;i++){
        console.log(convertString[i].length)
        
        if(convertString[i].length>max.length)
        max=convertString[i]

    }

    
    return max;

}

///////////////ex3///////////////

let numericArray= [];
for(let i=0;i<5;i++){

    let userNumbers=+(prompt(`Enter a number to fill Array index ${i} `));
    numericArray.push(userNumbers);
    
}
console.log(numericArray);
let arrConvertStr=numericArray.join(", ");
console.log(`You have entered the values of  ${arrConvertStr}`);
let sortdesending=numericArray.sort((a,b)=>b-a);
console.log(`Your values after being sorted desending ${sortdesending.toString()}`);

let sortAssending=numericArray.sort((a,b)=>a-b);
console.log(`Your values after being sorted assending ${sortAssending.toString()}`);


/////////////////////////////////////////////////////

let inputRadious=prompt("What is the value of your circle radious");
alert(`The area of the circit is ${Math.PI*Math.pow(inputRadious,2)}`);

let inputValue=prompt("What is the value you want to calculate its square root");
alert(`square root of ${inputValue} is ${Math.sqrt(inputValue)}`);

let angle=prompt('Enter the angle you want to calculate its cos');
let radian=(+(angle))*(Math.PI/180)
alert(`the cos ${angle} is ${Math.cos(radian)}`);