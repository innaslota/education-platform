//sticky header
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

//dark theme
const chk = document.querySelector(".dark-theme-input");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (this.checked) {
    localStorage.setItem("dark", this.checked);
  } else {
    localStorage.setItem("light", this.checked);
  }
});

//responsive hamburger menu
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

//replace active class in navbar
const navlink = document.querySelectorAll(".navlink");
for (var i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
  });
}

//add active class on scroll

const sectionsOnScroll = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sectionsOnScroll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navlist a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navlist a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYmJmYTJmMS1jOTcwLTRmZjEtOGJmNi03NDkyMTM5NTFlNTQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkxNTAwNDEsImV4cCI6MTY4MDA1MDA0MX0.YyX1_dA1jmDBLYKoPfFkVn5MpJ5pa4qMFPBGnXc6W9g";
axios.get('https://api.wisey.app/api/v1/core/preview-courses', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => console.log(res));

/*Pagination*/

const articles = [
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
  "<img src='images/course.jpg' alt='Course 1'><div class='lessons-number'><a href='#portfolio' class='btn2'><i class='bx bx-play' title='Watch My Work'></i> 10 Lessons</a></div><h3><a href='coursepage.html' class='course-link'>This is your course title. It should be places here</a></h3><div class='description-tags'><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span></div><div class='stars'><span class='star' data-value='1'></span><span class='star' data-value='2'></span><span class='star' data-value='3'></span><span class='star' data-value='4'></span><span class='star' data-value='5'></span></div><video id='video' class='player__video viewer content-img' src='images/652333414.mp4' controls></video>",
];

const coursesList = document.getElementById('courses');
const paginationElement = document.getElementById('pagination');

let currentPage = 1;
let rows = 10;

function displayList (items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;

  let loopStart = rowsPerPage * page;
  let loopEnd = loopStart + rowsPerPage;
  let paginatedItems = items.slice(loopStart, loopEnd);

  for(let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let itemElement = document.createElement('article');
    itemElement.classList.add('item');
    itemElement.innerHTML = item;

    wrapper.appendChild(itemElement);
  }
}

function setupPagination (items, wrapper, rowsPerPage) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function paginationButton (page, items) {
  let button = document.createElement('button');
  button.innerText = page;

  if (currentPage === page) {
    button.classList.add('active');
  }

  button.addEventListener('click', function () {
    currentPage = page;
    displayList(items, coursesList, rows, currentPage);

    currentButton = document.querySelector('.pagination button.active');
    currentButton.classList.remove('active');
    button.classList.add('active');
  })

  return button;
}


displayList(articles, coursesList, rows, currentPage);
setupPagination(articles, paginationElement, rows);

/*Play video on hover*/

let vids = document.querySelectorAll(".content-img");


vids.forEach(vid => {
  vid.onmouseenter = function(){
    vid.muted = true;
    vid.play();
  }
    
  vid.onmouseleave = function(){
    vid.muted = true;
    vid.pause();
  }
});



