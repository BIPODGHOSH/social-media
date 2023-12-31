import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/PostListStore";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <div className="sidebar">
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="containt">
            <div className="header">
              <Header />
            </div>
            {selectedTab === "home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
