let days_show = document.querySelector('#days');
let hours_show = document.querySelector('#hours');
let minutes_show = document.querySelector('#minutes');
let seconds_show = document.querySelector('#seconds');
let countdown = document.querySelector('#countdown');
let title = document.querySelector('#title');
let tittle = document.querySelector('#tittle');

//set time
let new_year_date = new Date('Jan 1, 2021 00:00:00').getTime();

//create a function (update)
let timer = setInterval(update, 1000);

//This function will updated every 1 second
function update() {

    //present time
    let present_time = new Date().getTime();

    //remaining time
    let remaining_time = new_year_date - present_time;

    //count remaining days, hours, minutes & seconds
    let days = Math.floor(remaining_time / (1000 * 60 * 60 * 24));
    let hours = Math.floor(remaining_time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(remaining_time % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(remaining_time % (1000 * 60) / (1000));

    //checking odd number
    if (seconds % 2 !== 0) {
        seconds_show.style.color = "#fff";
    } else {
        seconds_show.style.color = "#ac5af8";
    }

    //show time
    days_show.innerHTML = days;
    hours_show.innerHTML = hours;
    minutes_show.innerHTML = minutes;
    seconds_show.innerHTML = seconds;

    //function will run when time is done
    if (remaining_time <= 0) {
        clearInterval(timer);
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        $('.fireworks').fireworks({
            sound: true, // sound effect
            opacity: 0.6,
            width: '100%',
            height: '100%'
        });
        countdown.style.display = "none";
        title.innerHTML = "May this year bring peace and happiness in your life.😊";
        title.style.color = '#e6005c'
        tittle.innerHTML = 'Happy New Year!!'
    }

}
