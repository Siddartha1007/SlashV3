CronJob Class
The CronJob class in the Quarkus application defines a scheduled task (cronJob) that runs every day at 8 am. This scheduled task is responsible for clearing stale data from the database and seeding new data using the Python Scraper API.

Methods
1. delete
Description: This method is annotated with @Transactional and deletes all items from the database using the deleteAll method from the ItemRepository. It returns the count of deleted items.
2. cronJob
Description: This method is annotated with @Scheduled and runs every day at 8 am according to the specified cron expression (cron = "0 8 * * * ?"). The method logs information about the execution of the cron job, clears the database by calling the delete method, and then seeds new data by calling the Python Scraper API using the triggerScraper method from pythonScraperClient. It logs messages indicating the success or failure of the scraper and the completion of the seeding process.
Dependencies
ItemRepository: Injected dependency representing the repository for managing Item entities.
PythonScraperClient: Injected dependency representing the REST client for interacting with the Python Scraper API.
Usage
The CronJob class serves as a scheduled task that automates the process of maintaining data freshness in the application. It provides a way to regularly clear stale data from the database and update it with fresh data from an external source.
