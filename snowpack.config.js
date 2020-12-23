module.exports = {
    exclude: ['pages/**'],
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-postcss'
    ],
    mount: { 
        public: '/',
        src: '/dist'
    }
}