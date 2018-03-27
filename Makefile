DOCKER_HOST=quay.io
DOCKER_ACCOUNT=feliun

# CONTINUOS INTEGRATION

package:
	@docker build --tag $(SERVICE):$(TRAVIS_BUILD_NUMBER) .
	@docker images

brand:
	@node_modules/make-manifest/bin/make-manifest --extra "build.url: https://travis-ci.org/feliun/microservices-school/builds/"$(TRAVIS_BUILD_ID) --extra "build.number: "$(TRAVIS_BUILD_NUMBER)
	@cat ./manifest.json

qa:
	@docker run --name $(SERVICE) -e SERVICE_ENV=build -e MONGO_HOST=mongo --rm --network=local --entrypoint npm $(SERVICE):$(TRAVIS_BUILD_NUMBER) run qa --

ensure-dependencies:
	@npm run docker
	@sleep 10

build:
	@echo "Nothing to build here..."

start:
	docker run -d -p $(SERVICE_PORT):$(SERVICE_PORT) -e SERVICE_ENV=live --name $(SERVICE) --network=local $(SERVICE):$(TRAVIS_BUILD_NUMBER)

archive: start
	@docker login -u=$(DOCKER_USERNAME) -p=$(DOCKER_PASSWORD) $(DOCKER_HOST)
	@docker ps
	@CONTAINER_ID=`docker ps | grep $(SERVICE) | awk '{print $$1}'` && \
	docker commit $$CONTAINER_ID $(DOCKER_HOST)/$(DOCKER_ACCOUNT)/$(SERVICE)
	docker push $(DOCKER_HOST)/$(DOCKER_ACCOUNT)/$(SERVICE)