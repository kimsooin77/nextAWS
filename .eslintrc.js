export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb"
    ], 
    "parser" : "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
    }
}
