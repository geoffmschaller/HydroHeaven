# AUTH API

**POST /auth/login**

Logs user in and returns an Auth Token.

````
{

    {
        "email": "[TEXT]",
        "password": "[PASSWORD]"
    }

    -- Success --
    "status": 200,
    "message": "Login Successful.",
    "payload": {
        "user": {
            id: "[TEXT]",
            email: "[TEXT]"
            displayName: "[TEXT]",
            phone: "[INT]",
            email: "[TEXT]",
            authToken: "[AUTH TOKEN]"
        }    
    }

    -- Invalid Inputs --
    "status": 500,
    "message": "Valid email and password are required.",
    "payload": {}

    -- Invalid Credentials --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

}
````

---

**POST /auth/logout**

Invalidates the Auth Token on record. Requires Auth Token.

````
{

    {
        "email": "[TEXT]",
        "token": "[AUTH TOKEN]"
    }

    -- Success --
    "status": 200,
    "message": "Logout Successful.",
    "payload": {}

    -- Email and Token Mismatch --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

    -- Invalid Email --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

    -- Invalid Auth Token --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

}
````

---

**POST /auth/reset/token**

Generates and sends a reset token to email.

````
{

    {
        "email": "[TEXT]"
    }

    -- Success --
    "status": 200,
    "message": "Password reset link sent!",
    "payload": {}

    -- Invalid Email --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

}
````

---

**POST /auth/reset/password**

Resets user's password. Requires Reset Token.

````
{

    {
        "email": "[TEXT]",
        "password": "[TEXT]",
        "token": "[RESET TOKEN]"
    }

    -- Success --
    "status": 200,
    "message": "Password has been changed.",
    "payload": {}

    -- Invalid Email --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

    -- Invalid Reset Token --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

    -- Invalid Inputs --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

    -- Email and Token Mismatch --
    "status": 500,
    "message": "Invalid credentials.",
    "payload": {}

}
````

---