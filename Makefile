all: eslint flow

flow:
	node_modules/.bin/flow check

eslint:
	node_modules/.bin/eslint *.js app/**