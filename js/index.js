window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove("show");
                tabContent[i].classList.add("hide");
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains("hide")) {
                tabContent[b].classList.remove("hide");
                tabContent[b].classList.add("show");
            }
        }

        info.addEventListener("click", function(evt) {
            let target = evt.target;
            if (target && target.classList.contains("info-header-tab")) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });

        // Timer

        let deadLine = '2019-10-27';

        function getTimeRemaining(endTime) {
            let t = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));
                // hours = Math.floor((t/(1000/60/60) % 24);
                // days = Math.floor((t/(1000*60*60*24)));

            return {
                "total" : t,
                // "days": days,
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            };
        }
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            //  days = document.querySelector(".days"),
             hours = timer.querySelector(".hours"),
             minutes = timer.querySelector(".minutes"),
             seconds = timer.querySelector(".seconds"),
             timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            

            // if (t.days <= 9) {
            //     days.textContent = "0" + t.days;
            // } else (days.textContent = t.days);

            // if (t.hours <= 9) {
            //     hours.textContent = "0" + t.hours;
            // } else (hours.textContent = t.hours);

            // if (t.minutes <= 9) {
            //     minutes.textContent = "0" + t.minutes;
            // } else (minutes.textContent = t.minutes);

            // if (t.seconds <= 9) {
            //     seconds.textContent = "0" + t.seconds;
            // } else (seconds.textContent = t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
        
    }

    setClock("timer", deadLine);

    // Modal

    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
     overlay.style.display = 'block';
     this.classList.add('more-splash');
     //Запретить прокручивать сайт за модальным окном
     document.body.style.overflow = 'hidden';
    });
 
    close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
    });

});