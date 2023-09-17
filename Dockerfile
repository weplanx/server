FROM alpine:edge

WORKDIR /app

RUN apk --no-cache add tzdata

ADD accelerate /app/

EXPOSE 9000

CMD [ "./accelerate" ]
