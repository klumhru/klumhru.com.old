BUILDER_IMAGE=docker.klumhru.com/klumhru/node-gulp

docker-builder:
	docker build -t ${BUILDER_IMAGE} .

docker-build:
	docker run --rm -it -v ${PWD}:/usr/src/app ${BUILDER_IMAGE} gulp release
	sudo chown ${USER}:${USER} build/ -R
