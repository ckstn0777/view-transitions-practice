import { ViewItem } from "../types";

type ViewMainProps = {
  mainRef: React.RefObject<HTMLImageElement>;
  futureMainRef: React.RefObject<HTMLImageElement>;
  item: ViewItem;
  futureItem: ViewItem | undefined;
};

export default function ViewMain({
  mainRef,
  futureMainRef,
  item,
  futureItem,
}: ViewMainProps) {
  console.log(item);
  return (
    <section className="basis-7/12">
      <div className="relative h-80">
        <img
          src={item.img}
          alt="view main img"
          className="absolute top-0 left-0 max-h-80 w-full object-cover opacity-100"
          ref={mainRef}
        />

        <img
          src={futureItem?.img}
          alt="view main img"
          className="absolute top-0 left-0 max-h-80 w-full object-cover opacity-0"
          ref={futureMainRef}
        />
      </div>

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
