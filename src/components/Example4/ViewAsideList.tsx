import { items } from "../../model/Items";
import { ViewItem } from "../../types";

type ViewAsideListProps = {
  onClickItem: (e: React.MouseEvent, item: ViewItem) => void;
};

export default function ViewAsideList({ onClickItem }: ViewAsideListProps) {
  return (
    <section className="basis-5/12">
      <ul className="flex gap-4 md:flex-col md:gap-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 items-center cursor-pointer"
            onClick={(e) => onClickItem(e, item)}
          >
            <img
              src={item.img}
              alt="view aside img"
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-left">{item.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
