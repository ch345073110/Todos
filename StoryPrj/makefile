pjName := StoryPrj

docker:
	docker run \
		--name ${pjName} \
		--rm \
		-ti \
		-p 3000:8000 \
		-v $$(pwd):/root/${pjName} \
		-v $$(pwd)/../ReduxServ:/root/ReduxServ \
		-v $$(pwd)/../StoryView:/root/StoryView \
		mooxe/node \
		/bin/bash

export PATH := ./node_modules/.bin:$(PATH)

include ./node_modules/cfx.simple-build-tool/maker/main.mk
include ./node_modules/cfx.simple-build-tool/maker/storybook.mk

start: story_book server_storybook
