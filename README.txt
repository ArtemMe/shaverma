THIS IS TEST PROJECT FOR SPRING BOOT REACT REDUX
--------------------------------------------------
--------=======For access-server======------------
--------------------------------------------------
After starting springBoot you can test it. POST request:

http://localhost:8087/spring-security-oauth-server/oauth/token?username=john&password=123&grant_type=password&client_id=fooClientIdPassword

with header:

Content-Type:application/x-www-form-urlencoded
Authorization: Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=

This "Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=" is "fooClientIdPassword:secret" string in ACSII base-64 encoding

After all you should get json like:

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqb2huIiwic2NvcGUiOlsiZm9vIiwicmVhZCIsIndyaXRlIl0sIm9yZ2FuaXphdGlvbiI6ImpvaG5YZVB3IiwiZXhwIjoxNTI0MTY3MTU2LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiMzg3YTUxZGYtMmNlYy00MGVjLTg3YjUtMDJkZjg5YTY3NGM4IiwiY2xpZW50X2lkIjoiZm9vQ2xpZW50SWRQYXNzd29yZCJ9.UKc2MXz9Y83rKiJRqo1mzdGjWlUkqJvwTNFVLWLtca0",
    "token_type": "bearer",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqb2huIiwic2NvcGUiOlsiZm9vIiwicmVhZCIsIndyaXRlIl0sIm9yZ2FuaXphdGlvbiI6ImpvaG5YZVB3IiwiYXRpIjoiMzg3YTUxZGYtMmNlYy00MGVjLTg3YjUtMDJkZjg5YTY3NGM4IiwiZXhwIjoxNTI2NzU1NTU2LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiYmEyNmQ3YTktODIyMC00YTk2LWExZDItZmZlYjYyYTczZjY4IiwiY2xpZW50X2lkIjoiZm9vQ2xpZW50SWRQYXNzd29yZCJ9.B-CZBdfXIDOElmcimMpWPdajvuSdyEZ1mRzp4egvJmg",
    "expires_in": 3599,
    "scope": "foo read write",
    "organization": "johnXePw",
    "jti": "387a51df-2cec-40ec-87b5-02df89a674c8"
}

--------------------------------------------------
--------=======For resource-server======----------
--------------------------------------------------
After starting springBoot you can test it. Send GET request:

http://localhost:8082/spring-security-oauth-resource/list_shaverm

with header:

Content-Type:application/x-www-form-urlencoded
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqb2huIiwic2NvcGUiOlsiZm9vIiwicmVhZCIsIndyaXRlIl0sIm9yZ2FuaXphdGlvbiI6ImpvaG5YZVB3IiwiZXhwIjoxNTI0MTY3MTU2LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiMzg3YTUxZGYtMmNlYy00MGVjLTg3YjUtMDJkZjg5YTY3NGM4IiwiY2xpZW50X2lkIjoiZm9vQ2xpZW50SWRQYXNzd29yZCJ9.UKc2MXz9Y83rKiJRqo1mzdGjWlUkqJvwTNFVLWLtca0

We inserted acccess_token from the previous json in Authorization header.
You should get something like this:

[
    {
        "id": 1,
        "img": "images/grid-list/00-52-29-429_640.jpg",
        "title": "острая",
        "comment": "Сочное кошачье мясо, свежие помидоры.....",
        "cost": 100
    },
    {
        "id": 2,
        "img": "images/grid-list/00-52-29-429_640.jpg",
        "title": "КАВКАЗКАЯ",
        "comment": "Сочное кошачье мясо, свежие помидоры.....",
        "cost": 150
    }
]
