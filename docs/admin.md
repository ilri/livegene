Admin
=====

The admin classes are available in `src/Admin` and there is a corresponding admin class
for each entity class.

The documentation for Sonata Admin covers all use cases.

Special case are the Admin controllers `SamplingActivityAdminController`
and `SamplingDocumentationAdminController` in `src/Controller/Admin`.

The former prevents deleting of a Sampling Activity object that has Sampling Documentation
objects attached to it. In `src/EventListener/ModelManagerExceptionResponseListener` this
behaviour has been generically implemented for all similar cases.

The latter provides a special action for multiple upload of documents. It relies on the
classes in `src/Form/Type`. The idea was to provide the users an easy way to upload
multiple documents at once, if these are of the same Sampling Document Type and belong
to one Sampling Activity. After the creation of this action additional properties were
added to the entity class Sampling Activity: `country`, `startDate` and `endDate`.
When using the **Add many** action these properties will be *null*. It's the responsibility
of the user to add them afterwards.
The usage of this action should be monitored and in case it's not needed a removal of
this functionality should be considered.

Communicating with the Mendeley API is integrated into the admin. Further details about
it can be found in the section for [Mendeley](mendeley.md).

[BACK](index.md)

[HOME](../README.md)
