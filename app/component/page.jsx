import ItemsAccordion from '../components/Accordion';
import styles from './component.module.css';
import {items} from '../data/exampleData';

export default function ComponentPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Component Testing</h1>
      <ItemsAccordion items={items} />
    </main>
  )
}