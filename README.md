# Proyecto API de Canciones (Songs API)

Este proyecto implementa una API REST para gestionar canciones, utilizando tecnologías como Node.js, Express, OAS Tools, MongoDB y Docker.

## Estado del Proyecto

A continuación se detalla el cumplimiento de los requisitos de la actividad:

- [x] **1. Repositorio Privado**: Creado en GitHub bajo la organización `MIS-DO` con el nombre `do2526-danvelcam`.
- [x] **2. Tipo de Dato**: Elegido `Songs` con las propiedades:
  - `title` (texto)
  - `artist` (texto)
  - `releaseYear` (entero)
  - `durationSeconds` (entero)
  - `isExplicit` (booleano)
- [x] **3. Generación de API**: API generada usando `oas-tools` a partir de un archivo OpenAPI (YAML).
- [x] **4. Implementación NeDB**: Servicios implementados inicialmente usando `NeDB`.
- [x] **5. Subida de Código**: Todo el código ha sido subido al repositorio.
- [x] **6. Imagen Docker (Volumen)**: Creada imagen Docker que usa un volumen para `NeDB`.
- [x] **7. Cuenta Docker Hub**: Creada cuenta con el usuario `danvelcam621`.
- [x] **8. Imagen DO2526-C01**: Subida a Docker Hub la versión con NeDB.
  - Repositorio: `danvelcam621/songs-api:DO2526-C01`
- [x] **9. Migración a MongoDB (DO2526-C02)**: Código modificado para usar `MongoDB`. Imagen subida a Docker Hub.
  - Repositorio: `danvelcam621/songs-api:DO2526-C02`
- [x] **10. Docker Compose**: Configurado `docker-compose.yml` para orquestar la API junto con un contenedor de MongoDB, incluyendo persistencia de datos y healthchecks.

### EXTRA
- [x] **GitHub Actions (CI/CD)**: Implementado workflow `.github/workflows/docker-build.yml` que genera y sube automáticamente una nueva imagen a Docker Hub cada vez que se hace un commit en la rama `main`.

## Cómo Ejecutar

### Versión Local con MongoDB (Docker Compose)
```bash
cd songs-api
docker-compose up -d
```
La API estará disponible en `http://localhost:8080/api/v1/songs`.

### Versión Docker Hub (NeDB - DO2526-C01)
```bash
docker run -d -p 8080:8080 -v songs-data:/usr/src/app/data danvelcam621/songs-api:DO2526-C01
```

### Verificación CI/CD (MongoDB - DO2526-C02/latest)
Para verificar la imagen generada automáticamente por GitHub Actions:

1. Modificar `docker-compose.yml` cambiando la línea `build: .` por `image: danvelcam621/songs-api:latest`
2. Ejecutar:
```bash
docker-compose up -d
```
3. Verificar que la API responde (incluyendo la canción "King Nothing" añadida en el último commit):
```bash
curl http://localhost:8080/api/v1/songs
```
