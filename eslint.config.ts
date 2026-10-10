import prettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [

	prettier,
    {
        languageOptions: {

            globals: {
                ...globals.node,
                ...globals.browser,
            },

            ecmaVersion: 2024,
            sourceType: "module",
			parser: tseslint.parser,
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},

        rules: {
            "no-eval": 0,
        },
    }
];