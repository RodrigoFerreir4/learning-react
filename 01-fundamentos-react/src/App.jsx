import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/RodrigoFerreir4.png",
      name: "Rodrigof3rr",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Olá pessoal! Acabei de terminar um novo projeto e estou empolgado para compartilhá-lo com vocês.",
      },
      {
        type: "image",
        content: "https://example.com/imagem_projeto1.jpg",
      },
      {
        type: "paragraph",
        content:
          "Neste projeto, utilizei tecnologias como React e Node.js para criar uma aplicação incrível.",
      },
    ],
    publishedAt: new Date("2023-10-10 19:23:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "E aí pessoal! Hoje estou compartilhando um tutorial sobre como criar um aplicativo web responsivo.",
      },
      {
        type: "image",
        content: "https://example.com/imagem_tutorial.jpg",
      },
      {
        type: "paragraph",
        content:
          "No tutorial, vou mostrar passo a passo como criar um layout incrível usando HTML e CSS.",
      },
    ],
    publishedAt: new Date("2023-04-10 19:23:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
