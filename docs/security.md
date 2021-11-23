Security
========

The application implements different methods for authentication and authorisation.

The admin back-office can be accessed only by authorised users. The authentication
is done through a form with username and password.

The REST API requires JWT authentication. The client should send with a POST request
the credentials (username and password) to the endpoint `/api/auth_token` to obtain
a JSON Web Token. This token should be used for all calls to the API. It can be passed
in the HTTP headers in this format:

    'Authorization': 'Bearer <token>'

The placeholder `<token>` should be replaced with the actual token.

The frontend (Single-Page Application) is open to everyone and can be freely accessed.
The SPA itself authenticates against the REST API to fetch the required data.

Users
-----

The logic for the users is accomplished with the help of the bundles *FOSUserBundle*
and *SonataUserBundle*. The corresponding code can be found in the subdirectory
`src/Application/Sonata/UserBundle`.

User roles
----------

The users can have different permissions depending on their user role. The user roles
are defined in the file `config/packages/security.yaml`.

- ROLE_USER is the basic role which has practically no authorisation to do anything.
- ROLE_SONATA_ADMIN is one level higher and allows the users to authenticate to the
admin back-office. The permissions can be set separately for every user or set per
group. One user can belong to many groups, regardless of the role.
- ROLE_ADMIN is one level higher than ROLE_SONATA_ADMIN and has read and write access
to all LiveGene entities, but not the entities extended from *SonataUserBundle* and
*SonataMediaBundle*.
- ROLE_API_USER can access the REST API, but not the admin back-office. This role is
for clients of the REST API.
- ROLE_SPA_USER is one level below ROLE_API_USER and can access only the endpoints
that contain data relevant for the SPA. This role is intended for the user `spa_user`,
which is the Single-Page Application.
- ROLE_MENDELEY_USER is a special role for the people who are members of the
LiveGeneShare private group at Mendeley.
