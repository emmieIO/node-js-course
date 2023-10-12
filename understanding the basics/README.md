# How the web works

1. **User Sends a Request:** When a user wants to access a web page, they enter a URL (Uniform Resource Locator) or click on a link in their web browser. This action generates an HTTP request.

2. **Domain Lookup:** The browser checks its local cache to see if it already knows the IP address associated with the domain in the URL. If it doesn't find it in the cache, it needs to perform a DNS (Domain Name System) lookup. The DNS system translates the human-readable domain name (e.g., <www.example.com>) into an IP address (e.g., 192.168.1.1) that the server can understand.

3. **Establishing a Connection:** Once the browser has the IP address, it initiates a TCP (Transmission Control Protocol) connection to the server using that IP address and a specific port number (usually port 80 for HTTP or port 443 for HTTPS).

4. **Requesting Resources:** After establishing a connection, the browser sends an HTTP request to the server. This request includes details about what the browser is looking for, such as the specific resource (e.g., a web page) and additional information like the user agent and any cookies.

5. **Server Processing:** The server receives the request and processes it. This may involve accessing a database, running server-side code, or retrieving various resources required to build the web page. These resources can include HTML files, CSS stylesheets, JavaScript files, images, and more.

6. **Response:** Once the server has processed the request and collected all the necessary resources, it creates an HTTP response. This response typically includes a status code (e.g., 200 OK for a successful request), headers with additional information, and the requested resources.

7. **Transmission to the Browser:** The server sends this HTTP response back to the user's browser over the established TCP connection.

8. **Rendering the Web Page:** The browser receives the response and begins to render the web page. It parses HTML to create the document structure, processes CSS to style the page, and executes JavaScript for dynamic behavior.

9. **Displaying the Web Page:** Finally, the browser displays the rendered web page on the user's screen.