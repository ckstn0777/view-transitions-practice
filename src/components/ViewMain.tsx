import { ViewItem } from "../types";

type ViewMainProps = {
  item: ViewItem;
};

export default function ViewMain({ item }: ViewMainProps) {
  return (
    <section className="basis-7/12">
      <img
        src={item.img}
        alt="view main img"
        className="max-h-80 w-full object-cover"
      />

      <h3 className="text-xl my-4 text-left">{item.title}</h3>
      <hr />
      <p className="my-4 text-left">{item.desc}</p>
      <hr />
      <p className="my-4 text-left text-sm">
        Like {item.like} View {item.view}
      </p>
    </section>
  );
}
