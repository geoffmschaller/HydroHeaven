# Contacts API

**POST /contact/all**

Returns all of the stored contacts. Requires Auth Token.

````
{

    {
        "token": "[AUTH TOKEN]"
    }

    -- Success --
    "status": 200,
    "message": "",
    "payload": {
        "contacts": [
            {
                "id": "[TEXT]",
                "name": "[TEXT]",
                "email": "[EMAIL]",
                "message": "[TEXT]",
                "complete": "[BOOL]"
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

**POST /contact/view**

Returns contact information by id. Requires Auth Token.

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
        "contact": {
            "id": "[TEXT]",
            "name": "[TEXT]",
            "email": "[EMAIL]",
            "message": "[TEXT]",
            "complete": "[BOOL]"
        }   
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

**POST /contact/update**

Marks the contact as complete. Requires Auth Token.

````
{

    {
        "token": "[AUTH TOKEN]",
        "id": "[TEXT]",
        "name": "[TEXT]",
        "email": "[EMAIL]",
        "message": "[TEXT]",
    }

    -- Success --
    "status": 200,
    "message": "",
    "payload": {
        "contact": {
            "id": "[TEXT]",
            "name": "[TEXT]",
            "email": "[EMAIL]",
            "message": "[TEXT]",
            "complete": "[BOOL]"
        }   
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

**POST /contact/new**

Saves contact from FE, sending information to house and confirmation email to client.

````
{
    {
        "name": "[TEXT]",
        "email": "[EMAIL]",
        "message": "[TEXT]"
    }    

    -- Success --
    "status": 200,
    "message": "Thank You! We have received your message!",
    "payload": {
        contact: {
            name: "[TEXT]",
            email: "[TEXT]",
            message: "[TEXT]";
            id: "[INT]",
            date: "[TEXT]"
        }
    }

    -- Invalid Input Error --
    "status": 500,
    "message": "Valid name, email, and message are required.",
    "payload": {}

    -- DB Error --
    "status": 500,
    "message": "An error occured. Please try again.",
    "payload": {}

    -- Mailer Error --
    "status": 500,
    "message": "An error occured. Please try again.",
    "payload": {}
}
````