import React from 'react';
import { IDevtoPost } from '@/types/devto';
const post = ({ post }: { post: IDevtoPost }) => {
  return (
    <div className="w-11/12 h-36 bg-blue-50 mt-4 flex flex-col items-center">
      <h2 className="text-center mt-4 mb-4"> {post.title} </h2>
    </div>
  );
};

export default post;
