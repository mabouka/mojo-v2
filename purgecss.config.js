module.exports = {
    content: [
        './wp-content/themes/mojo-v2/**/*.php',
        './wp-content/themes/mojo-v2/src/js/**/*.js',
        './wp-content/themes/mojo-v2/blocks/**/*.php',
        './wp-content/themes/mojo-v2/partials/**/*.php',
    ],
    css: [
        './wp-content/themes/mojo-v2/dist/css/main.css'
    ],
    safelist: {
        // Always keep these classes
        standard: [
            'body',
            'html',
            /^wp-/,
            /^admin-/,
            /^logged-in/,
            /^post-/,
            /^page-/,
            /^category-/,
            /^tag-/,
            /^attachment-/,
            /^swiper-/,
            /^gsap-/,
            /^barba-/,
            /^lenis-/,
            /^fx-/,
            /^js-/,
            /^no-js/,
            /^fonts-/,
            /^loading/,
            /^loaded/,
            /^active/,
            /^current/,
            /^open/,
            /^closed/,
            /^visible/,
            /^hidden/,
            /^animate/,
            /^fade/,
            /^slide/,
            /^zoom/,
            'visually-hidden'
        ],
        // Keep classes that are added dynamically
        deep: [
            /^wp-block-/,
            /^has-/,
            /^is-/,
            /^acf-/,
            /^block-/,
            /^swiper/,
            /^slick/
        ],
        // Keep keyframes
        keyframes: true,
        // Keep font-face rules
        fontFace: true
    },
    // Remove unused keyframes
    keyframes: true,
    // Remove unused font-faces
    fontFace: true,
    // Variables to keep
    variables: true,
    // Rejected selectors (for debugging)
    rejected: false,
    // Print rejected selectors
    printRejected: false
};