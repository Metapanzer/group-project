# group-project
Sandy-Rohmat Group Project


POS App
=======

* Framework: ReactJS
* Library: 
	- Frontend: tailwindcss, chakraui, react router dom, react hot toast, react icon, formik, yup, axios, 
	- Backend: express, mysql2, sequelize, cors, jwt, bcrypt,

* Instalation:
	- Frontend: npm i @chakra-ui/icons @chakra-ui/react @emotion/react @emotion/styled axios react-router-dom@6 formik yup react-hot-toast react-icons
	- tailwindcss: 1. npm install -D tailwindcss
		       2. npx tailwindcss init

	- Backend: npm i express body-parser cors json-web-token bcrypt
	- ORM: 1. npm install --save-dev sequelize sequelize-cli mysql2
	       2. npx sequelize-cli init


* Pages: 
	- Login
	- adminDashboard
	- salesReport
	- cashier
	- payment

* Database: 
	- users: id, username, password, role, created_at
	- products: id, name, price, category_id, created_at
	- categories: id, category_name, created_at
	- transactions: id, total_price, payment_status, created_at, expired_at, users_id, transaction_details_id
	- transaction_details: id, products_name, price, quantity, notes 

* UI Design: https://www.figma.com/file/5o5wRaoJB05KlBOzQkLAFs/Food-POS-Dark---Tablet-Device-(Community)?node-id=0%3A1&t=5TH8IHR2u8JONIxt-0
