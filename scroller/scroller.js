const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    let scrollerInner = scroller.querySelector(".scroller-Inner");
    let scrollerContent = Array.from(scrollerInner.children);

    // console.log(scrollerContent);

    scrollerContent.forEach((item) => {
      // debugger;
      const duplicatedItem = item.cloneNode(true);

      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
      console.log(duplicatedItem);
    });
  });
}
