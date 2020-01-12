# DESCRIPTION

# FRONTEND

I've used single-spa by Canopy Tax. I've only used reactjs (navbar, news, footer) and vanillajs (for the challenge 1 and challenge 4).

* This allows the developers to use the framework / ui library that is most familiar to them. This will reduce development time and increase productivity.

* There are cases wherein a language quickly becomes outdated. (ex. AngularJS to Angular) this is to avoid that case by making it easy to update the code by treating components as plugins.

* This will challenge the developers willing to study more than one language which in some cases makes the work more exciting and engaging.

* There are advantages and disadvantages that comes with every framework / ui library and just using one framework / ui library makes the application very limited.

* This will allow fast deployment time. In case the developer uploaded a module that has errors in it (which in some cases testing and code reviews gets skipped due to human error) only that module will be down as opposed to a monolith architecture where the whole application will be down.

* Applications that are split into small pieces are easier to containerize.

# BACKEND

I've used microservice architecture.

* This allows the developers to use different backends that is most familiar to them. This will reduce development time and increase productivity.

* Using an api-gateway makes for one entry point that will connect the different services together.

* Implementing microservice architecture makes the application function as more like a plugin. In the case that newsapi.org goes down another service can be readied to prevent downtime. 

* Applications that are split into small pieces are easier to containerize.

# CORE

This is just a package to install concurrently that will allow both server and client to run on one terminal

# HOW TO RUN

Execute in terminal the command "make run". Only runs in Mac and Ubuntu for now.