# Education platform

### This is a website for the school or any other educational institution with a nice and user-friendly design and adaptive layout. This is a multipage project is created to show all the courses of the school on the Home page and to show the details of each of the courses on a different page. 

#### Deploy: 
https://innaslota.github.io/education-platform/ 

**Note**: please use the [Google Chrome extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) to view the content, in case you don't see it.  This extension should be turned ON to block the CORS error with API.

#### Technologies used: 
- HTML;

- CSS;

- Vanilla JS;

- Axios;

#### Features implemented: 
- fetching data using API (axios);

- dynamic star rating;

- video play with no sound on hover/pause on unhover;

- pagination showing 10 courses per page;

- accordion on the Lessons page showing the video on click;

- demonstration of restricted lessons;

- video rate change with the keyboard; 

- dark/light mode;

- responsive layout and hamburger menu;

- sticky header;
 
**Important!** I decided to use the default images and video just to be able to demonstrate the features that I developed. Unfortunately, it was not able for me to access the authentic images and videos from API with the following code snippet due to the error 404: 
```
<article>
        <img class="course-image" src="${course.previewImageLink}" alt="Course 1">
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
        <video class="viewer content-img" src="${course.meta.courseVideoPreview.link}" controls></video>
      </article>
```
