# Redux Study Project

Este repositorio contiene un proyecto de estudio práctico sobre Redux, una biblioteca de gestión de estado para aplicaciones JavaScript, y su integración en React. También exploramos el uso de Redux Toolkit (RTK) para simplificar la configuración de Redux y el manejo del estado, así como el uso de thunks para tareas asincrónicas.

## Tabla de Contenidos

- [Introducción a Redux](#introducción-a-redux)
- [Configuración de Redux en una Aplicación React](#configuración-de-redux-en-una-aplicación-react)
- [Redux Toolkit (RTK)](#redux-toolkit-rtk)
- [Thunks para Tareas Asincrónicas](#thunks-para-tareas-asincrónicas)

## Introducción a Redux

Redux es una biblioteca de gestión de estado ampliamente utilizada en aplicaciones JavaScript, especialmente en aplicaciones React. Proporciona un almacén centralizado (store) para el estado de la aplicación y reglas claras sobre cómo ese estado puede ser modificado. Redux se basa en tres principios fundamentales:

1. **Estado Inmutable:** El estado de la aplicación es inmutable. En lugar de modificar el estado directamente, se crea una copia actualizada del estado.

2. **Acciones:** Las acciones son objetos que describen eventos en la aplicación. Estas acciones son enviadas al almacén de Redux para actualizar el estado.

3. **Reducers:** Los reducers son funciones puras que especifican cómo cambia el estado en respuesta a una acción. Reducen el estado anterior y la acción a un nuevo estado.

## Configuración de Redux en una Aplicación React

En este proyecto, aprenderás cómo configurar Redux en una aplicación React. Cubrimos los pasos básicos para integrar Redux en tu proyecto y crear reducers, acciones y el almacén Redux.

## Redux Toolkit (RTK)

Redux Toolkit (RTK) es una biblioteca que simplifica en gran medida la configuración y el uso de Redux. Proporciona funciones y utilidades que permiten reducir la cantidad de código necesario para definir acciones, reducers y configurar el almacén Redux.

## Thunks para Tareas Asincrónicas

Redux Thunk es una biblioteca que permite manejar tareas asincrónicas en Redux. Aprenderás cómo usar thunks para manejar solicitudes de red u otras tareas asincrónicas en tu aplicación.
