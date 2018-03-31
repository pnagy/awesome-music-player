IMAGE_NAME=awesome-music-server
LISTENING_PORT=7000

build:
	docker build -t $(IMAGE_NAME) .

run: build
	docker run -p $(LISTENING_PORT):$(LISTENING_PORT) -it $(IMAGE_NAME)

