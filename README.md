# Suite Matematica y Algoritmica (Proyecto Integrador)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)

Evaluacion practica de logica computacional, algebra y precision numerica.
Proyecto integrador para trabajo en casa con control de versiones en GitHub y despliegue en GitHub Pages.

## 1. Modulos del Proyecto
- Modulo A: Retos Logicos BairesDev (probabilidad de dados, torneos, divisores O(1), logistica, edades y proporciones).
- Modulo B: Motor Cuadratico & Graficador Canvas (ax^2 + bx + c = 0, raices, vertice y grafica).
- Modulo C: Detector de Secuencias (patrones aritmeticos, geometricos y de segundo orden).
- Modulo D: Suite de Autoevaluacion (10 pruebas unitarias en el navegador).

## 2. Arquitectura y Estructura de Archivos
La aplicacion sigue una arquitectura modular en JavaScript ES6+ sin frameworks pesados, separando la presentacion, la coordinacion de eventos y la logica matematica:
- index.html: Interfaz con pestanas.
- css/style.css: Estilos responsivos.
- js/app.js: Coordinador principal de eventos y canvas.
- js/modules/bairesdev.js: Retos logicos.
- js/modules/cuadratica.js: Solucionador cuadratico estable.
- js/modules/secuencias.js: Detector de secuencias.
- js/modules/test-suite.js: Suite de 10 pruebas unitarias.

## 3. Ejecucion Local
Ejecutar un servidor local HTTP (o usar Live Server en VS Code):
```bash
python3 -m http.server 8000