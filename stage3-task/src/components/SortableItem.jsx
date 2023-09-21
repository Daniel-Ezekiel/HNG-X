import { useSortable } from "@dnd-kit/sortable";
import Tag from "./Tag";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ item }) => {
  const orientation = item.type;
  const tagSpans = item.tags.map((tag, i) => <Tag key={i} tagVal={tag} />);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={item.id}
      className={`relative rounded-xl overflow-hidden shadow-2xl cursor-grab md:h-[35rem] ${
        orientation == "landscape" ? "col-span-2" : null
      }`}
    >
      <img
        src={item.src}
        alt={`Gallery Image ${item.id}`}
        className='w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-500 ease-in-out'
      />
      <div className='absolute flex flex-wrap gap-1 left-2 bottom-2'>
        {tagSpans}
      </div>
    </div>
  );
};

export default SortableItem;
