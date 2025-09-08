# Anexos — Recetas Colombianas (App móvil Android)  
**Fecha:** 2025-09-07  
**Versión:** 2.0  
**Responsables:**  
- ANGIE VALENTINA FLOREZ VARGAS  
- SERGIO ALEJANDRO MUÑOZ CABRERA  
- KARINA CANTILLO

## 1. Mockups (descripción)
1. **Login/Registro** → campos de correo/contraseña, inicio de sesión con Google, enlace “Olvidé mi contraseña”.  
2. **Pantalla principal (Inicio)** → barra de búsqueda por texto/ciudad, listado de recetas destacadas con imagen y calificación.  
3. **Detalle de receta** → imagen destacada, lista de ingredientes, pasos numerados de preparación, botón *Favorito* y opción de calificación.  
4. **Favoritos** → recetas guardadas de forma local (offline); sincronización automática al recuperar conexión.  
5. **Categorías** → acceso a secciones como *Desayunos, Almuerzos, Cenas, Postres*.  
6. **Foro comunitario** → formulario para compartir recetas con texto e imagen; listado cronológico de publicaciones de otros usuarios.  
7. **Perfil de usuario** → edición de nombre, correo y foto de perfil.  
8. **Navegación global** → barra/menu para acceder rápidamente a Inicio, Favoritos, Categorías, Foro y Perfil.  

---

## 2. Modelo de Datos (DER simplificado)

```
USER (1)───<(*) RECIPE
RECIPE (1)───<(*) INGREDIENT
RECIPE (1)───<(*) STEP
RECIPE (1)───<(*) RATING >───(1) USER
RECIPE (1)───<(*) FAVORITE >───(1) USER
USER (1)───<(*) POST (foro comunitario)
```

---

## 3. Políticas de Datos
- **Retención**: recetas, favoritos y calificaciones se almacenan mientras la cuenta esté activa; logs mínimos conservados por 12 meses.  
- **Privacidad**: la app solicita consentimiento; permite descargar y eliminar datos personales bajo petición.  
- **Seguridad**:  
  - Cifrado en tránsito (HTTPS/TLS).  
  - Hash + salt en contraseñas.  
  - Políticas de mínimos privilegios en backend.  
  - Validación estricta de archivos multimedia (imágenes ≤ 2 MB, formatos aceptados: JPG/PNG).  

---
