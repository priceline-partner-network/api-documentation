API Flight Requirements Appendix
================================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:

-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement


| **Page**    | **Requireme | **Requireme | **Expected  | **Additiona |

|             | nt          | nt**        | Result**    | l           |
|             | \#**        |             |             | Information |
|             |             |             |             | **          |
+=============+=============+=============+=============+=============+
| Results     | 1.1         | Total price | -   The     | -   getFlig |
|             |             | per         |     total   | htDeparture |
|             |             | traveler    |     price   | s           |
|             |             |             |     per     |             |
|             |             |             |     travele |     -   get |
|             |             |             | r           | FlightRetur |
|             |             |             |     is      | ns          |
|             |             |             |     display |         is  |
|             |             |             | ed          |         use |
|             |             |             |             | d           |
|             |             |             | -   The     |         for |
|             |             |             |     rate is |         the |
|             |             |             |     not     |         ret |
|             |             |             |     multipl | urn         |
|             |             |             | e           |         leg |
|             |             |             |     by the  |         of  |
|             |             |             |     number  |         a   |
|             |             |             |     of      |         rou |
|             |             |             |     travele | ndtrip      |
|             |             |             | rs          |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"sourc |
|             |             |             |             | e\_total\_f |
|             |             |             |             | are\_per\_t |
|             |             |             |             | icket\"     |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"itine |
|             |             |             |             | rary\_data\ |
|             |             |             |             | "           |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.2         | Baggage     | A link to   | -   getFlig |
|             |             | Fees        | the baggage | htDeparture |
|             |             |             | fees is     | s           |
|             |             |             | displayed   |             |
|             |             |             |             |     -   get |
|             |             |             |             | FlightRetur |
|             |             |             |             | ns          |
|             |             |             |             |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_url\"     |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"bagga |
|             |             |             |             | ge\_carrier |
|             |             |             |             | \"          |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.3         | Origin city | -   The     | -   getFlig |
|             |             | & airport   |     origin  | htDeparture |
|             |             |             |     city is | s           |
|             |             |             |     display |             |
|             |             |             | ed          |     -   get |
|             |             |             |             | FlightRetur |
|             |             |             | -   The     | ns          |
|             |             |             |     origin  |         is  |
|             |             |             |     airport |         use |
|             |             |             |     is      | d           |
|             |             |             |     display |         for |
|             |             |             | ed          |         the |
|             |             |             |             |         ret |
|             |             |             | -   The     | urn         |
|             |             |             |     origin  |         leg |
|             |             |             |     airport |         of  |
|             |             |             |     code is |         a   |
|             |             |             |     display |         rou |
|             |             |             | ed          | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"city\ |
|             |             |             |             | ",          |
|             |             |             |             |     \"name\ |
|             |             |             |             | ",          |
|             |             |             |             |     &       |
|             |             |             |             |     \"code\ |
|             |             |             |             | "           |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"depar |
|             |             |             |             | ture\"      |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.4         | Destination | -   The     | -   getFlig |
|             |             | city &      |     destina | htDeparture |
|             |             | airport     | tion        | s           |
|             |             |             |     city is |             |
|             |             |             |     display |     -   get |
|             |             |             | ed          | FlightRetur |
|             |             |             |             | ns          |
|             |             |             | -   The     |         is  |
|             |             |             |     destina |         use |
|             |             |             | tion        | d           |
|             |             |             |     airport |         for |
|             |             |             |     is      |         the |
|             |             |             |     display |         ret |
|             |             |             | ed          | urn         |
|             |             |             |             |         leg |
|             |             |             | -   The     |         of  |
|             |             |             |     destina |         a   |
|             |             |             | tion        |         rou |
|             |             |             |     airport | ndtrip      |
|             |             |             |     code is |         sea |
|             |             |             |     display | rch         |
|             |             |             | ed          |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"city\ |
|             |             |             |             | ",          |
|             |             |             |             |     \"name\ |
|             |             |             |             | ",          |
|             |             |             |             |     &       |
|             |             |             |             |     \"code\ |
|             |             |             |             | "           |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"arriv |
|             |             |             |             | al\"        |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.5         | Flight      | All flight  | -   getFlig |
|             |             | number(s)   | numbers are | htDeparture |
|             |             |             | displayed   | s           |
|             |             |             |             |             |
|             |             |             |             |     -   get |
|             |             |             |             | FlightRetur |
|             |             |             |             | ns          |
|             |             |             |             |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_number\" |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.6         | Number of   | The amount  | -   getFlig |
|             |             | stops       | of stops is | htDeparture |
|             |             |             | displayed   | s           |
|             |             |             |             |             |
|             |             |             |             |     -   get |
|             |             |             |             | FlightRetur |
|             |             |             |             | ns          |
|             |             |             |             |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"stop\ |
|             |             |             |             | _count\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.7         | Departure   | All         | -   getFlig |
|             |             | date(s) &   | departure   | htDeparture |
|             |             | time(s)     | dates and   | s           |
|             |             |             | times are   |             |
|             |             |             | displayed   |     -   get |
|             |             |             | for each    | FlightRetur |
|             |             |             | slice       | ns          |
|             |             |             |             |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"datet |
|             |             |             |             | ime\"       |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"depar |
|             |             |             |             | ture\"      |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.8         | Arrival     | All arrival | -   getFlig |
|             |             | date(s) &   | dates and   | htDeparture |
|             |             | time(s)     | times are   | s           |
|             |             |             | displayed   |             |
|             |             |             | for each    |     -   get |
|             |             |             | slice       | FlightRetur |
|             |             |             |             | ns          |
|             |             |             |             |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"datet |
|             |             |             |             | ime\"       |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"arriv |
|             |             |             |             | al\"        |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.9         | Trip        | -   The     | -   getFlig |
|             |             | duration    |     total   | htDeparture |
|             |             |             |     trip    | s           |
|             |             |             |     duratio |             |
|             |             |             | n           |     -   get |
|             |             |             |     is      | FlightRetur |
|             |             |             |     display | ns          |
|             |             |             | ed          |         is  |
|             |             |             |             |         use |
|             |             |             | -   The     | d           |
|             |             |             |     duratio |         for |
|             |             |             | n           |         the |
|             |             |             |     for     |         ret |
|             |             |             |     each    | urn         |
|             |             |             |     slice   |         leg |
|             |             |             |     is      |         of  |
|             |             |             |     display |         a   |
|             |             |             | ed          |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Total   |
|             |             |             |             |     trip    |
|             |             |             |             |     duratio |
|             |             |             |             | n           |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"durat |
|             |             |             |             | ion\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             |             |
|             |             |             |             | -   Slice   |
|             |             |             |             |     duratio |
|             |             |             |             | n           |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"durat |
|             |             |             |             | ion\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.0       | Layover     | -   Layover | -   getFlig |
|             |             | information |     duratio | htDeparture |
|             |             |             | n           | s           |
|             |             |             |     is      |             |
|             |             |             |     display |     -   get |
|             |             |             | ed          | FlightRetur |
|             |             |             |             | ns          |
|             |             |             | -   The     |         is  |
|             |             |             |     airport |         use |
|             |             |             |     name(s) | d           |
|             |             |             |     is      |         for |
|             |             |             |     display |         the |
|             |             |             | ed          |         ret |
|             |             |             |             | urn         |
|             |             |             | -   The     |         leg |
|             |             |             |     airport |         of  |
|             |             |             |     code(s) |         a   |
|             |             |             |     is      |         rou |
|             |             |             |     display | ndtrip      |
|             |             |             | ed          |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Layover |
|             |             |             |             |     duratio |
|             |             |             |             | n           |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"durat |
|             |             |             |             | ion\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"notes |
|             |             |             |             | \"          |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
|             |             |             |             |             |
|             |             |             |             | -   Airport |
|             |             |             |             |     name &  |
|             |             |             |             |     code    |
|             |             |             |             |     are     |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"value |
|             |             |             |             | \"          |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"notes |
|             |             |             |             | \"          |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.1       | Carrier(s)  | The         | -   getFlig |
|             |             |             | name/logo   | htDeparture |
|             |             |             | for the     | s           |
|             |             |             | carrier(s)  |             |
|             |             |             | is          |     -   get |
|             |             |             | displayed   | FlightRetur |
|             |             |             | for each    | ns          |
|             |             |             | slice       |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"name\ |
|             |             |             |             | "           |
|             |             |             |             |     &       |
|             |             |             |             |     \"logo\ |
|             |             |             |             | "           |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.2       | Codeshare   | The         | -   getFlig |
|             |             | (if         | codeshare   | htDeparture |
|             |             | applicable) | verbiage is | s           |
|             |             |             | displayed   |             |
|             |             |             |             |     -   get |
|             |             |             |             | FlightRetur |
|             |             |             |             | ns          |
|             |             |             |             |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"opera |
|             |             |             |             | ting\_airli |
|             |             |             |             | ne\"        |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\"         |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.3       | Aircraft    | The         | -   getFlig |
|             |             | type        | aircraft    | htDeparture |
|             |             |             | type(s) &   | s           |
|             |             |             | model(s)    |             |
|             |             |             | are         |     -   get |
|             |             |             | displayed   | FlightRetur |
|             |             |             | for each    | ns          |
|             |             |             | slice       |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"aircr |
|             |             |             |             | aft\"       |
|             |             |             |             |     &       |
|             |             |             |             |     \"aircr |
|             |             |             |             | aft\_type\" |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.4       | Cabin class | The cabin   | -   getFlig |
|             |             |             | class is    | htDeparture |
|             |             |             | displayed   | s           |
|             |             |             | for each    |             |
|             |             |             | slice       |     -   get |
|             |             |             |             | FlightRetur |
|             |             |             |             | ns          |
|             |             |             |             |         is  |
|             |             |             |             |         use |
|             |             |             |             | d           |
|             |             |             |             |         for |
|             |             |             |             |         the |
|             |             |             |             |         ret |
|             |             |             |             | urn         |
|             |             |             |             |         leg |
|             |             |             |             |         of  |
|             |             |             |             |         a   |
|             |             |             |             |         rou |
|             |             |             |             | ndtrip      |
|             |             |             |             |         sea |
|             |             |             |             | rch         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"cabin |
|             |             |             |             | \_name\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.5       | 24hr free   | The banner  | Front end   |
|             |             | cancellatio | (or         | change for  |
|             |             | n           | verbiage)   | the partner |
|             |             | banner      | is          |             |
|             |             |             | displayed   |             |
|             |             |             | on the page |             |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.6       | Flight      | -   Any     | -   getFlig |
|             |             | warnings &  |     flight  | htDeparture |
|             |             | highlights  |     warning | s           |
|             |             |             | s           |             |
|             |             |             |     or      |     -   get |
|             |             |             |     highlig | FlightRetur |
|             |             |             | hts         | ns          |
|             |             |             |     are     |         is  |
|             |             |             |     display |         use |
|             |             |             | ed          | d           |
|             |             |             |             |         for |
|             |             |             |     -   Ove |         the |
|             |             |             | rnight      |         ret |
|             |             |             |         con | urn         |
|             |             |             | nection     |         leg |
|             |             |             |             |         of  |
|             |             |             |     -   Fli |         a   |
|             |             |             | ght         |         rou |
|             |             |             |         arr | ndtrip      |
|             |             |             | ives        |         sea |
|             |             |             |         the | rch         |
|             |             |             |         nex |             |
|             |             |             | t           | -   Returne |
|             |             |             |         day | d           |
|             |             |             |             |     under   |
|             |             |             |     -   Fli |     the     |
|             |             |             | ght         |     \"notes |
|             |             |             |         arr | \"          |
|             |             |             | ives        |     node(s) |
|             |             |             |         2   |     within  |
|             |             |             |         day |     the     |
|             |             |             | s           |     \"fligh |
|             |             |             |         aft | t\_data\"   |
|             |             |             | er          |     cluster |
|             |             |             |         dep | s           |
|             |             |             | arture      |             |
|             |             |             |             |             |
|             |             |             |     -   Ope |             |
|             |             |             | n           |             |
|             |             |             |         jaw |             |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.1.7       | Search box  | A search    | -   getAuto |
|             |             |             | box is      | Complete    |
|             |             |             | accessible  |             |
|             |             |             | on the      |             |
|             |             |             | Results     |             |
|             |             |             | page        |             |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1         | Summary of  | -   Ticket  | -   getFlig |
|             |             | Charges     |     price   | htContract  |
|             |             |             |     is      |             |
|             |             |             |     display | -   Ticket  |
|             |             |             | ed          |     prices  |
|             |             |             |             |     is      |
|             |             |             |     -   Not |     returne |
|             |             |             |         mul | d           |
|             |             |             | tiplied     |     under   |
|             |             |             |         by  |     the     |
|             |             |             |         the |     \"sourc |
|             |             |             |         amo | e\_base\_fa |
|             |             |             | unt         | re\"        |
|             |             |             |         of  |     node    |
|             |             |             |         tra |     within  |
|             |             |             | velers/tick |     the     |
|             |             |             | ets         |     \"price |
|             |             |             |             | \_details\" |
|             |             |             | -   Taxes   |     cluster |
|             |             |             |     and     | .           |
|             |             |             |     Fees    |             |
|             |             |             |     are     | -   Taxes   |
|             |             |             |     display |     and     |
|             |             |             | ed          |     Fees    |
|             |             |             |             |     are     |
|             |             |             |     -   \"T |     returne |
|             |             |             | axes        | d           |
|             |             |             |         and |     under   |
|             |             |             |         Fee |     the     |
|             |             |             | s\"         |     \"sourc |
|             |             |             |         is  | e\_taxes\"  |
|             |             |             |         hyp |     node    |
|             |             |             | erlinked    |     within  |
|             |             |             |         to  |     the     |
|             |             |             |         a   |     \"price |
|             |             |             |         lig | \_details\" |
|             |             |             | ht          |     cluster |
|             |             |             |         box | .           |
|             |             |             |         tha |             |
|             |             |             | t           |     -   \"T |
|             |             |             |         dis | axes        |
|             |             |             | plays       |         and |
|             |             |             |         add |         Fee |
|             |             |             | itional     | s\"         |
|             |             |             |         ver |         pul |
|             |             |             | biage       | ls          |
|             |             |             |             |         the |
|             |             |             | -   Process |         \"t |
|             |             |             | ing         | axes\_and\_ |
|             |             |             |     Fees    | fees\"      |
|             |             |             |     are     |         nod |
|             |             |             |     display | e           |
|             |             |             | ed,         |         wit |
|             |             |             |     if      | hin         |
|             |             |             |     applica |         the |
|             |             |             | ble         |         \"p |
|             |             |             |             | opup\_data\ |
|             |             |             |     -   \"P | "           |
|             |             |             | rocessing   |         clu |
|             |             |             |         Fee | ster        |
|             |             |             | s\"         |             |
|             |             |             |         is  | -   Process |
|             |             |             |         hyp | ing         |
|             |             |             | erlinked    |     Fee is  |
|             |             |             |         to  |     returne |
|             |             |             |         a   | d           |
|             |             |             |         lig |     under   |
|             |             |             | ht          |     the     |
|             |             |             |         box |     \"sourc |
|             |             |             |         tha | e\_pcln\_fe |
|             |             |             | t           | es\"        |
|             |             |             |         dis |     node    |
|             |             |             | plays       |     within  |
|             |             |             |         add |     the     |
|             |             |             | itional     |     \"price |
|             |             |             |         ver | \_details\" |
|             |             |             | biage       |     cluster |
|             |             |             |             | .           |
|             |             |             | -   Total   |             |
|             |             |             |     per     |     -   \"P |
|             |             |             |     ticket  | rocessing   |
|             |             |             |     is      |         Fee |
|             |             |             |     display | \"          |
|             |             |             | ed          |         pul |
|             |             |             |             | ls          |
|             |             |             | -   Number  |         the |
|             |             |             |     of      |         \"t |
|             |             |             |     tickets | axes\_and\_ |
|             |             |             |     is      | fees\"      |
|             |             |             |     display |         nod |
|             |             |             | ed          | e           |
|             |             |             |             |         wit |
|             |             |             | -   The     | hin         |
|             |             |             |     total   |         the |
|             |             |             |     price   |         \"p |
|             |             |             |     is      | opup\_data\ |
|             |             |             |     display | "           |
|             |             |             | ed          |         clu |
|             |             |             |             | ster        |
|             |             |             | -   The     |             |
|             |             |             |     price   | -   Total   |
|             |             |             |     disclai |     per     |
|             |             |             | mer         |     ticket  |
|             |             |             |     is      |     is      |
|             |             |             |     display |     returne |
|             |             |             | ed          | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"sourc |
|             |             |             |             | e\_total\_f |
|             |             |             |             | are\_per\_t |
|             |             |             |             | icket\"     |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     cluster |
|             |             |             |             |             |
|             |             |             |             | -   Number  |
|             |             |             |             |     of      |
|             |             |             |             |     tickets |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"numbe |
|             |             |             |             | r\_of\_pass |
|             |             |             |             | engers\"    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"itine |
|             |             |             |             | rary\_data\ |
|             |             |             |             | "           |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             | -   Total   |
|             |             |             |             |     price   |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"sourc |
|             |             |             |             | e\_total\_f |
|             |             |             |             | are\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     price   |
|             |             |             |             |     disclai |
|             |             |             |             | mer         |
|             |             |             |             |     is a    |
|             |             |             |             |     front   |
|             |             |             |             |     end     |
|             |             |             |             |     change  |
|             |             |             |             |     for the |
|             |             |             |             |     partner |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"B |
|             |             |             |             | aggage      |
|             |             |             |             |         Fee |
|             |             |             |             | s\"         |
|             |             |             |             |         pul |
|             |             |             |             | ls          |
|             |             |             |             |         the |
|             |             |             |             |         \"b |
|             |             |             |             | aggage\_fee |
|             |             |             |             | s\"         |
|             |             |             |             |         nod |
|             |             |             |             | e           |
|             |             |             |             |         wit |
|             |             |             |             | hin         |
|             |             |             |             |         the |
|             |             |             |             |         \"p |
|             |             |             |             | opup\_data\ |
|             |             |             |             | "           |
|             |             |             |             |         clu |
|             |             |             |             | ster.       |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.2         | Baggage     | A link to   | -   getFlig |
|             |             | Fees        | the baggage | htContract  |
|             |             |             | fees is     |             |
|             |             |             | displayed   | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_url\"     |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"bagga |
|             |             |             |             | ge\_carrier |
|             |             |             |             | \"          |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.3         | Origin city | -   The     | -   getFlig |
|             |             | & airport   |     origin  | htContract  |
|             |             |             |     city is |             |
|             |             |             |     display | -   Returne |
|             |             |             | ed          | d           |
|             |             |             |             |     under   |
|             |             |             | -   The     |     the     |
|             |             |             |     origin  |     \"city\ |
|             |             |             |     airport | ",          |
|             |             |             |     is      |     \"name\ |
|             |             |             |     display | ",          |
|             |             |             | ed          |     &       |
|             |             |             |             |     \"code\ |
|             |             |             | -   The     | "           |
|             |             |             |     origin  |     nodes   |
|             |             |             |     airport |     within  |
|             |             |             |     code is |     the     |
|             |             |             |     display |     \"depar |
|             |             |             | ed          | ture\"      |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.4         | Destination | -   The     | -   getFlig |
|             |             | city &      |     destina | htContract  |
|             |             | airport     | tion        |             |
|             |             |             |     city is | -   Returne |
|             |             |             |     display | d           |
|             |             |             | ed          |     under   |
|             |             |             |             |     the     |
|             |             |             | -   The     |     \"city\ |
|             |             |             |     destina | ",          |
|             |             |             | tion        |     \"name\ |
|             |             |             |     airport | ",          |
|             |             |             |     is      |     &       |
|             |             |             |     display |     \"code\ |
|             |             |             | ed          | "           |
|             |             |             |             |     nodes   |
|             |             |             | -   The     |     within  |
|             |             |             |     destina |     the     |
|             |             |             | tion        |     \"arriv |
|             |             |             |     airport | al\"        |
|             |             |             |     code is |     node of |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.5         | Flight      | All flight  | -   getFlig |
|             |             | number(s)   | numbers are | htContract  |
|             |             |             | displayed   |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_number\" |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.6         | Number of   | The amount  | -   getFlig |
|             |             | stops       | of stops is | htContract  |
|             |             |             | displayed   |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"stop\ |
|             |             |             |             | _count\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.7         | Departure   | All         | -   getFlig |
|             |             | date(s) &   | departure   | htContract  |
|             |             | time(s)     | dates and   |             |
|             |             |             | times are   | -   Returne |
|             |             |             | displayed   | d           |
|             |             |             | for each    |     under   |
|             |             |             | slice       |     the     |
|             |             |             |             |     \"datet |
|             |             |             |             | ime\"       |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"depar |
|             |             |             |             | ture\"      |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.8         | Arrival     | All arrival | -   getFlig |
|             |             | date(s) &   | dates and   | htContract  |
|             |             | time(s)     | times are   |             |
|             |             |             | displayed   | -   Returne |
|             |             |             | for each    | d           |
|             |             |             | slice       |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"datet |
|             |             |             |             | ime\"       |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"arriv |
|             |             |             |             | al\"        |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.9         | Trip        | -   The     | -   getFlig |
|             |             | duration    |     total   | htContract  |
|             |             |             |     trip    |             |
|             |             |             |     duratio | -   Total   |
|             |             |             | n           |     trip    |
|             |             |             |     is      |     duratio |
|             |             |             |     display | n           |
|             |             |             | ed          |     is      |
|             |             |             |             |     returne |
|             |             |             | -   The     | d           |
|             |             |             |     duratio |     under   |
|             |             |             | n           |     the     |
|             |             |             |     for     |     \"durat |
|             |             |             |     each    | ion\"       |
|             |             |             |     slice   |     node    |
|             |             |             |     is      |     within  |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             |             |
|             |             |             |             | -   Slice   |
|             |             |             |             |     duratio |
|             |             |             |             | n           |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"durat |
|             |             |             |             | ion\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.0       | Layover     | -   Layover | -   getFlig |
|             |             | information |     duratio | htContract  |
|             |             |             | n           |             |
|             |             |             |     is      | -   Returne |
|             |             |             |     display | d           |
|             |             |             | ed          |     under   |
|             |             |             |             |     the     |
|             |             |             | -   The     |     \"durat |
|             |             |             |     airport | ion\"       |
|             |             |             |     name(s) |     node    |
|             |             |             |     is      |     within  |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"notes |
|             |             |             |             | \"          |
|             |             |             | -   The     |     node of |
|             |             |             |     airport |     the     |
|             |             |             |     code(s) |     \"fligh |
|             |             |             |     is      | t\_data\"   |
|             |             |             |     display |     cluster |
|             |             |             | ed          | s           |
|             |             |             |             |             |
|             |             |             |             | -   Airport |
|             |             |             |             |     name &  |
|             |             |             |             |     code    |
|             |             |             |             |     are     |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"value |
|             |             |             |             | \"          |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"notes |
|             |             |             |             | \"          |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.1       | Carrier(s)  | The         | -   getFlig |
|             |             |             | name/logo   | htContract  |
|             |             |             | for the     |             |
|             |             |             | carrier(s)  | -   Returne |
|             |             |             | is          | d           |
|             |             |             | displayed   |     under   |
|             |             |             | for each    |     the     |
|             |             |             | slice       |     \"name\ |
|             |             |             |             | "           |
|             |             |             |             |     &       |
|             |             |             |             |     \"logo\ |
|             |             |             |             | "           |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.2       | Codeshare   | The         | -   getFlig |
|             |             | (if         | codeshare   | htContract  |
|             |             | applicable) | verbiage is |             |
|             |             |             | displayed   | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"opera |
|             |             |             |             | ting\_airli |
|             |             |             |             | ne\"        |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\"         |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.3       | Aircraft    | The         | -   getFlig |
|             |             | type        | aircraft    | htContract  |
|             |             |             | type(s) is  |             |
|             |             |             | displayed   | -   Returne |
|             |             |             | for each    | d           |
|             |             |             | slice       |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"aircr |
|             |             |             |             | aft\"       |
|             |             |             |             |     &       |
|             |             |             |             |     \"aircr |
|             |             |             |             | aft\_type\" |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.4       | Cabin class | The cabin   | -   getFlig |
|             |             |             | class is    | htContract  |
|             |             |             | displayed   |             |
|             |             |             | for each    | -   Returne |
|             |             |             | slice       | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"cabin |
|             |             |             |             | \_name\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.5       | Flight      | -   Any     | -   getFlig |
|             |             | warnings &  |     flight  | htContract  |
|             |             | highlights  |     warning |             |
|             |             |             | s           | -   Returne |
|             |             |             |     or      | d           |
|             |             |             |     highlig |     under   |
|             |             |             | hts         |     the     |
|             |             |             |     are     |     \"notes |
|             |             |             |     display | \"          |
|             |             |             | ed          |     node(s) |
|             |             |             |             |     within  |
|             |             |             |     -   Ove |     the     |
|             |             |             | rnight      |     \"fligh |
|             |             |             |         con | t\_data\"   |
|             |             |             | nection     |     cluster |
|             |             |             |             | s           |
|             |             |             |     -   Fli |             |
|             |             |             | ght         |             |
|             |             |             |         arr |             |
|             |             |             | ives        |             |
|             |             |             |         the |             |
|             |             |             |         nex |             |
|             |             |             | t           |             |
|             |             |             |         day |             |
|             |             |             |             |             |
|             |             |             |     -   Fli |             |
|             |             |             | ght         |             |
|             |             |             |         arr |             |
|             |             |             | ives        |             |
|             |             |             |         2   |             |
|             |             |             |         day |             |
|             |             |             | s           |             |
|             |             |             |         aft |             |
|             |             |             | er          |             |
|             |             |             |         dep |             |
|             |             |             | arture      |             |
|             |             |             |             |             |
|             |             |             |     -   Ope |             |
|             |             |             | n           |             |
|             |             |             |         jaw |             |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.6       | Important   | -   The     | -   getFlig |
|             |             | Information |     Importa | htContract  |
|             |             |             | nt          |             |
|             |             |             |     Informa | -   Returne |
|             |             |             | tion        | d           |
|             |             |             |     must be |     under   |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"impor |
|             |             |             |     for the | tant\_info\ |
|             |             |             |     selecte | _data\"     |
|             |             |             | d           |     node.   |
|             |             |             |     rate    |             |
|             |             |             |             | -   \#fare\ |
|             |             |             |     -   The | _rules\_STA |
|             |             |             |         \"D | RT\#full    |
|             |             |             | isinsection |     fare    |
|             |             |             | \"          |     rules\# |
|             |             |             |         nod | full\_rules |
|             |             |             | e           | \_END       |
|             |             |             |         is  |     pulls   |
|             |             |             |         dis |     the     |
|             |             |             | played      |     \"fare\ |
|             |             |             |         whe | _rules\_dat |
|             |             |             | n           | a\"         |
|             |             |             |         app |     node.   |
|             |             |             | licable     |             |
|             |             |             |             |     -   \"f |
|             |             |             |             | ull         |
|             |             |             |             |         far |
|             |             |             |             | e           |
|             |             |             |             |         rul |
|             |             |             |             | es\"        |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#valid |
|             |             |             |             | \_passport\ |
|             |             |             |             | _START\#val |
|             |             |             |             | id          |
|             |             |             |             |     passpor |
|             |             |             |             | t\#valid\_p |
|             |             |             |             | assport\_EN |
|             |             |             |             | D\#         |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"valid |
|             |             |             |             | \_passport\ |
|             |             |             |             | "           |
|             |             |             |             |     node wi |
|             |             |             |             | thin        |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"v |
|             |             |             |             | alid        |
|             |             |             |             |         pas |
|             |             |             |             | sport\"     |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#disin |
|             |             |             |             | section\_ST |
|             |             |             |             | ART\#disins |
|             |             |             |             | ection.\#di |
|             |             |             |             | sinsection\ |
|             |             |             |             | _END\#      |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"disin |
|             |             |             |             | section\"   |
|             |             |             |             |     node wi |
|             |             |             |             | thin        |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"d |
|             |             |             |             | isinsection |
|             |             |             |             | \"          |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.7       | Terms &     |             | -   getPoli |
|             |             | Conditions  |             | cy.Flight   |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.8       | Privacy     |             | -   getPoli |
|             |             | Policy      |             | cy.Flight   |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.9       | Customer    | The         | Front end   |
|             |             | agreement   | customer    | change for  |
|             |             |             | must agree  | the partner |
|             |             |             | to the      |             |
|             |             |             | price and   |             |
|             |             |             | all terms   |             |
|             |             |             | in order to |             |
|             |             |             | book, this  |             |
|             |             |             | can be:     |             |
|             |             |             |             |             |
|             |             |             | -   Initial |             |
|             |             |             | s           |             |
|             |             |             |     input   |             |
|             |             |             |     box     |             |
|             |             |             |             |             |
|             |             |             | -   Check   |             |
|             |             |             |     box     |             |
|             |             |             |             |             |
|             |             |             | -   etc.    |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1         | Trip Id     | The Trip Id | -   getFlig |
|             |             |             | that is     | htLookUp    |
|             |             |             | returned    |             |
|             |             |             | must be     | -   Returne |
|             |             |             | displayed   | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"booki |
|             |             |             |             | ng\_id\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"resul |
|             |             |             |             | ts\"        |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.2         | Airline     | The airline | -   getFlig |
|             |             | confirmatio | confirmatio | htLookUp    |
|             |             | n           | n           |             |
|             |             | number      | number that | -   Returne |
|             |             |             | is returned | d           |
|             |             |             | must be     |     under   |
|             |             |             | displayed   |     the     |
|             |             |             |             |     \"Carri |
|             |             |             |             | erLocator\" |
|             |             |             |             |     node(s) |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"airli |
|             |             |             |             | ne\_data\"  |
|             |             |             |             |     cluster |
|             |             |             |             | (s).        |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.3         | Booking     | The status  | -   getFlig |
|             |             | status      | of the      | htLookUp    |
|             |             |             | reservation |             |
|             |             |             | is          | -   Returne |
|             |             |             | displayed   | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"book\ |
|             |             |             |             | _status\"   |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"resul |
|             |             |             |             | ts\"        |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.4         | Summary of  | -   Ticket  | -   getFlig |
|             |             | Charges     |     price   | htLookUp    |
|             |             |             |     is      |             |
|             |             |             |     display | -   Ticket  |
|             |             |             | ed          |     prices  |
|             |             |             |             |     is      |
|             |             |             |     -   Not |     returne |
|             |             |             |         mul | d           |
|             |             |             | tiplied     |     under   |
|             |             |             |         by  |     the     |
|             |             |             |         the |     \"sourc |
|             |             |             |         amo | e\_base\_fa |
|             |             |             | unt         | re\"        |
|             |             |             |         of  |     node    |
|             |             |             |         tra |     within  |
|             |             |             | velers/tick |     the     |
|             |             |             | ets         |     \"price |
|             |             |             |             | \_details\" |
|             |             |             | -   Taxes   |     cluster |
|             |             |             |     and     | .           |
|             |             |             |     Fees    |             |
|             |             |             |     are     | -   Taxes   |
|             |             |             |     display |     and     |
|             |             |             | ed          |     Fees    |
|             |             |             |             |     are     |
|             |             |             |     -   \"T |     returne |
|             |             |             | axes        | d           |
|             |             |             |         and |     under   |
|             |             |             |         Fee |     the     |
|             |             |             | s\"         |     \"sourc |
|             |             |             |         is  | e\_taxes\_a |
|             |             |             |         hyp | nd\_fees\"  |
|             |             |             | erlinked    |     node    |
|             |             |             |         to  |     within  |
|             |             |             |         a   |     the     |
|             |             |             |         lig |     \"price |
|             |             |             | ht          | \_details\" |
|             |             |             |         box |     cluster |
|             |             |             |         tha | .           |
|             |             |             | t           |             |
|             |             |             |         dis |     -   \"T |
|             |             |             | plays       | axes        |
|             |             |             |         add |         and |
|             |             |             | itional     |         Fee |
|             |             |             |         ver | s\"         |
|             |             |             | biage       |         pul |
|             |             |             |             | ls          |
|             |             |             | -   Total   |         the |
|             |             |             |     per     |         \"t |
|             |             |             |     ticket  | axes\_and\_ |
|             |             |             |     is      | fees\"      |
|             |             |             |     display |         nod |
|             |             |             | ed          | e           |
|             |             |             |             |         wit |
|             |             |             | -   Number  | hin         |
|             |             |             |     of      |         the |
|             |             |             |     tickets |         \"p |
|             |             |             |     is      | opup\_data\ |
|             |             |             |     display | "           |
|             |             |             | ed          |         clu |
|             |             |             |             | ster        |
|             |             |             | -   The     |             |
|             |             |             |     total   | -   Total   |
|             |             |             |     price   |     per     |
|             |             |             |     is      |     ticket  |
|             |             |             |     display |     is      |
|             |             |             | ed          |     returne |
|             |             |             |             | d           |
|             |             |             | -   The     |     under   |
|             |             |             |     price   |     the     |
|             |             |             |     disclai |     \"sourc |
|             |             |             | mer         | e\_total\_f |
|             |             |             |     is      | are\_per\_t |
|             |             |             |     display | icket\"     |
|             |             |             | ed          |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     cluster |
|             |             |             |             |             |
|             |             |             |             | -   Number  |
|             |             |             |             |     of      |
|             |             |             |             |     tickets |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"numbe |
|             |             |             |             | r\_of\_pass |
|             |             |             |             | engers\"    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"itine |
|             |             |             |             | rary\_data\ |
|             |             |             |             | "           |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             | -   Total   |
|             |             |             |             |     price   |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"sourc |
|             |             |             |             | e\_total\_f |
|             |             |             |             | are\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     price   |
|             |             |             |             |     disclai |
|             |             |             |             | mer         |
|             |             |             |             |     is a    |
|             |             |             |             |     front   |
|             |             |             |             |     end     |
|             |             |             |             |     change  |
|             |             |             |             |     for the |
|             |             |             |             |     partner |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"B |
|             |             |             |             | aggage      |
|             |             |             |             |         Fee |
|             |             |             |             | s\"         |
|             |             |             |             |         pul |
|             |             |             |             | ls          |
|             |             |             |             |         the |
|             |             |             |             |         \"b |
|             |             |             |             | aggage\_fee |
|             |             |             |             | s\"         |
|             |             |             |             |         nod |
|             |             |             |             | e           |
|             |             |             |             |         wit |
|             |             |             |             | hin         |
|             |             |             |             |         the |
|             |             |             |             |         \"p |
|             |             |             |             | opup\_data\ |
|             |             |             |             | "           |
|             |             |             |             |         clu |
|             |             |             |             | ster.       |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.5         | Ticket      | All ticket  | -   getFlig |
|             |             | number(s)   | numbers are | htLookUp    |
|             |             |             | displayed   |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"ticke |
|             |             |             |             | t\_number\" |
|             |             |             |             |     node(s) |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"passe |
|             |             |             |             | ngers\"     |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.6         | Baggage     | A link to   | -   getFlig |
|             |             | fees        | the baggage | htLookUp    |
|             |             |             | fees is     |             |
|             |             |             | displayed   | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_url\"     |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"bagga |
|             |             |             |             | ge\_carrier |
|             |             |             |             | \"          |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.7         | Origin city | -   The     | -   getFlig |
|             |             | & airport   |     origin  | htLookUp    |
|             |             |             |     city is |             |
|             |             |             |     display | -   Returne |
|             |             |             | ed          | d           |
|             |             |             |             |     under   |
|             |             |             | -   The     |     the     |
|             |             |             |     origin  |     \"city\ |
|             |             |             |     airport | ",          |
|             |             |             |     is      |     \"name\ |
|             |             |             |     display | ",          |
|             |             |             | ed          |     &       |
|             |             |             |             |     \"code\ |
|             |             |             | -   The     | "           |
|             |             |             |     origin  |     nodes   |
|             |             |             |     airport |     within  |
|             |             |             |     code is |     the     |
|             |             |             |     display |     \"depar |
|             |             |             | ed          | ture\"      |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.8         | Destination | -   The     | -   getFlig |
|             |             | city &      |     destina | htLookUp    |
|             |             | airport     | tion        |             |
|             |             |             |     city is | -   Returne |
|             |             |             |     display | d           |
|             |             |             | ed          |     under   |
|             |             |             |             |     the     |
|             |             |             | -   The     |     \"city\ |
|             |             |             |     destina | ",          |
|             |             |             | tion        |     \"name\ |
|             |             |             |     airport | ",          |
|             |             |             |     is      |     &       |
|             |             |             |     display |     \"code\ |
|             |             |             | ed          | "           |
|             |             |             |             |     nodes   |
|             |             |             | -   The     |     within  |
|             |             |             |     destina |     the     |
|             |             |             | tion        |     \"arriv |
|             |             |             |     airport | al\"        |
|             |             |             |     code is |     node of |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.9         | Flight      | All flight  | -   getFlig |
|             |             | number(s)   | numbers are | htLookUp    |
|             |             |             | displayed   |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_number\" |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.0       | Number of   | The amount  | -   getFlig |
|             |             | stops       | of stops is | htLookUp    |
|             |             |             | displayed   |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"stop\ |
|             |             |             |             | _count\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.1       | Departure   | All         | -   getFlig |
|             |             | date(s) &   | departure   | htLookUp    |
|             |             | time(s)     | dates and   |             |
|             |             |             | times are   | -   Returne |
|             |             |             | displayed   | d           |
|             |             |             | for each    |     under   |
|             |             |             | slice       |     the     |
|             |             |             |             |     \"datet |
|             |             |             |             | ime\"       |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"depar |
|             |             |             |             | ture\"      |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.2       | Arrival     | All arrival | -   getFlig |
|             |             | date(s) &   | dates and   | htLookUp    |
|             |             | time(s)     | times are   |             |
|             |             |             | displayed   | -   Returne |
|             |             |             | for each    | d           |
|             |             |             | slice       |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"datet |
|             |             |             |             | ime\"       |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"arriv |
|             |             |             |             | al\"        |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.3       | Trip        | -   The     | -   getFlig |
|             |             | duration    |     total   | htLookUp    |
|             |             |             |     trip    |             |
|             |             |             |     duratio | -   Total   |
|             |             |             | n           |     trip    |
|             |             |             |     is      |     duratio |
|             |             |             |     display | n           |
|             |             |             | ed          |     is      |
|             |             |             |             |     returne |
|             |             |             | -   The     | d           |
|             |             |             |     duratio |     under   |
|             |             |             | n           |     the     |
|             |             |             |     for     |     \"durat |
|             |             |             |     each    | ion\"       |
|             |             |             |     slice   |     node    |
|             |             |             |     is      |     within  |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             |             |
|             |             |             |             | -   Slice   |
|             |             |             |             |     duratio |
|             |             |             |             | n           |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"durat |
|             |             |             |             | ion\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.4       | Layover     | -   Layover | -   getFlig |
|             |             | information |     duratio | htLookUp    |
|             |             |             | n           |             |
|             |             |             |     is      | -   Returne |
|             |             |             |     display | d           |
|             |             |             | ed          |     under   |
|             |             |             |             |     the     |
|             |             |             | -   The     |     \"durat |
|             |             |             |     airport | ion\"       |
|             |             |             |     name(s) |     node    |
|             |             |             |     is      |     within  |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"notes |
|             |             |             |             | \"          |
|             |             |             | -   The     |     node of |
|             |             |             |     airport |     the     |
|             |             |             |     code(s) |     \"fligh |
|             |             |             |     is      | t\_data\"   |
|             |             |             |     display |     cluster |
|             |             |             | ed          | s           |
|             |             |             |             |             |
|             |             |             |             | -   Airport |
|             |             |             |             |     name &  |
|             |             |             |             |     code    |
|             |             |             |             |     are     |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"value |
|             |             |             |             | \"          |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"notes |
|             |             |             |             | \"          |
|             |             |             |             |     node of |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.5       | Carrier(s)  | The         | -   getFlig |
|             |             |             | name/logo   | htLookUp    |
|             |             |             | for the     |             |
|             |             |             | carrier(s)  | -   Returne |
|             |             |             | is          | d           |
|             |             |             | displayed   |     under   |
|             |             |             | for each    |     the     |
|             |             |             | slice       |     \"name\ |
|             |             |             |             | "           |
|             |             |             |             |     &       |
|             |             |             |             |     \"logo\ |
|             |             |             |             | "           |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"slice |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.6       | Codeshare   | The         | -   getFlig |
|             |             | (if         | codeshare   | htLookUp    |
|             |             | applicable) | verbiage is |             |
|             |             |             | displayed   | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"opera |
|             |             |             |             | ting\_airli |
|             |             |             |             | ne\"        |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\"         |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.7       | Aircraft    | The         | -   getFlig |
|             |             | type        | aircraft    | htLookUp    |
|             |             |             | type(s) is  |             |
|             |             |             | displayed   | -   Returne |
|             |             |             | for each    | d           |
|             |             |             | slice       |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"aircr |
|             |             |             |             | aft\"       |
|             |             |             |             |     &       |
|             |             |             |             |     \"aircr |
|             |             |             |             | aft\_type\" |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.8       | Cabin class | The cabin   | -   getFlig |
|             |             |             | class is    | htLookUp    |
|             |             |             | displayed   |             |
|             |             |             | for each    | -   Returne |
|             |             |             | slice       | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"cabin |
|             |             |             |             | \_name\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"fligh |
|             |             |             |             | t\_data\"   |
|             |             |             |             |     cluster |
|             |             |             |             | s           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.9       | Flight      | -   Any     | -   getFlig |
|             |             | warnings &  |     flight  | htLookUp    |
|             |             | highlights  |     warning |             |
|             |             |             | s           | -   Returne |
|             |             |             |     or      | d           |
|             |             |             |     highlig |     under   |
|             |             |             | hts         |     the     |
|             |             |             |     are     |     \"notes |
|             |             |             |     display | \"          |
|             |             |             | ed          |     node(s) |
|             |             |             |             |     within  |
|             |             |             |     -   Ove |     the     |
|             |             |             | rnight      |     \"fligh |
|             |             |             |         con | t\_data\"   |
|             |             |             | nection     |     cluster |
|             |             |             |             | s           |
|             |             |             |     -   Fli |             |
|             |             |             | ght         |             |
|             |             |             |         arr |             |
|             |             |             | ives        |             |
|             |             |             |         the |             |
|             |             |             |         nex |             |
|             |             |             | t           |             |
|             |             |             |         day |             |
|             |             |             |             |             |
|             |             |             |     -   Fli |             |
|             |             |             | ght         |             |
|             |             |             |         arr |             |
|             |             |             | ives        |             |
|             |             |             |         2   |             |
|             |             |             |         day |             |
|             |             |             | s           |             |
|             |             |             |         aft |             |
|             |             |             | er          |             |
|             |             |             |         dep |             |
|             |             |             | arture      |             |
|             |             |             |             |             |
|             |             |             |     -   Ope |             |
|             |             |             | n           |             |
|             |             |             |         jaw |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.2.0       | Important   | -   The     | -   getFlig |
|             |             | Information |     Importa | htLookUp    |
|             |             |             | nt          |             |
|             |             |             |     Informa | -   Returne |
|             |             |             | tion        | d           |
|             |             |             |     must be |     under   |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"impor |
|             |             |             |     for the | tant\_info\ |
|             |             |             |     selecte | _data\"     |
|             |             |             | d           |     node.   |
|             |             |             |     rate    |             |
|             |             |             |             | -   \#fligh |
|             |             |             |     -   The | t\_schedule |
|             |             |             |         \"D | \_START\#Fl |
|             |             |             | isinsection | ight        |
|             |             |             | \"          |     Schedul |
|             |             |             |         nod | e\#flight\_ |
|             |             |             | e           | schedule\_E |
|             |             |             |         is  | ND\# pulls  |
|             |             |             |         dis |     the     |
|             |             |             | played      |     \"fligh |
|             |             |             |         whe | t\_schedule |
|             |             |             | n           | \"          |
|             |             |             |         app |     node    |
|             |             |             | licable     |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"F |
|             |             |             |             | light       |
|             |             |             |             |         Sch |
|             |             |             |             | edule\"     |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#bag\_ |
|             |             |             |             | spec\_requi |
|             |             |             |             | rements\_ST |
|             |             |             |             | ART\#Baggag |
|             |             |             |             | e/Special   |
|             |             |             |             |     require |
|             |             |             |             | ments\#bag\ |
|             |             |             |             | _spec\_requ |
|             |             |             |             | irements\_E |
|             |             |             |             | ND\#        |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"bag\_ |
|             |             |             |             | spec\_requi |
|             |             |             |             | rements\" n |
|             |             |             |             | ode         |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"B |
|             |             |             |             | aggage/Spec |
|             |             |             |             | ial         |
|             |             |             |             |         req |
|             |             |             |             | uirements\" |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#notic |
|             |             |             |             | e\_of\_inco |
|             |             |             |             | rp\_START\# |
|             |             |             |             | Notice      |
|             |             |             |             |     of      |
|             |             |             |             |     Incorpo |
|             |             |             |             | rated       |
|             |             |             |             |     Terms\# |
|             |             |             |             | notice\_of\ |
|             |             |             |             | _incorp\_EN |
|             |             |             |             | D\#         |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"notic |
|             |             |             |             | e\_of\_inco |
|             |             |             |             | rp\" node   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"N |
|             |             |             |             | otice       |
|             |             |             |             |         of  |
|             |             |             |             |         Inc |
|             |             |             |             | orporated   |
|             |             |             |             |         Ter |
|             |             |             |             | ms\"        |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#frequ |
|             |             |             |             | ent\_flyer\ |
|             |             |             |             | _START\#Fre |
|             |             |             |             | quent       |
|             |             |             |             |     Flyer   |
|             |             |             |             |     and     |
|             |             |             |             |     Loyalty |
|             |             |             |             |     Program |
|             |             |             |             | s\#frequent |
|             |             |             |             | \_flyer\_EN |
|             |             |             |             | D\#         |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"frequ |
|             |             |             |             | ent\_flyer\ |
|             |             |             |             | " node      |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"F |
|             |             |             |             | requent     |
|             |             |             |             |         Fly |
|             |             |             |             | er          |
|             |             |             |             |         and |
|             |             |             |             |         Loy |
|             |             |             |             | alty        |
|             |             |             |             |         Pro |
|             |             |             |             | grams\"     |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#check |
|             |             |             |             | \_in\_START |
|             |             |             |             | \#Airport   |
|             |             |             |             |     Check-I |
|             |             |             |             | n           |
|             |             |             |             |     and     |
|             |             |             |             |     Securit |
|             |             |             |             | y\#check\_i |
|             |             |             |             | n\_END\#    |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"check |
|             |             |             |             | \_in\" node |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"A |
|             |             |             |             | irport      |
|             |             |             |             |         Che |
|             |             |             |             | ck-In       |
|             |             |             |             |         and |
|             |             |             |             |         Sec |
|             |             |             |             | urity\"     |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#inter |
|             |             |             |             | nation\_tra |
|             |             |             |             | vel\_START\ |
|             |             |             |             | #Internatio |
|             |             |             |             | nal         |
|             |             |             |             |     Travel\ |
|             |             |             |             | #internatio |
|             |             |             |             | n\_travel\_ |
|             |             |             |             | END\#       |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"inter |
|             |             |             |             | national\_t |
|             |             |             |             | ravel\" nod |
|             |             |             |             | e           |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   Int |
|             |             |             |             | ernational  |
|             |             |             |             |         Tra |
|             |             |             |             | vel         |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#seat\ |
|             |             |             |             | _assignment |
|             |             |             |             | s\_START\#S |
|             |             |             |             | eat         |
|             |             |             |             |     Assignm |
|             |             |             |             | ents\#seat\ |
|             |             |             |             | _assignment |
|             |             |             |             | s\_END\#    |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   Sea |
|             |             |             |             | t           |
|             |             |             |             |         Ass |
|             |             |             |             | ignments    |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#valid |
|             |             |             |             | \_passport\ |
|             |             |             |             | _START\#val |
|             |             |             |             | id          |
|             |             |             |             |     passpor |
|             |             |             |             | t\#valid\_p |
|             |             |             |             | assport\_EN |
|             |             |             |             | D\#         |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"valid |
|             |             |             |             | \_passport\ |
|             |             |             |             | "           |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"v |
|             |             |             |             | alid        |
|             |             |             |             |         pas |
|             |             |             |             | sport\"     |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#disin |
|             |             |             |             | section\_ST |
|             |             |             |             | ART\#disins |
|             |             |             |             | ection.\#di |
|             |             |             |             | sinsection\ |
|             |             |             |             | _END\#      |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"disin |
|             |             |             |             | section\"   |
|             |             |             |             |     node wi |
|             |             |             |             | thin        |
|             |             |             |             |     the     |
|             |             |             |             |     \"popup |
|             |             |             |             | \_data\"    |
|             |             |             |             |     cluster |
|             |             |             |             | .           |
|             |             |             |             |             |
|             |             |             |             |     -   \"d |
|             |             |             |             | isinsection |
|             |             |             |             | \"          |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.2.1       | Airline(s)  | -   The     | -   getFlig |
|             |             | contact     |     airline | htLookUp    |
|             |             | information | (s)         |             |
|             |             |             |     is      | -   Returne |
|             |             |             |     display | d           |
|             |             |             | ed          |     under   |
|             |             |             |             |     the     |
|             |             |             | -   The     |     \"airli |
|             |             |             |     airline | ne\"        |
|             |             |             | (s)         |     nodes   |
|             |             |             |     phone   |     within  |
|             |             |             |     number  |     the     |
|             |             |             |     is      |     \"airli |
|             |             |             |     display | ne\_data\"  |
|             |             |             | ed          |     cluster |
|             |             |             |             | (s).        |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     website |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     confirm |             |
|             |             |             | ation       |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.2.2       | Customer    | The correct | -   getFlig |
|             |             | Service     | Customer    | htLookUp    |
|             |             | phone       | Service     |             |
|             |             | number      | number is   | -   Returne |
|             |             |             | displayed   | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"custo |
|             |             |             |             | mer\_servic |
|             |             |             |             | e\"         |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.2.3       | Link to     | A link to   | -   getFlig |
|             |             | cancel      | cancel or   | htVoidReque |
|             |             | reservation | to look up  | st          |
|             |             |             | the         |             |
|             |             |             | reservation |             |
|             |             |             | (and cancel |             |
|             |             |             | there) must |             |
|             |             |             | be          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1         | Trip Id     | The Trip Id |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.2         | Airline     | The airline |             |
|             |             | confirmatio | confirmatio |             |
|             |             | n           | n           |             |
|             |             | number      | number(s)   |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.3         | Booking     | The booking |             |
|             |             | status      | status is   |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.4         | Summary of  | -   Ticket  |             |
|             |             | Charges     |     price   |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             |     -   Not |             |
|             |             |             |         mul |             |
|             |             |             | tiplied     |             |
|             |             |             |         by  |             |
|             |             |             |         the |             |
|             |             |             |         amo |             |
|             |             |             | unt         |             |
|             |             |             |         of  |             |
|             |             |             |         tra |             |
|             |             |             | velers/tick |             |
|             |             |             | ets         |             |
|             |             |             |             |             |
|             |             |             | -   Taxes   |             |
|             |             |             |     and     |             |
|             |             |             |     Fees    |             |
|             |             |             |     are     |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Process |             |
|             |             |             | ing         |             |
|             |             |             |     Fees    |             |
|             |             |             |     are     |             |
|             |             |             |     display |             |
|             |             |             | ed,         |             |
|             |             |             |     if      |             |
|             |             |             |     applica |             |
|             |             |             | ble         |             |
|             |             |             |             |             |
|             |             |             | -   Total   |             |
|             |             |             |     per     |             |
|             |             |             |     ticket  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Number  |             |
|             |             |             |     of      |             |
|             |             |             |     tickets |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     total   |             |
|             |             |             |     price   |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     price   |             |
|             |             |             |     disclai |             |
|             |             |             | mer         |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.5         | Ticket      | The ticket  |             |
|             |             | number(s)   | number(s)   |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.6         | Origin city | -   The     |             |
|             |             | & airport   |     origin  |             |
|             |             |             |     city is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     origin  |             |
|             |             |             |     airport |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     origin  |             |
|             |             |             |     airport |             |
|             |             |             |     code is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.7         | Destination | -   The     |             |
|             |             | city &      |     destina |             |
|             |             | airport     | tion        |             |
|             |             |             |     city is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     destina |             |
|             |             |             | tion        |             |
|             |             |             |     airport |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     destina |             |
|             |             |             | tion        |             |
|             |             |             |     airport |             |
|             |             |             |     code is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.8         | Flight      | The flight  |             |
|             |             | number(s)   | number(s)   |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.9         | Number of   | The number  |             |
|             |             | stops       | of stops is |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.0       | Departure   | All         |             |
|             |             | date(s) &   | departure   |             |
|             |             | time(s)     | dates and   |             |
|             |             |             | times are   |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.1       | Arrival     | All arrival |             |
|             |             | date(s) &   | dates and   |             |
|             |             | time(s)     | times are   |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.2       | Trip        | -   The     |             |
|             |             | duration    |     total   |             |
|             |             |             |     trip    |             |
|             |             |             |     duratio |             |
|             |             |             | n           |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     duratio |             |
|             |             |             | n           |             |
|             |             |             |     for     |             |
|             |             |             |     each    |             |
|             |             |             |     slice   |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.3       | Layover     | -   Layover |             |
|             |             | information |     duratio |             |
|             |             |             | n           |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airport |             |
|             |             |             |     name(s) |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airport |             |
|             |             |             |     code(s) |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.4       | Carrier(s)  | The         |             |
|             |             |             | name/logo   |             |
|             |             |             | for the     |             |
|             |             |             | carrier(s)  |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.5       | Codeshare,  | The         |             |
|             |             | if          | codeshare   |             |
|             |             | applicable  | verbiage is |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.6       | Aircraft    | The         |             |
|             |             | type        | aircraft    |             |
|             |             |             | type(s) is  |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.7       | Cabin class | The cabin   |             |
|             |             |             | class is    |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.8       | Airline(s)  | -   The     |             |
|             |             | contact     |     airline |             |
|             |             | information | (s)         |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     phone   |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     website |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     confirm |             |
|             |             |             | ation       |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.9       | Customer    | The correct |             |
|             |             | Service     | Customer    |             |
|             |             | phone       | Service     |             |
|             |             | number      | number is   |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.1         | Trip Id     | The Trip Id |             |
| n           |             |             | is          |             |
| Email       |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.2         | Booking     | The booking |             |
| n           |             | status      | status is   |             |
| Email       |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.3         | Summary of  | -   Ticket  |             |
| n           |             | Charges     |     price   |             |
| Email       |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             |     -   Not |             |
|             |             |             |         mul |             |
|             |             |             | tiplied     |             |
|             |             |             |         by  |             |
|             |             |             |         the |             |
|             |             |             |         amo |             |
|             |             |             | unt         |             |
|             |             |             |         of  |             |
|             |             |             |         tra |             |
|             |             |             | velers/tick |             |
|             |             |             | ets         |             |
|             |             |             |             |             |
|             |             |             | -   Taxes   |             |
|             |             |             |     and     |             |
|             |             |             |     Fees    |             |
|             |             |             |     are     |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Process |             |
|             |             |             | ing         |             |
|             |             |             |     Fees    |             |
|             |             |             |     are     |             |
|             |             |             |     display |             |
|             |             |             | ed,         |             |
|             |             |             |     if      |             |
|             |             |             |     applica |             |
|             |             |             | ble         |             |
|             |             |             |             |             |
|             |             |             | -   Total   |             |
|             |             |             |     per     |             |
|             |             |             |     ticket  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Number  |             |
|             |             |             |     of      |             |
|             |             |             |     tickets |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     total   |             |
|             |             |             |     price   |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     price   |             |
|             |             |             |     disclai |             |
|             |             |             | mer         |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   All     |             |
|             |             |             |     values  |             |
|             |             |             |     show    |             |
|             |             |             |     zero    |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.4         | Ticket      | The ticket  |             |
| n           |             | number(s)   | number(s)   |             |
| Email       |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.5         | Origin city | -   The     |             |
| n           |             | & airport   |     origin  |             |
| Email       |             |             |     city is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     origin  |             |
|             |             |             |     airport |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     origin  |             |
|             |             |             |     airport |             |
|             |             |             |     code is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.6         | Destination | -   The     |             |
| n           |             | city &      |     destina |             |
| Email       |             | airport     | tion        |             |
|             |             |             |     city is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     destina |             |
|             |             |             | tion        |             |
|             |             |             |     airport |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     destina |             |
|             |             |             | tion        |             |
|             |             |             |     airport |             |
|             |             |             |     code is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.7         | Departure   | All         |             |
| n           |             | date(s) &   | departure   |             |
| Email       |             | time(s)     | dates and   |             |
|             |             |             | times are   |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.8         | Arrival     | All arrival |             |
| n           |             | date(s) &   | dates and   |             |
| Email       |             | time(s)     | times are   |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.9         | Flight      | The flight  |             |
| n           |             | number(s)   | number(s)   |             |
| Email       |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.1.0       | Carrier(s)  | The         |             |
| n           |             |             | name/logo   |             |
| Email       |             |             | for the     |             |
|             |             |             | carrier(s)  |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
|             |             |             | for each    |             |
|             |             |             | slice       |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.1.1       | Codeshare,  | The         |             |
| n           |             | if          | codeshare   |             |
| Email       |             | applicable  | verbiage is |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancellatio | 5.1.2       | Airline(s)  | -   The     |             |
| n           |             | contact     |     airline |             |
| Email       |             | information | (s)         |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     phone   |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     website |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     airline |             |
|             |             |             | (s)         |             |
|             |             |             |     confirm |             |
|             |             |             | ation       |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
