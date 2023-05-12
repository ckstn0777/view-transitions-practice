import { ViewItem } from "../../types";

type ViewMainProps = {
  item: ViewItem;
};

export default function ViewMain({ item }: ViewMainProps) {
  return (
    <section className="basis-7/12">
      <div className="relative h-80">
        <img
          src={item.img}
          alt="view main img"
          className="absolute top-0 left-0 max-h-80 w-full object-cover opacity-100"
        />
      </div>

      <h3 className="view-title text-xl my-4 text-left">{item.title}</h3>
      <hr />
      <p className="view-description my-4 text-left">{item.desc}</p>
      <hr />
      <p className="view-counter my-4 text-left text-sm">
        Like {item.like} View {item.view}
      </p>
    </section>
  );
}
