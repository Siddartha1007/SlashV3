<p align="center">Welcome to Slash: Your Ultimate Shopping Companion!</p> 
<p align="center"><img width="500" src="https://github.com/Siddartha1007/SlashV3/blob/main/assets/slash.png"></p> 

Link to the youtube video - [https://www.youtube.com/watch?v=n-MlC37PRtY&t=18s](https://www.youtube.com/watch?v=n-MlC37PRtY&t=18s)

![GitHub](https://img.shields.io/badge/License-MIT-green.svg)
![github workflow](https://github.com/SE-Fall2023-Group-41/SlashV2/actions/workflows/python-app.yml/badge.svg)
[![DOI](https://zenodo.org/badge/431326985.svg)](https://zenodo.org/badge/latestdoi/431326985)
![Github](https://img.shields.io/badge/language-python-red.svg)
![Github](https://img.shields.io/badge/language-node-red.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/Siddartha1007/SlashV3)
![Github closes issues](https://img.shields.io/github/issues-closed-raw/Siddartha1007/SlashV3)
![Github pull requests](https://img.shields.io/github/issues-pr/SE-Fall2023-Group-41/SlashV2)
![Github closed pull requests](https://img.shields.io/github/issues-pr-closed/SE-Fall2023-Group-41/SlashV2)
[![Node.js CI](https://github.com/Siddartha1007/SlashV3/actions/workflows/node.js.yml/badge.svg)](https://github.com/Siddartha1007/SlashV3/actions/workflows/node.js.yml)
[![Python Application](https://github.com/Siddartha1007/SlashV3/actions/workflows/python-app.yml/badge.svg)](https://github.com/Siddartha1007/SlashV3/actions/workflows/python-app.yml)
[![codecov](https://codecov.io/gh/Siddartha1007/SlashV3/graph/badge.svg?token=EF0I1HSNYS)](https://app.codecov.io/gh/Siddartha1007/SlashV3)

Do you love shopping? 
Are you in search of some good deals while shopping online?! 

Slash is here to help you look for the best deals!
Discover the latest deals and discounts from your favorite e-commerce websites with Slash.

<br>We've simplified the way you shop online, making it faster, easier, and more powerful than ever before.<br>
🌟 Key Features<br>
**Save Time:** Slash helps you find the best deals on your desired items across multiple popular e-commerce websites.<br>
**User-Friendly APIs:** We offer simple and intuitive public APIs, allowing you to filter, sort, and search through search results effortlessly.<br>
**Customizable Output:** Slash provides JSON responses that you can easily customize to match your specific needs and requirements.

🛒 Supported Websites<br>
Slash currently supports the following major e-commerce websites:<br>
[Walmart](https://www.walmart.com/),[BestBuy](https://www.bestbuy.com/),
[Costco](https://www.costco.com/)  <br>




## :rocket: Improvements over the Previous project

We have added a lot of new features to slash in this phase 

**1. Amplify Integration for Authentication:** AWS Amplify is a development platform from AWS for building scalable web applications, offering backend services like authentication, data storage, and APIs. We implemented Amazon Amplify in the frontend to enhance user authentication. This integration provides a robust and secure mechanism for user sign-in, sign-up, and logout processes.

**2. Wishlist Feature with DynamoDB:** Implemented a new 'Wishlist' feature, allowing users to add their desired items to a personalized wishlist page with a simple click. This feature uses Amazon DynamoDB for efficient data storage and retrieval. DynamoDB's high speed and scalability make the wishlist feature fast and responsive, enhancing the overall user experience. You can either add an item to wishlist or remove it from them. Furthermore, each time a user adds or removes an item from their wishlist, a popup message appears. This popup provides instant feedback on their action, confirming the successful addition or removal of the item.
  
**3. Navigation Bar Addition:** Added a new navigation bar to the application, improving site navigation and user accessibility. This feature allows users to easily navigate through different sections of the application, enhancing the overall user experience. The navigation bar includes search access which on clicking navigates to the search page, wishlist access which on clicking navigates you to the wishlist page and a logout option ensuring users can securely exit their accounts with ease. This addition prioritizes user security and convenience, allowing for a quick and straightforward logout process.

**4. Export to CSV Functionality:** Implemented a feature that enables users to export data tables into CSV files. This functionality is crucial for allowing users to download and save data for offline analysis or reporting purposes. Especially beneficial for users who prefer working with data in spreadsheet applications or require data for record-keeping. Also, since our app shows the best deals from many online shopping sites, this CSV export helps users compare these deals easily. They can download this information and see which site offers the best price for what they're searching for, all in one place. This makes shopping smarter and simpler for our users.

**5. Enhanced Search Filters:** Upgraded the search feature with enhanced filters. This improvement allows users to refine their searches more precisely, using multiple criteria such as product name, category, website, and price. The enhanced filtering feature makes the search process more efficient, helping users find what they're looking for quickly and easily.

**6. Column-Specific Filtering with Clear Filter button:** Implemented filter options for each data column, including product name, category, website, and price. Additionally, a 'Clear Filter' button has been added, allowing users to easily reset all applied filters. This feature provides users with granular control over the data they view, making the filtering process more flexible and user-friendly.

**7. Row Selection and Deselection with Popup Messages:** We added a new feature where users can choose or unchoose single rows in lists of data. When they do this, a message pops up to tell them what they've done. This makes the app more fun to use because it reacts to what the user does. The messages that pop up are there to make sure users know exactly what they're changing or choosing. This helps them focus on the information they're most interested in.

**8. Enhanced Code Coverage:** Significantly improved the code coverage of the application, increasing it from 36% to 96%.

---

Get ready to supercharge your shopping experience with Slash!
🚀 Getting Started
Slash is open-source and ready for you to explore. Here's how to begin:

<p align="center">
  <a href="#movie_camera-check out-our-video">Checkout our video</a>
  ::
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#page_facing_up-why">Why</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#email-support">Support</a>

</p>

---

## :movie_camera: Checkout our video


Youtube Video - [https://www.youtube.com/watch?v=n-MlC37PRtY&t=18s](https://www.youtube.com/watch?v=n-MlC37PRtY&t=18s)

**Animated video**


https://github.com/Siddartha1007/SlashV3/assets/68286340/488a33fb-7268-484d-b6e4-b6a2ec5dc023


---

## :rocket: Installation

1. Clone the Github repository to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then `cd` into the local repository.

```
git clone https://github.com/SE-Fall2023-Group-41/SlashV2.git
cd SlashV2
```

2. This project uses Python 3 for the scraper, [Quarkus](https://quarkus.io/) for the backend, and [React](https://react.dev/) framework for the frontend. You will also need to install [Docker](https://www.docker.com/get-started/).

For the Scraper to work we ensure that [Python](https://www.python.org/downloads/) and [Pip](https://pip.pypa.io/en/stable/installation/) are preinstalled. All the Python requirements of the project are listed in the `requirements.txt` file. Use pip to install all of those.

```
pip3 install -r requirements.txt
```
3. First we run the scraper. For this we cd into the src folder. Once in the src folder, use the python command to run the main.py file.

```
cd src
For Mac
python3 main.py
For Windows
python main.py
```
4. For the backend setup ensure that JDK 17  is  preinstalled, you will have to cd into the backend. Once in the backend folder, use the command mvnw.cmd
```
cd backend
For Mac
./mvnw compile quarkus:dev
For Windows
mvnw.cmd quarkus : dev
```
5. For the frontend setup to ensure that Node 20 is  preinstalled, you will have to cd into the frontend. Once in the frontend folder, use the command npm start



```
cd frontend
For Mac
npm start 
For Windows
npm start
```
## Alternatively Running with Docker
To run the application using Docker, follow these steps:

1. Navigate to the `backend` directory:
   
   ```
   cd backend
   ```
2. Build the backend application using Maven Wrapper:
   ```
   ./mvnw package

   ```
3. Return to the project root:
   ```
   cd ..
   ```
4. Start the Docker containers:
   ```
   docker-compose up
   ```
   
These commands above will run and build 4 containers locally.
<br>

## :computer: Technology Used

- FastAPI : https://fastapi.tiangolo.com
- Docker : https://www.docker.com
- Quarkus: https://quarkus.io/
- Openshifts:  https://docs.openshift.com/
- Amazon AWS: https://docs.aws.amazon.com/amplify/



## :file_cabinet: Sort and Search Snapshots

<p align="center">Shows the search function for query laptops</p> 


https://github.com/SE-Fall2023-Group-41/SlashV2/assets/62643830/3104485a-2e9b-4259-826d-f163e25f6d33





<p align="center">Opens a link of the laptop we are interested to buy</p> 

https://github.com/SE-Fall2023-Group-41/SlashV2/assets/62643830/b567edbc-337e-47e4-90a4-57e603b0774b



<p align="center">Sorts by website</p> 

https://github.com/SE-Fall2023-Group-41/SlashV2/assets/62643830/6db1838e-8ef3-4e27-92e6-e870b8774e91




## :bulb: Use Case

- **_Students_**: Students coming to university are generally on a budget and time constraint and generally spend hours wasting time to search for products on Websites. Slash is the perfect tool for these students that slashes all the unnecessary details on a website and helps them get prices for a product across multiple websites.Make the most of this tool in the upcoming Black Friday Sale.
- **_Data Analysts_**: Finding data for any project is one of the most tedious job for a data analyst, and the datasets found might not be the most recent one. Using slash, they can create their own dataset in real time and format it as per their needs so that they can focus on what is actually inportant.

## :page_facing_up: Why

- In a market where we are spoilt for choices, we often look for the best deals.
- The ubiquity of internet access has leveled the retail playing field, making it easy for individuals and businesses to sell products without geographic limitation. In 2020, U.S. e-commerce sales, receiving a boost due to the COVID-19 pandemic, grew 44% and represented more than 21% of total retail sales, according to e-commerce information source Internet Retailer.
- The growth of e-commerce has not only changed the way customers shop, but also their expectations of how brands approach customer service, personalize communications, and provide customers choices.
- E-commerce market has prompted cutthroat competition amongst dealers, which is discernable through the price patterns for products of major market players. Price cuts are somewhat of a norm now and getting the best deal for your money can sometimes be a hassle (even while online shopping).
- This is what Slash aims to reduce by giving you an easy-to-use, all-in-one-place solution for finding the best deals for your products that major market dealers have to offer!
- Slash in its current form is for students who wish to get the best deals out of every e-commerce site and can be used by anyone who is willing to develop an application that consumes these web APIs.
- Future scope includes anything from a web application with a frontend or any Android or IOS application that utilizes these Web APIs at their backend. Anyone can build their own custom application on top of these web APIs.

## :golf: Future Roadmap
- Chrome Extension using the functionalities of Slash API
- An iOS or Android application.
- Add a login feature to store user history to provide features like bookmarking, price drop alerts, and many more.
- Use the stored history to provide personalized product recommendations and deal alerts based on user preferences.



## Team Members

- [Sree Tulasi](https://github.com/21Tulasi)
- [Siddartha Goruganti](https://github.com/Siddartha1007)
- [Yogitha Seela](https://github.com/Yogitha193)
- [Deepika Patibandla](https://github.com/Deepika-2306)

## :email: Support

In case of any extended support or quieries please reach us at seproject46@gmail.com
Let Slash be your shopping sidekick and embark on a savings adventure like never before!
