//Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));

//skill animation
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            // Progress Animation html-css
            let CircularProgress1 = document.querySelector(".html-css"),
                progress1 = document.querySelector(".progress1");

            let start_value1 = 0, end_value1 = 70, speed1 = 30;
            let loop1 = setInterval(() => {
                start_value1++;
                progress1.textContent = start_value1 + '%';
                CircularProgress1.style.background = 'conic-gradient(rgb(172, 20, 9)' + start_value1 * 3.6 + 'deg, #c5c0c0 0deg)';
                if (start_value1 == end_value1) {
                    clearInterval(loop1);
                }

            }, speed1);

            // Progress Animation C
            let CircularProgress2 = document.querySelector(".c"),
                progress2 = document.querySelector(".progress2");

            let start_value2 = 0, end_value2 = 60, speed2 = 30;
            let loop2 = setInterval(() => {
                start_value2++;
                progress2.textContent = start_value2 + '%';
                CircularProgress2.style.background = 'conic-gradient(rgb(172, 20, 9)' + start_value2 * 3.6 + 'deg, #c5c0c0 0deg)';
                if (start_value2 == end_value2) {
                    clearInterval(loop2);
                }

            }, speed2);

            // Progress Animation Java
            let CircularProgress3 = document.querySelector(".java"),
                progress3 = document.querySelector(".progress3");

            let start_value3 = 0, end_value3 = 80, speed3 = 30;
            let loop3 = setInterval(() => {
                start_value3++;
                progress3.textContent = start_value3 + '%';
                CircularProgress3.style.background = 'conic-gradient(rgb(172, 20, 9)' + start_value3 * 3.6 + 'deg, #c5c0c0 0deg)';
                if (start_value3 == end_value3) {
                    clearInterval(loop3);
                }

            }, speed3);

            // Progress Animation Python
            let CircularProgress4 = document.querySelector(".python"),
                progress4 = document.querySelector(".progress4");

            let start_value4 = 0, end_value4 = 40, speed4 = 30;
            let loop4 = setInterval(() => {
                start_value4++;
                progress4.textContent = start_value4 + '%';
                CircularProgress4.style.background = 'conic-gradient(rgb(172, 20, 9)' + start_value4 * 3.6 + 'deg, #c5c0c0 0deg)';
                if (start_value4 == end_value4) {
                    clearInterval(loop4);
                }

            }, speed4);

             // Progress Animation Editing
            let CircularProgress5 = document.querySelector(".editing"),
                progress5 = document.querySelector(".progress5");

         let start_value5 = 0, end_value5 = 55, speed5 = 30;
         let loop5 = setInterval(() => {
             start_value5++;
             progress5.textContent = start_value5 + '%';
             CircularProgress5.style.background = 'conic-gradient(rgb(172, 20, 9)' + start_value5 * 3.6 + 'deg, #c5c0c0 0deg)';
             if (start_value5 == end_value5) {
                 clearInterval(loop5);
             }

         }, speed5);
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.skill-info');
hiddenElements1.forEach((el) => observer1.observe(el));

//hover to click for section 2
const edu_click = document.querySelector('.tap');
edu_click.addEventListener('click', function(){
    edu_click.click();
});
