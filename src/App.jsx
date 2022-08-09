import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css';
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />


      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post
            author="Danilo Gabriel"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque hic eveniet, veritatis voluptas enim vel a. Consectetur, aut adipisci? Cum provident ex magnam sapiente vel illum corporis minima porro iusto?"
          />
        </main>
      </div>
    </>
  )
}

export default App

