import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <PostForm />
      <Footer />
    </div>
  );
}

export default App;
