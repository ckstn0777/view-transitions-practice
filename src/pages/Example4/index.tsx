import { useRef, useState } from "react";
import ViewAsideList from "../../components/Example4/ViewAsideList";
import ViewMain from "../../components/Example4/ViewMain";
import { items } from "../../model/Items";
import { ViewItem } from "../../types";

import "./style.css";

export default function Example4() {
  const [currentViewItem, setCurrentViewItem] = useState(items[0]);
  const mainThumbRef = useRef<HTMLImageElement>(null);

  const handleClickItem = (e: React.MouseEvent, item: ViewItem) => {
    if (!document.startViewTransition) {
      setCurrentViewItem(item);
      return;
    }

    const itemThumb = e.currentTarget.querySelector("img");

    if (!itemThumb || !mainThumbRef.current) {
      throw new Error("itemThumb or mainThumbRef is null");
    }

    // getBoundingClientRect - 위치, 크기 정보를 가져올 수 있다
    const itemThumbPos = itemThumb.getBoundingClientRect();
    const mainThumbPos = mainThumbRef.current.getBoundingClientRect();

    const itemW = Math.round(itemThumbPos.width);
    const itemH = Math.round(itemThumbPos.height);

    const mainW = Math.round(mainThumbPos.width);
    const mainH = Math.round(mainThumbPos.height);

    const x = Math.round(mainThumbPos.x) - Math.round(itemThumbPos.x);
    const y = Math.round(mainThumbPos.y) - Math.round(itemThumbPos.y);

    itemThumb.classList.add("view-selected-thumbnail");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transition: any = document.startViewTransition(() => {
      setCurrentViewItem(item);
    });

    transition.ready.then(() => {
      // keyframes, options
      document.documentElement.animate(
        [
          {
            transform: "translate(0px, 0px)",
            opacity: 1,
            width: `${itemW}px`,
            height: `${itemH}px`,
          },
          {
            transform: `translate(${x}px, ${y}px)`,
            opacity: 1,
            width: `${mainW}px`,
            height: `${mainH}px`,
          },
        ],
        {
          duration: 500,
          fill: "forwards", // fill-mode (애니메이션이 끝나도상태 유지)
          pseudoElement: "::view-transition-old(view-selected-thumb)",
          // ::view-transition-old(view-selected-thumb)에 대해서만 애니메이션 설정
        }
      );
    });

    transition.finished.finally(() => {
      itemThumb.classList.remove("view-selected-thumbnail");
    });
  };

  return (
    <main className="flex flex-col gap-6 md:w-[760px] md:flex-row">
      <ViewMain item={currentViewItem} mainThumbRef={mainThumbRef} />
      <ViewAsideList onClickItem={handleClickItem} />
    </main>
  );
}
