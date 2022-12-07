

function Otpkod() {
          
    
    
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }

    document.getElementById('result').innerHTML = OTP

    
}

// -----------------------------------------------------------



if(localStorage.getItem('kartnomresi') === null) {
    localStorage.setItem('kartnomresi', JSON.stringify([]))
}

let num = document.getElementById('nomre')
let btn = document.getElementById('btn')
btn.addEventListener('click' , function(){
    let cards = JSON.parse(localStorage.getItem('kartnomresi'))
    let numvalue = num.value 
    if(numvalue.length!=16){
        alert('kod 16 reqem ola biler')
    } else{
        if(numvalue.slice(0,4) != '4169'){
            alert('error....')
            window.location.reload()
        } else{
            if(cards.includes(numvalue)){
                alert('kod movcuddur')
            } else{
                cards.push(numvalue)
            }
        }
    }
    localStorage.setItem('kartnomresi', JSON.stringify(cards));
})


