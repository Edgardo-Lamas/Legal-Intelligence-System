/**
 * Post-build script: genera un index.html por cada ruta de la SPA.
 * GitHub Pages sirve `dist/overview/index.html` con HTTP 200,
 * eliminando los 404 en rutas directas sin necesidad de SSR.
 */

import { readFileSync, mkdirSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')
const indexHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

// Todas las rutas definidas en App.jsx
const routes = [
  '/login',
  '/pricing',
  '/overview',
  '/foundations',
  '/foundations-u2',
  '/foundations-u3',
  '/foundations-u4',
  '/foundations-u5',
  '/prompt-engineering',
  '/prompt-engineering-u2',
  '/prompt-engineering-u3',
  '/prompt-engineering-u4',
  '/prompt-engineering-u5',
  '/prompt-engineering-u6',
  '/prompt-engineering-u7',
  '/solo-practice',
  '/solo-practice-u2',
  '/solo-practice-u3',
  '/solo-practice-u4',
  '/solo-practice-u5',
  '/gemini',
  '/gemini-u2',
  '/gemini-u3',
  '/gemini-u4',
  '/ecosystem',
  '/ecosystem-u2',
  '/ecosystem-u3',
  '/ecosystem-u4',
  '/ecosystem-u5',
  '/mastering',
  '/mastering-u2',
  '/mastering-u3',
  '/mastering-u4',
  '/mastering-u5',
  '/communication',
  '/communication-u2',
  '/communication-u3',
  '/communication-u4',
  '/communication-u5',
  '/practice',
  '/practice-u2',
  '/practice-u3',
  '/practice-u4',
  '/practice-u5',
  '/privacy',
  '/privacy-u2',
  '/privacy-u3',
  '/privacy-u4',
  '/privacy-u5',
  '/agents',
  '/agents-u2',
  '/agents-u3',
  '/agents-u4',
  '/agents-u5',
  '/course-map',
  '/glossary',
  '/notes',
]

let generated = 0

for (const route of routes) {
  const dir = resolve(distDir, route.slice(1)) // quita el slash inicial
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'index.html'), indexHtml)
  generated++
  console.log(`  ✓ dist${route}/index.html`)
}

console.log(`\n✅ ${generated} rutas generadas — GitHub Pages servira HTTP 200 en todas.\n`)
