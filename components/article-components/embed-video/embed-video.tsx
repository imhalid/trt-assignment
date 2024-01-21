import styles from './embed-video.module.css';
import {VideoSRC } from '@/lib/definitions'

export default function EmbedVideo({ src }: VideoSRC) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        width="100%"
        height="100%"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
