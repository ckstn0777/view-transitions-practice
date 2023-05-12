import { useEffect, useRef, useState } from "react";
import ViewAsideList from "../../components/Example1/ViewAsideList";
import ViewMain from "../../components/Example1/ViewMain";
import { items } from "../../model/Items";
import { ViewItem } from "../../types";

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
      main.animate([{ opacity: 0 }], { duration: 200 });
      // 미래(이제는 현재) 보이는 요소는 fade-in 되어 화면에 보여집니다.
      futureMain.animate([{ opacity: 1 }], { duration: 200 });

      // 애니메이션이 종료될 타이밍에 맞춰서 상태 변경과 스타일 변경 (아하~)
      setTimeout(() => {
        setCurrentViewItem(futureViewItem);
      }, 150);

      // 미래 요소는 undefined로 초기화 합니다.
      setTimeout(() => {
        setFutureViewItem(undefined);
      }, 200);
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
