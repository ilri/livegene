Mendeley
========

The frontend (Single-Page Application) is displaying the publications from the
private group LiveGeneShare in the Mendeley Reference Manager.

The publications can be fetched from the Mendeley API. The API requires a token for
the authentication. This token must be obtained manually from the admin back-office by
anyone who is LiveGeneShare member. After that the token can be refreshed in any
subsequent call to the Mendeley API.

At the homepage of the admin back-office there is a link `list of publications` which
leads to a page where the token can be obtained. This page also display the publications.
The list of publications can be refreshed with a click on the button **SYNC**.

OAuth2 Provider
---------------

The logic for getting the access token from Mendeley is accomplished with help of the
*KnpUOAuth2ClientBundle*. The main file is `src/Provider/MendeleyProvider` and the
configuration is in `config/packages/knpu_oauth2_client.yaml`.

The controller `src/Controller/MendeleyController` runs the process to obtain the token
from the Mendeley API.

Once the token has been obtained, it is stored in the cache. This logic can be found in
`src/Repository/Mendeley/AccessTokenCachedRepository`. When fetching the publications
the token is retrieved from the cache, and if it has expired it is refreshed.
This means that after clearing the cache the token has to be obtained once and
afterwards the application should be able to use for the communication with the
Mendeley API.
Better solution would be to implement in-memory storage like Redis, for example.
