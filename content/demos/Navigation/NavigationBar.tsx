"use client";

import React, { useState } from "react";
import styles from "../../../css/navigation-bar.module.css";

export type NavigationBarProps = {
  color?: "black" | "white";
  variant?: "default" | "title";
  title?: string;
  showStatusBar?: boolean;
  onLogoClick?: () => void;
  onTitleClick?: () => void;
  onShare?: () => void;
  onHome?: () => void;
};

export function NavigationBar({
  color = "black",
  variant = "default",
  title = "Galaxy",
  showStatusBar = true,
  onLogoClick,
  onTitleClick,
  onShare,
  onHome,
}: NavigationBarProps) {
  const rootClass = `${styles.navBar} ${color === "white" ? styles.white : styles.black}`;

  return (
    <div className={rootClass} aria-label="Navigation Bar">
      {showStatusBar && (
        <div className={styles.statusBar} aria-hidden>
          <div className={styles.statusLeft}>
            <span className={styles.statusTime}>9:41</span>
          </div>
          <div className={styles.statusRight}>
            {/* Status icons simplified for web preview */}
            <span style={{ width: 18, height: 12, border: `1.5px solid var(--text-color)`, borderRadius: 2 }} />
            <span style={{ width: 18, height: 12, background: `var(--text-color)`, maskImage: "linear-gradient(#000, #000)", WebkitMaskImage: "linear-gradient(#000, #000)" }} />
          </div>
        </div>
      )}

      <div className={styles.mpBar}>
        <button className={styles.logoArea} aria-label="Logo" onClick={onLogoClick}>
          <img src="/icons/logo.svg" alt="logo" />
        </button>

        <div className={styles.centerArea}>
          {variant === "default" ? (
            <button className={styles.titleSelect} onClick={onTitleClick} aria-haspopup="listbox" aria-expanded={false}>
              <span className={styles.titleText}>{title}</span>
              <img className={styles.chevronIcon} src="/icons/chevron-down.svg" alt="chevron-down" />
            </button>
          ) : (
            <div className={styles.titleCenter}>
              <button className={styles.titleSelect} onClick={onTitleClick}>
                <span className={styles.titleText}>{title}</span>
                <img className={styles.chevronIcon} src="/icons/chevron-down.svg" alt="chevron-down" />
              </button>
            </div>
          )}
        </div>

        <div className={styles.actionsArea}>
          <button className={styles.actionIcon} aria-label="Share" onClick={onShare}>
            <img src="/icons/icon-share.svg" alt="share" />
          </button>
          <button className={styles.actionIcon} aria-label="Home" onClick={onHome}>
            <img src="/icons/icon-home.svg" alt="home" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NavigationBarDemo() {
  const [color, setColor] = useState<"black" | "white">("black");
  const [variant, setVariant] = useState<"default" | "title">("default");

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setColor("black")}>On Black</button>
        <button onClick={() => setColor("white")}>On White</button>
        <button onClick={() => setVariant("default")}>Title & Default</button>
        <button onClick={() => setVariant("title")}>Title & On White</button>
      </div>

      <NavigationBar
        color={color}
        variant={variant}
        title="Galaxy"
        showStatusBar={true}
        onLogoClick={() => console.log("Logo clicked")}
        onTitleClick={() => console.log("Title clicked")}
        onShare={() => console.log("Share clicked")}
        onHome={() => console.log("Home clicked")}
      />
    </div>
  );
}