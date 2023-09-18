import Tag from "./Tag";

const ImageBox = ({ id, src, tags }) => {
  const tagSpans = tags.map((tag, i) => <Tag key={i} tagVal={tag} />);

  return (
    <div className='relative rounded-xl overflow-hidden shadow-2xl cursor-grab'>
      <img
        src={src}
        alt={`Gallery Image ${id}`}
        className='w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-500 ease-in-out'
      />
      <div className='absolute flex gap-1 left-2 bottom-2'>{tagSpans}</div>
    </div>
  );
};

export default ImageBox;
