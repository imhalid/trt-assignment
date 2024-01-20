import styles from './popular.module.css';
import db from '@/db.json';
export default function Popular() {

    return (
      <div className={styles.popularBackground}>
        <div className="container">
          <h1 className={styles.title}>Popular this week</h1>
          <div>
            <div className={styles.popularContainer}>
              {db.contents.slice(0, 8).map((content, index) => (
                <>
                  <div className={styles.popularCard} key={content.id}>
                    <span>{index + 1}</span>
                    <div className={styles.popularCardText}>
                      <p>{content.categories[1].title}</p>
                      <h2>{content.title}</h2>
                    </div>
                  </div>
                  {index === 3 && <hr className={styles.separator} />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}