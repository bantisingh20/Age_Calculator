function agecalculator() {
    var dmsg = document.getElementById('dmsg');
    var mmsg = document.getElementById('mmsg');
    var ymsg = document.getElementById('ymsg');
  
    let years = document.getElementById('years');
    let monthes = document.getElementById('month');
    let hours = document.getElementById('hours');
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    let day = document.getElementById('day');
  
  
    // let bdate =document.getElementById('date').value;
    let label = document.querySelectorAll('label');
    let d = +document.getElementById('d').value;
    let m = +document.getElementById('m').value;
    let y = +document.getElementById('y').value;
    let z = y + '-' + m + '-' + d;
    console.log(z)
  
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let input = new Date(z);
    let birth_date = input.getDate();
    let birth_month = input.getMonth();
    let birth_year = input.getFullYear();
  
    //curent
    let currentdate = new Date().getDate();
    let currentyear = new Date().getFullYear();
    let currentmonth = new Date().getMonth();
  
  
  
  
  
  
    if (d > 31 || d < -1) {
      dmsg.innerText = "Enter Valid Date";
      dmsg.style.color = "hsl(0, 100%, 67%)";
      document.getElementsByTagName('label')[0].style.color = "hsl(0, 100%, 67%)";
    } else if (d == "") {
      dmsg.innerText = "This Field is Required.";
      dmsg.style.color = "hsl(0, 100%, 67%)";
      document.getElementsByTagName('label')[0].style.color = "hsl(0, 100%, 67%)";
    } else {
      dmsg.innerText = "";
      document.getElementsByTagName('label')[0].style.color = '';
    }
  
    if (m > 12 || m < -1) {
      mmsg.innerText = "Enter Valid Month";
      mmsg.style.color = "hsl(0, 100%, 67%)";
      document.getElementsByTagName('label')[1].style.color = "hsl(0, 100%, 67%)";
    } else if (m == "") {
      mmsg.innerText = "This Field is Required.";
      document.getElementsByTagName('label')[1].style.color = "hsl(0, 100%, 67%)";
      mmsg.style.color = "hsl(0, 100%, 67%)";
    } else {
      mmsg.innerText = "";
      document.getElementsByTagName('label')[1].style.color = '';
    }
  
    if (y > 2023) {
      ymsg.innerText = "Must be in the past";
      document.getElementsByTagName('label')[2].style.color = "hsl(0, 100%, 67%)";
      ymsg.style.color = "hsl(0, 100%, 67%)";
    } else if (y == "") {
      ymsg.innerText = "This Field is Required.";
      document.getElementsByTagName('label')[2].style.color = "hsl(0, 100%, 67%)";
      ymsg.style.color = "hsl(0, 100%, 67%)";
    } else {
      ymsg.innerText = "";
      ymsg.style.color = '';
      document.getElementsByTagName('label')[2].style.color = '';
    }
  
    //culate age
  
    if (birth_year > currentyear) {
      console.log("Enter Valid Year else Your are Not Born");
      c_year = 0;
    }
    let s = birth_month - 1;
    if (birth_date > currentdate) {
      currentdate = currentdate + months[s];
      currentmonth = currentmonth - 1;
    }
  
    if (birth_month > currentmonth) {
      currentyear = currentyear - 1;
      currentmonth = currentmonth + 12;
    }
  
    var c_date = currentdate - birth_date;
    var c_month = currentmonth - birth_month;
    var c_year = currentyear - birth_year;
  
    let year = c_year + ' Years ';
    let month = c_month + ' Months ';
    let Days = c_date + ' Days';
    let ac = year + month + Days;
    console.log(ac);
    years.innerText = ac;
  
    //in months 
    let total_months = c_year * 12 + c_month;
    console.log(total_months + ' Months ' + Days);
    monthes.innerHTML = total_months;
  
    // in Days 
    let c = 0
    for (var i = 0; i < c_month; i++) {
      c += months[i];
      // console.log(c)
    }
    let total_Days = c_year * 365 + c_date + c;
    console.log(total_Days + ' Days');
    day.innerText = total_Days;
  
    //hours
    let total_hours = total_Days * 24;
    console.log(total_hours + ' Hours');
    hours.innerText = total_hours;
  
    //minutes
    let total_min = total_hours * 60;
    console.log(total_min + ' Minutes');
    minutes.innerText = total_min;
  
    //seconds
    let total_sec = total_min * 60;
    console.log(total_sec + ' Seconds');
    seconds.innerText = total_sec;
  
    if (isNaN(total_sec)) {
      seconds.innerText = "--";
      seconds.style.color = "hsl(0, 100%, 67%)";
    } else {
      seconds.style.color = 'purple'
    }
  
    if (isNaN(c_year)) {
      years.innerText = "--";
      years.style.color = "hsl(0, 100%, 67%)";
    } else {
      years.style.color = 'purple';
    }
  
    if (isNaN(c_month)) {
      monthes.innerText = '--';
      monthes.style.color = "hsl(0, 100%, 67%)";
    } else {
      monthes.style.color = 'purple';
    }
  
    if (isNaN(total_hours)) {
      hours.innerText = '--';
      hours.style.color = "hsl(0, 100%, 67%)";
    } else {
      hours.style.color = 'purple';
    }
  
    if (isNaN(total_Days)) {
      day.innerText = '--';
      day.style.color = "hsl(0, 100%, 67%)";
    } else {
      day.style.color = 'purple';
    }
  
    if (isNaN(total_min)) {
      minutes.innerText = '--';
      minutes.style.color = "hsl(0, 100%, 67%)";
    } else {
      minutes.style.color = 'purple';
    }
  }
  