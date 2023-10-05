import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/RodrigoFerreir4.png" />

          <div className={styles.authorInfo}>
            <strong>Rodrigof3rr</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-04-10 19:23:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          similique, corrupti porro unde deleniti iusto doloribus adipisci esse
          nobis ea aliquam maxime tempora perspiciatis, at earum repudiandae
          exercitationem et illo.
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          {" "}
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
