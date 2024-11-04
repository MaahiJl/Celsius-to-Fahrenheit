// defaults
const $ = document

// دکمه ی change

// ایجاد flag ها
let titleFlag = false
let placeHolderFlag = false
let headerFlag = false
// ایجاد رویداد click
$.getElementById('change').addEventListener('click', function(){
    // reset اطلاعات قبلی
    let result = $.getElementById('result');
    result.style.display = 'none';
    $.querySelector('.input').value = ' '

    // تغییر تایتل صفحه
    if(titleFlag){
        $.title = "Celsius to Farenheit";
        titleFlag = false
    }else{
        $.title = "Farenheit to Celsius";
        titleFlag = true
    }

    // تغییر placeholder
    if(placeHolderFlag){
        $.querySelector('.input').placeholder = 'Celsius'
        placeHolderFlag = false
    }else{
        $.querySelector('.input').placeholder = 'Fahrenheit'
        placeHolderFlag = true
    }
    
    // تغییر هدر
    if(headerFlag){
        $.getElementsByTagName('h1')[0].innerHTML = 'Convert Celsius to Fahrenheit'
        headerFlag = false
    }else{
        $.getElementsByTagName('h1')[0].innerHTML = 'Convert Fahrenheit to Celsius'
        headerFlag = true
    }
});


// دکمه ی reset
$.getElementById('reset').addEventListener('click', function(){
    result.style.display = 'none';
    $.querySelector('.input').value = ' '


});


// دکمه ی convert

// ایجاد رویداد click
$.getElementById('convert').addEventListener('click', function(){

    // نمایش result
    result.style.display = 'block';

    // داده ی وارد شده توسط کاربرد
    let userGivenValue = +$.querySelector('.input').value;
    let answer = 0;

    // محاسبه
    if($.querySelector('.input').placeholder === 'Celsius'){

        answer = userGivenValue * (9/5) + 32
        result.innerHTML = userGivenValue + '°C to ' + answer + '°F'

    }else if($.querySelector('.input').placeholder === 'Farenheit'){

        answer = (userGivenValue - 32) * (5/9);
        answer = answer.toFixed(2);
        result.innerHTML = userGivenValue + '°F to ' + answer + '°C'

    }
});
// ایجاد keydown
$.querySelector('.input').addEventListener('keydown', function(){
    result.style.display = 'none';
});
