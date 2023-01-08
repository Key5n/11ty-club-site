const id = "animationPlace";
const animaitonPlace = document.getElementById(id);

const displayedNames = [
  "n",
  "な",
  "なg",
  "なご",
  "なごy",
  "なごや",
  "なごやk",
  "なごやこ",
  "なごやこう",
  "なごやこうg",
  "なごやこうgy",
  "なごやこうぎょ",
  "なごやこうぎょう",
  "なごやこうぎょうd",
  "なごやこうぎょうだ",
  "なごやこうぎょうだい",
  "なごやこうぎょうだいg",
  "なごやこうぎょうだいが",
  "なごやこうぎょうだいがk",
  "なごやこうぎょうだいがく",
  "名古屋工業大学\n",
  "名古屋工業大学\np",
  "名古屋工業大学\nぷ",
  "名古屋工業大学\nぷr",
  "名古屋工業大学\nぷろ",
  "名古屋工業大学\nぷろg",
  "名古屋工業大学\nぷろぐ",
  "名古屋工業大学\nぷろぐr",
  "名古屋工業大学\nぷろぐら",
  "名古屋工業大学\nぷろぐらm",
  "名古屋工業大学\nぷろぐらみ",
  "名古屋工業大学\nぷろぐらみn",
  "名古屋工業大学\nぷろぐらみん",
  "名古屋工業大学\nぷろぐらみんg",
  "名古屋工業大学\nぷろぐらみんぐ",
  "名古屋工業大学\nぷろぐらみんぐb",
  "名古屋工業大学\nぷろぐらみんぐぶ",
  "名古屋工業大学\nプログラミング部",
  "名古屋工業大学\nプログラミング部",
  "名古屋工業大学\nプログラミング部",
  "名古屋工業大学\nプログラミング部",
  "名古屋工業大学\nプログラミング部",
];

/**
 *
 * @param {HTMLElement} element
 * @param {string[]} displayedNames
 */
const displayClubNameLikeTyping = async (element, displayedNames) => {
  for (let i = 0; i < displayedNames.length; i++) {
    await /** @type {Promise<void>} */ (
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          element.innerHTML = `<h1>${displayedNames[i]}</h1>`;
        }, 50);
      })
    );
  }
};

if (animaitonPlace) {
  displayClubNameLikeTyping(animaitonPlace, displayedNames);
} else {
  new Error(id + "をもったタグは存在しません");
}

/**
 * @type {(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => IntersectionObserver}
 */
const doWhenIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("blue");
      console.log("交差");
    }
  });
  return observer;
};

// const main = document.querySelector("#general");
// const options = {
//   root: null,
//   rootMargin: "-50% 0px",
//   threshold: 0,
// };
// const observer = new IntersectionObserver(doWhenIntersection, options);
// if (main) {
//   observer.observe(main);
// }

const navMenuButton = document.getElementById("header__nav__menu");
const headerElement = document.getElementById("header");
if (navMenuButton && headerElement) {
  navMenuButton.addEventListener("click", () => {
    if (headerElement.classList.contains("open")) {
      headerElement.classList.remove("open");
    } else {
      headerElement.classList.add("open");
    }
  });
} else {
  new Error("そのIDがありません");
}
