FROM node:14-alpine as node
WORKDIR /app
ADD package.json /app/package.json
RUN npm install
COPY src /app/src
COPY tsconfig.json /app/tsconfig.json

ARG MICROSOFT_APP_ID
ARG MICROSOFT_APP_PASSWORD

ENV MICROSOFT_APP_ID=$MICROSOFT_APP_ID
ENV MICROSOFT_APP_PASSWORD=$MICROSOFT_APP_PASSWORD

RUN npm run build
EXPOSE 3978
CMD ["npm", "run", "start"]

