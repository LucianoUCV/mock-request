# Mock Request

During my stay in Sibiu, for $${\color{yellow}Continental \space Summer \space Practice}$$, I have not only learned about the lifecycle of a project and what's happening in a real life plant, but 
I also learned how to mock simple HTTP Requests ( GET, POST, PUT ) using Mockoon and some JavaScript code ( Fetch API for the requests ).

### The final product

![Home](https://github.com/user-attachments/assets/70fc867c-a614-442d-9339-d0d8d4f4d0d3)

Simple, but pretty interface for the user.

![ButtonAnimation](https://github.com/user-attachments/assets/1679e42e-4557-44b8-baf0-b9be31e66254)

Below I will leave screenshots containing the possible cases for every input and request:

* GET method working

![GetWorking](https://github.com/user-attachments/assets/f21393ea-151e-469c-8a2b-9c083ad209e3)

* Error fetching data

![ErrorFetchingData](https://github.com/user-attachments/assets/8d86df50-99bb-453e-bfcf-59ad85377341)

* Select method

![SelectMethod](https://github.com/user-attachments/assets/f00d1346-7691-4df2-9147-4b59edfd1b9d)

* PUT method working

![PutWorking](https://github.com/user-attachments/assets/c79366ae-52e0-4bcd-8293-f66a9d657014)

* POST method working

![PostWorking](https://github.com/user-attachments/assets/e4dc7a93-3148-419e-a8d4-f4911d197bad)

* Error 404 not found

![Error404](https://github.com/user-attachments/assets/5167adf9-e177-4ba8-9d40-719973852439)

* Empty resource ( no data in payload but {} )

![EmptyResource](https://github.com/user-attachments/assets/834b485b-809e-4c78-9aac-117e11e72d4c)

* Empty Payload ( nothing in payload )

![EmptyPayload](https://github.com/user-attachments/assets/43772279-fc35-46bb-965d-229e5bfcb4fc)

* Invalid JSON

![InvalidJSON](https://github.com/user-attachments/assets/770a9afa-ee71-438a-974f-1933c8e1eb0d)

And, lastly, some snippets from the Mockoon app: 

* Mockoon Environment and Routes

![MoockoonEnvironmentAndRoutes](https://github.com/user-attachments/assets/6728a132-a1f4-40a5-9ac4-47b1c2a38205)

* Mockoon Logs

![MockoonLogs](https://github.com/user-attachments/assets/f2edc832-f8e2-46ed-a094-e19aa6bec386)

Why would someone make HTTP requests to a fake server or API you ask? Well, mostly for testing and debugging. This is not an app for the average user, it's something develepers
would do before requesting real data from real servers.

