let i= document.getElementById('enter');
buttons=document.querySelectorAll('button');
let value_sc=''
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttoninput= e.target.innerText;
        console.log('button text is', buttoninput);
        
        if (buttoninput=='='){
            ans= eval(value_sc);
            i.value=ans;
        }
        
        else if(buttoninput=='AC'){
            value_sc=''
            i.value=value_sc;
        }
        else if(buttoninput=='DEL'){
            value_sc=value_sc.substring(0,value_sc.length-1);
            i.value=value_sc;
        }
        
        else{
            value_sc += buttoninput;
            i.value= value_sc  
        }
    })
}