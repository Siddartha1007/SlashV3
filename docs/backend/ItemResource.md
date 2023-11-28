ItemResource Class
The ItemResource class represents a RESTful resource for handling requests related to Item entities. It utilizes Jakarta RESTful Web Services (JAX-RS) annotations for defining the resource endpoints and integrates with the ItemRepository to interact with the underlying data.

Methods
1. getAllItems
HTTP Method: GET
Path: /api/all
Description: Retrieves a list of all Item entities.
2. getByItem
HTTP Method: GET
Path: /api/item/{itemtype}
Parameter: itemtype (Path parameter)
Description: Retrieves a list of Item entities based on the specified item type.
3. getByStore
HTTP Method: GET
Path: /api/{store}
Parameter: store (Path parameter)
Description: Retrieves a list of Item entities based on the specified store.
4. getByItemAndStore
HTTP Method: GET
Path: /api/{itemtype}/{store}
Parameters: itemtype (Path parameter), store (Path parameter)
Description: Retrieves a list of Item entities based on both the specified item type and store.
5. hello
HTTP Method: GET
Path: /api/hello
Produces: MediaType.TEXT_PLAIN
Description: Returns a simple "Hello" message. This method serves as a basic test endpoint.
Usage
The ItemResource class defines RESTful endpoints for accessing and manipulating Item entities. Developers can make HTTP requests to these endpoints to perform operations such as retrieving all items, filtering items by type or store, and testing the service.
