export default function CountDown(salesDate: string, daysLeft: string, hoursLeft: string, minutesLeft: string, secondesLeft: string,){
    // Set the date we're counting down to
    var countDownDate = new Date(salesDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        days < 10 ? days = "0" + days : days = days;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours < 10 ? hours = "0" + hours : hours = hours;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        seconds < 10 ? seconds = "0" + seconds : seconds = seconds;

        // Display the result in the element with id="demo"
        // document.getElementById("countDownContainer").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";

        document.getElementById(daysLeft).innerHTML = `${days}`;
        document.getElementById(hoursLeft).innerHTML = `${hours}`;
        document.getElementById(minutesLeft).innerHTML = `${minutes}`;
        document.getElementById(secondesLeft).innerHTML = `${seconds}`;

        // document.getElementById("countDownContainer").innerHTML = `
        //                 <div class="flex flex-col">
        //                     <p class="text-xs">Days</p>
        //                     <p class="text-4xl font-semibold">${days}</p>
        //                 </div>
        //                 <p class="text-2xl text-primary font-semibold">:</p>
        //                 <div class="flex flex-col">
        //                     <p class="text-xs">Hours</p>
        //                     <p class="text-4xl font-semibold">${hours}</p>
        //                 </div>
        //                 <p class="text-2xl text-primary font-semibold">:</p>
        //                 <div class="flex flex-col">
        //                     <p class="text-xs">Minutes</p>
        //                     <p class="text-4xl font-semibold">${minutes}</p>
        //                 </div>
        //                 <p class="text-2xl text-primary font-semibold">:</p>
        //                 <div class="flex flex-col">
        //                     <p class="text-xs">Secondes</p>
        //                     <p class="text-4xl font-semibold">${seconds}</p>
        //                 </div>
        // `

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(countDownCls).innerHTML = "EXPIRED";
        }
    }, 1000);
}