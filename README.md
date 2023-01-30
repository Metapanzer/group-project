# Sandy-Rohmat Group Project


POS App
=======

* Framework: ReactJS
* Library: 
	- Frontend: tailwindcss, chakraui, react router dom, react hot toast, react icon, formik, yup, axios, 
	- Backend: express, mysql2, sequelize, cors, json web token, bcrypt,

* Installation:
	- Frontend: <pre><code>npm i @chakra-ui/icons @chakra-ui/react @emotion/react @emotion/styled axios react-router-dom@6 formik yup react-hot-toast react-icons</code></pre>
	- tailwindcss: <pre><code>npm install -D tailwindcss</code></pre>
		<pre><code>npx tailwindcss init</code></pre>

	- Backend: <pre><code>npm i express body-parser mysql2 cors json-web-token bcrypt</code></pre>
	- ORM: <pre><code>npm install --save-dev sequelize sequelize-cli</code></pre>
	       <pre><code>npx sequelize-cli init</code></pre>

* Pages: 
	- login
	- adminDashboard
	- userManagement
	- salesReport
	- cashier
	- payment

* Components:
	- sidebar
	- card
	- cart

* Database: 
	- users: id, username, password, role, created_at
	- products: id, name, price, category_id, created_at
	- categories: id, category_name, created_at
	- transactions: id, total_price, payment_status, created_at, expired_at, users_id
	- transaction_details: id, products_name, price, quantity, notes, transaction_id

* Food images: https://github.com/igdev116/free-food-menus-api/tree/main/menus

* UI Design: https://www.figma.com/file/5o5wRaoJB05KlBOzQkLAFs/Food-POS-Dark---Tablet-Device-(Community)?node-id=0%3A1&t=5TH8IHR2u8JONIxt-0
