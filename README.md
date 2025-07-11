Git Happens Capstone Project - An Enterprise Directory Solution

DOCUMENTATION:
Backend Routes:

(1) POST /api/login:

Body:

{
    "username": string
    "password": string
}

Returns:

IF SUCCESS:
{
    "id": string
}

IF FAILURE:
Return 401 error code.

(2) GET /api/employees?name=<name>

Returns: List of employee objects, each containing name, id, job_role...

[
{
    "name": string,
    "id": int,
    "job_role": string,
    "image_url": string
},
...
]

(3) GET /api/profile?id=<user's own id>&target_id=<id of target employee>

Returns:

{
    "name": string,
    "phone_number": string,
    "job_role": string,
    "work_location": string,
    "salary": int,
    "image_url": string
}

NOTE: if user's own id and target id do not fill any of the three conditions, then salary should be null
1) Querying your own salary
2) Querying salary of one of your direct reports
3) Your job_role is HR

(4) GET /api/reports?id=<user's own id>

Returns:

[
{
    "name": string,
    "id": int,
    "job_role": string,
    "image_url": string
},
...
]


DB TABLES:

users:
id int
username string
password string
name string
phone_number string
job_role string
work_location string
salary int
manager_id int
image_url string
