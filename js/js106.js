let strA = "Do you agree?"

function Agree(){
    alert("I'm agree with you");
}

function Rs() {
    alert("whyyyy!");
}

function confirm(str){
    let input=prompt("Type 1 Agree, Type 0 No Agree:")
    if(input === '1'){
        return 1;
    }
    else if(input === '0'){
        return 0;
    }
}

function ask(question,yes,no) {
  if (confirm(question)) yes();
  else no();
}

ask(strA,Agree,Rs)