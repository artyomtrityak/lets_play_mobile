all: eslint flow

flow:
	node_modules/.bin/flow status

eslint:
	node_modules/.bin/eslint *.js app/**
