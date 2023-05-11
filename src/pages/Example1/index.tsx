import { useEffect, useRef, useState } from "react";
import ViewAsideList from "../../components/ViewAsideList";
import ViewMain from "../../components/ViewMain";
import { ViewItem } from "../../types";

const items: ViewItem[] = [
  {
    id: 1,
    title: "[0] This is title. A sample title. title sample.",
    desc: "[0] Description area. a sample text.",
    img: "/view-transitions-practice/album.jpeg",
    like: 22,
    view: 495,
  },
  {
    id: 2,
    title: "[1] This is title. A sample title. title sample.",
    desc: "[1] Description area. a sample text.",
    img: "/view-transitions-practice/album2.webp",
    like: 18,
    view: 564,
  },
  {
    id: 3,
    title: "[2] This is title. A sample title. title sample.",
    desc: "[2] Description area. a sample text.",
    img: "/view-transitions-practice/album3.jpeg",
    like: 30,
    view: 412,
  },
];

export default function Example1() {
  const [currentViewItem, setCurrentViewItem] = useState(items[0]); // 현재 아이템
  const [futureViewItem, setFutureViewItem] = useState<ViewItem>(); // 바뀔 아이템

  const mainRef = useRef<HTMLImageElement>(null); // 현재(이제는 과거) 보이는 요소
  const futureMainRef = useRef<HTMLImageElement>(null); // 미래(이제는 현재) 보이는 요소

  const handleClick = (item: ViewItem) => {
    setFutureViewItem(item);
  };

  useEffect(() => {
    const main = mainRef.current;
    const futureMain = futureMainRef.current;

    if (futureViewItem && main && futureMain) {
      // 현재(이제는 과거) 보이는 요소는 fade-out 되어 화면에서 사라집니다.
      main.animate([{ opacity: 0 }], { duration: 1000 });
      // 미래(이제는 현재) 보이는 요소는 fade-in 되어 화면에 보여집니다.
      futureMain.animate([{ opacity: 1 }], { duration: 1000 });

      // 애니메이션이 종료되기 전 미리 미래요소를 현재요소로 교체 합니다.
      setTimeout(() => {
        setCurrentViewItem(futureViewItem);
      }, 950);

      // 미래 요소는 undefined로 초기화 합니다.
      setTimeout(() => {
        setFutureViewItem(undefined);
      }, 1000);
    }
  }, [futureViewItem]);

  return (
    <main className="flex flex-col gap-6 md:w-[760px] md:flex-row">
      <ViewMain
        mainRef={mainRef}
        futureMainRef={futureMainRef}
        // 현재 데이터가 화면에 렌더링 됩니다.
        item={currentViewItem}
        // 미래에 보일 데이터가 있다면 화면에 보이진 않지만 렌더링 됩니다.
        futureItem={futureViewItem}
      />
      <ViewAsideList items={items} onClick={handleClick} />
    </main>
  );
}
