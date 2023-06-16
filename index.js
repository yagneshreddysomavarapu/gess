var a=Math.ceil(Math.random()*25);
c=0;
cli=()=>{
    var b=parseInt(document.getElementById("n1").value);
    if(a==b && c>=0)
    {
    document.getElementById("result").textContent="congrates you find the currect answer in "+c+" times.";
    }
    else if(a>b)
    {
    c++;
    document.getElementById("result").textContent="too... low.";
    }
    else
    {
    c++;
    document.getElementById("result").textContent="Too... high.";
    }

}