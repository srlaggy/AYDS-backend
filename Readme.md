
# Dependencias a instalar:
- **Paso 1:** nodemon: `npm i -D nodemon`
- **Paso 2:** express: `npm i express sequelize pg pg-hstore`
- **Paso 3:** sequelize: `npm i nodemon sequelize-cli -D`
- **Paso 4:** bcrypt: `npm i bcrypt`
- **Paso 5:** jwt: `npm i jsonwebtoken dotenv`

# Para crear y migrar la base de datos con los datos:
- **paso 1:** `npx sequelize db:create`
- **paso 2:** `npx sequelize db:migrate`
- **paso 3:** `npx sequelize db:seed:all`

# Ingreso:
- No olvidar cambiar contraseña en `config.json`
- La contraseña para todos los usuarios es `123`.