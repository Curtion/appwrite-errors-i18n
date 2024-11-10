import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    typescript: true,
    ignores: [],
  },
  ...compat.config({
    root: true,
    parserOptions: {},
    extends: [],
    plugins: [],
    env: {},
    overrides: [],
  }),
  {
    rules: {
      'no-console': ['off'], // 允许使用console
      'style/brace-style': ['error', '1tbs'], // 大括号风格
      'curly': ['error', 'all'], // 控制语句后必须有{}
    },
  },
)