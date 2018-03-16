SERVICE_PORT=3000

start:
	@docker images
	docker run -d -p $(SERVICE_PORT):$(SERVICE_PORT) -e SERVICE_ENV=live --name $(SERVICE) --network=local $(SERVICE):$(TRAVIS_BUILD_NUMBER)

include ../Makefile