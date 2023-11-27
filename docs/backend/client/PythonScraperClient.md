# PythonScraperClient Interface

The `PythonScraperClient` interface defines a REST client for interacting with a Python scraper service. It uses the Jakarta RESTful Web Services (JAX-RS) annotations and the Eclipse MicroProfile Rest Client to facilitate communication with the specified API.

## Methods

### 1. `triggerScraper()`

This method is annotated with `@GET`, indicating that it is designed to handle HTTP GET requests. The `@Path("/scrape")` annotation specifies the relative path to the "scrape" endpoint. This method does not take any parameters.

#### Signature:
```java
@GET
public Response triggerScraper();
