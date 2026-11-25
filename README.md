# Pulso Abierto

Aplicación web desarrollada con React y TypeScript para consultar cotizaciones de criptomonedas mediante la API de CoinGecko, visualizar información detallada y gestionar favoritos persistentes.

## Tecnologías utilizadas

Frontend:
- React
- TypeScript
- Vite

Navegación y estado:
- React Router
- Zustand

Testing:
- Vitest
- Testing Library

Calidad de código:
- ESLint

Servicios externos:
- API CoinGecko

## Requisitos
- Node.js 20.19+ o 22.12+
- npm

## Instalación

Instalar dependencias:

npm install

## Desarrollo

Ejecutar la aplicación en modo desarrollo:

npm run dev

## Pruebas

Ejecutar las pruebas automatizadas:

npm run test

## Build

Generar la versión productiva:

npm run build

## Preview

Comprobar el build generado:

npm run preview

## URL pública

Pendiente de publicación en Vercel.

## Mejora de mantenibilidad

Se identificó una desactualización en el componente StatusMessage respecto de las props utilizadas por HomePage y por los tests automatizados.

Se actualizó el componente para utilizar la interfaz basada en status, errorMessage y resultCount.

Se verificó la ausencia de regresiones mediante pruebas automatizadas y generación del build productivo.

## Verificación final

- Pruebas ejecutadas correctamente.
- Build generado correctamente.
- Preview comprobado.
- Despliegue realizado: pendiente.
- Fecha de verificación: 21/11/2026.