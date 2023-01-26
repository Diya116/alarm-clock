const currentTime = document.querySelector("h1");
const content=document.querySelector(".content");
const select = document.querySelectorAll("select");
const setAlarmBtn=document.querySelector("button");
let alarmTime,isAlarmSet=false;

let ringtone=new Audio("Alarm Alarm Alarm.mp3")
for(let i=0;i<12;i++)
{
    i=i<10 ? "0"+i :i;
    let option=`<option value="${i}">${i}</option>`;
    select[0].firstElementChild.insertAdjacentHTML("afterend",option);
} 
for(let i=59;i>0;i--)
{
   i=i<10 ? "0" + i :i;
    let option=`<option value="${i}">${i}</option>`;
    select[1].firstElementChild.insertAdjacentHTML("afterend",option);
} 
for(let i=2;i>0;i--)
{
    let ampm=i==1?"AM":"PM";
    let option=`<option value="${ampm}">${ampm}</option>`;
    select[2].firstElementChild.insertAdjacentHTML("afterend",option);
} 
setInterval(()=>{
    let date=new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    ampm="AM";
    if(h>=12)
    {
        h=h-12;
        ampm="PM";
    }
    h=h==0?h=12:h;
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    currentTime.innerText=`${h}:${m}:${s}:${ampm}`;
    if(alarmTime ==`${h}:${m}:${ampm}`)
    {
        ringtone.play();
        ringtone.loop=true;
    }
},1000); 

function setAlarm(){ 
    if(isAlarmSet)
    {
        alarmTime="";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText="set alarm";
        return isAlarmSet=false;
    }
    let time=`${select[0].value}:${select[1].value}:${select[2].value}`
    if(time.includes("Hour")||time.includes("Minute")||time.includes("AM/PM")) 
    {
        return alert('please,select a valid time to set alarm!');
    }
    isAlarmSet=true;
    alarmTime=time;
    content.classList.add('disable');
    setAlarmBtn.innerText="clear alarm";
}  
setAlarmBtn.addEventListener("click",setAlarm) 