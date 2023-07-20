import {
   BookmarkIcon,
   ChatBubbleBottomCenterTextIcon,
   ClockIcon,
   HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BlogsList = ({ blogs }) => {
   return blogs.map((blog) => {
      return (
         // single blog
         <div
            key={blog._id}
            className="col-span-6 md:col-span-3 lg:col-span-2 rounded-2xl bg-white
            w-full flex flex-col items-start shadow-md p-2 text-slate-800 max-h-[420px]">
            {/* blog image */}
            <div className="aspect-w-16 aspect-h-9 w-full  mb-4">
               <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="rounded-xl w-full h-full object-center object-cover"
               />
            </div>
            {/* blog content */}
            <div
               className="w-full flex flex-col items-start justify-between flex-1  p-2
             bg-gray-200 rounded-lg">
               {/* blog title */}
               <h2 className="text-lg font-bold mb-4">{blog.title}</h2>
               {/* blog data */}
               <div className="w-full flex flex-col items-center gap-y-4 lg:gap-y-6 xl:gap-y-8">
                  {/* blog author-catgory */}
                  <div className="w-full flex items-center justify-between">
                     <div className="flex items-center gap-x-2">
                        <img
                           src="/images/md.jpg"
                           alt="author"
                           className="w-6 h-6 rounded-full object-cover ring-2 ring-blue-600"
                        />
                        <span className="text-sm">محراب دهقان</span>
                     </div>
                     <Link
                        href={`/blogs/${blog.category.englishTitle}`}
                        className="text-sm font-medium bg-blue-200 text-blue-600 px-3 py-1 rounded-2xl
                      hover:bg-blue-600 hover:text-blue-200 transtion-all duration-200 cursor-pointer">
                        {blog.category.title}
                     </Link>
                  </div>
                  {/* blog interactions-reading time */}
                  <div
                     className="w-full flex flex-col items-start xl:flex-row xl:items-center xl:justify-between
                     gap-y-3 font-normal">
                     {/* interactions */}
                     <div className="flex items-center gap-x-2">
                        <button className="p-0.5 bg-red-200 rounded-md flex items-center gap-x-1 text-xs">
                           <HeartIcon className="w-4 h-4 text-red-600" />
                           <span className="text-red-600">
                              {blog.likesCount}
                           </span>
                        </button>
                        <button className="p-0.5 bg-gray-300 rounded-md flex items-center gap-x-1 text-xs">
                           <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-gray-600" />
                           <span className="text-gray-600">
                              {blog.commentsCount}
                           </span>
                        </button>
                        <button className="p-0.5 bg-blue-200 rounded-md">
                           <BookmarkIcon className="w-4 h-4 text-blue-600" />
                        </button>
                     </div>
                     {/* reading time */}
                     <div className="flex items-center gap-x-1 text-gray-500">
                        <span>
                           <ClockIcon className="w-3 h-3" />
                        </span>
                        <span className="text-xs">
                           زمان مطالعه: {blog.readingTime} دقیقه
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   });
};
export default BlogsList;