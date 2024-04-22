ts-init
	tsc --init

ts-compile:
	rm -rf dist/scripts/*
	tsc --project tsconfig.json

ts-watch:
	tsc --project tsconfig.json --watch

ts-index:
	tsc src/scripts/index.ts --outDir dist/scripts

