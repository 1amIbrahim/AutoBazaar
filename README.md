AutoBazaar
AutoBazaar is an online platform designed to connect users with verified car dealerships, allowing users to browse, search, and purchase vehicles. The system manages vehicle listings, user activity, and dealership verification processes, providing a seamless and secure experience for both buyers and sellers.

Table of Contents
Features
Database Schema

Features:
Dealership Management: Dealerships can create accounts, add vehicles for sale, and manage their listings.
User Activity Tracking: User searches and vehicle views are logged to enhance the buying experience.
Verification System: Dealerships must be verified before listing vehicles, ensuring trustworthiness.
Vehicle Categorization: Vehicles are organized by categories, making it easier for users to search based on their preferences.
Search and Buy Vehicles: Users can browse vehicles, search by make, model, or category, and interact with listings.

Database Schema
Tables:
  Dealership:
    Dealer_id (Auto Increment, Primary Key)
    username
    password
  Verification:
    Verification_id (Auto Increment, Primary Key)
    Dealer_id (Foreign Key)
  Vehicle:
    vehicle_id (Auto Increment, Primary Key)
    Dealer_id (Foreign Key)
    price, make, model, year, mileage, view_count, category_name
  Users:
    user_id (Auto Increment, Primary Key)
    username
    password
  UserActivity:
    activity_id (Auto Increment, Primary Key)
    user_id (Foreign Key)
    vehicle_id (Foreign Key)
    search_term
  Categories:
    category_id (Auto Increment, Primary Key)
    category_name
    vehicle_id (Foreign Key)

Usage
  For Users: Sign up, browse vehicles by category, search for specific models, and make purchases or inquiries.
  For Dealerships: Register, submit vehicle listings, and manage your inventory.
  Admin: Manage users, dealership verification, and vehicle categorization.
  
