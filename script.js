const loadLession = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json());
    .then((data) => console.log(data));
};

//const displayLesson = (lessons) => {
//console.log(lessons);
//};

loadLession()