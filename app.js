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

//Fetch API and Pagination

function displayCourses(response) {
  let coursesInfo = response.data.courses;
  const paginationElement = document.getElementById('pagination');

  let currentPage = 1;
  let rows = 10;

  function displayList (items, page) {
    page--;

    let loopStart = rows * page;
    let loopEnd = loopStart + rows;
    let paginatedItems = items.slice(loopStart, loopEnd);

    let coursesHTML = `<div class='courses-list'>`;
    paginatedItems.forEach(function(course) {
    coursesHTML += `
      <article>
        <img class="course-image" src="${course.previewImageLink}/cover.webp" alt="Course 1">
        <div class="lessons-number">
          <a class="btn2"><i class="bx bx-play"></i> <span class="les-number">${course.lessonsCount}&nbsp;</span> Lessons</a>
        </div>
        <h3><a href="coursepage.html" class="course-link">${course.title}</a></h3>
        <div class="description-tags">
          <span>${course.tags[0]}</span>
        </div>
        <div class="rating">
          <div class="rating-body">
            <div class="rating-active"></div>
            <div class="rating-items">
              <input type="radio" class="rating-item" value="1" name="rating">
              <input type="radio" class="rating-item" value="2" name="rating">
              <input type="radio" class="rating-item" value="3" name="rating">
              <input type="radio" class="rating-item" value="4" name="rating">
              <input type="radio" class="rating-item" value="5" name="rating">
            </div>
          </div>
          <div class="rating-value">${course.rating}</div>
        </div>
        <video class="viewer content-img" id="video-course" controls></video>
      </article>
    `;
    });
    coursesHTML += `</div>`;
    document.querySelector('.courses').innerHTML = coursesHTML;

    const videoPlayers = document.querySelectorAll('.viewer');
    videoPlayers.forEach((videoPlayer, i) => {
      const videoSource = `${response.data.courses[i].meta.courseVideoPreview.link}`;
      const hls = new Hls();

      if (Hls.isSupported()) {
        hls.loadSource(videoSource);
        hls.attachMedia(videoPlayer);
      }
    });
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
      displayList(items, currentPage);

      currentButton = document.querySelector('.pagination button.active');
      currentButton.classList.remove('active');
      button.classList.add('active');
    })
    return button;
  }

  displayList(coursesInfo, currentPage);
  setupPagination(coursesInfo, paginationElement, rows);

  //Play video on hover

  let vids = document.querySelectorAll("video");

  vids.forEach(vid => {

    vid.onmouseenter = function(){
      vid.muted = true;
      vid.play();
    }
      
    vid.onmouseleave = function(){
      vid.muted = true;
      vid.pause();
    }

    vid.onclick = function(){
      vid.play();
      vid.pause();
    }
  });

  //Show rating in stars

  const ratings = document.querySelectorAll('.rating');
  if (ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    let ratingActive, ratingValue;

    for(let i = 0; i < ratings.length; i++) {
      const rating = ratings[i];
      initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);
      setRatingActiveWidth();
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating-active');
      ratingValue = rating.querySelector('.rating-value')
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
  }
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYmJmYTJmMS1jOTcwLTRmZjEtOGJmNi03NDkyMTM5NTFlNTQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkxNTAwNDEsImV4cCI6MTY4MDA1MDA0MX0.YyX1_dA1jmDBLYKoPfFkVn5MpJ5pa4qMFPBGnXc6W9g";
axios.get('https://api.wisey.app/api/v1/core/preview-courses', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(displayCourses);

//Change the speed of the video

const video = document.querySelector('.player__video')
const ranges = document.querySelectorAll(".player__slider");

    function handleRangeUpdate() {
      video[this.name] = this.value;
    }

    function handleKeyDown(event) {
      if (event.keyCode === 37) { 
        vid.playbackRate -= 0.1;
      } else if (event.keyCode === 39) { 
        vid.playbackRate += 0.1;
      }
    }

    ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
    ranges.forEach((range) => {
      range.addEventListener("mousemove", handleRangeUpdate);
      range.addEventListener("keydown", handleKeyDown);
    });

