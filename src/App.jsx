import { Header } from "./components/Header";
import { Post } from "./Post"
import './styles.css';

function App() {
  return (
   <>
   <Header />
   <Post 
      author="Danilo Gabriel" 
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque hic eveniet, veritatis voluptas enim vel a. Consectetur, aut adipisci? Cum provident ex magnam sapiente vel illum corporis minima porro iusto?"
   />
   </>
  )
}

export default App

