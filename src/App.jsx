import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css';
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Danilo55Amaral.png',
      name: 'Danilo Amaral',
      role: 'Desenvolvedor Web'
    },
    content: [
            { type: 'paragraph', content: 'Fala galeraa 👋', },
            { type: 'paragraph' , content: 'A mente que se abre a uma nova idéia jamais volta ao seu tamanho Original. Einstein 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },          
    ],
    publishedAt: new Date('2022-08-16 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Danilo55Amaral.png',
      name: 'Bill Gates',
      role: 'Desenvolvedor Web'
    },
    content: [
            { type: 'paragraph', content: 'Fala galeraa 👋', },
            { type: 'paragraph' , content: 'O único lugar onde o sucesso vem antes do trabalho é no dicionário. Einstein 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },          
    ],
    publishedAt: new Date('2022-08-15 16:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />


      <div className={styles.wrapper}>
       <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </>
  )
}

export default App

