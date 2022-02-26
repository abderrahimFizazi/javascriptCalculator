/*global document*/
/*global console*/
 var n1 = document.getElementById('n1'),
    n2 = document.getElementById('n2'),
    n3 = document.getElementById('n3'),
    n4 = document.getElementById('n4'),
    n5 = document.getElementById('n5'),
    n6 = document.getElementById('n6'),
    n7 = document.getElementById('n7'),
    n8 = document.getElementById('n8'),
    n9 = document.getElementById('n9'),
    nv = document.getElementById('n.'),
    n0 = document.getElementById('n0'),
    n00 = document.getElementById('n00'),
    pl = document.getElementById('pl'),
    p = document.getElementById('p'),
    m = document.getElementById('m'),
    mi = document.getElementById('mi'),
    d = document.getElementById('d'),
    eq = document.getElementById('eq'),
    back = document.getElementById('back'),
    c = document.getElementById('c'),
    sqrt = document.getElementById('sqrt'),
    ln = document.getElementById('ln'),
    o = document.getElementById('o'),
    abs = document.getElementById('abs'),
    pal = document.getElementById('pal'),
    pac = document.getElementById('pac'),
    input = "",
     res = document.getElementById('res');
n1.onclick = function(){
    input=input + '1';
    res.value = input;
}
n2.onclick = function(){
    input=input + '2';
    res.value = input;
}
n1.onclick = function(){
    input=input + '1';
    res.value = input;
}
n1.onclick = function(){
    input=input + '1';
    res.value = input;
}
n1.onclick = function(){
    input=input + '1';
    res.value = input;
}
n3.onclick = function(){
    input=input + '3';
    res.value = input;
}
n4.onclick = function(){
    input=input + '4';
    res.value = input;
}
n5.onclick = function(){
    input=input + '5';
    res.value = input;
}
n6.onclick = function(){
    input=input + '6';
    res.value = input;
}
n7.onclick = function(){
    input=input + '7';
    res.value = input;
}
n8.onclick = function(){
    input=input + '8';
    res.value = input;
}
n9.onclick = function(){
    input=input + '9';
    res.value = input;
}
d.onclick = function(){
    input=input + '/';
    res.value = input;
}
pl.onclick = function(){
    input=input + '+';
    res.value = input;
}
mi.onclick = function(){
    input=input + '-';
    res.value = input;
}
m.onclick = function(){
    input=input + '*';
    res.value = input;
}
n00.onclick = function(){
    input=input + '00';
    res.value = input;
}

n0.onclick = function(){
    input=input + '0';
    res.value = input;
}
nv.onclick = function(){
    input=input + '.';
    res.value = input;
}
back.onclick = function(){
   var l = input.length,i,sum='';
    for(i=0;i<l-1;i++)
        sum= sum + input.charAt(i);
    input =sum;
    res.value = input;
}
c.onclick = function(){
    input="";
    res.value = input;
}
sqrt.onclick = function(){
    input = Math.sqrt(input);
    res.value = input;
}
ln.onclick = function(){
    input = Math.log(input);
     res.value = input;
}
o.onclick = function(){
    input = input + '%';
     res.value = input;
}
abs.onclick = function(){
    input = Math.abs(input);
    res.value = input;
}
eq.onclick = function(){
    input = eval(input);
    res.value = input;
}
p.onclick = function(){
    input = Math.pow(input,2);
    res.value = input;
}
pal.onclick = function(){
    input = input + "(";
    res.value = input;
}
pac.onclick = function(){
    input = input + ")";
    res.value = input;
}
eq.onmousedown = function(){
    eq.style.fontSize = '10px';
}
eq.onmouseup = function(){
    eq.style.fontSize = '15px';
}