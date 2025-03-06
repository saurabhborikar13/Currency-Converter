const inputBox = document.querySelector('.amount input');
const fromBox = document.querySelector('#from');
const toBox = document.querySelector('#to');
const msgBox = document.querySelector('.msg');
const submitBox = document.querySelector('.last');
const fromImgBox = document.querySelector('#fromImg')
const toImgBox = document.querySelector('#toImg');
const lightBox = document.querySelector('#Light');
const darkBox = document.querySelector('#dark');
const bodyBox = document.querySelector('body')
const containerBox = document.querySelector('.container');

console.dir(fromImgBox)

const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"




async function getData(fromCurrency){

    try{
        fromCurrency = fromCurrency.toLowerCase();
        const res = await fetch(URL);
        const Data = await res.json();
        console.log(Data)
        // console.log(Data.data[fromCurrency].value)
        return Data.eur[fromCurrency];  // concept is while accesing the data from the object use []
    }
    catch(error){
        console.log('error',error);

    }
}


fromBox.addEventListener('click',()=>{
    for(let [key,value] of Object.entries(currency)){
        let o = document.createElement('option');
        fromBox.appendChild(o);
        o.innerText = value;   
    }

    const optionBox = document.querySelector('#from option')
    console.dir(optionBox)

    fromBox.addEventListener('change',()=>{
        let selectedCountry = forFlag[fromBox.value];
        console.log(selectedCountry)
        fromImgBox.src = `https://flagsapi.com/${selectedCountry}/flat/64.png`;
    })  
})

toBox.addEventListener('click',()=>{
    for(let [key,value] of Object.entries(currency)){
        let o = document.createElement('option');
        toBox.appendChild(o);
        o.innerText = value;
    } 

    toBox.addEventListener('change',()=>{
        let selectedCountry = forFlag[toBox.value];
        toImgBox.src=`https://flagsapi.com/${selectedCountry}/flat/64.png`;
    })
})



submitBox.addEventListener('click',async (e)=>{
    e.preventDefault();
    let fromCurrency = fromBox.value;
    let toCurrency = toBox.value;
    let inputAmount = inputBox.value;
    console.log(fromCurrency)

    try{
        let equivalent1 = await getData(fromCurrency); // 1 USD = ___ {fromCurrncy}
        let equivalent2 =  await getData(toCurrency); //1USD = ___{toCurrrency}
        console.log(equivalent1);
        console.log(equivalent2);
        //let from = INR    ____ to = EUR 
        //get 1 inr intermsof USD
        let t1 = 1/equivalent1;

        //convert inputAMount  to dollar
        let t2 = t1*inputAmount;  
        let t3 = t2*equivalent2;
        msgBox.innerText= `👉 ${inputAmount} ${fromCurrency} = ${t3.toFixed(3)} ${toCurrency}`;
        console.dir(msgBox)
        msgBox.style.backgroundColor = "green"
        msgBox.style.color = "white";
        console.log(t3);
        }
    catch(error){
        console.log("erroe",error);
    }   
})



//now dark and light modde

darkBox.addEventListener('click',()=>{
    bodyBox.style.backgroundColor='rgb(8, 8, 26)'
    darkBox.style.border = '3px solid red'
    lightBox.style.border = '0';
    // location.reload();
    
    bodyBox.style.color = "greenyellow";
    inputBox.style.backgroundColor = "rgb(8, 8, 26)"
    inputBox.style.border="2px solid lightseagreen"
    containerBox.style.color='greenyellow'
    containerBox.style.fontWeight='bold';
    inputBox.style.color='white';
    submitBox.style.backgroundColor='rgb(47, 255, 0)'
    submitBox.style.color='black'
})

lightBox.addEventListener('click',()=>{
    
    darkBox.style.border = '0'
    Object.assign(lightBox.style,{
        backgroundColor:"white",
        border:"3px solid red",
    });
    bodyBox.style.backgroundColor="white";
    bodyBox.style.color = "blue";
    inputBox.style.backgroundColor = "white"
    inputBox.style.border="2px solid lightseagreen"
    inputBox.style.color='black';
    containerBox.style.color='darkgreen'
    containerBox.style.fontWeight='bold';
    submitBox.style.backgroundColor='rgb(5, 85, 21)'
    submitBox.style.color='white'
})