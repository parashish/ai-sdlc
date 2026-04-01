# Entity Relationship Diagram (ERD) for Car Rental System

## Overview
This document outlines the Entity Relationship Diagram (ERD) for the Car Rental System, which includes the complete database design specifications, including all tables, relationships, and SQL schema definitions.

## ERD Diagram
![Entity Relationship Diagram](link-to-your-diagram)

## Database Design Specifications

### Tables
1. **Customers**  
   - **customer_id** (PK): INT, AUTO_INCREMENT  
   - **first_name**: VARCHAR(50)  
   - **last_name**: VARCHAR(50)  
   - **email**: VARCHAR(100)  
   - **phone_number**: VARCHAR(15)  
   - **address**: VARCHAR(255)  

2. **Vehicles**  
   - **vehicle_id** (PK): INT, AUTO_INCREMENT  
   - **model**: VARCHAR(50)  
   - **make**: VARCHAR(50)  
   - **year**: INT  
   - **license_plate**: VARCHAR(20)  
   - **availability**: BOOLEAN  

3. **Rentals**  
   - **rental_id** (PK): INT, AUTO_INCREMENT  
   - **customer_id** (FK): INT  
   - **vehicle_id** (FK): INT  
   - **rental_date**: DATETIME  
   - **return_date**: DATETIME  
   - **total_cost**: DECIMAL  

4. **Payments**  
   - **payment_id** (PK): INT, AUTO_INCREMENT  
   - **rental_id** (FK): INT  
   - **amount**: DECIMAL  
   - **payment_date**: DATETIME  
   - **payment_method**: VARCHAR(50)  

### Relationships
- **Customers** to **Rentals**: One-to-Many  
  A customer can have multiple rentals, but a rental is associated with only one customer.

- **Vehicles** to **Rentals**: One-to-Many  
  A vehicle can be rented multiple times, but a rental is associated with only one vehicle.

- **Rentals** to **Payments**: One-to-One  
  Each rental has one payment.

## SQL Schema Definitions
```sql
CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(15),
    address VARCHAR(255)
);

CREATE TABLE Vehicles (
    vehicle_id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(50),
    make VARCHAR(50),
    year INT,
    license_plate VARCHAR(20),
    availability BOOLEAN
);

CREATE TABLE Rentals (
    rental_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    vehicle_id INT,
    rental_date DATETIME,
    return_date DATETIME,
    total_cost DECIMAL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
);

CREATE TABLE Payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    rental_id INT,
    amount DECIMAL,
    payment_date DATETIME,
    payment_method VARCHAR(50),
    FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id)
);
```