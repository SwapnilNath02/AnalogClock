let s=document.getElementById('sc');
let m=document.getElementById('mn');
let h=document.getElementById('hr');

let sec=document.getElementById('s');
let min=document.getElementById('m');
let hour=document.getElementById('h');
let am=document.getElementById('ap');

setInterval(()=>{
    let time= new Date();
    let hr=time.getHours()*30;
    let mn=time.getMinutes()*6;
    let sc=time.getSeconds()*6;
    let ml=time.getMilliseconds()/(25/9);

    h.style.transform=`rotateZ(${hr+(mn/12)}deg)`;
    m.style.transform=`rotateZ(${mn+(sc/60)}deg)`;
    s.style.transform=`rotateZ(${sc+(ml/60)}deg)`;

    let a=new Date().getHours();
    let b=new Date().getMinutes();
    let c=new Date().getSeconds();
    am.innerHTML=(a>12)?"PM":"AM";
    a=(a<12)?a:a-12;
    a=(a<10)?"0"+a:a;
    hour.innerHTML=a;
    b=(b<10)?"0"+b:b;
    min.innerHTML=b;
    c=(c<10)?"0"+c:c;
    sec.innerHTML=c;
});
