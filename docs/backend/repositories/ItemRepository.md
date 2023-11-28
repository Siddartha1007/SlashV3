ItemRepository Class
The ItemRepository class serves as a repository for managing instances of the Item entity. It extends the PanacheRepository interface provided by Quarkus, allowing for convenient CRUD (Create, Read, Update, Delete) operations on Item entities.

Methods
1. findById
Signature: public Item findById(String id);
Description: Retrieves an Item entity by its primary key (id).
2. listAll
Signature: public List<Item> listAll();
Description: Retrieves a list of all Item entities stored in the repository.
3. persist
Signature: public Item persist(Item item);
Description: Persists a new Item entity in the repository. If the item already exists, it updates the existing entity.
4. deleteById
Signature: public void deleteById(String id);
Description: Deletes an Item entity from the repository by its primary key (id).
5. count
Signature: public long count();
Description: Returns the total count of Item entities in the repository.
6. find
Signature: public List<Item> find(String query, Object... params);
Description: Executes a query with optional parameters and returns a list of matching Item entities.
7. findOrdered
Signature: public List<Item> findOrdered(String query, String order, Object... params);
Description: Executes a query with optional parameters, orders the results based on the specified order, and returns a list of matching Item entities.
Usage
The ItemRepository class provides a convenient and type-safe way to interact with the database for Item entities. Developers can use the methods mentioned above to perform various operations such as retrieval, persistence, and deletion of Item instances.
