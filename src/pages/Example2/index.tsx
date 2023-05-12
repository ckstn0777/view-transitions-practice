import { useState } from "react";
import ViewAsideList from "../../components/Example2/ViewAsideList";
import ViewMain from "../../components/Example2/ViewMain";
import { items } from "../../model/Items";
import { ViewItem } from "../../types";

import "./style.css";

export default function Example2() {
  const [currentViewItem, setCurrentViewItem] = useState(items[0]);

  const handleClickItem = (item: ViewItem) => {
    document.startViewTransition(() => {
      setCurrentViewItem(item);
    });
  };

  return (
    <main className="flex flex-col gap-6 md:w-[760px] md:flex-row">
      <ViewMain item={currentViewItem} />
      <ViewAsideList onClickItem={handleClickItem} />
    </main>
  );
}
