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
	<pre><code>npx sequelize-cli model:generate --name users --attributes username:string,password:string,role:string</code></pre>
	- products: id, name, image, price, category_id, created_at
	<pre><code>npx sequelize-cli model:generate --name products --attributes name:string,image:string,price:integer</code></pre>
	- categories: id, category_name, created_at
	<pre><code>npx sequelize-cli model:generate --name categories --attributes category_name:string</code></pre>
	- transactions: id, total_price, payment_status, created_at, expired_at, users_id
	<pre><code>npx sequelize-cli model:generate --name transactions --attributes total_price:integer,expired_at:date,payment_status:string</code></pre>
	- transaction_details: id, product_name, price, quantity, notes, transaction_id
	<pre><code>npx sequelize-cli model:generate --name transaction_details --attributes product_name:string,price:integer,quantity:integer,notes:string</code></pre>

* Food images: https://github.com/igdev116/free-food-menus-api/tree/main/menus

* UI Design: https://www.figma.com/file/5o5wRaoJB05KlBOzQkLAFs/Food-POS-Dark---Tablet-Device-(Community)?node-id=0%3A1&t=5TH8IHR2u8JONIxt-0
