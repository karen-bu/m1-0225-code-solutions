# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  A client is a device requesting service from the server. Specifically for web development, it is the device(s) that are looking to display and run the webpage a dev has built.

- What is a server?
  A server is a device providing service to one or many clients. Specifically for web development, a server 'serves' webpages by providing all the visuals, code, data, etc. for the website to run correctly.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  A browser issues the `GET` HTTP method to a web server when you visit a URL.

- What three things are on the start-line of an HTTP **request** message?
  Three things on the start-line of an HTTP request message are the request `method` (i.e. `GET`, `POST`, etc.), the `request target` (an absolute or relative URL), and the `protocol` (HTTP version).

- What three things are on the start-line of an HTTP **response** message?
  Three things on the start-line of an HTTP response message are the `protocol` (HTTP version), `status code` indicating if the request succeeded or failed, and the `status text` which is a short description of the status code.

- What are HTTP headers?
  HTTP headers are metadata sent with a request after the start lines and before the body. They are optional.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  You could use the `MDN Web Docs` or other external documentation for more information about an HTTP header.

- Is a body required for a valid HTTP request or response message?
  A body is not required for a valid HTTP request or response. In fact, only certain methods (`PATCH`, `POST`, and `PUT`) have a body.
