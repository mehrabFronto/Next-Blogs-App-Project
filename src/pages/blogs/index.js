import PaginationComponent from "@/common/PaginationComponent";
import SEO from "@/common/SEO";
import BlogsList from "@/components/BlogsList/BlogsList";
import DesktopCategory from "@/components/DesktopCategory/DesktopCategory";
import DesktopSort from "@/components/DesktopSort/DesktopSort";
import MobileCategory from "@/components/MobileCategory/Mobilecategory";
import MobileSort from "@/components/MobileSort/MobileSort";
import Layout from "@/containers/Layout";
import { getAllBlogsService } from "@/services/getAllBlogsService";
import { getCategoriesService } from "@/services/getCategoriesService";
import queryString from "query-string";

export default function BlogsListPage({ blogsData, blogsCategories }) {
   return (
      <>
         <SEO
            title="بلاگ ها"
            desc="صفحه بلاگ ها"
         />
         <Layout>
            {/* mobile category and sort section */}
            <div className="flex md:hidden flex-col gap-y-4 px-2">
               <MobileCategory blogsCategories={blogsCategories} />
               <MobileSort />
            </div>
            {/* desktop category and sort section - blogs section */}
            <div
               className="container mx-auto grid gap-4 lg:gap-8 md:grid-cols-12 
            md:grid-rows-[60px_minmax(300px,1fr)] min-h-screen px-2">
               {/* desktop category section*/}
               <div className="hidden md:block md:col-span-4 lg:col-span-3 row-span-2">
                  <DesktopCategory blogsCategories={blogsCategories} />
               </div>

               {/* desktop sort section */}
               <div className="hidden md:block md:col-span-8 lg:col-span-9">
                  <DesktopSort />
               </div>

               {/* blogs section */}
               <div className="md:col-span-8 lg:col-span-9 grid grid-cols-6 gap-8 mt-4 md:mt-0">
                  <BlogsList blogs={blogsData.docs} />
                  <PaginationComponent
                     page={blogsData.page}
                     totalPages={blogsData.totalPages}
                  />
               </div>
            </div>
         </Layout>
      </>
   );
}

export async function getServerSideProps({ req, query }) {
   const { data: blogsResult } = await getAllBlogsService(
      req.headers.cookie,
      queryString.stringify(query),
   );

   const { data: blogsCategoriesResult } = await getCategoriesService();

   const { data: blogsData } = blogsResult;

   const { data: blogsCategories } = blogsCategoriesResult;

   return {
      props: {
         blogsData,
         blogsCategories,
      },
   };
}
