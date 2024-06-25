var pointFrequency=1;

function displayNumber(event){



    // let num=event.target.value;

    // document.querySelector("#result").value+=num
     const operators=["+","-","*","/","."]

     let textBox=document.querySelector("#result")
     // extract current expression

     let currentExpression=textBox.value;
     //extract displayNumber

     let displayNumber=event.target.value;
     // extract last character from current expression

     if(displayNumber=="." && pointFrequency===1){
        pointFrequency=0
      }
     else if(displayNumber == "." && pointFrequency ===0){
        return
     }
     if(operators.includes(displayNumber) && displayNumber!="."){
        pointFrequency=1
     }

     let currentExpLastChar=currentExpression.slice(-1)

     //chk for displayNumber and curExpLastChar are operators

     if(operators.includes(displayNumber) && operators.includes(currentExpLastChar)){
          // remove the last character from            
        currentExpression=currentExpression.slice(0,-1)

     }
     
     //append the displaynumber from the currennt expression
     textBox.value=currentExpression+displayNumber
     
     

}

function clearBox(){
      
    
    document.querySelector("#result").value=""

}


function evaluateExpression(){

    let currentExpression=document.querySelector("#result").value;

    let result=eval(currentExpression)

    document.querySelector("#result").value=result
}

function backSpace(){
    let currentExpression=document.querySelector("#result").value;
     
    let result=currentExpression.slice(0,-1)

    document.querySelector("#result").value=result;
}

