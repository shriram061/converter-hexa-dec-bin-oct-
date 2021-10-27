function btod()
{
    let bin=document.getElementById("binary-1").value;
let dec = parseInt(bin,2).toString(10);
    document.getElementById("btod").innerHTML = dec;
}

function btoh()
{
    let bin=document.getElementById("binary-1").value;
let hexa = parseInt(bin, 2).toString(16);
document.getElementById("btoh").innerHTML = hexa;
}

function btoo()
{
    let bin=document.getElementById("binary-1").value;
    let oct = parseInt(bin, 2).toString(8);
    document.getElementById("btoo").innerHTML = oct;
}

function dtob()
{
    let dec=document.getElementById("decimal-1").value; 
    let bin= parseInt(dec,10).toString(2);
    document.getElementById("dtob").innerHTML=bin;
}

function dtoh()
{
     let decimal=document.getElementById("decimal-1").value;
     let hex=parseInt(decimal,10).toString(16);
     document.getElementById("dtoh").innerHTML=hex;
}

function dtoo()
{
let dec=document.getElementById("decimal-1").value;
let oct= parseInt(dec,10).toString(8);
document.getElementById("dtoo").innerHTML=oct;
}

function htob()
{
    let hex=document.getElementById("Hexadecimal-1").value;
    let bin=parseInt(hex,16).toString(2);
    document.getElementById("htob").innerHTML=bin;
}

function htod()
{
    let hex =document.getElementById("Hexadecimal-1").value;
    
   let dec = parseInt(hex,16).toString(10);
    document.getElementById("htod").innerHTML=dec;

}

function htoo()
{
    let hex=document.getElementById("Hexadecimal-1").value; 
    let bin=parseInt(hex,16).toString(8);
    document.getElementById("htoo").innerHTML=bin;
}

function otob()
{
    let oct=document.getElementById("octal-1").value;
    let bin= parseInt(oct,8).toString(2);
    document.getElementById("otob").innerHTML=bin;
}

function otod()
{
let oct= document.getElementById("octal-1").value;
let dec= parseInt(oct,8).toString(10);
document.getElementById("otod").innerHTML=dec;
}

function otoh()
{
    let oct=document.getElementById("octal-1").value;
    let bin= parseInt(oct,8).toString(16);
    document.getElementById("otoh").innerHTML=bin;
}

