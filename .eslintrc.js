module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
    },
    plugins: ["async-await"],
    rules: {
        semi: ["error", "always"],
        indent: ["error", 4],
        "linebreak-style": [
            "error",
            process.platform === "win32" ? "windows" : "unix",
        ],
        quotes: ["error", "double"],
        "no-unused-vars": ["off"],
        "no-undef": ["off"],
        "no-mixed-spaces-and-tabs": ["error"],
        "no-extra-boolean-cast": ["error"],
        "no-useless-escape": ["off"],
        "no-unused-labels": ["error"],
        "no-irregular-whitespace": ["error"],
        "no-redeclare": ["off"],
        "no-prototype-builtins": ["off"],
        "async-await/space-after-async": 2,
        "async-await/space-after-await": 2,
    },
};
