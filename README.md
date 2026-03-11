# 🚀 FlowTask

FlowTask es una aplicación **Full Stack de gestión de tareas** que permite a los usuarios registrarse, iniciar sesión y administrar sus tareas personales.

El proyecto está desarrollado con **Spring Boot en el backend** y **React + TailwindCSS en el frontend**, consumiendo una API REST.

---

# 📌 Características

✔ Registro de usuarios
✔ Inicio de sesión por email
✔ Creación de tareas
✔ Edición de tareas
✔ Eliminación de tareas
✔ Estados de tareas
✔ Persistencia en base de datos
✔ Interfaz moderna con TailwindCSS

Estados de las tareas:

```
TODO
IN_PROGRESS
DONE
```

Cada usuario solo puede ver **sus propias tareas**.

---

# 🧱 Arquitectura del proyecto

El proyecto está dividido en dos aplicaciones:

```
FlowTask
│
├── flowtask-backend   (Spring Boot API)
│
└── flowtask-frontend  (React + Vite + TailwindCSS)
```

---

# ⚙️ Tecnologías utilizadas

## Backend

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* Maven
* MySQL / H2

## Frontend

* React
* Vite
* TailwindCSS
* Axios
* React Router

---

# 📡 API REST

## Users

```
POST   /api/users
GET    /api/users
GET    /api/users/{id}
GET    /api/users/correo/{email}
PUT    /api/users/{id}
DELETE /api/users/{id}
```

## Tasks

```
POST   /api/tasks
GET    /api/tasks
GET    /api/tasks/user/{userId}
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

---

# 💻 Instalación

## 1️⃣ Clonar repositorio

```
git clone https://github.com/tu-usuario/flowtask.git
```

---

# 🔧 Ejecutar Backend

Entrar en la carpeta:

```
cd flowtask-backend
```

Ejecutar aplicación:

```
mvn spring-boot:run
```

El backend se ejecutará en:

```
http://localhost:8080
```

---

# 🎨 Ejecutar Frontend

Entrar en la carpeta:

```
cd flowtask-frontend
```

Instalar dependencias:

```
npm install
```

Ejecutar servidor:

```
npm run dev
```

Frontend disponible en:

```
http://localhost:5173
```

---

# 📂 Estructura del frontend

```
src
│
├── api
│   ├── axiosConfig.js
│   ├── users.js
│   └── tasks.js
│
├── components
│   ├── TaskForm.jsx
│   └── TaskList.jsx
│
├── context
│   └── AuthContext.jsx
│
├── pages
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   └── TasksPage.jsx
│
├── App.jsx
└── main.jsx
```

---

# 🔐 Autenticación

El login se realiza mediante consulta del usuario por **email** y almacenamiento del usuario en **localStorage**.

Este sistema es suficiente para fines educativos o de portfolio.

---

# 🚀 Mejoras futuras

Posibles mejoras del proyecto:

* Autenticación con **JWT**
* Contraseñas encriptadas con **BCrypt**
* Sistema de prioridades
* Filtros de tareas
* Drag & Drop estilo Trello
* Dashboard con estadísticas
* Modo oscuro

---

# 🎯 Objetivo del proyecto

Este proyecto fue desarrollado para practicar:

* Desarrollo **Full Stack**
* Creación de APIs REST con Spring Boot
* Consumo de APIs desde React
* Gestión de estado en frontend
* Diseño de interfaces con TailwindCSS

---

# 👨‍💻 Autor

Miguel Alonso

Proyecto desarrollado como práctica de desarrollo Full Stack.
