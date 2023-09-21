import Tag from "./Tag";

const ImageBox = ({
  id,
  src,
  tags,
  orientation,
  handleDragStart,
  handleDragEnter,
  handleDragEnd,
  handleDragOver,
  updateSearchTags,
}) => {
  const tagSpans = tags.map((tag, i) => (
    <Tag key={i} tagVal={tag} updateSearchTag={updateSearchTags} />
  ));

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-2xl cursor-grab md:h-[35rem] ${
        orientation == "landscape" ? "col-span-2" : null
      }`}
      draggable
      onDragStart={() => handleDragStart()}
      onDragEnter={() => handleDragEnter()}
      onDragEnd={() => handleDragEnd()}
      onDragOver={handleDragOver}
    >
      <img
        src={src}
        alt={`Gallery Image ${id}`}
        className='w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-500 ease-in-out'
        draggable={false}
      />
      <div className='absolute flex flex-wrap gap-1 left-2 bottom-2'>
        {tagSpans}
      </div>
    </div>
  );
};

export default ImageBox;
