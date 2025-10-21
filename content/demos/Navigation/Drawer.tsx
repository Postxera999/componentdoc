"use client"

import { Button } from "@/components/ui/button"
import styles from "./Drawer.module.css"

export default function Drawer() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sort By</h3>
      <div className={styles.list}>
        <button className={styles.item}>Price: Low to High</button>
        <button className={`${styles.item} ${styles.itemActive}`}>Price: High to Low</button>
        <button className={styles.item}>Newest First</button>
      </div>
      <div className={styles.footer}>
        <Button className={styles.fullWidth}>Close</Button>
      </div>
    </div>
  )
}
