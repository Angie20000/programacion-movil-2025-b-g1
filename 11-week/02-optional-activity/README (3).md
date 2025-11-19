# 📘 Aplicación de Recetas – Historias de Usuario Implementadas

Este documento describe las **Historias de Usuario implementadas** en la aplicación móvil de recetas.  
Incluye requisitos, criterios de aceptación, escenarios y cobertura de pruebas.  
Se excluyen todas las HU no desarrolladas en esta versión.

## 👥 Responsables  
- **Angie Valentina Flórez Vargas**  
- **Sergio Alejandro Muñoz Cabrera**  
- **Karina Cantillo Plaza**  
- **Fecha:** 2025-09-07  
- **Versión:** 1.1  

# ✅ Historias de Usuario Implementadas

## HU-01 – Registro de Usuario

**Requisito:** RF-01  
**Caso de Uso:** UC-01  
**Descripción:** Permite que un usuario se registre proporcionando email y contraseña.

### ✔ Criterios de aceptación
- El usuario debe ingresar un email válido.  
- La contraseña debe tener mínimo 8 caracteres.  
- Al registrarse correctamente, el sistema envía una confirmación.

### 🧪 Casos de prueba  
- TC-01: Registro válido  
- TC-02: Email inválido  
- TC-03: Contraseña < 8 caracteres  

### 📌 Escenarios
- **Registro exitoso:** Se crea la cuenta y se envía confirmación.  
- **Email inválido:** Se muestra mensaje de error.  
- **Contraseña inválida:** Se muestra mensaje de error.

---

## HU-02 – Inicio de Sesión

**Requisito:** RF-02  
**Caso de Uso:** UC-02  
**Descripción:** El usuario registrado puede iniciar sesión con sus credenciales.

### ✔ Criterios de aceptación
- Si las credenciales son correctas, el usuario accede al sistema.  
- Si son incorrectas, debe mostrarse mensaje de error.

### 🧪 Casos de prueba  
- TC-01: Inicio válido  
- TC-02: Credenciales incorrectas  

### 📌 Escenarios
- **Inicio exitoso:** Accede correctamente.  
- **Credenciales incorrectas:** Se niega el acceso con mensaje de error.

---

## HU-03 – Búsqueda de Recetas

**Requisito:** RF-04  
**Caso de Uso:** UC-03  
**Descripción:** El usuario puede buscar recetas por título, ingrediente o categoría.

### ✔ Criterios de aceptación
- Búsqueda por título debe mostrar coincidencias.  
- Búsqueda por ingredientes debe mostrar recetas relacionadas.  
- Búsqueda por categoría debe filtrar correctamente.

### 🧪 Casos de prueba  
- TC-01: Búsqueda por título  
- TC-02: Búsqueda por ingrediente  
- TC-03: Búsqueda por categoría  

### 📌 Escenarios
- **Por título:** Retorna recetas coincidentes.  
- **Por ingrediente:** Retorna recetas que lo contienen.  
- **Por categoría:** Retorna recetas dentro de la categoría seleccionada.

---

## HU-04 – Visualizar Detalle de Receta

**Requisito:** RF-05  
**Caso de Uso:** UC-04  
**Descripción:** Permite ver detalles completos de una receta seleccionada.

### ✔ Criterios de aceptación
El usuario debe visualizar:  
- Ingredientes  
- Pasos  
- Tiempo  
- Dificultad  
- Autor  
- Imagen  

### 🧪 Casos de prueba  
- TC-01: Visualizar ingredientes  
- TC-02: Visualizar pasos  
- TC-03: Visualizar datos adicionales  

### 📌 Escenario
- **Detalle completo:** Muestra toda la información correspondiente a la receta.

---

## HU-06 – Publicar Receta

**Requisito:** RF-03  
**Caso de Uso:** UC-05  
**Descripción:** Permite que un usuario publique una receta nueva.

### ✔ Criterios de aceptación
- Debe ingresar título, ingredientes, pasos e imagen.  
- La receta se debe guardar correctamente.  
- Si faltan campos o la imagen es inválida, el sistema muestra error.

### 🧪 Casos de prueba  
- TC-01: Publicación válida  
- TC-02: Campos incompletos  
- TC-03: Imagen inválida  

### 📌 Escenarios
- **Publicación exitosa:** La receta queda disponible en la app.  
- **Campos incompletos:** Muestra error y no se publica.  
- **Imagen inválida:** Muestra error.

---

# ❌ Historias de Usuario NO Implementadas en esta versión

Las siguientes funcionalidades fueron descartadas para esta entrega:  
- HU-05 Favoritos offline  
- HU-07 Moderación de recetas  
- HU-08 Comentar recetas  
- HU-09 Calificar recetas  
- HU-10 Reportar recetas  
- HU-11 Editar perfil  
- HU-12 Notificaciones push  
- HU-13 Compartir recetas  
- HU-14 Lista de compras automática  

---

# 📄 Notas finales

Este documento contiene únicamente las funcionalidades implementadas.  
Las HU excluidas podrán desarrollarse en futuras iteraciones según las necesidades del sistema.
