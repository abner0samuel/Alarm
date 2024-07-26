document.addEventListener("DOMContentLoaded",startapp())
function startapp(){
    add()
    mainapp()
    days()
    time()
}

function time(){
    let hour = document.querySelector(".setapp > .timezone>.time>.hour");
    let minute = document.querySelector(".setapp > .timezone>.time>.minute");
    let am_pm = document.querySelector(".setapp > .timezone>.time>.am-pm");
    let subhour = 0
    let subminute = 0
    let upbtn1 = document.querySelector(".setapp> .timezone>.upbtns>.btn1");
    let upbtn2 = document.querySelector(".setapp> .timezone>.upbtns>.btn2");
    let upbtn3 = document.querySelector(".setapp> .timezone>.upbtns>.btn3");
    let downbtn1 = document.querySelector(".setapp> .timezone>.downbtns>.btn1");
    let downbtn2 = document.querySelector(".setapp> .timezone>.downbtns>.btn2");
    let downbtn3 = document.querySelector(".setapp> .timezone>.downbtns>.btn3");
    upbtn1.addEventListener("click",()=>{
        subhour++
        if(subhour >= 12){
            subhour =0
        }
        if(subhour<10){
            hour.innerText = "0" + subhour
        }else{
            hour.innerText = subhour
        }
    })
    downbtn1.addEventListener("click",()=>{
        subhour--
        if(subhour <= 0){
            subhour = 12
        }
        if(subhour >= 12){
            subhour =12
        }
        if(subhour<10){
            hour.innerText = "0" + subhour
        }else{
            hour.innerText = subhour
        }
    })
    upbtn2.addEventListener("click",()=>{
        subminute++
        if(subminute >= 59){
            subminute =0
        }
        if(subminute<10){
            minute.innerText = "0" + subminute
        }else{
            minute.innerText = subminute
        }
    })
    downbtn2.addEventListener("click",()=>{
        subminute--
        if(subminute <= 0){
            subminute = 59
        }
        if(subminute >= 59){
            subminute = 59
        }
        if(subminute<10){
            minute.innerText = "0" + subminute
        }else{
            minute.innerText = subminute
        }
    })
    upbtn3.addEventListener("click",()=>{
        if(am_pm.innerText ==="AM"){
            am_pm.innerText ="PM"
        }else{
            am_pm.innerText ="AM"
        }
        
    })
    downbtn3.addEventListener("click",()=>{
        if(am_pm.innerText ==="AM"){
            am_pm.innerText ="PM"
        }else{
            am_pm.innerText ="AM"
        }
        
    })
    
}

function add(){
    let  addbtn = document.querySelector(".btn>.btns ");
    let  addbtn2 = document.querySelector(".alarmtime>.btn>.btn2 >input");
    let item = document.querySelector(".setcontainer");

    let cancel = document.querySelector(".setapp>.functionbtns>.cancelbtn");
   addbtn.addEventListener("click",()=>{
    item.style.display = "block"
   })
   addbtn2.addEventListener("click",()=>{
    
    item.style.display = "block"
    
   })
   cancel.addEventListener("click",()=>{
    item.style.display = "none"
   })
   let savebtn= document.querySelector(".functionbtns>.savebtn");
   let app = document.querySelector(".alarmtime");
   savebtn.addEventListener("click",()=>{
       app.style.display = "block"
    item.style.display = "none"

       maintime()
   })
}

function mainapp(){
    let editlaarm = document.querySelector(".editsetcontainer")
    let clock = document.querySelectorAll(".alarmtime>.clock").forEach(alarm=>{
        alarm.onclick = function(){
            editlaarm.style.display = "block"
            console.log("done");
        }
    })
}
   
function maintime (){
    let alarmtimemm = document.querySelector(".alarmtime");
    let clock = document.createElement("div");
    alarmtimemm.appendChild(clock);
    clock.setAttribute("class","clock");
    // createing the head of the time
    let heading = document.createElement("div");
    heading.setAttribute("class","heading");
    clock.appendChild(heading);
    let time =document.createElement("h1");
    time.setAttribute("class","time");
    let am_pm = document.createElement("span");
    time.appendChild(am_pm);
    let btn = document.createElement("button");
    let span = document.createElement("span");
    btn.setAttribute("type","button");
    btn.appendChild(span)
    heading.appendChild(time);
    heading.appendChild(btn);
    // createing the body 
    let text = document.createElement("p");
    text.setAttribute("class","text");
    clock.appendChild(text)
    let p_hour = document.createElement("span");
    let p_minute = document.createElement("span");
    text.appendChild(p_hour);
    text.appendChild(p_minute);
    let alarmname = document.createElement("div");
    alarmname.setAttribute("class","alarmname");
    clock.appendChild(alarmname);
    let days =document.createElement("div");
    days.setAttribute("class","days");
    clock.appendChild(days);
    // createing thr days
    let mo = document.createElement("div");
    mo.setAttribute("class","mo");
    let tu = document.createElement("div");
    tu.setAttribute("class","tu");
    let we = document.createElement("div");
    we.setAttribute("class","we");
    let th = document.createElement("div")
    th.setAttribute("class","th");
    let fri = document.createElement("div");
    fri.setAttribute("class","fri");
    let sa = document.createElement("div");
    sa.setAttribute("class","sa");
    let su = document.createElement("div");
    su.setAttribute("class","su");
    days.appendChild(mo);
    days.appendChild(tu);
    days.appendChild(we);
    days.appendChild(th);
    days.appendChild(fri);
    days.appendChild(sa);
    days.appendChild(su);

    // giving the texts
    let hour = document.getElementById("hour");
    let minute = document.querySelector(".setapp > .timezone>.time>.minute");
    let am_pm1 = document.querySelector(".setapp > .timezone>.time>.am-pm");
    let am_pm2 = document.createElement("span");
    am_pm2.setAttribute("class","am")
    am_pm2.innerText = am_pm1.innerText
    time.innerHTML = hour.innerText + ":"+ minute.innerText + `<span>${am_pm2.innerText}</span>`
// time.appendChild(am_pm2)
let timeoooo = new Date().getTime()
    let hours =  new Date().getHours() % 12 % hour.innerText
    let minutes = new Date().getMinutes() % minute.innerText 
    p_hour.innerText = hours
    p_minute.innerText = minutes
    // if(p_minute.innerText = " "){
    //     p_minute.innerText="00"
    //     console.log(p_minute);
    // }
    text.innerText = "in " + p_hour.innerText + " hour,  " + p_minute.innerText+" minute"
    let alarmname2 = document.querySelector(".setcontainer>.setapp>.name>.alarmName");
    alarmname.innerText = alarmname2.innerText
    mo.innerText="m"
    tu.innerText= "tu"
    we.innerText = "we"
    th.innerText ="th"
    fri.innerText = "fri"
    sa.innerText = "sa"
    su.innerText = "su"
    clock.addEventListener("click",()=>{
        let item = document.querySelector(".setcontainer");
        item.style.display = "block"
    })
    let btns = document.querySelectorAll(".alarmtime >.clock > .heading > button");
    let span1 = document.querySelector(".alarmtime>.clock>.heading>button>span");
    btns.forEach(btn=>{
        console.log(btn);
        btn.onclick = function(){console.log("click");}
        // btn.appendChild(span1)
        // btn.addEventListener("click",()=>{
        //     console.log("click btn");
        //     btn.style.backgroundColor = "red"
        //     btn.style.justifyContent  = "flex-end"
        // })
    })
}
 function days(){
    let weekdays =document.querySelectorAll(".setapp>.days> div").forEach(day=>{
        let days_to_be_change = document.querySelectorAll(".alarmtime > .clock > .days > div").forEach(cday=>{
            day.onclick = function(){
                if(day.style.color === "var(--btn-color)"){
                    day.style.backgroundColor = "var( --btn-color)"
                day.style.color ="var(--setapp-color)"
                // if(e.innerText === cday.innerText){
                //     cday.style.backgroundColor = "var( --btn-color)"
                //     cday.style.color ="var(--setapp-color)"
                // }
               
                }else{
                    day.style.backgroundColor = "transparent"
                day.style.color ="var(--btn-color)"
                if(e.innerText === cday.innerText){
                    cday.style.backgroundColor = "transparent"
                    cday.style.color ="var(--btn-color)"
                }
               
                }
                
            }
        })
        
    })
 }


//  function changeday(){
//     let maindays = document.querySelectorAll(".setcontainer > .setapp > .days > div").forEach(Mday=>{
//         let days_to_be_change = document.querySelectorAll(".alarmtime > .clock > .days > div").forEach(Cday=>{
//             if(Mday.innerText === Cday.innerText){
//                 Cday.style.backgroundColor = Mday.style.backgroundColor
//                 console.log("done");
//             }
//         });
//     });
// }















