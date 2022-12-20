import { IDevtoPost } from '@/types/devto';
import Link from 'next/link';
const post = ({ post }: { post: IDevtoPost }) => {
  return (
    <div className="w-11/12 h-30 flex flex-col bg-gray-50 dark:bg-black mt-6 mb-2 border border-gray-200 hover:scale-110">
      <h2 className="mt-4 mb-1 ml-4 text-sm sm:text-base"> {post.title} </h2>
      <span className="ml-4 mb-1 italic text-xs sm:text-sm">
        Publish date: {post.readable_publish_date}
      </span>
      <Link href={post.url} className="mb-4">
        <span className="ml-4 italic text-xs">Read on Dev.to</span>
      </Link>
    </div>
  );
};

export default post;
