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
through annotations in the entity classes.
