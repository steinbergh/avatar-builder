// const defaultArgs = {
//   triggerClass: 'u-watch',
//   offsetBottom: 0.85,
//   offsetTop: 0,
// };

let basicScrollOptions = {
  rootMargin: "0px",
  threshold: 0.3,
};

let outScrollOptions = {
  rootMargin: "0px",
  threshold: 0.4,
};

const basicScrollObserver = new IntersectionObserver(
  handleBasicScrollObserver,
  basicScrollOptions
);
const outScrollObserver = new IntersectionObserver(
  handleOutScrollObserver,
  outScrollOptions
);

function handleBasicScrollObserver(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
      entry.target.classList.add("u-watch--active");
      basicScrollObserver.unobserve(entry.target);
    }
  });
}

function handleOutScrollObserver(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.boundingClientRect.top <= 0) {
      entry.target.classList.add("u-watch--active-out");
    } else {
      entry.target.classList.remove("u-watch--active-out");
    }
  });
}

export default function scrollRevealInit() {
  // const { triggerClass, elementClass, offsetBottom, offsetTop } = options;

  // if (document.querySelectorAll(`.u-watch`).length === 0) {
  //   return;
  // }

  const watchers = document.querySelectorAll(`.u-watch`);

  if (watchers) {
    [].forEach.call(watchers, (watcher) => {
      basicScrollObserver.observe(watcher);
    });
  }

  const outWatchers = document.querySelectorAll(`.u-watch--out`);

  if (outWatchers) {
    [].forEach.call(outWatchers, (watcher) => {
      outScrollObserver.observe(watcher);
    });
  }
}
