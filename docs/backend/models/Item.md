Item Entity Class
The Item class represents an entity for various items like laptops, desktops, phones, etc. It utilizes Jakarta Persistence (JPA) for entity mapping and is designed to work with the repository pattern, Panache, and Hibernate ORM.

Fields
1. name
Type: String
Description: Represents the name of the item.
2. itemType
Type: String
Description: Represents the type or category of the item.
3. itemURl (Primary Key)
Type: String
Description: Represents the URL identifier for the item. This field is annotated with @Id to indicate that it is the primary key.
4. itemImageURl
Type: String
Description: Represents the URL of the item's image.
5. store
Type: String
Description: Represents the store or source from which the item is available.
6. price
Type: String
Description: Represents the original price of the item.
7. discountPrice
Type: String
Description: Represents the discounted price of the item.
Usage
The Item class is intended to be used in conjunction with the repository pattern, Panache, and Hibernate ORM.
