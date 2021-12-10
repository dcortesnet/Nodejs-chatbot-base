# Nodejs Chatbot Test &middot; ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> Microsoft bot framework

> Nodejs

> Typescript

Descripción del proyecto: Bot básico de prueba y conceptos para la creación base de futuros proyectos utilizando la tecnología de Microsoft en conjunto de Nodejs, flujo básico y conceptos

## Acerca de Microsoft bot framework

* https://dev.botframework.com/

## Prerrequisitos

* Instalación de Nodjes
  * https://nodejs.org/es/
* Instalación de Microsoft bot framework emulador
  * https://github.com/Microsoft/BotFramework-Emulator/blob/master/README.md
* Conocimientos de SDK bot builder
  * https://github.com/microsoft/botframework-sdk
* Conocimientos de Azure
  * https://azure.microsoft.com/es-es/

## Variables de entorno

A continuación el detalle de las variables a remplaza

| Nombre | Tipo | Descripción |
|:--------|:--------|:--------|
|`MICROSOFT_APP_ID` | string | Remplazar con el access key id del bot en Azure. |
|`MICROSOFT_APP_PASSWORD` | string | Remplazar con el password access del bot en Azure. |

## Instalación

ejecutar comando

```
npm install
```

## Levantar proyecto

```
npm run start
```

* Ejecutar el emulador y usar http://localhost:3978/api/messages como endpoint.

## Docker

```
docker build \
  --tag nodejs-chatbot-test \
  --build-arg MICROSOFT_APP_ID="7822da48-1cd3" \
  --build-arg MICROSOFT_APP_PASSWORD="tv}4cYiEgp" .
```

```
docker run -d --name nodejs-chatbot-test -p 3978:3978 nodejs-chatbot-test
```

## Equipo

Desarrollado por Diego Cortés

* dcortes.net@gmail.com

