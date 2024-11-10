import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'appwrite_error_i18n',
      formats: ['es', 'umd'],
    },
  },
  plugins: [dts()],
})
