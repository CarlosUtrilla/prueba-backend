### Desafío Técnico: Optimización de Rendimiento en Node.js

#### Objetivo

Crear un servicio de búsqueda en una gran colección de datos y optimizar el rendimiento del mismo utilizando técnicas avanzadas en Node.js.

#### Requisitos

1. **Carga de Datos:**

    - Crea una gran colección de objetos JSON simulando datos de productos. La colección debe contener al menos 1 millón de objetos.
    - Cada objeto debe contener al menos los siguientes campos: `id`, `nombre`, `precio`, `categoria`, `descripcion`.
2. **Endpoint de Búsqueda:**

    - Crea un endpoint de búsqueda para encontrar productos por su nombre o categoría.
    - Endpoint: `GET /api/search?q=:query`
    - Descripción: Buscar productos por su nombre o categoría. El parámetro `q` contiene el término de búsqueda.
    - La búsqueda debe ser insensible a mayúsculas y minúsculas y devolver todos los productos que contengan el término de búsqueda en su nombre o categoría.
    - Implementa la búsqueda de manera eficiente para manejar grandes volúmenes de datos.
3. **Optimización del Rendimiento:**

    - Implementa técnicas de optimización para que la búsqueda sea lo más rápida y eficiente posible.
    - Utiliza algoritmos de búsqueda y estructuras de datos adecuadas para mejorar el tiempo de respuesta.
    - Implementa técnicas de almacenamiento en caché para evitar búsquedas repetitivas de los mismos términos de búsqueda.

#### Requisitos Técnicos

- Utiliza Node.js y Express.js para el desarrollo del servidor y la API.
- Utiliza una estructura de datos eficiente para almacenar la colección de productos.
- Implementa técnicas de optimización de búsqueda, como índices o árboles de búsqueda, para mejorar la velocidad de búsqueda.
- Utiliza técnicas de almacenamiento en caché para evitar búsquedas repetitivas de los mismos términos de búsqueda (puedes usar redis).
