var jsonData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const bar = document.querySelectorAll(".bar");

for (let i = 0; i <= bar.length; i++) {
  bar[i].style.height = `${jsonData[i].amount * 3}px`;
  bar[i].setAttribute("special-id", `${jsonData[i].amount}`);
  var max = Math.max(...jsonData.map((o) => o.amount));
  if (max == jsonData[i].amount) {
    bar[i].classList.add("highest");
  }
  bar[i].addEventListener("mouseover", () => {
    bar[i].classList.add("unhide");
    bar[i].setAttribute("content", `$${jsonData[i].amount}`);
  });
  bar[i].addEventListener("mouseout", () => {
    bar[i].classList.remove("unhide");
  });
}
