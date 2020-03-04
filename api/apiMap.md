# Hydro Heaven API Map

###/contact/send-contact

Recieves and stores contact from the FE and sends confirmation emails.

__STEPS__:
1. Sanitize the input from the FE.
2. Validate the input from the FE.
3. Store the input in DB.
4. Send input to house.
5. Send confirmation email to client.

*POST*
````
{
    "name": "[TEXT]",
    "email": "[EMAIL]",
    "message": "[TEXT]"
}
````

*INVALID INPUTS ERROR* 

Occurs when the user supplies an invalid name (not null string), email (not null contain '@' and '.')
or message (not null string).

````
{
     "status": 500,
     "message": "Valid name, email, and message are required.",
     "payload": {}
 }
````

*DB ERROR* 

Occurs when the submitted contact cannot be written to the DB. 

````
{
     "status": 500,
     "message": "An error occured. Please try again.",
     "payload": {}
 }
````

*MAILER ERROR* 

Occurs when the submitted contact is written to the DB but the house or client confirmation
emails threw an error.

````
{
     "status": 500,
     "message": "An error occured. Please try again.",
     "payload": {}
 }
````

*SUCCESS*
```
{
     "status": 200,
     "message": "Thank You! We have received your message!",
     "payload": {}
}
```
 
---