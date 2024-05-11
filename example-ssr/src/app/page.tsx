import styles from './page.module.css';
import { SheetExample } from '../components/sheet-example';

export default function Home() {
  return (
    <main id="root" className={styles.main}>
      <SheetExample />
    </main>
  );
}
