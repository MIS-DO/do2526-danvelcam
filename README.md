# Proyecto API de Canciones (Songs API)

Este proyecto implementa una REST API completa para la gestión de canciones (**Songs**), diseñada como parte de la asignatura de Despliegue y Operación. La solución abarca desde la definición de la API hasta su despliegue contenerizado con persistencia y monitoreo.

## Stack Tecnológico

- **Runtime**: Node.js
- **Framework Web**: Express (vía OAS Tools)
- **Definición API**: OpenAPI 3.0 (YAML)
- **Base de Datos**: MongoDB (inicialmente NeDB en C01)
- **Containerización**: Docker & Docker Compose
- **Logging**: Winston

## Documentación de Entregas (Hitos)

El desarrollo del proyecto se ha dividido en los siguientes hitos incrementales:

- **[DO2526-C01: Inicialización y NeDB](songs-api/docs/C01.md)**
  - Definición de la entidad `Songs`.
  - Configuración inicial de la API y persistencia ligera con NeDB.
  - Dockerización base.

- **[DO2526-C02: Migración a MongoDB](songs-api/docs/C02.md)**
  - Migración de persistencia a MongoDB.
  - Orquestación multicontenedor con Docker Compose (API + DB).
  - Implementación de CI/CD básico con GitHub Actions.

- **[DO2526-C03: Logging y Operaciones](songs-api/docs/C03.md)**
  - Implementación de sistema de logging avanzado (Winston).
  - Gestión de persistencia con volúmenes dedicados (Logs y Data).
  - Configuración multientorno (Dev vs Prod) para despliegue concurrente.

## Estado Actual (CI/CD)
- **GitHub Actions**: Implementado workflow para build automático en `main`.

## Guía Rápida de Ejecución (Última Versión - C03)

Para desplegar la versión más reciente con todas las funcionalidades:

1.  **Entrar en el directorio**:
    ```bash
    cd songs-api
    ```

2.  **Configurar Entorno**:
    ```bash
    cp .env.example .env.dev
    ```

3.  **Arrancar**:
    ```bash
    docker compose --env-file .env.dev -f docker-compose.yml -f docker-compose.dev.yml -p songs-api-dev up --build
    ```
    La API estará disponible en `http://localhost:8080/api/v1/songs`.
