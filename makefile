BIN = ./node_modules/.bin
SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)
CURRENT = $(shell basename "$$PWD")

build: $(LIB) lint install

lib/%.js: src/%.js
	@mkdir -p $(@D)
	@$(BIN)/babel --presets es2015 $< > $@
	@echo '#!/bin/bash\nnode index.js' > mylexer
	@chmod 755 $(CURRENT)

test: build
	@$(BIN)/mocha -u tdd --reporter spec

lint:
	@eslint src/**

clean:
	@rm -f $(LIB) $(CURRENT)

install link:
	@npm $@

define release
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)')"` && \
	node -e "\
		var j = require('./package.json');\
		j.version = \"$$NEXT_VERSION\";\
		var s = JSON.stringify(j, null, 2);\
		require('fs').writeFileSync('./package.json', s);" && \
	git commit -m "release $$NEXT_VERSION" -- package.json && \
	git tag "$$NEXT_VERSION" -m "release $$NEXT_VERSION"
endef

release-patch: build test
	@$(call release,patch)

release-minor: build test
	@$(call release,minor)

release-major: build test
	@$(call release,major)

publish:
	git push --tags origin HEAD:master
