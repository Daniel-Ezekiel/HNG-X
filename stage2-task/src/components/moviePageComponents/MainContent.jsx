import placeholderImg from "../../assets/img/placeholderImg.png";
import {
  ConfirmationNumberRounded,
  FormatListBulletedRounded,
  KeyboardArrowDownRounded,
  Star,
  StarOutlineRounded,
  StarRounded,
} from "@mui/icons-material";
import Genre from "./Genre";

const MainContent = ({
  title,
  details,
  imgSrc,
  releaseDate,
  length,
  rating,
  genres,
}) => {
  console.log(genres);
  const genreList = genres.map((genre) => (
    <Genre key={genre.id} genreName={genre.name} />
  ));
  return (
    <main className='p-4 grid gap-3 lg:grid-cols-12 xl:col-start-3 xl:col-span-10 xl:pt-[4rem] xl:px-[7rem]'>
      <div className='movie-trailer h-[20rem] rounded-2xl overflow-hidden sm:h-[30rem] lg:col-span-full lg:h-[45rem] xl:h-[50rem]'>
        <img
          src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
          alt='movie poster'
          className='w-full object-cover'
        />
      </div>

      <div className='movieDetails grid grid-cols-4 items-center gap-3 font-medium text-xl md:grid-cols-10 lg:grid-cols-8 lg:col-span-7'>
        <div className='col-span-full flex flex-wrap items-center gap-4'>
          <h1 className='col-span-full text-[2.3rem]' data-testid='movie-title'>
            {title}
          </h1>
          •
          <span className='col-span-1' data-testid='movie-release-date'>
            {new Date(releaseDate).toUTCString()}
          </span>
          •
          <span className='col-span-1' data-testid='movie-runtime'>
            {length} mins
          </span>
          •
          <div className='col-span-full flex gap-2 md:col-span-4'>
            {genreList}
          </div>
          <div className='col-span-full flex items-center text-xl gap-2 xl:col-span-2'>
            <span>
              <StarRounded fontSize='large' className='mr-1 text-rose' />
              {rating.toPrecision(2)}
            </span>{" "}
            |<span>350k</span>
          </div>
        </div>

        <p className='col-span-full' data-testid='movie-overview'>
          {details}
        </p>

        <p className='col-span-full text-rose'>
          <span className='text-dark-gray'>Director : </span>
          Joseph Kosinski
        </p>

        <p className='col-span-full text-rose'>
          <span className='text-dark-gray'>Writers : </span>
          Joseph Kosinski
        </p>

        <p className='col-span-full text-rose'>
          <span className='text-dark-gray'>Stars : </span>
          Joseph Kosinski
        </p>

        <div className='flex items-center col-span-full border border-gray rounded-2xl'>
          <span className='mr-4 p-2 rounded-2xl bg-rose text-white'>
            Top rated movie #65
          </span>
          <span className='mr-auto'>Awards 9 nominations</span>
          <KeyboardArrowDownRounded fontSize='large' className='mr-3' />
        </div>
      </div>

      <aside className='grid gap-3 text-xl lg:col-span-5 3xl:p-[2rem]'>
        <button className='p-2  bg-rose rounded-xl text-white hover:scale-105 transition-transform duration-500 ease-in-out'>
          <ConfirmationNumberRounded className='mr-2' fontSize='large' />
          See Showtimes
        </button>

        <button
          style={{ backgroundColor: "rgba(190,18,60,0.1)" }}
          className='p-2 bg-rose rounded-xl text-dark-gray hover:scale-105 border-2 border-rose'
        >
          <FormatListBulletedRounded className='mr-2' fontSize='large' />
          More watch options
        </button>

        <div className='relative rounded-xl overflow-hidden'>
          <img
            src={placeholderImg}
            alt=''
            className='w-full h-full object-cover'
          />

          <button
            style={{ backgroundColor: "rgba(18,18,18,0.4)" }}
            className='absolute bottom-[0] px-2 py-2 w-full flex items-center gap-2 text-start text-base text-white'
          >
            <FormatListBulletedRounded fontSize='large' />
            The best movies and shows in September
          </button>
        </div>
      </aside>
    </main>
  );
};

export default MainContent;
