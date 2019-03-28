NAME := ff0000/fat-landing-page

.PHONY: build push login

build:
	@docker build -t ${NAME} .
 
push:
	@docker push ${NAME}
 
login:
	@docker log -u ${DOCKER_USER} -p ${DOCKER_PASS}