import { LayoutProps } from "../utilities/types/types";
import Meta from "./Meta";
import NavBar from "./NavBar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
