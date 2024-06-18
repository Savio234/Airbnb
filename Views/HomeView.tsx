'use client';
import React, { useState } from 'react'
import styles from './HomeView.module.css'

const HomeView = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-rose-500 text-center text-3xl">Hello Airbnb</h1>
    </div>
  )
}

export default HomeView