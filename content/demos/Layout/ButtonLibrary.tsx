"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../../css/button-library.module.css'

// 图标组件
const PlayIcon = () => (
  <Image 
    src="/icons/icon-play.svg" 
    alt="Play" 
    width={24} 
    height={24} 
    className={styles.icon}
  />
)

const PlayingIcon = () => (
  <Image 
    src="/icons/icon-playing.svg" 
    alt="Playing" 
    width={24} 
    height={24} 
    className={styles.icon}
  />
)

// 按钮组件接口
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  state?: 'default' | 'active' | 'disabled'
  hasIcon?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

// 图标按钮组件接口
interface IconButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  state?: 'default' | 'active' | 'disabled'
  onClick?: () => void
  className?: string
}

// 主按钮组件
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  state = 'default',
  hasIcon = false,
  children,
  onClick,
  className = ''
}) => {
  const buttonClass = `${styles.button} ${styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${styles[`button${state.charAt(0).toUpperCase() + state.slice(1)}`]} ${hasIcon ? styles.buttonWithIcon : ''} ${className}`
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {children}
      {hasIcon && <PlayIcon />}
    </button>
  )
}

// 图标按钮组件
const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  state = 'default',
  onClick,
  className = ''
}) => {
  const buttonClass = `${styles.iconButton} ${styles[`iconButton${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${styles[`iconButton${state.charAt(0).toUpperCase() + state.slice(1)}`]} ${className}`
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      <PlayingIcon />
    </button>
  )
}

// 演示组件
const ButtonLibrary: React.FC = () => {
  const [activeStates, setActiveStates] = useState<{[key: string]: boolean}>({})

  const toggleActive = (key: string) => {
    setActiveStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.vars}>
        {/* 按钮部分 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Button</h2>
          
          {/* Primary 按钮 */}
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Primary</h3>
            <div className={styles.buttonRow}>
              <Button variant="primary" state="default">Button</Button>
              <Button 
                variant="primary" 
                state={activeStates['primary-no-icon'] ? 'active' : 'default'}
                onClick={() => toggleActive('primary-no-icon')}
              >
                Button
              </Button>
              <Button variant="primary" state="disabled">Button</Button>
            </div>
            <div className={styles.buttonRow}>
              <Button variant="primary" state="default" hasIcon>Button</Button>
              <Button 
                variant="primary" 
                state={activeStates['primary-with-icon'] ? 'active' : 'default'}
                hasIcon
                onClick={() => toggleActive('primary-with-icon')}
              >
                Button
              </Button>
              <Button variant="primary" state="disabled" hasIcon>Button</Button>
            </div>
          </div>

          {/* Secondary 按钮 */}
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Secondary</h3>
            <div className={styles.buttonRow}>
              <Button variant="secondary" state="default">Button</Button>
              <Button 
                variant="secondary" 
                state={activeStates['secondary-no-icon'] ? 'active' : 'default'}
                onClick={() => toggleActive('secondary-no-icon')}
              >
                Button
              </Button>
              <Button variant="secondary" state="disabled">Button</Button>
            </div>
            <div className={styles.buttonRow}>
              <Button variant="secondary" state="default" hasIcon>Button</Button>
              <Button 
                variant="secondary" 
                state={activeStates['secondary-with-icon'] ? 'active' : 'default'}
                hasIcon
                onClick={() => toggleActive('secondary-with-icon')}
              >
                Button
              </Button>
              <Button variant="secondary" state="disabled" hasIcon>Button</Button>
            </div>
          </div>
        </section>

        {/* 图标按钮部分 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Icon button</h2>
          
          <div className={styles.iconButtonGroup}>
            <div className={styles.iconButtonRow}>
              <IconButton variant="primary" state="default" />
              <IconButton 
                variant="primary" 
                state={activeStates['icon-primary'] ? 'active' : 'default'}
                onClick={() => toggleActive('icon-primary')}
              />
              <IconButton variant="primary" state="disabled" />
            </div>
            <div className={styles.iconButtonRow}>
              <IconButton variant="secondary" state="default" />
              <IconButton 
                variant="secondary" 
                state={activeStates['icon-secondary'] ? 'active' : 'default'}
                onClick={() => toggleActive('icon-secondary')}
              />
              <IconButton variant="secondary" state="disabled" />
            </div>
            <div className={styles.iconButtonRow}>
              <IconButton variant="tertiary" state="default" />
              <IconButton 
                variant="tertiary" 
                state={activeStates['icon-tertiary'] ? 'active' : 'default'}
                onClick={() => toggleActive('icon-tertiary')}
              />
              <IconButton variant="tertiary" state="disabled" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ButtonLibrary