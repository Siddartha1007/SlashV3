StartupBean Class
The StartupBean class is a Quarkus bean responsible for actions to be performed during the application startup. It observes the StartupEvent and, in this case, makes use of the Python Scraper API and the Item Repository to seed data into the application.

Methods
1. onStart
Observes: StartupEvent
Description: This method is called during the application startup. It logs information about the startup process and triggers the Python Scraper API to seed data into the application. If the scraper API call results in a status code of 500, it logs a message indicating the scraper failure. Otherwise, it logs a message indicating that the seeding process is happening.
Dependencies
ItemRepository: Injected dependency representing the repository for managing Item entities.
PythonScraperClient: Injected dependency representing the REST client for interacting with the Python Scraper API.
Usage
The StartupBean class is designed to be executed automatically during the startup of the Quarkus application. It ensures that data is seeded into the application by calling the Python Scraper API. This process is useful for initializing the application with initial data fetched from an external source.
