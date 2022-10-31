import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lsiqueiradev.png',
      name: 'Lucas Siqueira',
      role: 'Mobile Developer @ Liberty Seguros'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: ' jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-30 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lsiqueiradev.png',
      name: 'Michael Slow',
      role: 'Front End Developer @ Liberty Seguros'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: ' jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-20 20:00:00')
  }
];

export function App() {
  return (
    <div>
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
    </div>
  )
};
