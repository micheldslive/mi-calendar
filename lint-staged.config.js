module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write']
}
