# Modelo de Datos (normalizado)

### 1. **User**

* **user\_id** (PK)
* name
* username (único)
* email (único)
* password
* profile\_picture (opcional)
* bio (opcional)
* role (ej. “user”, “admin”)
* created\_at
* updated\_at

 **Relaciones**:

* 1\:N con `Recipe` (un usuario publica muchas recetas) → **HU3, RF-02**
* 1\:N con `Favorite` (un usuario guarda varias recetas) → **HU7, RF-04**
* 1\:N con `Rating` (un usuario califica recetas) → **HU8, RF-05**

---

### 2. **Recipe**

* **recipe\_id** (PK)
* user\_id (FK → User.user\_id)
* title
* description
* ingredients (texto largo / JSON)
* steps (texto largo / JSON)
* prep\_time
* cook\_time
* servings
* difficulty (fácil, medio, difícil)
* image\_url
* category (ej. postres, ensaladas)
* tags (ej. “rápido”, “saludable”)
* created\_at
* updated\_at

**Relaciones**:

* N:1 con `User` (autor) → **HU3, RF-02**
* 1\:N con `Favorite` → **HU7, RF-04**
* 1\:N con `Rating` → **HU8, RF-05**

---

### 3. **Favorite**

* **favorite\_id** (PK)
* user\_id (FK → User.user\_id)
* recipe\_id (FK → Recipe.recipe\_id)
* created\_at

 **Relaciones**:

* N\:M entre `User` y `Recipe` → **HU7, RF-04**

---

### 4. **Rating**

* **rating\_id** (PK)
* user\_id (FK → User.user\_id)
* recipe\_id (FK → Recipe.recipe\_id)
* score (INT 1–5)
* created\_at

 **Relaciones**:

* N\:M entre `User` y `Recipe` → **HU8, RF-05**

---

### 5. **Opcional: Comment** (si más adelante quieren interacción)

* **comment\_id** (PK)
* user\_id (FK → User.user\_id)
* recipe\_id (FK → Recipe.recipe\_id)
* content
* created\_at
* parent\_comment\_id (FK → Comment.comment\_id, nullable → para respuestas en hilo)

---

# Relaciones principales

| Relación                     | Cardinalidad | Justificación                                                                               |
| ---------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| **User → Recipe**            | 1\:N         | Un usuario puede crear muchas recetas.                                                      |
| **User → Favorite → Recipe** | N\:M         | Un usuario puede tener muchas favoritas y una receta puede ser favorita de muchos usuarios. |
| **User → Rating → Recipe**   | N\:M         | Un usuario califica varias recetas y una receta recibe calificaciones de varios usuarios.   |
| **Recipe → Comment**         | 1\:N         | Una receta puede tener muchos comentarios (si se incluye).                                  |


