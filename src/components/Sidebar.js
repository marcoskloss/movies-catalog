import styles from '../styles/components/Sidebar.module.css'

import Card from './Card'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h1>Categorias</h1>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <Card title="ação"/>
          <Card title="aventura"/>
          <Card title="terror"/>
          <Card title="outro"/>
          <Card title="anotherone"/>
          <Card title="maisum"/>
        </div>
      </div>
    </aside>
  )
}