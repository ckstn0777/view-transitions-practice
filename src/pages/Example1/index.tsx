import { useState } from "react";
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
  const [currentViewItem, setCurrentViewItem] = useState(items[0]);

  const handleClick = (item: ViewItem) => {
    setCurrentViewItem(item);
  };

  return (
    <main className="flex flex-col gap-6 md:w-[760px] md:flex-row">
      <ViewMain item={currentViewItem} />
      <ViewAsideList items={items} onClick={handleClick} />
    </main>
  );
}
