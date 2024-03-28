# NC A&T Hackathon 2024
Welcome students of the 2024 NC A&T Hackathon. This repository has been setup as an optional kickstarter for you to leverage if you wish. This repository is considered optional, however, it does include popular frameworks such as AngularJS, PrimeNG and Express. Using this starter template ideally would get you well underway with the Hackathon so you can focus on learning and implementing Views, Services and other foundational elements for a frontend web application.

# Table of Contents
 - [Problem Statement](#item-one)
 - [Environment Setup](#item-two)
 - [Quick Start Guide](#item-three)
 - [Documentation](#item-four)

<a id="item-one"></a>

# Problem Statement
**Greetings, esteemed witches, wizards and magical beings!**

In an era where magic intertwines with the digital realm, the venerable Hogwarts Library of Spells, Potions, and Scrolls seeks to embark on a transformative journey. Our ancient library, a treasure trove of arcane knowledge and mystical artifacts, is ready to leap into the future. We invite you to partake in an enchanting challenge: to weave your magic and tech prowess to modernize how our magical community accesses and reserves our vast collection.

### The Challenge
Envision a world where the flick of a wand or a simple incantation enables you to reserve a spell, potion, or scroll from the comfort of your common room.

Your task is to create a spellbinding digital platform that allows our students and faculty to seamlessly interact with the library's collection. This platform must not only captivate the user with its magical user experience but also be robust, secure, and efficient, leveraging a set of APIs that interact with an enchanted database to conjure information, perform searches, and secure reservations.

### Key Objectives
* **Magical User Experience**: Design an interface that reflects the wonder of Hogwarts, intuitive enough for even those who are more comfortable with quills than keyboards. It should capture the essence of our magical world, ensuring that users can navigate spell books, potion recipes, and ancient scrolls with ease.

* **Spellbinding APIs**: Develop a suite of APIs that serve as the hidden passageways connecting the front-end to the mystical database. These APIs should handle various tasks, including searching for artifacts, checking availability, reserving items, and even suggesting related magical materials.

* **Enchanted Database**: Craft a database that not only stores information but is also imbued with magic to organize, retrieve, and secure the library's sacred knowledge efficiently.

While it is not expected that you complete an end to end, magical solution that works you can pick one or two key objectives that resonate with you as a witch/wizard of technology. Any team that completes all three would be like winning the Triwizard Cup.

Your solutions will be judged on creativity, technical innovation, user experience, and how well they capture the essence of the magical world of Hogwarts.

<a id="item-two"></a>

# Environment Setup
### Downloads & Installations
In order to successfully launch these applications, you'll need to insure the following apps are installed:
* [NodeJS](https://nodejs.org/en/download/current) - NodeJS is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
* [Visual Studio Code](https://code.visualstudio.com/download) - Visual Studio Code is a free, open-source, cross-platform Code editor that allows you to develop in many languages (including JavaScript/NodeJS/Angular/etc).
* [Git](https://git-scm.com/downloads) - Git is a free, open-source, cross-platform source code management (SCM). Git is used to version control your source code.

### Project Setup
If you already have general experience with Git, NodeJS, Visual Studio Code, etc, you can skip this section and see the TLDR:Project Setup section

1. Ensure you've downloaded NodeJS, Visual Studio Code (VSCode) and Git
2. Create a new folder to hold your repositories, you can create this folder anywhere you'd like. For example: ```C:\Hackathon\Source\repos```
3. Now open a command prompt, or git bash and navigate to the folder you just created ```cd C:\Hackathon\Source\repos```
4. Now you need to clone the repository using the following command ```git clone https://github.com/NCATHackathon/magical-library.git```
5. You should now have the following folder created ```C:\Hackathon\Source\repos\magical-library```
6. Using Visual Studio Code, open this folder. On the left side, you should have Explorer window that shows /client, /server and a few other files
7. We need a Terminal in Visual Studio Code to continue. Click Terminal, New Terminal at the top of VS Code Menu Bar
8. Now that we have a terminal Open in VS Code, we need to perform an install of the application by running the command ```npm install```
9. npm install is referencing a script inside package.json called install. 
10. Assuming you get no errors, you can now run both the client and server application using ```npm start```
11. Once you see `Express server listening on http://localhost:3001` and `√ Compiled successfully.` in the terminal, both applications are up and running
12. You can access the frontend server here: [http://localhost:4200/](http://localhost:4200/)
13. You can access the backend server here: [http://localhost:3001/api/potions](http://localhost:3001/api/potions) (this is a simple GET API response)

### TLDR:Project Setup
1. `git clone https://github.com/NCATHackathon/magical-library.git`
2. `npm install`
3. `npm start` apps running on [localhost:4200 (angular)](http://localhost:4200/) and [localhost:3001 (express)](http://localhost:3001/api/potions)

### Project Structure
/magical-library folder is what we'll call or consider the 'root' folder of our project. The root folder contains the following files/folders:
* /client folder - This holds the front end application which is written in AngularJS/Typescript and using the PrimeNG UI framework
* /server folder - This holds the backend application which is written in JavaScript/Typescript using ExpressJS framework for handling API request/responses
* package.json - This file contains root level scripts to simplify interacting with this project. Each folder (client and server) also have package.json files within them. Generally, package.json files specify what project scripts and dependencies are needed.

### Helpful Scripts
It's important to note that scripts are executed based on the package.json file in the current active directory. So if my terminal is pointing to `PS C:\Hackathon\Source\repos\magical-library\`, when I execute ```npm start``` it will call the script named start inside ```C:\Hackathon\Source\repos\magical-library\package.json```. Likewise, if my terminal is pointing to ```PS C:\Hackathon\Source\repos\magical-library\client```, it will call the script named start inside ```C:\Hackathon\Source\repos\magical-library\client\package.json```

You can technically install and run the applications separately, which may be useful if team members are working on different pieces of the application. If you only want to run the front end application, you can:
```cd C:\Hackathon\Source\repos\magical-library\client``` and then ```npm start```

<a id="item-three"></a>

# Quick Start Guide
### Client application
Angular uses Components to render HTML/CSS to the browser. Inside the /client/src/app/demo/components folder you'll find MANY examples you can follow. Components must be registered in the /client/src/app/app.module.ts file and a route defined in the /client/src/app/app-routing.module.ts

It would be a good idea to Control+Shift+F (Search all files) for 'PotionsComponent'. This will show you all of the files a Component must be defined in and how it is defined. Moreover, it's better to understand how Angular works with Components in general, so it's good to see the Angular docs below.

* `/client/src/app/demo/components/potions/potions-routing.module.ts` - This is the routing file for /potions,  you can define additional routes here such as /potions/latest if you wanted a page that shows the latest potions
* `/client/src/app/demo/components/potions/potions.module.ts` - This file specifies what modules need to be loaded to correctly render this page
* `/client/src/app/demo/components/potions/potions.component.ts` - This is the typescript file that is essentially a controller for the view file (.html). You can define variables, methods, or services here. In this file by default, we load up a service and fetch a list of potions from it. Those potions are then put into an array that is rendered via the .html page
* `/client/src/app/demo/components/potions/potions.component.html` - This file is the html file that is tightly associate with the `potions.component.ts` file. It can reference variables and methods defined by the component. It is also the file that would reference the PrimeNG UI components as needed

### Server application
ExpressJS is a lightweight server-side application. In our project, we simply define two API request and responses to use as examples. You can use this to build out additional APIs.

* `/server/server.ts` - This is the typescript file that runs the server. It will create an express instance, start listening on port 3001 and register two APIs (/api/ping and /api/potions). These APIs just hardcode a response, where ideally you could connect to a database and return results from the database
* `/server/routes/` - This folder you could define routes beyond the `server.ts` file
* `/server/models/` - This folder defines Typescript interfaces that represent models/objects
* `/server/models/potion.ts` - This is an example interface called Potion that defines a few properties

<a id="item-four"></a>

# Documentation for Languages / Frameworks
The /client folder of this repository was cloned from the Sakai / PrimeNG template project. It is based on AngularJS frontend framework leveraging the PrimeNG UI Framework.

You may want to review the following documentation:
* [Javascript](https://devdocs.io/javascript/) - JavaScript is a versatile, high-level programming language that is one of the core technologies of the web, alongside HTML and CSS. Initially designed to make web pages interactive, JavaScript has evolved to become a powerful language used on both the client-side and server-side of web development. It enables developers to create dynamic content, control multimedia, animate images, and much more. With the advent of Node.js, JavaScript expanded its reach to server-side programming, allowing for the development of fast and scalable network applications. JavaScript's ecosystem is vast, with numerous libraries and frameworks available to streamline and enhance web development.

* [Typescript](https://www.typescriptlang.org/docs/) - TypeScript is a superset of JavaScript developed by Microsoft that adds static typing and object-oriented features to the language. It is designed to help developers catch errors early through a type system and to make JavaScript development more efficient and robust. TypeScript code is transpiled to plain JavaScript, making it compatible with any browser, host, or operating system. This language extends JavaScript syntax, so any valid JavaScript code is also valid TypeScript code. TypeScript is widely adopted for large-scale applications due to its powerful tools for maintaining and refactoring code, leading to more readable, maintainable, and error-free codebases.

* [AngularJS](https://angular.io/docs) - Angular is a popular open-source web application framework, primarily developed and maintained by Google. It's designed to help developers build dynamic, single-page web applications (SPAs) using a component-based architecture. Angular provides a robust set of tools and features, including two-way data binding, dependency injection, directives, and a comprehensive suite of testing utilities, all aimed at enabling developers to create efficient, scalable, and maintainable front-end web applications. It's written in TypeScript, offering advantages like static typing, classes, and interfaces, which can enhance code quality and readability.

* [PrimeNG](https://primeng.org/installation) - PrimeNG is a collection of rich UI components for Angular applications. It's a comprehensive suite of open-source components that are designed to work seamlessly with Angular, providing developers with a vast array of widgets and UI elements to enhance their web applications. These components range from basic elements like buttons and inputs to more complex constructs like data tables, charts, and advanced menus. PrimeNG is known for its theme support, allowing developers to easily customize the look and feel of their applications. It's a popular choice among Angular developers for its ease of use, high level of customization, and professional quality of components.

* [ExpressJS](https://expressjs.com/) - Express.js, often referred to as Express, is a minimalist and flexible Node.js web application framework that provides a robust set of features for building single-page, multi-page, and hybrid web applications. It's known for its performance and efficiency, making it a popular choice for backend development in the JavaScript ecosystem. Express simplifies the server creation process by providing easy-to-use tools for routing, middleware integration, and handling HTTP requests and responses. Its unopinionated nature allows developers to structure their applications as they see fit, making Express highly versatile and suitable for a wide range of projects, from simple web apps to complex RESTful APIs.