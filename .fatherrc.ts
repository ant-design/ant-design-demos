import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  cjs: {
    input: 'code',
    output: 'lib'
  },
  esm: {
    input: 'code',
    output: 'es',
    alias: {
      'antd/lib': 'antd/es',
    },
  },
});