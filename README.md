# Documentación de la API

## Descripción General

**Nombre del Proyecto:** My Store  
**Versión:** 1.0.0  
**Descripción:** Esta API proporciona servicios para gestionar una tienda en línea. Permite manejar categorías, productos y usuarios, ofreciendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para cada entidad.

---

## Instalación y Configuración

1. **Clonar el repositorio:**

   ```bash
   git clone git@github.com:acjoell/my-store-guide.git
   cd my-store
   ```


2. **Instalar las dependencias:**

   ```bash
     bun install
   ```

3. **Configurar variables de entorno (Opcional):**

   ```makefile
    PORT=3000
   ```

4. **Para correr:**
   
   ```makefile
    bun run dev
   ```

<br>

---

## Rutas de la API

### Ruta Principal

- **GET /api**
 
   ```txt
    GET /api
   ```

  **Respuesta:**

   ```json
    "Hola mundo"
   ```

### Rutas

<details>
  <summary>Products</summary>
  <br>

  - **GET /api/products**<br>
    **Descripción:** Obtiene la lista de productos.

    **Respuesta:**
  
    ```json
    [
      {
        "id": "a6de67a3-ed17-41b4-97a8-d0ae78415732",
        "name": "Fish",
        "price": "5441.00",
        "image": "https://loremflickr.com/640/480?lock=2316812351963136",
        "isBlock": false
      },
    ]
    ```
  <br>

  - **POST /api/products** <br>
    **Descripción:** Crea un nuevo producto.
  
    **Cuerpo de la solicitud:**
  
    ```json
    {
      "name": "New Product",
      "price": 15000,
      "image": "https://picsum.photos/seed/3w8cM/640/480",
      "isBlock": false,
    }
    ```
    **Respuesta:**

    ```json
    {
      "message": "product created",
      "data": {
        "id": "fea6bbdb-7d46-4948-8540-78f676db55cb",
        "name": "New Product",
        "price": 15000,
        "image": "https://picsum.photos/seed/3w8cM/640/480",
        "isBlock": false
      }
    }
    ```
  <br>

  - **PATCH /api/products/:id** <br>
    **Descripción:** Actualiza un producto existente.
    
    **Cuerpo de la solicitud:**
  
    ```json
    {
      "name": "New_Product",
      "price": 20000
    }
    ```

    **Respuesta:**

    ```json
    {
      "message": "product updated",
      "data": {
        "id": "fea6bbdb-7d46-4948-8540-78f676db55cb",
        "name": "New_Product",
        "price": 20000,
        "image": "https://picsum.photos/seed/3w8cM/640/480",
        "isBlock": false
      }
    }
    ```
  <br>

  - **DELETE /api/products/:id** <br>
    **Descripción:** Elimina un producto.
  
    **Respuesta:**
  
    ```json
    {
      "id": "a079cdca-09d8-4735-af37-d26b48865aa8",
      "message": "product deleted"
    }    
    ```

</details>

<details>
  <summary>Categories</summary>
  <br>

  - **GET /api/categories**<br>
    **Descripción:** Obtiene la lista de categorías.

    **Respuesta:**
  
    ```json
    [
      {
        "id": "abc123",
        "name": "Electronics",
        "image": "https://loremflickr.com/640/480?lock=2316812351963136"
      },
    ]
    ```

  <br>

  - **POST /api/categories** <br>
    **Descripción:** Crea una nueva categoría.
  
    **Cuerpo de la solicitud:**

    ```json
    {
      "name": "New Category",
      "image": "https://picsum.photos/seed/4a7cM/640/480"
    }
    ```
  
    **Respuesta:**

    ```json
    {
      "message": "category created",
      "data": {
        "id": "def456",
        "name": "New Category",
        "image": "https://picsum.photos/seed/4a7cM/640/480"
      }
    }
    ```

  <br>

  - **PATCH /api/categories/:id** <br>
    **Descripción:** Actualiza una categoría existente.
  
    **Cuerpo de la solicitud:**

    ```json
    {
      "name": "Updated Category Name"
    }
    ```
  
    **Respuesta:**

    ```json
    {
      "message": "category updated",
      "data": {
        "id": "def456",
        "name": "Updated Category Name",
        "image": "https://picsum.photos/seed/4a7cM/640/480"
      }
    }
    ```

  <br>
  
  - **DELETE /api/categories/:id** <br>
    **Descripción:** Elimina una categoría.
  
    **Respuesta:**
  
    ```json
    {
      "id": "def456",
      "message": "category deleted"
    }
    ```

</details>

<details>
  <summary>Users</summary>
  <br>

  - **GET /api/users**<br>
    **Descripción:** Obtiene la lista de usuarios.

    **Respuesta:**

    ```json
    [
      {
        "id": "f58c5b91-4e5a-4d4a-8d73-71c24a71f6a0",
        "name": "John",
        "lastName": "Doe",
        "bio": "Lorem ipsum dolor sit amet.",
        "job": "Software Engineer"
      },
    ]
    ```

  <br>

  - **POST /api/users** <br>
    **Descripción:** Crea un nuevo usuario.

    **Cuerpo de la solicitud:**

    ```json
    {
      "name": "Jane",
      "lastName": "Doe",
      "bio": "A passionate developer.",
      "job": "Product Manager"
    }
    ```

    **Respuesta:**

    ```json
    {
      "message": "user created",
      "data": {
        "id": "g56d4d34-8d6b-4e77-b13c-8b54e1e576e0",
        "name": "Jane",
        "lastName": "Doe",
        "bio": "A passionate developer.",
        "job": "Product Manager"
      }
    }
    ```
  
  <br>

  - **PATCH /api/users/:id** <br>
    **Descripción:** Actualiza un usuario existente.

    **Cuerpo de la solicitud:**

    ```json
    {
      "bio": "An experienced developer.",
      "job": "Lead Developer"
    }
    ```

    **Respuesta:**

    ```json
    {
      "message": "user updated",
      "data": {
        "id": "g56d4d34-8d6b-4e77-b13c-8b54e1e576e0",
        "name": "Jane",
        "lastName": "Doe",
        "bio": "An experienced developer.",
        "job": "Lead Developer"
      }
    }
    ```

  <br>

  - **DELETE /api/users/:id** <br>
    **Descripción:** Elimina un usuario.

    **Respuesta:**

    ```json
    {
      "id": "g56d4d34-8d6b-4e77-b13c-8b54e1e576e0",
      "message": "user deleted"
    }
    ```

</details>

---

## Manejo de Errores

La API utiliza los siguientes middlewares para el manejo de errores:

- **logErrors**: Registra errores para su posterior análisis.
- **boomErrorHandler**: Maneja errores con formato Boom.
- **errorHandler**: Maneja errores generales y envía una respuesta adecuada al cliente.

<br>

---

## Estructura del Proyecto

### Archivos Principales

- **server.js**: Configura y arranca el servidor Express, define middlewares globales, y configura rutas.
- **package.json**: Contiene información del proyecto y dependencias.

### Carpetas
- **api/routes**: Define las rutas de la API (e.g., categories.router.js, products.router.js, users.router.js).
- **api/schemas**: Contiene los esquemas de datos (e.g., product.schema.js).
- **api/services**: Implementa la lógica de negocio (e.g., categories.service.js, product.service.js, users.service.js).
- **api/middlewares**: Contiene middlewares personalizados para manejar errores y validaciones (e.g., error.handler.js, validator.handler.js).

