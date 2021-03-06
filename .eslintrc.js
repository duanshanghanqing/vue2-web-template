// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off',
        'standard/object-curly-even-spacing': 'off',
        'no-useless-escape': 'off',
        'no-cond-assign': 'off',
        'no-constant-condition': 'off',
        'no-dupe-keys': 'off',
        'handle-callback-err': 'off',
        'eqeqeq': 'off',
        'no-inner-declarations': 'off',
        'no-unreachable': 'off',
        'camelcase': 'off',
        "indent": 'off',
        /* fn ()====>fn() */
        "func-call-spacing": [0, "never"],
        /* 
        anonymous is for anonymous function expressions (e.g. function () {}).
        named is for named function expressions (e.g. function foo () {}).
        asyncArrow is for async arrow function expressions (e.g. async () => {}). 
        */
        "space-before-function-paren": [0, {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "no-template-curly-in-string": "off",
        "no-eval": "off",
        "no-new": "off",
    }
}