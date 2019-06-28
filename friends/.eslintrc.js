module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "default-case" : 0,
        "react/jsx-filename-extension":0,
        "react/button-has-type":0,
        "react/prefer-stateless-function":0,
        "arrow-parens":0,
        "jsx-a11y/no-noninteractive-element-interactions":0,
        "jsx-a11y/click-events-have-key-events":0,
        "import/prefer-default-export":0,
    }
};