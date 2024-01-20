import styles from './editors-pick.module.css';
import Image from 'next/image';

export default function EditorsPick() {
    return (
      <div className={styles.container}>
        <h2>Editors Pick</h2>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/editors-pick.jpg"
              alt="Picture of the author"
              width={382}
              height={382}
            />
            <div className={styles.gradient}></div>
          </div>
          <h3>Visit the largest airport museum in the world in Istanbul</h3>
          <div className={styles.blueSupport}></div>
        </div>
      </div>
    );
}
