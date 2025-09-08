# Historias de usuario
**Fecha:** 2025-09-07  
**Versión:** 1.1  
**Responsables:**  
ANGIE VALENTINA FLOREZ VARGAS  
SERGIO ALEJANDRO MUÑOZ CABRERA  
KARINA CANTILLO PLAZA

## HU-01 Registro de usuario

| Requisito                  | Historia | Caso de Uso | Criterios de aceptación                                                                                               | Tipo de prueba (TC)                                                         | Prioridad (MoSCoW) | Estado    |
| -------------------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------ | --------- |
| RF-01 Registro de usuarios | HU-01    | UC-01       | Dado un email válido y contraseña ≥8, cuando envío el formulario, entonces se crea la cuenta y se recibe confirmación | TC-01 Registro válido; TC-02 Email inválido; TC-03 Contraseña <8 caracteres | Must Have          | Pendiente |


Funcionalidad: Registro de usuario

Escenario: Registro exitoso
  Dado que el usuario ingresa un email válido y contraseña ≥8
  Cuando envía el formulario de registro
  Entonces se crea la cuenta y se envía confirmación

Escenario: Email inválido
  Dado que el usuario ingresa un email no válido
  Cuando envía el formulario
  Entonces se muestra mensaje de error y no se registra

Escenario: Contraseña inválida
  Dado que la contraseña es menor a 8 caracteres
  Cuando envía el formulario
  Entonces se muestra mensaje de error y no se registra


## HU-02 Inicio de sesión

| Requisito              | Historia | Caso de Uso | Criterios de aceptación                                                                                                     | Tipo de prueba (TC)                                        | Prioridad (MoSCoW) | Estado    |
| ---------------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------ | --------- |
| RF-02 Inicio de sesión | HU-02    | UC-02       | Dado que el usuario tiene cuenta registrada, cuando ingresa sus credenciales correctas, entonces inicia sesión exitosamente | TC-01 Inicio sesión válido; TC-02 Credenciales incorrectas | Must Have          | Pendiente |

Funcionalidad: Inicio de sesión

Escenario: Inicio exitoso
  Dado que el usuario tiene cuenta registrada
  Cuando ingresa email y contraseña correctos
  Entonces inicia sesión y accede al perfil

Escenario: Credenciales incorrectas
  Dado que el usuario ingresa email o contraseña incorrectos
  Cuando intenta iniciar sesión
  Entonces se muestra mensaje de error y no accede

## HU-03 Búsqueda de recetas

| Requisito                 | Historia | Caso de Uso | Criterios de aceptación                                                                                                            | Tipo de prueba (TC)                                                   | Prioridad (MoSCoW) | Estado    |
| ------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------ | --------- |
| RF-04 Búsqueda de recetas | HU-03    | UC-03       | Dado que el usuario busca por título, ingrediente o categoría, cuando realiza la búsqueda, entonces se muestran recetas relevantes | TC-01 Búsqueda por título; TC-02 Por ingrediente; TC-03 Por categoría | Must Have          | Pendiente |

Funcionalidad: Búsqueda de recetas

Escenario: Búsqueda por título
  Dado que el usuario ingresa un título válido
  Cuando ejecuta la búsqueda
  Entonces se muestran recetas que coinciden

Escenario: Búsqueda por ingrediente
  Dado que el usuario ingresa un ingrediente
  Cuando ejecuta la búsqueda
  Entonces se muestran recetas que contienen ese ingrediente

Escenario: Búsqueda por categoría
  Dado que el usuario selecciona una categoría
  Cuando ejecuta la búsqueda
  Entonces se muestran recetas dentro de esa categoría

## HU-04 Visualizar detalle de receta

| Requisito                   | Historia | Caso de Uso | Criterios de aceptación                                                                                                                | Tipo de prueba (TC)                                                                    | Prioridad (MoSCoW) | Estado    |
| --------------------------- | -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------ | --------- |
| RF-05 Ver detalle de receta | HU-04    | UC-04       | Dado que el usuario selecciona una receta, cuando abre el detalle, entonces ve ingredientes, pasos, tiempo, dificultad, autor e imagen | TC-01 Visualizar ingredientes; TC-02 Visualizar pasos; TC-03 Visualizar info adicional | Must Have          | Pendiente |

Funcionalidad: Visualizar detalle de receta

Escenario: Detalle completo
  Dado que el usuario selecciona una receta
  Cuando abre la vista de detalle
  Entonces ve todos los ingredientes, pasos, tiempo, dificultad, autor e imagen

## HU-05 Favoritos offline

| Requisito       | Historia | Caso de Uso | Criterios de aceptación                                                                                                  | Tipo de prueba (TC)                            | Prioridad (MoSCoW) | Estado    |
| --------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------ | --------- |
| RF-06 Favoritos | HU-05    | UC-06       | Dado que el usuario marca una receta como favorita, cuando accede offline, entonces puede verla en su lista de favoritos | TC-01 Marcar favorita; TC-02 Consultar offline | Must Have          | Pendiente |

Funcionalidad: Favoritos offline

Escenario: Consultar favoritos sin conexión
  Dado que el usuario marcó recetas como favoritas con conectividad
  Cuando activa el modo avión
  Entonces las recetas siguen visibles y no aparece error

## HU-06 Publicar receta

| Requisito              | Historia | Caso de Uso | Criterios de aceptación                                                                                                                            | Tipo de prueba (TC)                                                       | Prioridad (MoSCoW) | Estado    |
| ---------------------- | -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------ | --------- |
| RF-03 Publicar recetas | HU-06    | UC-05       | Dado que el usuario ingresa título, ingredientes, pasos e imagen, cuando envía la receta, entonces se publica correctamente y se refleja en la app | TC-01 Publicación válida; TC-02 Campos incompletos; TC-03 Imagen inválida | Must Have          | Pendiente |

Funcionalidad: Publicar receta

Escenario: Publicación exitosa
  Dado que el usuario completa título, ingredientes, pasos e imagen
  Cuando envía la receta
  Entonces se guarda y aparece publicada en la app

Escenario: Campos incompletos
  Dado que el usuario no completa todos los campos obligatorios
  Cuando intenta publicar
  Entonces se muestra mensaje de error y no se publica

Escenario: Imagen inválida
  Dado que la imagen supera el tamaño permitido o formato no soportado
  Cuando intenta publicar
  Entonces se muestra mensaje de error y no se publica

## HU-07 Moderación de recetas

| Requisito                   | Historia | Caso de Uso | Criterios de aceptación                                                                                                        | Tipo de prueba (TC)                         | Prioridad (MoSCoW) | Estado    |
| --------------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------------ | --------- |
| RF-09 Moderación de recetas | HU-07    | UC-10       | Dado que un moderador revisa recetas reportadas, cuando aprueba o rechaza, entonces la receta se muestra o se oculta de la app | TC-01 Aprobar receta; TC-02 Rechazar receta | Must Have          | Pendiente |

Funcionalidad: Moderación de recetas

Escenario: Aprobar receta
  Dado que el moderador revisa una receta reportada
  Cuando la aprueba
  Entonces la receta se publica en la app

Escenario: Rechazar receta
  Dado que el moderador revisa una receta reportada
  Cuando la rechaza
  Entonces la receta se oculta de la app y se notifica al autor

  ## HU-08 Comentar receta

| Requisito              | Historia | Caso de Uso | Criterios de aceptación                                                                                                      | Tipo de prueba (TC)                             | Prioridad (MoSCoW) | Estado    |
| ---------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------ | --------- |
| RF-07 Comentar recetas | HU-08    | UC-07       | Dado que el usuario escribe un comentario, cuando lo envía, entonces aparece visible en la receta y sincronizado con backend | TC-01 Comentario válido; TC-02 Comentario vacío | Should Have        | Pendiente |
 
 Funcionalidad: Comentar receta

Escenario: Comentario válido
  Dado que el usuario ingresa un comentario válido
  Cuando envía el comentario
  Entonces se muestra en la receta y se guarda en backend

Escenario: Comentario vacío
  Dado que el comentario está vacío
  Cuando intenta enviarlo
  Entonces se muestra mensaje de error y no se guarda

## HU-09 Calificar receta

| Requisito               | Historia | Caso de Uso | Criterios de aceptación                                                                                                               | Tipo de prueba (TC)                                    | Prioridad (MoSCoW) | Estado    |
| ----------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------ | --------- |
| RF-07 Calificar recetas | HU-09    | UC-08       | Dado que el usuario selecciona entre 1-5 estrellas, cuando envía la calificación, entonces se refleja en promedio en la app y backend | TC-01 Calificación válida; TC-02 Calificación inválida | Should Have        | Pendiente |

Funcionalidad: Calificar receta

Escenario: Calificación válida
  Dado que el usuario selecciona 1 a 5 estrellas
  Cuando envía la calificación
  Entonces se actualiza el promedio visible en la receta

Escenario: Calificación inválida
  Dado que el usuario intenta enviar calificación fuera del rango
  Cuando lo hace
  Entonces se muestra mensaje de error y no se guarda

## HU-10 Reportar receta

| Requisito              | Historia | Caso de Uso | Criterios de aceptación                                                                                                       | Tipo de prueba (TC)                       | Prioridad (MoSCoW) | Estado    |
| ---------------------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------ | --------- |
| RF-08 Reportar recetas | HU-10    | UC-09       | Dado que el usuario marca una receta como inapropiada, cuando envía reporte, entonces se notifica a moderadores para revisión | TC-01 Reporte válido; TC-02 Sin selección | Should Have        | Pendiente |

Funcionalidad: Reportar receta

Escenario: Reporte válido
  Dado que el usuario selecciona motivo válido
  Cuando envía el reporte
  Entonces se notifica al moderador

Escenario: Sin selección
  Dado que el usuario no selecciona motivo
  Cuando intenta enviar reporte
  Entonces se muestra mensaje de error

## HU-11 Editar perfil

| Requisito           | Historia | Caso de Uso | Criterios de aceptación                                                                                | Tipo de prueba (TC)                        | Prioridad (MoSCoW) | Estado    |
| ------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------------------ | --------- |
| RF-10 Editar perfil | HU-11    | UC-11       | Dado que el usuario cambia nombre, foto o datos, cuando guarda, entonces se actualiza en backend y app | TC-01 Datos válidos; TC-02 Datos inválidos | Could Have         | Pendiente |

Funcionalidad: Editar perfil

Escenario: Datos válidos
  Dado que el usuario modifica su perfil con datos correctos
  Cuando guarda los cambios
  Entonces se actualizan en la app y backend

Escenario: Datos inválidos
  Dado que los datos son incorrectos o incompletos
  Cuando intenta guardar
  Entonces se muestra mensaje de error y no se actualizan

## HU-12  Notificaciones push

| Requisito                      | Historia | Caso de Uso | Criterios de aceptación                                                                                                                          | Tipo de prueba (TC)                                         | Prioridad (MoSCoW) | Estado    |
| ------------------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | ------------------ | --------- |
| RNF-Performance Notificaciones | HU-12    | UC-12       | Dado que hay interacción relevante (receta aprobada, comentada o calificada), cuando se genera evento, entonces usuario recibe notificación push | TC-01 Notificación correcta; TC-02 Notificación no recibida | Could Have         | Pendiente |

Funcionalidad: Notificaciones push

Escenario: Notificación válida
  Dado que ocurre evento relevante
  Cuando se genera la notificación
  Entonces el usuario la recibe correctamente

Escenario: No recibida
  Dado que la notificación falla
  Cuando se intenta enviar
  Entonces se muestra log de error

## HU-13 Compartir recetas

| Requisito  | Historia | Caso de Uso | Criterios de aceptación                   | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado    |
| ---------- | -------- | ----------- | ----------------------------------------- | ------------------- | ------------------ | --------- |
| Won’t Have | HU-13    | UC-13       | Funcionalidad no incluida en esta versión | TC-01 N/A           | Won’t Have         | Pendiente |

Funcionalidad: Compartir recetas

Escenario: N/A
  Esta funcionalidad no se implementa en esta versión

## HU-14 Lista de compras automática

HU-14
| Requisito  | Historia | Caso de Uso | Criterios de aceptación                   | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado    |
| ---------- | -------- | ----------- | ----------------------------------------- | ------------------- | ------------------ | --------- |
| Won’t Have | HU-14    | UC-14       | Funcionalidad no incluida en esta versión | TC-01 N/A           | Won’t Have         | Pendiente |

Funcionalidad: Lista de compras automática

Escenario: N/A
  Esta funcionalidad no se implementa en esta versión
