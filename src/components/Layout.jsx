import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="min-h-screen text-darkGray-500 dark:text-darkgraymuted-500 font-rubik dark:bg-dark">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
