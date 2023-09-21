import { Close, SearchOutlined } from "@mui/icons-material";
import ImageBox from "./ImageBox";
import imgData from "../data";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Tag from "./Tag";

const SortableImage = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = { transition, transform: CSS.Transform.toString(transform) };
  const tagSpans = image.tags.map((tag, i) => <Tag key={i} tagVal={tag} />);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='relative rounded-xl overflow-hidden shadow-2xl cursor-grab'
    >
      <img
        src={image.src}
        alt={`Gallery Image ${image.id}`}
        className='w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-500 ease-in-out'
      />
      <div className='absolute flex flex-wrap gap-1 left-2 bottom-2'>
        {tagSpans}
      </div>
    </div>
  );
};

const MainContent = ({ userLoggedIn }) => {
  const [allImages, setAllImages] = useState(imgData);
  const [searchVal, setSearchVal] = useState("");
  const [searchTags, setSearchTags] = useState([]);

  const handleSearch = () => {
    const uniqueTags = [...new Set(searchTags), searchVal.trim().toLowerCase()];
    setSearchTags([...new Set(uniqueTags)]);
    setSearchVal("");
  };

  const removeTag = (event) => {
    event.preventDefault();
    const tagName = event.target.closest("span").textContent.trim();
    const newSearchTags = searchTags.filter((tag) => tag !== tagName);
    setSearchTags(newSearchTags);
  };

  const imgElements = searchTags.length
    ? allImages
        .filter((data) => data.tags.some((tag) => searchTags.includes(tag)))
        .map((data, i) => (
          <SortableImage
            key={i}
            image={data}
            // id={data.id}
            // src={data.src}
            // tags={data.tags}
          />
        ))
    : allImages.map((data, i) => (
        <SortableImage
          key={i}
          image={data}
          // id={data.id}
          // src={data.src}
          // tags={data.tags}
        />
      ));

  const tagElements = searchTags.map((tag, i) =>
    tag ? (
      <span
        key={i}
        className='flex justify-center items-center text-base px-2 py-1 border rounded-full'
      >
        {tag}
        <button
          type='button'
          className='flex justify-center items-center ml-2 p-2 w-3 h-3 rounded-full border'
          onClick={removeTag}
        >
          <Close />
        </button>
      </span>
    ) : null
  );
  // console.log(tagElements);

  const onDragEnd = (event) => {
    // console.log("onDragEnd", event);
    const { active, over } = event;
    if (active.id === over.id) return;

    setAllImages((allImages) => {
      const oldIndex = allImages.findIndex((image) => (image.id = active.id));
      const newIndex = allImages.findIndex((image) => (image.id = over.id));

      return arrayMove(allImages, oldIndex, newIndex);
    });
  };

  return (
    <main className='grid gap-4 p-4 max-w-[120rem] mx-auto'>
      <div className='relative md:max-w-[50%]'>
        <input
          type='text'
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder='Search images using tags'
          className='w-full p-2 pl-4 pr-10 border rounded-full text-base'
        />
        <button
          className='absolute top-[50%] right-2 translate-y-[-50%]'
          onClick={handleSearch}
        >
          <SearchOutlined fontSize='large' />
        </button>
      </div>

      <div className='flex flex-wrap gap-3'>{tagElements}</div>

      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={allImages} strategy={rectSortingStrategy}>
          <div className='mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {imgElements.length ? (
              imgElements
            ) : (
              <p className='text-base text-center'>
                Sorry, your search did not give any results.
              </p>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </main>
  );
};

export default MainContent;
