
# Delivery Tracking

A package tracking service for a logistics company, prepared for 
the Carbon Team.


## Table of Content
- Features
- Business Logic and Constraints
- Tech Stack
- Schema
- API Reference
- Deployment
- Running Tests
- Authors
- Road Map



## Features

- Creation of packages for delivery
- Check the status of a package
- Check all packages and their status
- Update the status of a package based on set values and constraints
- Delete a package


## Business Logic and Constraints
The service assumes that a package can be in one of 4 states is

- PICKED_UP
- IN_TRANSIT
- WARE_HOUSE
- DELIVERED

Flow

I assumed the following flow for the tracking of a package

The package is PICKED_UP from the owners store or merchants store,
then the package goes IN_TRANSIT when it is moved to a WARE_HOUSE.

A package can be moved from one WARE_HOUSE to another before being 
finally DELIVERED. A package can go from IN_TRANSIT to WARE_HOUSE and from WARE_HOUSE 
to IN_TRANSIT mutiple times. A package can only go from IN_TRANSIT to DELIVERED.

Once the package is DELIVERED it cannot be moved into any other 
status which fulfills the constraint in the requirements. Once a package
has been removed from the PICKED_UP status it cannot return to the 
PICKED_UP status which also fulfills the constraint in the requirements.


Assumptions :-

- When a package is created the status is automatically set to PICKED_UP
- A package can go from IN_TRANSIT status to WARE_HOUSE status mutiple times
- A package can only go from IN_TRANSIT to DELIVERED Once
- When a package is DELIVERED it cannot go into any other status
- Once a package has changed from PICKED_UP it cannot return back to the PICKED_UP status



## Tech Stack


**Server:** Node JS, Express, Mongoose, Jest, Supertest

**Database:** MongoDB, MongoDB Atlas


## Schema
_id: String

status: String

content: String

pick_up_address: String

destination_address: String

created: Date


## API Reference



#### Create a Package

```http
  POST /api/v1/create_package
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `content` | `string` | **Required**. content of the package |
| `destination_address` | `string` | **Required**. destination of the package |
| `pick_up_address` | `string` | **Required**. pickup address of the package|


####  Get a Package (Check a Package)

```http
  GET /api/v1/get_package/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of package to fetch |


#### Get all Packages

```http
  GET /api/v1/get_all_packages
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |


####  Update a Package (Change a Packages status)

```http
  POST /api/v1/update_package
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id` | `string` | **Required**. id of the package |
| `status` | `string` | **Required**. NEW status of the package |
| `content` | `string` | **Required**. content of the package |
| `destination_address` | `string` | **Required**. destination of the package |
| `pick_up_address` | `string` | **Required**. pickup address of the package|


####  Delete a Package

```http
  DELETE /api/v1/delete_package/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of package to delete |


## Deployment

To deploy this project 

**clone repo:**

```bash
  git clone https://github.com/joshy24/delivery-tracking.git
```

**run:**

```bash
  npm install
```
**run:**

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```
You may need to press letter a on the keyboard

## Authors

- [@joshy24](https://www.github.com/joshy24)


## Roadmap

- Add Authentication and Authorization

- Add more fields to package 

- Add more testing

- Deploy and Setup for scale and a multi-tenant setup for various logistics companies

- Add real-time tracking functionality

- Add other constraints and more business logic

