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
    "job_role: string
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
    "salary": int
}

NOTE: if user's own id and target id do not fill any of the three conditions, then salary should be null
1) Querying your own salary
2) Querying salary of one of your direct reports
3) Your job_role is HR


DB TABLES:

Users:
id int
username string
password string
name string
phone_number string
job_role string
work_location string
salary int

Reports:
manager_id string
employee_id string
