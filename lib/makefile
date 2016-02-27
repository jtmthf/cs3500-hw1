BIN = ./node_modules/.bin
SRC = $(wildcard *.js)
LIB = $(SRC:%.js=%.js)
CURRENT = $(shell basename "$$PWD")

build: $(LIB)
	@npm install
	@echo '#!/bin/bash\nnode index.js' > mylexer
	@chmod 755 mylexer
