import { SheetExample } from '../components/sheet-example';

import styles from './page.module.css';

export default function Home() {
  return (
    <main id="root" className={styles.main}>
      <SheetExample />
    </main>
  );
}
