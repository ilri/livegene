Documentation
=============

The admin back-office and the REST API are written in PHP.
This code is in the directory `src/`.

The admin back-office uses some HTML templates which can be found in the
directory `templates/`.

Different configuration settings are present as YAML files in the
directory `config/`.

CSS and JavaScript is stored in the directory `assets/`.
There are 3 subdirectories inside:
- `css/` (CSS for the admin)
- `js/` (JavaScript for the admin)
- `spa/` (Single-Page Application written in Vue.js)

The official [documentation](https://symfony.com/doc/current/index.html)
of Symfony provides detailed information.

Backend
-------

The PHP code from the directory `src/` is divided in many subdirectories.
Starting point is the subdirectory `src/Entity/`. The tables from the database
are mapped to a PHP class. Common parts shared between multiple entities are
contained into traits inside `src/Entity/Traits`.

The REST API, created with [API Platform](https://api-platform.com), is configured
through annotations in the entity classes. The REST API requires authentication.
A special endpoint for retrieving a JWT is created in the subdirectory `src/OpenApi/`.
The REST API is accessible under https://livegene.ilri.org/api.

The admin back-office is created with [Sonata Admin](https://sonata-project.org/).
The subdirectory `src/Admin/` contains the classes driving the admin back-office.
For each entity class there is a correspondent admin class. Further logic driving the
admin back-office is present in other subdirectories. The admin-back office is
accessible under https://livegene.ilri.org/admin.

[Admin](admin.md)

Frontend
--------

The codebase for the Single-Page Application (SPA) is in the subdirectory `assets/spa/`.
It is created with the framework [Vue.js](https://vuejs.org). The data visualisations
are created with [D3.js](https://d3js.org/).

The following files:
- `.eslintrc.js`
- `babel.config.js`
- `package.json`
- `webpack.config.js`
- `yarn.lock`

contain configuration settings and other information for the Single-Page Application.

Other topics
------------

- [Security](security.md)
- [Mendeley](mendeley.md)


[HOME](../README.md)
