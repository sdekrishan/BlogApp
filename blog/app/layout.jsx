import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metaData = {
  title: "blogmania",
  description: "discover and share AI blogs",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>
        <div className="gradient" />
      <main className="app">
        <Nav/>
        {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
