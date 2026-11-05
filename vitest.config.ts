import { defineConfig } from 'vitest/config';
export default defineConfig({
  resolve: { alias: { '@kbn/i18n': new URL('./src/utilities/kibanaI18n.ts', import.meta.url).pathname } },
  oxc: { jsx: { runtime: 'automatic', importSource: '@emotion/react' } },
  test: { environment: 'jsdom', setupFiles: ['tests/setup.ts'], include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    deps: { optimizer: { client: { enabled: true, include: ['@elastic/eui', '@emotion/react', '@emotion/react/jsx-runtime', 'react', 'react-dom'] } } },
  },
});
