function getContent(){
    return document.getElementById("content-value").innerText;
}
function returnContent(num){
    document.getElementById("content-value").innerText = num;
}
function getResult(){
    return document.getElementById("result-value").innerText;
}
function returnResult(num){
    if( num == ""){
        document.getElementById("result-value").innerText = num;
    }
    else{
        document.getElementById("result-value").innerText = getFormattedValue(num);
    }
}
function getFormattedValue(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseFormattedValue(num){
    return Number(num.replace(/,/g,""));
}

var operator = document.getElementsByClassName("operators");

for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){
            returnContent("");
            returnResult("");
        }
        else if(this.id == "delete"){
            var output = reverseFormattedValue(getResult()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                returnResult(output);
            }
        } 
        else{
            var output = getResult();
            var content = getContent();
            if(output != ""){
                output = reverseFormattedValue(output);
                content += output;
                if(this.id == "equals"){
                    var output = eval(content);
                    returnResult(output);
                    returnContent("");
                }
                else{
                    content += this.innerText;
                    returnContent(content);
                    returnResult("");
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number");

for(var j = 0; j < number.length; j++){
    number[j].addEventListener('click',function(){
        var output = reverseFormattedValue(getResult());
        if(output != NaN){
            output +=  this.id;
            returnResult(output);
        }
    })
}