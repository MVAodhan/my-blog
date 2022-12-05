import Link from 'next/link';

const Nav = () => {
  return (
    <div className="navbar">
      <div className=" h-full w-full flex justify-center items-center  ">
        <div className=" w-4/5  sm:w-2/4  2xl:w-1/4 flex justify-around ">
          <Link
            className="btn btn-sm md:btn btn-outline md:btn-outline font-normal md:font-normal"
            href="/"
          >
            Home
          </Link>
          <Link
            className="btn btn-sm md:btn btn-outline md:btn-outline font-normal md:font-normal"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
