import { resolve } from 'path'
import { defineConfig } from '@slidev/types'
import './styles/index.css'

export default defineConfig({
  colorSchema: 'auto',
  // Add any global theme configurations here
  css: 'uno',
})

export const themeConfig = {
  primary: '#3B82F6',
  secondary: '#1E40AF',
  background: '#ffffff',
  text: '#1f2937',
}
