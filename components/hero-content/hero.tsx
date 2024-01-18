import styles from './hero.module.css'

export default function Hero() {
    return (
        <section className={styles.container}>
            <h1 className={styles.heroImage}>Welcome to my blog</h1>
            <p className={styles.heroDescription}>This is a blog about web development</p>
        </section>
    )
}