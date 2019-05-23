module.exports =
{
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "settings":
    {
        "react":
        {
            "version": "latest",
        },
    },
    "plugins":
    [
        "react",
        "import",
    ],
    "env":
    {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },

    "parser": "babel-eslint",
    "parserOptions":
    {
        "ecmaFeatures":
        {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
        "sourceType": "module",
    },

    "rules":
    {
        // https://eslint.org/docs/rules/brace-style
        // alternatively, use:
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        // "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
        // "brace-style": ["error", "allman", { "allowSingleLine": true }],

        // https://eslint.org/docs/rules/strict
        // "strict": ["error", "never"],
        "strict": "off",

        // https://eslint.org/docs/rules/indent
        "indent": ["error", 4, { "SwitchCase": 1 }],

        // https://eslint.org/docs/rules/linebreak-style
        "linebreak-style": ["error", "unix"],

        // https://eslint.org/docs/rules/quotes
        "quotes": ["error", "double", { "avoidEscape": true }],

        // https://eslint.org/docs/rules/semi
        "semi": ["error", "always"],

        // https://eslint.org/docs/rules/semi-spacing
        "semi-spacing": ["error", { "before": false, "after": true }],

        // https://eslint.org/docs/rules/camelcase
        "camelcase": ["error", { "properties": "always" }],

        // https://eslint.org/docs/rules/no-console
        "no-console": ["warn", { "allow": ["info", "error"] }],

        // https://eslint.org/docs/rules/array-bracket-spacing
        "array-bracket-spacing": ["warn", "never"],

        // https://eslint.org/docs/rules/arrow-body-style
        "arrow-body-style": ["error", "always"],

        // https://eslint.org/docs/rules/comma-dangle
        "comma-dangle": ["error", "always-multiline"],

        // https://eslint.org/docs/rules/comma-spacing
        "comma-spacing": ["error", { "before": false, "after": true }],

        // https://eslint.org/docs/rules/comma-style
        "comma-style": ["error", "last"],

        // https://eslint.org/docs/rules/complexity
        "complexity": ["warn", 10],

        // https://eslint.org/docs/rules/computed-property-spacing
        "computed-property-spacing": ["error", "never"],

        // https://eslint.org/docs/rules/consistent-return
        "consistent-return": "off",

        // https://eslint.org/docs/rules/curly
        "curly": "error",

        // https://eslint.org/docs/rules/dot-notation
        "dot-notation": "error",

        // https://eslint.org/docs/rules/eol-last
        "eol-last": ["error", "always"],

        // https://eslint.org/docs/rules/eqeqeq
        "eqeqeq": "error",

        // https://eslint.org/docs/rules/func-call-spacing
        "func-call-spacing": "error",

        // https://eslint.org/docs/rules/guard-for-in
        "guard-for-in": "error",

        // https://eslint.org/docs/rules/jsx-quotes
        "jsx-quotes": ["error", "prefer-double"],

        // https://eslint.org/docs/rules/object-curly-spacing
        "object-curly-spacing": ["warn", "always"],

        // https://eslint.org/docs/rules/key-spacing
        "key-spacing": ["error", { "afterColon": true }],

        // https://eslint.org/docs/rules/keyword-spacing
        "keyword-spacing": ["error", { "before": true }],

        // https://eslint.org/docs/rules/max-len
        "max-len": ["error", { "code": 100, "ignoreComments": true, "ignoreUrls": true }],

        // https://eslint.org/docs/rules/max-nested-callbacks
        "max-nested-callbacks": ["error", 3],

        // https://eslint.org/docs/rules/max-params
        "max-params": ["warn", 4],

        // https://eslint.org/docs/rules/new-cap
        "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],

        // https://eslint.org/docs/rules/new-parens
        "new-parens": "error",

        // https://eslint.org/docs/rules/no-alert
        "no-alert": "error",

        // https://eslint.org/docs/rules/no-array-constructor
        "no-array-constructor": "error",

        // https://eslint.org/docs/rules/no-bitwise
        "no-bitwise": "warn",

        // https://eslint.org/docs/rules/no-caller
        "no-caller": "error",

        // https://eslint.org/docs/rules/no-catch-shadow
        "no-catch-shadow": "error",

        // https://eslint.org/docs/rules/no-compare-neg-zero
        "no-compare-neg-zero": "error",

        // https://eslint.org/docs/rules/no-duplicate-imports
        "no-duplicate-imports": "error",

        // https://eslint.org/docs/rules/no-eq-null
        "no-eq-null": "error",

        // https://eslint.org/docs/rules/no-eval
        "no-eval": "error",

        // https://eslint.org/docs/rules/no-extend-native
        "no-extend-native": "error",

        // https://eslint.org/docs/rules/no-extra-bind
        "no-extra-bind": "error",

        // https://eslint.org/docs/rules/no-floating-decimal
        "no-floating-decimal": "error",

        // https://eslint.org/docs/rules/no-func-assign
        "no-func-assign": "error",

        // https://eslint.org/docs/rules/no-implied-eval
        "no-implied-eval": "error",

        // https://eslint.org/docs/rules/no-iterator
        "no-iterator": "error",

        // https://eslint.org/docs/rules/no-label-var
        "no-label-var": "error",

        // https://eslint.org/docs/rules/no-labels
        "no-labels": "error",

        // https://eslint.org/docs/rules/no-lone-blocks
        "no-lone-blocks": "warn",

        // https://eslint.org/docs/rules/no-lonely-if
        "no-lonely-if": "error",

        // https://eslint.org/docs/rules/no-loop-func
        "no-loop-func": "warn",

        // https://eslint.org/docs/rules/no-multi-spaces
        "no-multi-spaces": "error",

        // https://eslint.org/docs/rules/no-multi-str
        "no-multi-str": "error",

        // https://eslint.org/docs/rules/no-multiple-empty-lines
        "no-multiple-empty-lines": "error",

        // https://eslint.org/docs/rules/no-nested-ternary
        "no-nested-ternary": "error",

        // https://eslint.org/docs/rules/no-new
        "no-new": "error",

        // https://eslint.org/docs/rules/no-new-func
        "no-new-func": "error",

        // https://eslint.org/docs/rules/no-new-object
        "no-new-object": "error",

        // https://eslint.org/docs/rules/no-new-wrappers
        "no-new-wrappers": "error",

        // https://eslint.org/docs/rules/no-octal-escape
        "no-octal-escape": "error",

        // https://eslint.org/docs/rules/no-process-exit
        "no-process-exit": "error",

        // https://eslint.org/docs/rules/no-proto
        "no-proto": "error",

        // https://eslint.org/docs/rules/no-restricted-globals
        // "no-restricted-globals": ["error", "event"],
        "no-restricted-globals":
        [
            "error",
            {
                name: "error",
                message: "Use local parameter instead.",
            },
        ],

        // https://eslint.org/docs/rules/no-return-assign
        "no-return-assign": "error",

        // https://eslint.org/docs/rules/no-script-url
        "no-script-url": "error",

        // https://eslint.org/docs/rules/no-self-compare
        "no-self-compare": "error",

        // https://eslint.org/docs/rules/no-sequences
        "no-sequences": "error",

        // https://eslint.org/docs/rules/no-shadow
        "no-shadow": "error",

        // https://eslint.org/docs/rules/no-shadow-restricted-names
        "no-shadow-restricted-names": "error",

        // https://eslint.org/docs/rules/no-throw-literal
        "no-throw-literal": "error",

        // https://eslint.org/docs/rules/no-trailing-spaces
        "no-trailing-spaces": "error",

        // https://eslint.org/docs/rules/no-undef
        // "it": exception for testing
        // "no-undef": ["error", {"it": true }],

        // https://eslint.org/docs/rules/no-undef-init
        "no-undef-init": "error",

        // https://eslint.org/docs/rules/no-underscore-dangle
        "no-underscore-dangle": "off",
        // Maybe: "no-underscore-dangle": ["error", { "enforceInMethodNames": true }],

        // https://eslint.org/docs/rules/no-unsafe-negation
        "no-unsafe-negation": "error",

        // https://eslint.org/docs/rules/no-unused-expressions
        "no-unused-expressions": "error",

        // https://eslint.org/docs/rules/no-use-before-define
        "no-use-before-define": "error",

        // https://eslint.org/docs/rules/no-var
        "no-var": "error",

        // https://eslint.org/docs/rules/no-void
        "no-void": "error",

        // https://eslint.org/docs/rules/no-with
        "no-with": "error",

        // https://eslint.org/docs/rules/object-shorthand
        "object-shorthand": ["error", "always"],

        // https://eslint.org/docs/rules/operator-assignment
        "operator-assignment": ["warn", "always"],

        // https://eslint.org/docs/rules/operator-linebreak
        "operator-linebreak": ["error", "after"],

        // https://eslint.org/docs/rules/padded-blocks
        "padded-blocks": ["error", "never"],

        // https://eslint.org/docs/rules/prefer-const
        "prefer-const": "error",

        // https://eslint.org/docs/rules/radix
        "radix": "error",

        // https://eslint.org/docs/rules/space-before-blocks
        "space-before-blocks": ["error", "always"],

        // https://eslint.org/docs/rules/space-before-function-paren
        "space-before-function-paren": ["error", "never"],

        // https://eslint.org/docs/rules/space-in-parens
        "space-in-parens": ["error", "never"],

        // https://eslint.org/docs/rules/space-infix-ops
        "space-infix-ops": "error",

        // https://eslint.org/docs/rules/space-unary-ops
        "space-unary-ops": "error",

        // https://eslint.org/docs/rules/spaced-comment
        "spaced-comment": ["error", "always",
            {
                "line":
                {
                    "markers": ["/"],
                    "exceptions": ["-", "+", "*", "/"],
                },
                "block":
                {
                    "markers": ["!"],
                    "exceptions": ["-", "+", "*", "/"],
                    "balanced": true,
                },
            },
        ],

        // https://eslint.org/docs/rules/valid-jsdoc
        "valid-jsdoc":
        [
            "error",
            {
                "prefer": { "returns": "return" },
                "requireParamDescription": false,
                "requireReturn": false,
            },
        ],

        // https://eslint.org/docs/rules/wrap-iife
        "wrap-iife": ["error", "outside"],

        // https://eslint.org/docs/rules/yoda
        "yoda": "error",

        // https://github.com/benmosher/eslint-plugin-import
        "import/default": "off",
        "import/extensions": [ "error", {"css": "allow"}],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "import/no-deprecated": "warn",
        "import/no-duplicates": "error",
        "import/no-dynamic-require": "error",
        "import/no-extraneous-dependencies": "error",
        // "import/no-internal-modules": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-as-default-member": "error",
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        // "import/no-namespace": "error",
        "import/no-unassigned-import": [ "error", {"allow": ["**/*.css"]}],
        "import/no-webpack-loader-syntax": "error",
        "import/order":
        [
            "error",
            {
                groups:
                [
                    "builtin",
                    "external",
                    "internal",
                    ["index", "sibling", "parent"],
                ],
            },
        ],
        "import/prefer-default-export": "error",
        "import/unambiguous": "off",
    },
};
