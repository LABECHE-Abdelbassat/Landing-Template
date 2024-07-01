// let scrollto = document.getElementById("scroll-to");

// window.scroll(function() {
//     var hT = scrollto.offset().top,
//         hH = scrollto.outerHeight(),
//         wH = window.height(),
//         wS = this.scrollTop();
//     if (wS > (hT+hH-wH)){
//         console.log('H1 on the view!');
//     }
//  });

let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let currentDate = new Date();
console.log(currentDate.getTime());
let date = new Date("7-16-2024 18:00");
console.log(date.getTime());
let the_date = date.getTime() - currentDate.getTime();

let currentnewdate = new Date().getTime();
let second = Math.floor(((date.getTime() - currentnewdate) / 1000) % 60);
let minute = Math.floor(((date.getTime() - currentnewdate) / 1000 / 60) % 60);
let hour = Math.floor(
  ((date.getTime() - currentnewdate) / 1000 / 60 / 60) % 24
);
let day = Math.floor((date.getTime() - currentnewdate) / 1000 / 60 / 60 / 24);

if (second < 0) {
  days.textContent = "0";
  hours.textContent = "0";
  minutes.textContent = "0";
  seconds.textContent = "0";
} else {
  days.textContent = day;
  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;
}

setInterval(() => {
  currentnewdate = new Date().getTime();

  console.log(second);

  second = Math.floor(((date.getTime() - currentnewdate) / 1000) % 60);
  minute = Math.floor(((date.getTime() - currentnewdate) / 1000 / 60) % 60);
  hour = Math.floor(((date.getTime() - currentnewdate) / 1000 / 60 / 60) % 24);
  day = Math.floor((date.getTime() - currentnewdate) / 1000 / 60 / 60 / 24);
  if (second < 0) {
    days.textContent = "0";
    hours.textContent = "0";
    minutes.textContent = "0";
    seconds.textContent = "0";
  } else {
    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
  }
}, 1000);

// articles page
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("article");

  if (articleId) {
    loadArticleDetails(articleId);
  }
});

function loadArticleDetails(articleId) {
  const articleContent = document.getElementById("article-content");

  const articles = {
    1: {
      title: "Test Title 1",
      image: "images/article (1).jpg",
      content:
        "Full content for article 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    // Add other articles here
  };

  if (articles[articleId]) {
    articleContent.innerHTML = `
            <img src="${articles[articleId].image}" alt="" />
            <h3>${articles[articleId].title}</h3>
            <p>${articles[articleId].content}</p>
        `;
  } else {
    articleContent.innerHTML = "<p>Article not found.</p>";
  }
}
