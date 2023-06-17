# SumanthTest
***
(Q-1)- Mention the working of Internet Website in Terms of Front-end & Back-end Divisions

Ans-
* working of Internet website in terms of Front-end -

	The front-end of a website refers to the part that users interact with directly. It includes the visual and interactive elements that are visible in a web browser. Front-end development focuses on creating a user-friendly and engaging interface. Here are the key components and technologies involved in the front-end division:

a. HTML (Hypertext Markup Language): It provides the structural foundation of a website, defining the layout and organizing the content.

b. CSS (Cascading Style Sheets): CSS is responsible for the visual presentation of the website. It controls the colors, fonts, layouts, and overall styling.

c. JavaScript: JavaScript is a programming language that adds interactivity and dynamic features to the website. It allows developers to create interactive elements, handle user events, and manipulate the content on the page.

d. Front-end frameworks and libraries: There are various frameworks and libraries like React, Angular, or Vue.js that simplify front-end development, provide pre-built components, and enhance the performance and maintainability of the code.

e. User Experience (UX) Design: UX design focuses on creating a seamless and intuitive user experience. It involves designing wireframes, mockups, and prototypes to ensure usability and accessibility.


* working of Internet website in terms of Back-end -

	The back-end of a website refers to the server-side of the application that handles the behind-the-scenes operations. It involves processing data, managing databases, and serving requested information to the front-end. Here are the key components and technologies involved in the back-end division:

a. Server-side programming languages: Common languages used for back-end development include Python, Java, Ruby, PHP, and Node.js. These languages allow developers to build the logic and functionality of the website.

b. Web servers: Web servers, such as Apache or Nginx, receive and process incoming requests from clients, handle data, and send responses back to the client.

c. Databases: Back-end development often involves working with databases to store and retrieve data. Popular database technologies include MySQL, PostgreSQL, MongoDB, or Redis.

d. APIs (Application Programming Interfaces): APIs enable communication between different software systems. They allow the front-end to request specific data or functionality from the back-end, facilitating integration with external services.

e. Security and authentication: Back-end developers implement security measures to protect the website and user data. This includes user authentication, data encryption, and preventing common security vulnerabilities.

These front-end and back-end divisions work together to create a fully functional website. The front-end focuses on delivering an engaging user interface, while the back-end handles data processing, storage, and business logic.



***
(Q-2) - What are tags in HTML? Explain the each category of tag with an Example.

Ans-
	In HTML, tags are used to define the structure and elements of a web page. They are enclosed in angle brackets (< >) and come in pairs: an opening tag and a closing tag. The opening tag indicates the start of an element, while the closing tag indicates its end. The content between the opening and closing tags is the element's content.

a) Heading tags:
	Heading tags define different levels of headings on a web page, ranging from the main heading (h1) to subheadings (h2, h3, etc.)
	eg:-
		<h1>This is the main heading</h1>
		<h2>This is a subheading</h2>

b) Paragraph Tags:
	to write paragraphs
	eg:-
		<p>lorem30</p>

c) Link Tags:
	to link the other web pages or resources.
	eg:-<a href="https://www.Youtube.com">Youtube</a>

d) List Tags:
	HTML offers two types of lists: ordered lists (ol) and unordered lists (ul). List items are defined with the li tags.
	eg:- 
	     Unordered list :
		<ul>
  		  <li>Item 1</li>
		  <li>Item 2</li>
		</ul>


	     Orderd List:
		<ol>
		  <li>Item 1</li>
 		  <li>Item 2</li>
		</ol>

e) Form Tags:
	Form tags (form) are used to create interactive forms on a web page. Various form elements, such as input fields, checkboxes, radio buttons, and submit buttons, are nested within the form tags.
	<form>
  	  <label for="name">Name:</label>
 	  <input type="text" id="name" name="name">
 	  <input type="submit" value="Submit">
	</form>

f) Table Tags:
	these tags are used to create a table



***
(Q-3) - Explain the working Procedure of Virtual DOM.

Ans-
	The Virtual DOM (Document Object Model) is a concept used in web development frameworks like React.js to optimize the rendering process and improve performance.

Here's a step-by-step explanation of how the Virtual DOM works:

1)    Initial Rendering: When you create a component or render a page in React, it builds a Virtual DOM representation of the UI. This Virtual DOM is a lightweight copy of the actual DOM.

2)    Virtual DOM Structure: The Virtual DOM is a tree-like structure that mirrors the structure of the actual DOM. Each element in the Virtual DOM, known as a Virtual DOM node, represents a corresponding element in the actual DOM.

3)    Updates and Reconciliation: When changes occur in your application's state or props, React re-renders the Virtual DOM. It generates a new Virtual DOM tree by comparing the previous Virtual DOM with the updated state or prop changes.

4)    Diffing: React performs a process called "diffing" to identify the differences between the previous and updated Virtual DOM trees. It efficiently compares the two trees and determines the minimum number of operations required to update the actual DOM.

5)    DOM Updates: Once the differences are identified, React updates only the necessary parts of the actual DOM. It applies the required changes, such as adding, removing, or updating specific elements, attributes, or styles.

6)    Reconciliation: React also handles the process of reconciling the changes between the previous and updated Virtual DOM. It efficiently updates and reuses the existing DOM nodes whenever possible, minimizing the need for recreating or reattaching DOM elements.

7)    Performance Benefits: The Virtual DOM helps optimize performance by reducing the number of direct manipulations and updates to the actual DOM. Instead of updating the entire DOM tree, React selectively updates only the necessary parts based on the changes in the Virtual DOM.

8)    Batched Updates: React batches multiple updates together and performs them in a single pass, further improving performance. This approach reduces the number of reflows and repaints in the browser, resulting in a smoother and more efficient rendering process.

By using the Virtual DOM, React minimizes the direct interactions with the actual DOM and optimizes the rendering process. This approach contributes to a more efficient and responsive web application, especially when dealing with complex UI structures and frequent updates.



***			
(Q-4) - Mention some Differences between MySQL and No SQL.

Ans-
	Certainly! Here are some key differences between MySQL and NoSQL databases:

    *Data Model:
        MySQL: MySQL is a relational database management system (RDBMS) that follows a structured data model. It organizes data into tables with predefined schemas, and relationships between tables are defined using primary keys and foreign keys.
        NoSQL: NoSQL databases use various data models, including key-value, document, columnar, and graph. They provide flexibility in storing and retrieving data by allowing dynamic schemas and eliminating the need for predefined table structures.

    *Scalability:
        MySQL: MySQL is primarily designed for scaling vertically, which means adding more resources (CPU, memory) to a single server to handle increased data and traffic.
        NoSQL: NoSQL databases are built to scale horizontally, which involves distributing data across multiple servers. This allows them to handle large amounts of data and high traffic loads by adding more servers to the cluster.

    *Schema:
        MySQL: MySQL enforces a rigid schema, where tables have predefined structures and column types. Any changes to the schema require altering the table structure.
        NoSQL: NoSQL databases are schema-less or have flexible schemas. They allow for dynamic and ad-hoc changes to the data structure without requiring a predefined schema.

    *Query Language:
        MySQL: MySQL uses SQL (Structured Query Language), a standard language for managing relational databases. It supports complex queries, joins, and advanced database operations.
        NoSQL: NoSQL databases may have their own query languages, which are often different from SQL. Some NoSQL databases provide a query language similar to SQL, while others offer APIs for data retrieval and manipulation.

    *Data Integrity and Transactions:
        MySQL: MySQL provides strong data integrity and supports ACID (Atomicity, Consistency, Isolation, Durability) properties. It ensures data consistency and transactional integrity.
        NoSQL: NoSQL databases often sacrifice some of the ACID properties to achieve high scalability and performance. They prioritize availability and partition tolerance (known as the CAP theorem) over strict consistency.
 

    

***
(Q-5) - Explain any one DBMS Technology in your own words.

Ans-
	One DBMS (Database Management System) technology that I can explain in simple terms is MongoDB.

MongoDB is a NoSQL database technology that falls under the category of document databases. It is designed to handle unstructured and semi-structured data, making it flexible and scalable for modern application development.

One of the key features of MongoDB is its ability to scale horizontally, which means distributing data across multiple servers to handle large amounts of data and high traffic loads. It achieves this through a technique called sharding, where data is divided into smaller subsets called shards and distributed across different servers. This enables MongoDB to handle massive amounts of data and provide high availability and performance.

Overall, MongoDB is a popular choice for developers working on modern applications that require flexibility, scalability, and fast development cycles. Its document-oriented approach, horizontal scalability, and rich querying capabilities make it suitable for a wide range of use cases, such as content management systems, real-time analytics, social networks, and mobile applications.
