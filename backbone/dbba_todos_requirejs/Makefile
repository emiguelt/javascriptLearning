NODE_MOD=node_modules
BOWER=bower_components

JADE=$(shell find $(NODE_MOD) -name "jade" -type f)

DEPLOY=deploy
JS=$(DEPLOY)/js
LIBS=$(JS)/libs
TEMPLATES=$(DEPLOY)/templates

css:
	mkdir -p $(DEPLOY) && cp -rf app/css $(DEPLOY)/

templates:
	mkdir -p $(TEMPLATES) && $(JADE) -o $(TEMPLATES) --client --no-debug app/templates/*.jade

js:
	mkdir -p $(JS) && cp -r app/js/* $(JS)/

libs:
	mkdir -p $(LIBS)  && cp $(BOWER)/backbone/backbone-min.js $(LIBS)/
	mkdir -p $(LIBS)  && cp $(BOWER)/jquery/jquery.min.js $(LIBS)/
	mkdir -p $(LIBS)  && cp $(BOWER)/backbone.localStorage/backbone.localStorage-min.js $(LIBS)/
	mkdir -p $(LIBS)  && cp $(BOWER)/requirejs/require.js $(LIBS)/
	mkdir -p $(LIBS)  && cp $(BOWER)/requirejs-text/text.js $(LIBS)/
	mkdir -p $(LIBS)  && cp $(NODE_MOD)/jade/runtime.js $(LIBS)/

render: 
	$(JADE) -P -o $(DEPLOY) app/index.jade

deploy: clean css templates js libs render

clean:
	rm -rf $(DEPLOY)
