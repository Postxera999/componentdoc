"use client"

import React from "react"
import styles from "@/css/drawer-blueprint.module.css"
import { Plus } from "lucide-react"

export default function DrawerBlueprint() {
  return (
    <div className={`${styles.vars} ${styles.overlay}`}> {/* scoped vars + optional overlay to mirror primary-a-20 */}
      <div className={styles.drawer}>
        {/* Section Title */}
        <div className={styles.sectionTitleRow}>
          <h3 className={styles.sectionTitle}>Sort By</h3>
        </div>

        {/* Items */}
        <div className={styles.itemRow}>
          <span className={styles.iconWrap}><Plus className={styles.icon} /></span>
          <span className={styles.itemText}>Item</span>
        </div>

        <div className={`${styles.itemRow} ${styles.itemSelected}`}>
          <span className={styles.iconWrap}><Plus className={styles.icon} /></span>
          <span className={`${styles.itemText} ${styles.itemTextBold}`}>Item</span>
        </div>

        <div className={styles.itemRow}>
          <span className={styles.iconWrap}><Plus className={styles.icon} /></span>
          <span className={styles.itemText}>Item</span>
        </div>

        <div className={styles.itemRow}>
          <span className={styles.iconWrap}><Plus className={styles.icon} /></span>
          <span className={styles.itemText}>Item</span>
        </div>
      </div>
    </div>
  )
}