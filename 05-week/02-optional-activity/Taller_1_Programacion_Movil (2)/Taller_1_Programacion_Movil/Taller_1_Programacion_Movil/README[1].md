# 📱 Recetas Colombianas — Taller 1 Programación Móvil

Aplicación móvil nativa desarrollada como parte del **Taller 1 de Programación Móvil**.  
La app permite a los usuarios descubrir, guardar y compartir recetas típicas de Colombia.  

---

## 🚀 Tecnologías
- **Frontend:** React + Ionic (Ionic React), TypeScript, Capacitor.
- **Backend:** Node.js + Express, JWT para autenticación.
- **Base de datos:** MySQL (ORM: Prisma o Sequelize).
- **Infraestructura:** Docker (opcional), despliegue en la nube (AWS / Render / Heroku).

---

## ✨ Funcionalidades
- Registro e inicio de sesión (correo/contraseña y Google OAuth).  
- Exploración de recetas por texto, ciudad o categoría (desayunos, almuerzos, cenas, postres).  
- Visualización detallada de recetas (ingredientes, pasos, tiempos, raciones).  
- Guardado de recetas en **favoritos offline**.  
- Calificación de recetas (1–5 estrellas).  
- Foro comunitario para publicar recetas (texto + imagen ≤ 2 MB).  
- Perfil de usuario editable (nombre, correo, foto).  
- Navegación global por menú inferior o lateral.  

---

## 📦 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/taller1-programacion-movil.git
cd taller1-programacion-movil
```

### 2. Configurar el backend
```bash
cd backend
npm install
cp .env.example .env   # Configura la conexión a MySQL
npm run dev
```

### 3. Configurar el frontend
```bash
cd frontend
npm install
npm start
```

La app se ejecutará en `http://localhost:8100/` (Ionic).  

---

## 🗄️ Base de datos

Modelo simplificado (MySQL):

- **Usuario 👤**: credenciales, perfil.  
- **Receta 🍲**: título, ciudad, categoría, autor, imagen.  
- **Ingrediente 🥕**: nombre, cantidad, unidad.  
- **Paso 📖**: instrucciones ordenadas.  
- **Favorito ⭐**: recetas guardadas por usuario.  
- **Calificación ⭐⭐⭐**: valoraciones 1–5 estrellas.  
- **Post del foro 📝**: publicaciones de la comunidad.  

---

## 👨‍💻 Autores
- ANGIE VALENTINA FLOREZ VARGAS  
- SERGIO ALEJANDRO MUÑOZ CABRERA  
- KARINA CANTILLO PLAZA

---

## 📄 Licencia
Este proyecto es **académico** y no cuenta con licencia comercial.
