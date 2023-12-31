import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
   return (
      <>
         <Header />
         <main className="bg-gray-100 min-h-screen pt-6 lg:pt-8 pb-8">
            {children}
         </main>
         <Footer />
      </>
   );
};

export default Layout;
