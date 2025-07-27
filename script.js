let currentDate = document.querySelector(".current-date");
let daystag = document.querySelector(".days");
let prevnextcon = document.querySelectorAll(".icons i");
let date = new Date(),
  currrYear = date.getFullYear(),
  currMonth = date.getMonth();
console.log(date);
console.log(currrYear);
console.log(currMonth);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let renderCalender = () => {
  let lastDateofmonth = new Date(currrYear, currMonth + 1, 0).getDate();
  // console.log(lastDateofmonth); //31
  let firstdayofmonth = new Date(currrYear, currMonth, 1).getDay();
  // console.log(firstdayofmonth); //0
  let lastDateofLastmonth = new Date(currrYear, currMonth, 0).getDate();
  // console.log(lastDateofLastmonth); //30
  let lastDayofmonth = new Date(currrYear, currMonth, lastDateofmonth).getDay();
  // console.log(lastDayofmonth); //2
  let liTag = "";
  for (let i = firstdayofmonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastmonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofmonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currrYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofmonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofmonth + 1}</li>`;
  }
  currentDate.textContent = `${months[currMonth]} ${currrYear}`;
  daystag.innerHTML = liTag;
};
renderCalender();
prevnextcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currrYear, currMonth);
      currrYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalender();
  });
});
