# RECETAS COLOMBIANAS

## tema 2: Metodologias de Desarrolo ágil 

- **Comprender el Manifiesto Ágil**

> **Los 4 valores aplicados a la app móvil**
1.	Individuos e interacciones sobre procesos y herramientas
    - **Aplicación:** Fomentar la comunicación constante entre el equipo (PO, Devs, SM) y los usuarios que aportan recetas, más que depender de documentación rígida.
    - **Ejemplo:** Si surge una duda sobre cómo mostrar fotos de recetas, se discute en el Daily y se ajusta rápido, en lugar de esperar a un documento formal.
2.	Software funcionando sobre documentación extensiva
    - **Aplicación:** Priorizar tener la app móvil con registro, login y publicación de recetas operativa, antes de crear manuales extensos.
    - **Ejemplo:** En la primera entrega se libera un prototipo funcional para probar la publicación de una receta sencilla.
3.	Colaboración con el cliente sobre negociación contractual
    - **Aplicación:** Incluir a los usuarios (estudiantes y aficionados a la cocina) en pruebas tempranas para validar si el flujo de publicación de recetas es fácil.
    - **Ejemplo:** Un estudiante prueba la HU “publicar receta con imagen” y da feedback inmediato que se incorpora en el siguiente sprint.
4.	Respuesta ante el cambio sobre seguir un plan
    - **Aplicación:** Si los usuarios sugieren añadir comentarios en las recetas, se ajusta el Product Backlog y se prioriza en el siguiente sprint.
    - **Ejemplo:** Aunque no estaba en el plan inicial, se incluye la HU “Comentar recetas” porque genera valor real.

**Principios con ejemplos aplicados**

- Entrega continua de software útil: Se libera una versión beta cada 2 semanas en la Play Store para recibir retroalimentación.
- Bienvenidos los cambios en requisitos: Si los usuarios piden “favoritos offline”, se integra al backlog y se prioriza.
- Colaboración diaria entre negocio y desarrollo: El PO revisa con los devs en cada Daily el avance de HU críticas como registro/login.

## Configuración de un marco Scrum  

### Roles definidos  

> **Cuadro de Roles en Scrum**

| Rol              | Responsable        | Funciones principales                                                   |
|------------------|-------------------|------------------------------------------------------------------------|
| **Product Owner** | Jesus Ariel       | Definir backlog, priorizar historias, recibir feedback de usuarios.    |
| **Scrum Master**  | Karina            | Facilitar ceremonias, remover impedimentos, asegurar prácticas ágiles. |
| **Development Team** | Karina, Angie, Alejo | Diseñar, programar y probar la app móvil y el backend.                 |


## Product Backlog inicial (7 HU)

> **Historias de Usuario (HU)**

| ID   | Historia de Usuario                                                                 |
|------|-------------------------------------------------------------------------------------|
| **HU1** | Como usuario quiero registrarme con correo y contraseña para acceder a la app.       |
| **HU2** | Como usuario quiero iniciar sesión para acceder a mis recetas.                       |
| **HU3** | Como usuario quiero publicar una receta con título, ingredientes, pasos e imagen.    |
| **HU4** | Como usuario quiero ver un listado de recetas públicas para explorar ideas de cocina.|
| **HU5** | Como usuario quiero buscar recetas por nombre de ciudad para encontrarlas fácilmente. |
| **HU6** | Como usuario quiero marcar recetas como favoritas para revisarlas offline.           |
| **HU7** | Como usuario quiero calificar en recetas para la comunidad.           |


##  Sprint Backlog (Sprint 1 — 2 semanas)  

>  **Sprint 1 - Selección de Historias de Usuario**  

| ID   | Historia de Usuario            |
|------|--------------------------------|
| **HU1** | Registro de usuario           |
| **HU2** | Login de usuario              |
| **HU3** | Publicación de recetas        |
| **HU4** | Listado de recetas públicas   |


## Criterios de aceptación (ejemplo)  

### HU1 (Registro)  
- Dado un correo válido y contraseña ≥8 caracteres, al registrarme recibo confirmación.  
- Si el correo ya existe, el sistema muestra error.  

### HU2 (Login)  
- Dado un correo y contraseña correctos, accedo a la app.  
- Tras 5 intentos fallidos, la cuenta queda bloqueada.  

### HU3 (Publicar receta)  
- Dado que estoy logueado, puedo publicar receta con título, ingredientes, pasos e imagen.  
- Si falta título, no permite guardar.  

### HU4 (Listado de recetas)  
- Al ingresar a la app, veo un listado con al menos 10 recetas públicas.  
- Puedo filtrar por nombre o ingrediente.  


## Definition of Done (DoD)  

Una historia está **“Hecha”** cuando:  

- El código funciona sin errores.  
- Ha sido probado en un dispositivo Android.  
- Cumple con criterios de aceptación.  
- Está integrado en la app.  
- Documentado en el backlog.  


## Tablero Kanban  

> **Flujo de trabajo visualizado en Kanban**

### Columnas:
- **To Do** → HU pendientes.  
- **In Progress** → Máx. 2 HU en paralelo (**WIP = 2**).  
- **In Review** → HU terminadas en revisión.  
- **Done** → HU finalizadas.  

### Ejemplo de avance:
- **HU1 y HU2** → In Progress  
- **HU3** → To Do  
- **HU4** → To Do  




##  Comparativa Ágil vs Tradicional  

> **Cuadro comparativo de enfoques de desarrollo**  

| Aspecto              | Ágil (Scrum/Kanban)                     | Tradicional (Cascada)         |
|-----------------------|-----------------------------------------|-------------------------------|
| **Entregas**          | Incrementales cada 2-3 semanas          | Producto al final del proyecto |
| **Flexibilidad**      | Alta, se adapta a cambios               | Baja, cambios son costosos     |
| **Participación usuario** | Constante (feedback cada sprint)     | Limitada a inicio y fin        |
| **Planificación**     | Evolutiva, ajustable                    | Rígida, definida desde el inicio |
| **Control de calidad**| Pruebas continuas                       | Pruebas al final               |
| **Gestión de riesgos**| Riesgos se identifican en cada sprint   | Riesgos aparecen al final       |



## Plan de aplicación ágil en el proyecto  

Durante el desarrollo de la app usaremos **Scrum** como marco base para organizar sprints, backlog y roles, y **Kanban** para visualizar el flujo de tareas.  

- **Sprints:** de 2 semanas, con entregables funcionales.  
- **Revisiones:** al final de cada sprint se presenta la app al PO y usuarios testers.  
- **Retrospectiva (ejemplo):**  
  - *Sprint 1:* Se detectó retraso en **HU3 (publicar receta)** por problemas con imágenes.  
  - *Acción:* Integrar pruebas de carga de imágenes en etapas tempranas.  
- **Progreso:** se medirá con un **tablero Kanban** y un **Burndown Chart simple**.  
