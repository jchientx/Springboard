// What is HTTP?
// Hypertext Transfer Protocol (standard web) (How browsers and servers communicate)

// What is a URL?
// A Uniform Resource Locator is a web address that reference to a web resource

// What is DNS?
// Domain Name System turns the URL into an IP address so browsers can load Internet resources.

// What is a query string?
// It provides extra information like search terms or information from forms by passing key-value pairs into the URL

// What are two HTTP verbs and how are they different?
// Get: requests data from the server without side effect (don't change server data) vs. POST: requests send data with side effect (change server data)

// What is an HTTP request?
// When you point your browser to the server, you're requesting the information from the server by a GET request with an URL

// What is an HTTP response?
// The server responds the request with the exact HTML text for that page

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
// Get header: Host, Date, Language, Cookie; POST header: Content Type, Date/Time, Cookie, Server

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// The browser turns the URL into an IP address by DNS. Next, the browser makes a request including headers to the server.
// The server responds the request with a status code and the HTML including the resources like CSS and Javascript.
// Each HTTP request is made individually by the browser and then receives the response from the server.

// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
// curl https://icanhazdadjoke.com/search?term=pirate

// Use dig to find what the IP address is for icanhazdadjoke.com
// 172.30.128.1
