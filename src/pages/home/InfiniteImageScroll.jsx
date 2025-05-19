import { useEffect } from "react";

const InfiniteImageScroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center text-2xl font-bold text-white">Infinite Scroll Animation</h1>
      
      <div className="scroller overflow-hidden" data-direction="left" data-speed="fast">
        <div className="scroller__inner flex space-x-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`https://i.pravatar.cc/150?img=${num}`}
              alt=""
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteImageScroll;
