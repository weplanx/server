FROM alpine:edge

COPY dist /app

WORKDIR /app

EXPOSE 9000

CMD [ "./main" ]