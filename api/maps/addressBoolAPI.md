# Address Book API

**POST /address-book/all/**

Returns all of the addresses from the address book. Requires Auth Token.

````
{

    {
        "token": "[AUTH TOKEN]"
    }


    -- Success --
    "status": 200,
    "message": "",
    "payload": {
        "addresses": [
            {
                id: [TEXT],
                firstName: [TEXT],
                lastName: [TEXT],
                email: [TEXT],
                phone: [INT],
                address: [TEXT]
            }
        ]
    }

    -- Invalid Auth Token --
    "status": 500,
    "message": "Invalid Credentials.",
    "payload": {}
}
````

---

**POST /address-book/new/**

Creates a new address in the address book. Requires Auth Token.

````
{
    {
        "token": "[AUTH TOKEN]",
        "firstName": "[TEXT]",
        "lastName": "[TEXT]",
        "phone": "[TEXT]",
        "email": "[TEXT *]",
        "address": "[TEXT *]"
    }

    -- Success --
    "status": 200,
    "message": "",
    "payload": {
        id: "[TEXT]",
        firstName: "[TEXT]",
        lastName: "[TEXT]",
        email: "[TEXT]",
        phone: "[TEXT]",
        address: "[TEXT]"
    }

    -- Invalid Auth Token --
    "status": 500,
    "message": "Invalid Credentials.",
    "payload": {}

    -- Invalid Input Error --
    "status": 500,
    "message": "Valid first and last name are required.",
    "payload": {}

    -- DB Error --
    "status": 500,
    "message": "An error occured. Please try again.",
    "payload": {}
}
````

---

**POST /address-book/view/**

Returns an address book entry by ID. Requires Auth Token.

````
{

    {
        "token": "[AUTH TOKEN]",
        "id": "[TEXT]"
    }
    
    -- Success --
    "status": 200,
    "message": "",
    "payload": {
        id: [TEXT],
        firstName: [TEXT],
        lastName: [TEXT],
        email: [TEXT],
        phone: [INT],
        address: [TEXT]
    }

    -- Invalid Auth Token --
    "status": 500,
    "message": "Invalid Credentials.",
    "payload": {}

    -- Invalid Id --
    "status": 500,
    "message": "Invalid Id.",
    "payload": {}
}
````

---

**POST /address-book/update/{id}**

Updates address book entry by id. Requires Auth Token.

````
{
    {
        "token": "[AUTH TOKEN]",
        "id": "[TEXT]",
        "firstName": "[TEXT]",
        "lastName": "[TEXT]",
        "email": "[TEXT *]",
        "phone": "[TEXT *]",
        "address": "[TEXT *]"
    }

    -- Success --
    "status": 200,
    "message": "",
    "payload": {
        id: "[TEXT]",
        firstName: "[TEXT]",
        lastName: "[TEXT]",
        email: "[TEXT *]",
        phone: "[TEXT *]",
        address: "[TEXT *]"
    }

    -- Invalid Auth Token --
    "status": 500,
    "message": "Invalid Credentials.",
    "payload": {}

    -- Invalid Input Error --
    "status": 500,
    "message": "Valid first and last name are required.",
    "payload": {}

    -- DB Error --
    "status": 500,
    "message": "An error occured. Please try again.",
    "payload": {}
}