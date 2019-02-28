API Car Requirements Appendix
=============================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:

-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement

+-------------+-------------+-------------+-------------+-------------+
| **Page**    | **Requireme | **Requireme | **Expected  | **Additiona |
|             | nt          | nt**        | Result**    | l           |
|             | \#**        |             |             | Information |
|             |             |             |             | **          |
+=============+=============+=============+=============+=============+
| Results     | 1.1         | Base rate   | The base    | -   getResu |
|             |             |             | rate (daily | ltsV3       |
|             |             |             | or weekly)  |             |
|             |             |             | is          | -   Returne |
|             |             |             | displayed   | d           |
|             |             |             | for each    |     under   |
|             |             |             | rate        |     the     |
|             |             |             |             |     \"base\ |
|             |             |             |             | _rate\"     |
|             |             |             |             |     &       |
|             |             |             |             |     \"base\ |
|             |             |             |             | _type\"     |
|             |             |             |             |     nodes   |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.2         | Total price | The total   | -   getResu |
|             |             |             | price is    | ltsV3       |
|             |             |             | displayed   |             |
|             |             |             | for each    | -   Returne |
|             |             |             | rate        | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"total |
|             |             |             |             | \_price\"   |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.3         | Currency    | The correct | -   getResu |
|             |             |             | currency,   | ltsV3       |
|             |             |             | currency    |             |
|             |             |             | code, &     | -   Returne |
|             |             |             | currency    | d           |
|             |             |             | symbol are  |     under   |
|             |             |             | displayed   |     the     |
|             |             |             |             |     \"displ |
|             |             |             |             | ay\_currenc |
|             |             |             |             | y\"         |
|             |             |             |             |     &       |
|             |             |             |             |     \"displ |
|             |             |             |             | ay\_symbol\ |
|             |             |             |             | "           |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.4         | Rental      | The rental  | -   getResu |
|             |             | Company     | company     | ltsV3       |
|             |             |             | name/logo   |             |
|             |             |             | must be     | -   The     |
|             |             |             | displayed   |     rental  |
|             |             |             | for each    |     company |
|             |             |             | rate        |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"name\ |
|             |             |             |             | "           |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"partn |
|             |             |             |             | er\"        |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     logo is |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"logo\ |
|             |             |             |             | "           |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.5         | Pickup/Drop |             | -   getResu |
|             |             | off         |             | ltsV3       |
|             |             | information |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     pickup  |
|             |             |             |             |     locatio |
|             |             |             |             | n           |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"locat |
|             |             |             |             | ion\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"picku |
|             |             |             |             | p\"         |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     dropoff |
|             |             |             |             |     locatio |
|             |             |             |             | n           |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"locat |
|             |             |             |             | ion\"       |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"dropo |
|             |             |             |             | ff\"        |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.6         | Car type    | The car     | -   getResu |
|             |             |             | type must   | ltsV3       |
|             |             |             | be          |             |
|             |             |             | displayed   | -   Returne |
|             |             |             | for each    | d           |
|             |             |             | rate        |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"descr |
|             |             |             |             | iption\"    |
|             |             |             |             |     node    |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.7         | Car         | The         | -   getResu |
|             |             | amenities   | amenities   | ltsV3       |
|             |             |             | must be     |             |
|             |             |             | displayed   | -   The     |
|             |             |             | for each    |     amount  |
|             |             |             | rate        |     of      |
|             |             |             |             |     passeng |
|             |             |             |             | ers         |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"passe |
|             |             |             |             | ngers\"     |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     amount  |
|             |             |             |             |     of      |
|             |             |             |             |     suitcas |
|             |             |             |             | es          |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"bags\ |
|             |             |             |             | '           |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     transmi |
|             |             |             |             | ssion       |
|             |             |             |             |     informa |
|             |             |             |             | tion        |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"autom |
|             |             |             |             | atic\_trans |
|             |             |             |             | mission\"   |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             |     -   \"y |
|             |             |             |             | es\"        |
|             |             |             |             |         =   |
|             |             |             |             |         aut |
|             |             |             |             | omatic      |
|             |             |             |             |         tra |
|             |             |             |             | nsmission   |
|             |             |             |             |             |
|             |             |             |             |     -   \"n |
|             |             |             |             | o\"         |
|             |             |             |             |         =   |
|             |             |             |             |         man |
|             |             |             |             | ual         |
|             |             |             |             |         tra |
|             |             |             |             | nsmission   |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     air-con |
|             |             |             |             | ditioning   |
|             |             |             |             |     informa |
|             |             |             |             | tion        |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"air\_ |
|             |             |             |             | conditionin |
|             |             |             |             | g\"         |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             |     -   \"y |
|             |             |             |             | es\"        |
|             |             |             |             |         =   |
|             |             |             |             |         air |
|             |             |             |             | -conditioni |
|             |             |             |             | ng          |
|             |             |             |             |             |
|             |             |             |             |     -   \"n |
|             |             |             |             | o\"         |
|             |             |             |             |         =   |
|             |             |             |             |         no  |
|             |             |             |             |         air |
|             |             |             |             | -conditioni |
|             |             |             |             | ng          |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     mileage |
|             |             |             |             |     informa |
|             |             |             |             | tion        |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"milea |
|             |             |             |             | ge\"        |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             |     -   \"t |
|             |             |             |             | rue\"       |
|             |             |             |             |         =   |
|             |             |             |             |         unl |
|             |             |             |             | imited      |
|             |             |             |             |         mil |
|             |             |             |             | eage        |
|             |             |             |             |             |
|             |             |             |             |     -   \"f |
|             |             |             |             | alse\"      |
|             |             |             |             |         =   |
|             |             |             |             |         lim |
|             |             |             |             | ited        |
|             |             |             |             |         mil |
|             |             |             |             | eage        |
+-------------+-------------+-------------+-------------+-------------+
| Results     | 1.8         | Search box  | A search    | -   getCarA |
|             |             |             | box is      | utoComplete |
|             |             |             | accessible  |             |
|             |             |             | on the      |             |
|             |             |             | Results     |             |
|             |             |             | page        |             |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1         | Policy      | -   Credit  | -   getPoli |
|             |             | information |     card    | cy.Car      |
|             |             |             |     disclai |             |
|             |             |             | mer         | -   getCont |
|             |             |             |             | ractRequest |
|             |             |             | -   Accepta |             |
|             |             |             | ble         |     -   Ret |
|             |             |             |     forms   | urned       |
|             |             |             |     of      |         und |
|             |             |             |     payment | er          |
|             |             |             |     link    |         the |
|             |             |             |             |         \"c |
|             |             |             | -   Under   | ar\_policy\ |
|             |             |             |     25?     | _data\"     |
|             |             |             |     link    |         nod |
|             |             |             |             | e.          |
|             |             |             | -   Terms & |             |
|             |             |             |     Conditi |             |
|             |             |             | ons         |             |
|             |             |             |             |             |
|             |             |             | -   Privacy |             |
|             |             |             |     Policy  |             |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.2         | Pickup      | -   The     | -   getCont |
|             |             | location    |     selecte | ractRequest |
|             |             |             | d           |             |
|             |             |             |     pickup  | -   Returne |
|             |             |             |     locatio | d           |
|             |             |             | n           |     under   |
|             |             |             |     must be |     the     |
|             |             |             |     display |     \"picku |
|             |             |             | ed          | p\_airport\ |
|             |             |             |             | _name\"     |
|             |             |             | -   Day of  |     and     |
|             |             |             |     the     |     subsequ |
|             |             |             |     week    | ent         |
|             |             |             |     must be |     address |
|             |             |             |     include | /location   |
|             |             |             | d           |     nodes   |
|             |             |             |             |     for     |
|             |             |             | -   Time of |     airport |
|             |             |             |     day     |     locatio |
|             |             |             |     must be | ns          |
|             |             |             |     include |             |
|             |             |             | d           | -   Returne |
|             |             |             |             | d           |
|             |             |             | -   The     |     under   |
|             |             |             |     full    |     the     |
|             |             |             |     address |     \"picku |
|             |             |             |     must be | p\_address\ |
|             |             |             |     display | "           |
|             |             |             | ed          |     node    |
|             |             |             |             |     and     |
|             |             |             |             |     subsequ |
|             |             |             |             | ent         |
|             |             |             |             |     address |
|             |             |             |             | /location   |
|             |             |             |             |     nodes   |
|             |             |             |             |     for     |
|             |             |             |             |     off-air |
|             |             |             |             | port        |
|             |             |             |             |     (city)  |
|             |             |             |             |     locatio |
|             |             |             |             | ns          |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.3         | Dropoff     | -   The     | -   getCont |
|             |             | location    |     selecte | ractRequest |
|             |             | (if         | d           |             |
|             |             | different   |     dropoff | -   Returne |
|             |             | from        |     locatio | d           |
|             |             | pickup)     | n           |     under   |
|             |             |             |     must be |     the     |
|             |             |             |     display |     \"dropo |
|             |             |             | ed          | ff\_airport |
|             |             |             |             | \_name\"    |
|             |             |             | -   Day of  |     and     |
|             |             |             |     the     |     subsequ |
|             |             |             |     week    | ent         |
|             |             |             |     must be |     address |
|             |             |             |     include | /location   |
|             |             |             | d           |     nodes   |
|             |             |             |             |     for     |
|             |             |             | -   Time of |     airport |
|             |             |             |     day     |     locatio |
|             |             |             |     must be | ns          |
|             |             |             |     include |             |
|             |             |             | d           | -   Returne |
|             |             |             |             | d           |
|             |             |             | -   The     |     under   |
|             |             |             |     full    |     the     |
|             |             |             |     address |     \"dropo |
|             |             |             |     must be | ff\_address |
|             |             |             |     display | \"          |
|             |             |             | ed          |     node    |
|             |             |             |             |     and     |
|             |             |             |             |     subsequ |
|             |             |             |             | ent         |
|             |             |             |             |     address |
|             |             |             |             | /location   |
|             |             |             |             |     nodes   |
|             |             |             |             |     for     |
|             |             |             |             |     off-air |
|             |             |             |             | port        |
|             |             |             |             |     (city)  |
|             |             |             |             |     locatio |
|             |             |             |             | ns          |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.4         | Counter     | The data    | -   getCont |
|             |             | directions/ | returned    | ractRequest |
|             |             | airport     | must be     |             |
|             |             | terminal    | displayed;  | -   Returne |
|             |             | information | it can be   | d           |
|             |             |             | hidden      |     under   |
|             |             |             | behind a    |     the     |
|             |             |             | click       |     \"shutt |
|             |             |             |             | le\_text\"  |
|             |             |             |             |     node.   |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.5         | Hours of    | The rental  | -   getCont |
|             |             | operation   | company\'s  | ractRequest |
|             |             |             | hours of    |             |
|             |             |             | operations  | -   Returne |
|             |             |             | are         | d           |
|             |             |             | displayed   |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"open\ |
|             |             |             |             | "           |
|             |             |             |             |     &       |
|             |             |             |             |     \"close |
|             |             |             |             | \"          |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"picku |
|             |             |             |             | p\_hours\_d |
|             |             |             |             | ata\"       |
|             |             |             |             |     node    |
|             |             |             |             |     for     |
|             |             |             |             |     pickup  |
|             |             |             |             |     locatio |
|             |             |             |             | ns.         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"open\ |
|             |             |             |             | "           |
|             |             |             |             |     &       |
|             |             |             |             |     \"close |
|             |             |             |             | \"          |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"dropo |
|             |             |             |             | ff\_hours\_ |
|             |             |             |             | data\"      |
|             |             |             |             |     node    |
|             |             |             |             |     for     |
|             |             |             |             |     dropoff |
|             |             |             |             |     locatio |
|             |             |             |             | ns          |
|             |             |             |             |     (if     |
|             |             |             |             |     differe |
|             |             |             |             | nt          |
|             |             |             |             |     than    |
|             |             |             |             |     pickup) |
|             |             |             |             | .           |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.6         | Rental      | The rental  | -   getCont |
|             |             | company     | company     | ractRequest |
|             |             |             | name/logo   |             |
|             |             |             | is          | -   The     |
|             |             |             | displayed   |     rental  |
|             |             |             |             |     company |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"partn |
|             |             |             |             | er\_name\"  |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     logo is |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"partn |
|             |             |             |             | er\_logo\"  |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.7         | Car type    | The car     | -   getCont |
|             |             |             | type is     | ractRequest |
|             |             |             | displayed   |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"descr |
|             |             |             |             | iption\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\_ |
|             |             |             |             | info\"      |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.8         | Car         | The         | -   getCont |
|             |             | amenities   | amenities   | ractRequest |
|             |             |             | are         |             |
|             |             |             | displayed   | -   The     |
|             |             |             |             |     amount  |
|             |             |             |             |     of      |
|             |             |             |             |     passeng |
|             |             |             |             | ers         |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"passe |
|             |             |             |             | ngers\"     |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\_ |
|             |             |             |             | info\"      |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     amount  |
|             |             |             |             |     of      |
|             |             |             |             |     suitcas |
|             |             |             |             | es          |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"bags\ |
|             |             |             |             | '           |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     transmi |
|             |             |             |             | ssion       |
|             |             |             |             |     informa |
|             |             |             |             | tion        |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"autom |
|             |             |             |             | atic\_trans |
|             |             |             |             | mission\"   |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             |     -   \"y |
|             |             |             |             | es\"        |
|             |             |             |             |         =   |
|             |             |             |             |         aut |
|             |             |             |             | omatic      |
|             |             |             |             |         tra |
|             |             |             |             | nsmission   |
|             |             |             |             |             |
|             |             |             |             |     -   \"n |
|             |             |             |             | o\"         |
|             |             |             |             |         =   |
|             |             |             |             |         man |
|             |             |             |             | ual         |
|             |             |             |             |         tra |
|             |             |             |             | nsmission   |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     air-con |
|             |             |             |             | ditioning   |
|             |             |             |             |     informa |
|             |             |             |             | tion        |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"air\_ |
|             |             |             |             | conditionin |
|             |             |             |             | g\"         |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             |     -   \"y |
|             |             |             |             | es\"        |
|             |             |             |             |         =   |
|             |             |             |             |         air |
|             |             |             |             | -conditioni |
|             |             |             |             | ng          |
|             |             |             |             |             |
|             |             |             |             |     -   \"n |
|             |             |             |             | o\"         |
|             |             |             |             |         =   |
|             |             |             |             |         no  |
|             |             |             |             |         air |
|             |             |             |             | -conditioni |
|             |             |             |             | ng          |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.9         | Mileage     | The mileage | -   getCont |
|             |             |             | is          | ractRequest |
|             |             |             | displayed   |             |
|             |             |             |             | -   The     |
|             |             |             |             |     mileage |
|             |             |             |             |     informa |
|             |             |             |             | tion        |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"milea |
|             |             |             |             | ge\"        |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"price |
|             |             |             |             | \_details\" |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             |     -   \"u |
|             |             |             |             | nlimited\"  |
|             |             |             |             |         =   |
|             |             |             |             |         unl |
|             |             |             |             | imited      |
|             |             |             |             |         mil |
|             |             |             |             | eage        |
|             |             |             |             |             |
|             |             |             |             |     -   \"l |
|             |             |             |             | imited\"    |
|             |             |             |             |         =   |
|             |             |             |             |         lim |
|             |             |             |             | ited        |
|             |             |             |             |         mil |
|             |             |             |             | eage        |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.0       | Free        | Verbiage or | Front end   |
|             |             | cancellatio | banner is   | change for  |
|             |             | n           | displayed   | the partner |
|             |             | verbiage    | for post    |             |
|             |             | for         | paid rates  |             |
|             |             | post-paid   |             |             |
|             |             | rates       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.1       | Summary of  | -   The     | -   getCont |
|             |             | Charges     |     base    | ractRequest |
|             |             |             |     rate is |             |
|             |             |             |     display | -   The     |
|             |             |             | ed          |     base    |
|             |             |             |             |     rate is |
|             |             |             | -   The     |     returne |
|             |             |             |     number  | d           |
|             |             |             |     of      |     under   |
|             |             |             |     days/we |     the     |
|             |             |             | eks         |     \"displ |
|             |             |             |     is      | ay\_price\" |
|             |             |             |     display |     node    |
|             |             |             | ed          |     within  |
|             |             |             |             |     the     |
|             |             |             | -   Extra   |     \"prici |
|             |             |             |     day     | ng\"        |
|             |             |             |     rate is |     node.   |
|             |             |             |     display |             |
|             |             |             | ed          | -   The     |
|             |             |             |     when    |     correct |
|             |             |             |     returne |     label   |
|             |             |             | d           |     as well |
|             |             |             |             |     as      |
|             |             |             | -   The     |     number  |
|             |             |             |     Taxes   |     of      |
|             |             |             |     and     |     days/we |
|             |             |             |     Fees is | eks         |
|             |             |             |     display |     are     |
|             |             |             | ed          |     returne |
|             |             |             |             | d           |
|             |             |             |     -   Not |     under   |
|             |             |             |         dis |     the     |
|             |             |             | played      |     \"type\ |
|             |             |             |         for | "           |
|             |             |             |         pre |     &       |
|             |             |             | paid        |     \"facto |
|             |             |             |         rat | r\"         |
|             |             |             | es,         |     nodes   |
|             |             |             |         lum |     within  |
|             |             |             | ped         |     the     |
|             |             |             |         int |     \"prici |
|             |             |             | o           | ng\"        |
|             |             |             |         tot |     node.   |
|             |             |             | al          |             |
|             |             |             |             |     -   Ext |
|             |             |             |     -   \"T | ra          |
|             |             |             | axes        |         day |
|             |             |             |         and |         rat |
|             |             |             |         Fee | e           |
|             |             |             | s\"         |         is  |
|             |             |             |         is  |         ret |
|             |             |             |         hyp | urned       |
|             |             |             | erlinked    |         und |
|             |             |             |         to  | er          |
|             |             |             |         a   |         the |
|             |             |             |         lig |         \"t |
|             |             |             | ht          | ype\"       |
|             |             |             |         box |         &   |
|             |             |             |         tha |         \"f |
|             |             |             | t           | actor\"     |
|             |             |             |         dis |         nod |
|             |             |             | plays       | es          |
|             |             |             |         add |         wit |
|             |             |             | itional     | hin         |
|             |             |             |         ver |         the |
|             |             |             | biage       |         2nd |
|             |             |             |             |         \"b |
|             |             |             | -   The     | reakdown\"  |
|             |             |             |     total   |         clu |
|             |             |             |     is      | ster        |
|             |             |             |     display |             |
|             |             |             | ed          |         -   |
|             |             |             |             |  type       |
|             |             |             |     -   Pos |             |
|             |             |             | t           |  =          |
|             |             |             |         pai |             |
|             |             |             | d           |  \"Extra    |
|             |             |             |         rat |             |
|             |             |             | es          |  Day\"      |
|             |             |             |         dis |             |
|             |             |             | play        |         -   |
|             |             |             |         the |  factor     |
|             |             |             |         amo |             |
|             |             |             | unt         |  =          |
|             |             |             |         due |             |
|             |             |             |         at  |  amount     |
|             |             |             |         cou |             |
|             |             |             | nter        |  of         |
|             |             |             |             |             |
|             |             |             |     -   Pre |  extra      |
|             |             |             | paid        |             |
|             |             |             |         rat |  days       |
|             |             |             | es          |             |
|             |             |             |         dis | -   The     |
|             |             |             | play        |     Taxes   |
|             |             |             |         the |     and     |
|             |             |             |         amo |     Fees    |
|             |             |             | unt         |     are     |
|             |             |             |         due |     returne |
|             |             |             |         now | d           |
|             |             |             |             |     under   |
|             |             |             | -   The     |     the     |
|             |             |             |     price   |     \"sourc |
|             |             |             |     disclai | e\_total\"  |
|             |             |             | mer         |     node    |
|             |             |             |     is      |     within  |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"taxes |
|             |             |             |             | \_and\_fees |
|             |             |             |             | \"          |
|             |             |             |             |     node.   |
|             |             |             |             |             |
|             |             |             |             |     -   \"T |
|             |             |             |             | axes        |
|             |             |             |             |         and |
|             |             |             |             |         Fee |
|             |             |             |             | s\"         |
|             |             |             |             |         mus |
|             |             |             |             | t           |
|             |             |             |             |         be  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |         tha |
|             |             |             |             | t           |
|             |             |             |             |         dis |
|             |             |             |             | plays       |
|             |             |             |             |         add |
|             |             |             |             | itional     |
|             |             |             |             |         ver |
|             |             |             |             | biage       |
|             |             |             |             |         tha |
|             |             |             |             | t           |
|             |             |             |             |         is  |
|             |             |             |             |         ret |
|             |             |             |             | urned       |
|             |             |             |             |         und |
|             |             |             |             | er          |
|             |             |             |             |         the |
|             |             |             |             |         \"b |
|             |             |             |             | reakdown\_d |
|             |             |             |             | ata\"       |
|             |             |             |             |         nod |
|             |             |             |             | e           |
|             |             |             |             |         wit |
|             |             |             |             | hin         |
|             |             |             |             |         the |
|             |             |             |             |         \"t |
|             |             |             |             | axes\_and\_ |
|             |             |             |             | fees\"      |
|             |             |             |             |         nod |
|             |             |             |             | e.          |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     correct |
|             |             |             |             |     label   |
|             |             |             |             |     and     |
|             |             |             |             |     total   |
|             |             |             |             |     are     |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"total |
|             |             |             |             | \_label\".  |
|             |             |             |             |             |
|             |             |             |             |     -   The |
|             |             |             |             |         tot |
|             |             |             |             | al          |
|             |             |             |             |         wil |
|             |             |             |             | l           |
|             |             |             |             |         ret |
|             |             |             |             | urned       |
|             |             |             |             |         und |
|             |             |             |             | er          |
|             |             |             |             |         the |
|             |             |             |             |         \"p |
|             |             |             |             | repaid\_at\ |
|             |             |             |             | _counter\"  |
|             |             |             |             |         for |
|             |             |             |             |         pos |
|             |             |             |             | t           |
|             |             |             |             |         pai |
|             |             |             |             | d           |
|             |             |             |             |         boo |
|             |             |             |             | kings       |
|             |             |             |             |             |
|             |             |             |             |     -   The |
|             |             |             |             |         tot |
|             |             |             |             | al          |
|             |             |             |             |         wil |
|             |             |             |             | l           |
|             |             |             |             |         ret |
|             |             |             |             | urned       |
|             |             |             |             |         und |
|             |             |             |             | er          |
|             |             |             |             |         the |
|             |             |             |             |         \"p |
|             |             |             |             | repaid\_at\ |
|             |             |             |             | _booking\"  |
|             |             |             |             |         nod |
|             |             |             |             | e           |
|             |             |             |             |         for |
|             |             |             |             |         pre |
|             |             |             |             | paid        |
|             |             |             |             |         boo |
|             |             |             |             | kings.      |
|             |             |             |             |             |
|             |             |             |             | -   If      |
|             |             |             |             |     wanting |
|             |             |             |             |     to      |
|             |             |             |             |     display |
|             |             |             |             |     a       |
|             |             |             |             |     differe |
|             |             |             |             | nt          |
|             |             |             |             |     currenc |
|             |             |             |             | y           |
|             |             |             |             |     other   |
|             |             |             |             |     than    |
|             |             |             |             |     the     |
|             |             |             |             |     source  |
|             |             |             |             |     (curren |
|             |             |             |             | cy          |
|             |             |             |             |     used to |
|             |             |             |             |     book),  |
|             |             |             |             |     use the |
|             |             |             |             |     \"displ |
|             |             |             |             | ay\"        |
|             |             |             |             |     nodes   |
|             |             |             |             |     instead |
|             |             |             |             |     of the  |
|             |             |             |             |     \"sourc |
|             |             |             |             | e\"         |
|             |             |             |             |     nodes.  |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     Price   |
|             |             |             |             |     Disclai |
|             |             |             |             | mer         |
|             |             |             |             |     is a    |
|             |             |             |             |     front   |
|             |             |             |             |     end     |
|             |             |             |             |     change  |
|             |             |             |             |     for the |
|             |             |             |             |     partner |
+-------------+-------------+-------------+-------------+-------------+
| Contract    | 2.1.2       | Important   | -   The     | -   getCont |
|             |             | Information |     Importa | ractRequest |
|             |             |             | nt          |             |
|             |             |             |     Informa | -   Returne |
|             |             |             | tion        | d           |
|             |             |             |     must be |     under   |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"impor |
|             |             |             |     for the | tant\_infor |
|             |             |             |     selecte | mation\"    |
|             |             |             | d           |     node,   |
|             |             |             |     rate    |     each    |
|             |             |             |             |     cluster |
|             |             |             | -   Each    |     that    |
|             |             |             |     invento |     returns |
|             |             |             | ry          |     \"manda |
|             |             |             |     type    | tory\"      |
|             |             |             |     has a   |     within  |
|             |             |             |     differe |     the     |
|             |             |             | nt          |     \"displ |
|             |             |             |     set of  | ay\"        |
|             |             |             |     verbiag |     node    |
|             |             |             | e           |     must be |
|             |             |             |             |     display |
|             |             |             |             | ed          |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | ARTNERPAYME |
|             |             |             |             | NTOPTIONS\# |
|             |             |             |             | partner     |
|             |             |             |             |     payment |
|             |             |             |             |     options |
|             |             |             |             | \#END\_ANCH |
|             |             |             |             | OR\_PARTNER |
|             |             |             |             | PAYMENTOPTI |
|             |             |             |             | ONS\#       |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\_ |
|             |             |             |             | policy\_dat |
|             |             |             |             | a\"         |
|             |             |             |             |     node.   |
|             |             |             |             |             |
|             |             |             |             |     -   \"p |
|             |             |             |             | artner      |
|             |             |             |             |         pay |
|             |             |             |             | ment        |
|             |             |             |             |         opt |
|             |             |             |             | ions\"      |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_R |
|             |             |             |             | ENTALPOLICY |
|             |             |             |             | ANDRULES\#r |
|             |             |             |             | ental       |
|             |             |             |             |     policy  |
|             |             |             |             |     and     |
|             |             |             |             |     rules   |
|             |             |             |             |     informa |
|             |             |             |             | tion\#END\_ |
|             |             |             |             | ANCHOR\_REN |
|             |             |             |             | TALPOLICYAN |
|             |             |             |             | DRULES\#    |
|             |             |             |             |     pulls t |
|             |             |             |             | he          |
|             |             |             |             |     \"car\_ |
|             |             |             |             | policy\_dat |
|             |             |             |             | a\"         |
|             |             |             |             |     node.   |
|             |             |             |             |             |
|             |             |             |             |     -   \"r |
|             |             |             |             | ental       |
|             |             |             |             |         pol |
|             |             |             |             | icy         |
|             |             |             |             |         and |
|             |             |             |             |         rul |
|             |             |             |             | es          |
|             |             |             |             |         inf |
|             |             |             |             | ormation\"  |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_T |
|             |             |             |             | ERMSANDCOND |
|             |             |             |             | ITIONS\#ter |
|             |             |             |             | ms          |
|             |             |             |             |     and     |
|             |             |             |             |     conditi |
|             |             |             |             | ons\#END\_A |
|             |             |             |             | NCHOR\_TERM |
|             |             |             |             | SANDCONDITI |
|             |             |             |             | ONS\#       |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"t |
|             |             |             |             | erms        |
|             |             |             |             |         and |
|             |             |             |             |         con |
|             |             |             |             | ditions\"   |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | RIVACYPOLIC |
|             |             |             |             | Y\#privacy  |
|             |             |             |             |     policy\ |
|             |             |             |             | #END\_ANCHO |
|             |             |             |             | R\_PRIVACYP |
|             |             |             |             | OLICY\#     |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"p |
|             |             |             |             | rivacy      |
|             |             |             |             |         pol |
|             |             |             |             | icy\"       |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | REPAID\#Pay |
|             |             |             |             |     Now\#EN |
|             |             |             |             | D\_ANCHOR\_ |
|             |             |             |             | PREPAID\#   |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"P |
|             |             |             |             | ay          |
|             |             |             |             |         Now |
|             |             |             |             | \"          |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | REPAID\#Can |
|             |             |             |             | cellation   |
|             |             |             |             |     fees\#E |
|             |             |             |             | ND\_ANCHOR\ |
|             |             |             |             | _PREPAID\#  |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"C |
|             |             |             |             | ancellation |
|             |             |             |             |         fee |
|             |             |             |             | s\"         |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1         | Booking     | The status  | -   getCarL |
|             |             | status      | of the      | ookUp       |
|             |             |             | reservation |             |
|             |             |             | is          | -   Returne |
|             |             |             | displayed   | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"statu |
|             |             |             |             | s\"         |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.2         | Trip Id     | The Trip Id | -   getCarL |
|             |             |             | that is     | ookUp       |
|             |             |             | returned is |             |
|             |             |             | displayed   | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"booki |
|             |             |             |             | ng\_id\"    |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.3         | Rental      | The rental  | -   getCarL |
|             |             | company     | company     | ookUp       |
|             |             | confirmatio | confirmatio |             |
|             |             | n           | n           | -   Returne |
|             |             | number      | number that | d           |
|             |             |             | is returned |     under   |
|             |             |             | is          |     the     |
|             |             |             | displayed   |     \"partn |
|             |             |             |             | er\_confirm |
|             |             |             |             | ation\_numb |
|             |             |             |             | er\"        |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.4         | Map to      | Link to map | -   getCarL |
|             |             | pickup      | showing the | ookUp       |
|             |             | location    | pickup      |             |
|             |             |             | location is |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.5         | Link to     | The link    | -   getCanc |
|             |             | change/canc | can perform | elRequest   |
|             |             | el          | the look up |             |
|             |             | reservation | or it can   |             |
|             |             |             | lead to a   |             |
|             |             |             | page where  |             |
|             |             |             | the user    |             |
|             |             |             | can look up |             |
|             |             |             | and make    |             |
|             |             |             | amendments  |             |
|             |             |             | to their    |             |
|             |             |             | reservation |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.6         | Links to    | The links   | -   getRese |
|             |             | print or    | are         | ndItinerary |
|             |             | email       | displayed   |             |
|             |             | itinerary   | clearly     |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.7         | Pickup      | -   The     | -   getCarL |
|             |             | location    |     selecte | ookUp       |
|             |             |             | d           |             |
|             |             |             |     pickup  | -   Returne |
|             |             |             |     locatio | d           |
|             |             |             | n           |     under   |
|             |             |             |     must be |     the     |
|             |             |             |     display |     \"picku |
|             |             |             | ed          | p\_name\"   |
|             |             |             |             |     and     |
|             |             |             | -   Day of  |     subsequ |
|             |             |             |     the     | ent         |
|             |             |             |     week    |     address |
|             |             |             |     must be | /location   |
|             |             |             |     include |     nodes   |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   Time of |             |
|             |             |             |     day     |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     full    |             |
|             |             |             |     address |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.8         | Dropoff     | -   The     | -   getCarL |
|             |             | location    |     selecte | ookUp       |
|             |             | (if         | d           |             |
|             |             | different   |     dropoff | -   Returne |
|             |             | from        |     locatio | d           |
|             |             | pickup)     | n           |     under   |
|             |             |             |     must be |     the     |
|             |             |             |     display |     \"dropo |
|             |             |             | ed          | ff\_name\"  |
|             |             |             |             |     and     |
|             |             |             | -   Day of  |     subsequ |
|             |             |             |     the     | ent         |
|             |             |             |     week    |     address |
|             |             |             |     must be | /location   |
|             |             |             |     include |     nodes   |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   Time of |             |
|             |             |             |     day     |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     full    |             |
|             |             |             |     address |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.9         | Counter     | The data    | -   getCarL |
|             |             | directions/ | returned is | ookUp       |
|             |             | airport     | displayed;  |             |
|             |             | terminal    | it can be   | -   Returne |
|             |             | information | hidden      | d           |
|             |             |             | behind a    |     under   |
|             |             |             | click       |     the     |
|             |             |             |             |     \"shutt |
|             |             |             |             | le\_text\"  |
|             |             |             |             |     node.   |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.0       | Hours of    | The rental  | -   getCarL |
|             |             | operation   | company\'s  | ookUp       |
|             |             |             | hours of    |             |
|             |             |             | operations  | -   Returne |
|             |             |             | are         | d           |
|             |             |             | displayed   |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"open\ |
|             |             |             |             | "           |
|             |             |             |             |     &       |
|             |             |             |             |     \"close |
|             |             |             |             | \"          |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"picku |
|             |             |             |             | p\_hours\_d |
|             |             |             |             | ata\"       |
|             |             |             |             |     node    |
|             |             |             |             |     for     |
|             |             |             |             |     pickup  |
|             |             |             |             |     locatio |
|             |             |             |             | ns.         |
|             |             |             |             |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"open\ |
|             |             |             |             | "           |
|             |             |             |             |     &       |
|             |             |             |             |     \"close |
|             |             |             |             | \"          |
|             |             |             |             |     nodes   |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"dropo |
|             |             |             |             | ff\_hours\_ |
|             |             |             |             | data\"      |
|             |             |             |             |     node    |
|             |             |             |             |     for     |
|             |             |             |             |     dropoff |
|             |             |             |             |     locatio |
|             |             |             |             | ns          |
|             |             |             |             |     (if     |
|             |             |             |             |     differe |
|             |             |             |             | nt          |
|             |             |             |             |     than    |
|             |             |             |             |     pickup) |
|             |             |             |             | .           |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.1       | Rental      | The rental  | -   getCarL |
|             |             | company     | company     | ookUp       |
|             |             |             | name/logo   |             |
|             |             |             | is          | -   The     |
|             |             |             | displayed   |     rental  |
|             |             |             |             |     company |
|             |             |             |             |     is      |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"partn |
|             |             |             |             | er\_name\"  |
|             |             |             |             |     node    |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     logo is |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"partn |
|             |             |             |             | er\_logo\"  |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.2       | Car type    | The car     | -   getCarL |
|             |             |             | type is     | ookUp       |
|             |             |             | displayed   |             |
|             |             |             |             | -   Returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"descr |
|             |             |             |             | iption\"    |
|             |             |             |             |     node    |
|             |             |             |             |     within  |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\_ |
|             |             |             |             | info\"      |
|             |             |             |             |     node    |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.3       | Summary of  | -   The     | -   getCarL |
|             |             | Charges     |     base    | ookUp       |
|             |             |             |     rate is |             |
|             |             |             |     display | -   The     |
|             |             |             | ed          |     base    |
|             |             |             |             |     rate is |
|             |             |             | -   The     |     returne |
|             |             |             |     number  | d           |
|             |             |             |     of      |     under   |
|             |             |             |     days/we |     the     |
|             |             |             | eks         |     \"displ |
|             |             |             |     is      | ay\_price\" |
|             |             |             |     display |     node    |
|             |             |             | ed          |     within  |
|             |             |             |             |     the     |
|             |             |             | -   Extra   |     \"prici |
|             |             |             |     day     | ng\"        |
|             |             |             |     rate is |     node.   |
|             |             |             |     display |             |
|             |             |             | ed          | -   The     |
|             |             |             |     when    |     correct |
|             |             |             |     returne |     label   |
|             |             |             | d           |     as well |
|             |             |             |             |     as      |
|             |             |             | -   The     |     number  |
|             |             |             |     Taxes   |     of      |
|             |             |             |     and     |     days/we |
|             |             |             |     Fees is | eks         |
|             |             |             |     display |     are     |
|             |             |             | ed          |     returne |
|             |             |             |             | d           |
|             |             |             |     -   Not |     under   |
|             |             |             |         dis |     the     |
|             |             |             | played      |     \"type\ |
|             |             |             |         for | "           |
|             |             |             |         pre |     &       |
|             |             |             | paid        |     \"facto |
|             |             |             |         rat | r\"         |
|             |             |             | es,         |     nodes   |
|             |             |             |         lum |     within  |
|             |             |             | ped         |     the     |
|             |             |             |         int |     \"prici |
|             |             |             | o           | ng\"        |
|             |             |             |         tot |     node.   |
|             |             |             | al          |             |
|             |             |             |             |     -   Ext |
|             |             |             |     -   \"T | ra          |
|             |             |             | axes        |         day |
|             |             |             |         and |         rat |
|             |             |             |         Fee | e           |
|             |             |             | s\"         |         is  |
|             |             |             |         is  |         ret |
|             |             |             |         hyp | urned       |
|             |             |             | erlinked    |         und |
|             |             |             |         to  | er          |
|             |             |             |         a   |         the |
|             |             |             |         lig |         \"t |
|             |             |             | ht          | ype\"       |
|             |             |             |         box |         &   |
|             |             |             |         tha |         \"f |
|             |             |             | t           | actor\"     |
|             |             |             |         dis |         nod |
|             |             |             | plays       | es          |
|             |             |             |         add |         wit |
|             |             |             | itional     | hin         |
|             |             |             |         ver |         the |
|             |             |             | biage       |         2nd |
|             |             |             |             |         \"b |
|             |             |             | -   The     | reakdown\"  |
|             |             |             |     total   |         clu |
|             |             |             |     is      | ster        |
|             |             |             |     display |             |
|             |             |             | ed          |     -   -   |
|             |             |             |             |  type       |
|             |             |             |     -   Pos |             |
|             |             |             | t           |  =          |
|             |             |             |         pai |             |
|             |             |             | d           |  \"Extra    |
|             |             |             |         rat |             |
|             |             |             | es          |  Day\"      |
|             |             |             |         dis |             |
|             |             |             | play        |         -   |
|             |             |             |         the |  factor     |
|             |             |             |         amo |             |
|             |             |             | unt         |  =          |
|             |             |             |         due |             |
|             |             |             |         at  |  amount     |
|             |             |             |         cou |             |
|             |             |             | nter        |  of         |
|             |             |             |             |             |
|             |             |             |     -   Pre |  extra      |
|             |             |             | paid        |             |
|             |             |             |         rat |  days       |
|             |             |             | es          |             |
|             |             |             |         dis | -   The     |
|             |             |             | play        |     Taxes   |
|             |             |             |         the |     and     |
|             |             |             |         amo |     Fees    |
|             |             |             | unt         |     are     |
|             |             |             |         due |     returne |
|             |             |             |         now | d           |
|             |             |             |             |     under   |
|             |             |             | -   The     |     the     |
|             |             |             |     price   |     \"sourc |
|             |             |             |     disclai | e\_total\"  |
|             |             |             | mer         |     node    |
|             |             |             |     is      |     within  |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"taxes |
|             |             |             |             | \_and\_fees |
|             |             |             |             | \"          |
|             |             |             |             |     node.   |
|             |             |             |             |             |
|             |             |             |             |     -   \"T |
|             |             |             |             | axes        |
|             |             |             |             |         and |
|             |             |             |             |         Fee |
|             |             |             |             | s\"         |
|             |             |             |             |         mus |
|             |             |             |             | t           |
|             |             |             |             |         be  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |         tha |
|             |             |             |             | t           |
|             |             |             |             |         dis |
|             |             |             |             | plays       |
|             |             |             |             |         add |
|             |             |             |             | itional     |
|             |             |             |             |         ver |
|             |             |             |             | biage       |
|             |             |             |             |         tha |
|             |             |             |             | t           |
|             |             |             |             |         is  |
|             |             |             |             |         ret |
|             |             |             |             | urned       |
|             |             |             |             |         und |
|             |             |             |             | er          |
|             |             |             |             |         the |
|             |             |             |             |         \"b |
|             |             |             |             | reakdown\_d |
|             |             |             |             | ata\"       |
|             |             |             |             |         nod |
|             |             |             |             | e           |
|             |             |             |             |         wit |
|             |             |             |             | hin         |
|             |             |             |             |         the |
|             |             |             |             |         \"t |
|             |             |             |             | axes\_and\_ |
|             |             |             |             | fees\"      |
|             |             |             |             |         nod |
|             |             |             |             | e.          |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     correct |
|             |             |             |             |     label   |
|             |             |             |             |     and     |
|             |             |             |             |     total   |
|             |             |             |             |     are     |
|             |             |             |             |     returne |
|             |             |             |             | d           |
|             |             |             |             |     under   |
|             |             |             |             |     the     |
|             |             |             |             |     \"total |
|             |             |             |             | \_label\".  |
|             |             |             |             |             |
|             |             |             |             |     -   The |
|             |             |             |             |         tot |
|             |             |             |             | al          |
|             |             |             |             |         wil |
|             |             |             |             | l           |
|             |             |             |             |         ret |
|             |             |             |             | urned       |
|             |             |             |             |         und |
|             |             |             |             | er          |
|             |             |             |             |         the |
|             |             |             |             |         \"p |
|             |             |             |             | repaid\_at\ |
|             |             |             |             | _counter\"  |
|             |             |             |             |         for |
|             |             |             |             |         pos |
|             |             |             |             | t           |
|             |             |             |             |         pai |
|             |             |             |             | d           |
|             |             |             |             |         boo |
|             |             |             |             | kings       |
|             |             |             |             |             |
|             |             |             |             |     -   The |
|             |             |             |             |         tot |
|             |             |             |             | al          |
|             |             |             |             |         wil |
|             |             |             |             | l           |
|             |             |             |             |         ret |
|             |             |             |             | urned       |
|             |             |             |             |         und |
|             |             |             |             | er          |
|             |             |             |             |         the |
|             |             |             |             |         \"p |
|             |             |             |             | repaid\_at\ |
|             |             |             |             | _booking\"  |
|             |             |             |             |         nod |
|             |             |             |             | e           |
|             |             |             |             |         for |
|             |             |             |             |         pre |
|             |             |             |             | paid        |
|             |             |             |             |         boo |
|             |             |             |             | kings.      |
|             |             |             |             |             |
|             |             |             |             | -   If      |
|             |             |             |             |     wanting |
|             |             |             |             |     to      |
|             |             |             |             |     display |
|             |             |             |             |     a       |
|             |             |             |             |     differe |
|             |             |             |             | nt          |
|             |             |             |             |     currenc |
|             |             |             |             | y           |
|             |             |             |             |     other   |
|             |             |             |             |     than    |
|             |             |             |             |     the     |
|             |             |             |             |     source  |
|             |             |             |             |     (curren |
|             |             |             |             | cy          |
|             |             |             |             |     used to |
|             |             |             |             |     book),  |
|             |             |             |             |     use the |
|             |             |             |             |     \"displ |
|             |             |             |             | ay\"        |
|             |             |             |             |     nodes   |
|             |             |             |             |     instead |
|             |             |             |             |     of the  |
|             |             |             |             |     \"sourc |
|             |             |             |             | e\"         |
|             |             |             |             |     nodes.  |
|             |             |             |             |             |
|             |             |             |             | -   The     |
|             |             |             |             |     Price   |
|             |             |             |             |     Disclai |
|             |             |             |             | mer         |
|             |             |             |             |     is a    |
|             |             |             |             |     front   |
|             |             |             |             |     end     |
|             |             |             |             |     change  |
|             |             |             |             |     for the |
|             |             |             |             |     partner |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.4       | Important   | -   The     | -   getCarL |
|             |             | Information |     Importa | ookUp       |
|             |             |             | nt          |             |
|             |             |             |     Informa | -   Returne |
|             |             |             | tion        | d           |
|             |             |             |     must be |     under   |
|             |             |             |     display |     the     |
|             |             |             | ed          |     \"impor |
|             |             |             |     for the | tant\_infor |
|             |             |             |     selecte | mation\"    |
|             |             |             | d           |     node,   |
|             |             |             |     rate    |     each    |
|             |             |             |             |     cluster |
|             |             |             | -   Each    |     that    |
|             |             |             |     invento |     returns |
|             |             |             | ry          |     \"manda |
|             |             |             |     type    | tory\"      |
|             |             |             |     has a   |     within  |
|             |             |             |     differe |     the     |
|             |             |             | nt          |     \"displ |
|             |             |             |     set of  | ay\"        |
|             |             |             |     verbiag |     node    |
|             |             |             | e           |     must be |
|             |             |             |             |     display |
|             |             |             |             | ed          |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | ARTNERPAYME |
|             |             |             |             | NTOPTIONS\# |
|             |             |             |             | partner     |
|             |             |             |             |     payment |
|             |             |             |             |     options |
|             |             |             |             | \#END\_ANCH |
|             |             |             |             | OR\_PARTNER |
|             |             |             |             | PAYMENTOPTI |
|             |             |             |             | ONS\#       |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |     \"car\_ |
|             |             |             |             | policy\_dat |
|             |             |             |             | a\"         |
|             |             |             |             |     node.   |
|             |             |             |             |             |
|             |             |             |             |     -   \"p |
|             |             |             |             | artner      |
|             |             |             |             |         pay |
|             |             |             |             | ment        |
|             |             |             |             |         opt |
|             |             |             |             | ions\"      |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_R |
|             |             |             |             | ENTALPOLICY |
|             |             |             |             | ANDRULES\#r |
|             |             |             |             | ental       |
|             |             |             |             |     policy  |
|             |             |             |             |     and     |
|             |             |             |             |     rules   |
|             |             |             |             |     informa |
|             |             |             |             | tion\#END\_ |
|             |             |             |             | ANCHOR\_REN |
|             |             |             |             | TALPOLICYAN |
|             |             |             |             | DRULES\#    |
|             |             |             |             |     pulls t |
|             |             |             |             | he          |
|             |             |             |             |     \"car\_ |
|             |             |             |             | policy\_dat |
|             |             |             |             | a\"         |
|             |             |             |             |     node.   |
|             |             |             |             |             |
|             |             |             |             |     -   \"r |
|             |             |             |             | ental       |
|             |             |             |             |         pol |
|             |             |             |             | icy         |
|             |             |             |             |         and |
|             |             |             |             |         rul |
|             |             |             |             | es          |
|             |             |             |             |         inf |
|             |             |             |             | ormation\"  |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_T |
|             |             |             |             | ERMSANDCOND |
|             |             |             |             | ITIONS\#ter |
|             |             |             |             | ms          |
|             |             |             |             |     and     |
|             |             |             |             |     conditi |
|             |             |             |             | ons\#END\_A |
|             |             |             |             | NCHOR\_TERM |
|             |             |             |             | SANDCONDITI |
|             |             |             |             | ONS\#       |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"t |
|             |             |             |             | erms        |
|             |             |             |             |         and |
|             |             |             |             |         con |
|             |             |             |             | ditions\"   |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | RIVACYPOLIC |
|             |             |             |             | Y\#privacy  |
|             |             |             |             |     policy\ |
|             |             |             |             | #END\_ANCHO |
|             |             |             |             | R\_PRIVACYP |
|             |             |             |             | OLICY\#     |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"p |
|             |             |             |             | rivacy      |
|             |             |             |             |         pol |
|             |             |             |             | icy\"       |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | REPAID\#Pay |
|             |             |             |             |     Now\#EN |
|             |             |             |             | D\_ANCHOR\_ |
|             |             |             |             | PREPAID\#   |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"P |
|             |             |             |             | ay          |
|             |             |             |             |         Now |
|             |             |             |             | \"          |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
|             |             |             |             |             |
|             |             |             |             | -   \#START |
|             |             |             |             | \_ANCHOR\_P |
|             |             |             |             | REPAID\#Can |
|             |             |             |             | cellation   |
|             |             |             |             |     fees\#E |
|             |             |             |             | ND\_ANCHOR\ |
|             |             |             |             | _PREPAID\#  |
|             |             |             |             |     pulls   |
|             |             |             |             |     the     |
|             |             |             |             |             |
|             |             |             |             |     -   \"C |
|             |             |             |             | ancellation |
|             |             |             |             |         fee |
|             |             |             |             | s\"         |
|             |             |             |             |         is  |
|             |             |             |             |         a   |
|             |             |             |             |         hyp |
|             |             |             |             | erlink      |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.5       | Customer    | -   The     | -   getCarL |
|             |             | Service     |     correct | ookUp       |
|             |             | phone       |     Custome |             |
|             |             | number      | r           |             |
|             |             |             |     Service |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     rental  |             |
|             |             |             |     company |             |
|             |             |             | \'s         |             |
|             |             |             |     phone   |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Success     | 3.1.6       | Driver name | The driver  | -   getCarL |
|             |             |             | name        | ookUp       |
|             |             |             | entered on  |             |
|             |             |             | the         |             |
|             |             |             | Contract    |             |
|             |             |             | page is     |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1         | Booking     | The status  |             |
|             |             | status      | of the      |             |
|             |             |             | reservation |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.2         | Trip Id     | The Trip Id |             |
|             |             |             | that is     |             |
|             |             |             | returned is |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.3         | Rental      | The rental  |             |
|             |             | company     | company     |             |
|             |             | confirmatio | confirmatio |             |
|             |             | n           | n           |             |
|             |             | number      | number that |             |
|             |             |             | is returned |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.4         | Driver name | The driver  |             |
|             |             |             | name        |             |
|             |             |             | entered on  |             |
|             |             |             | the         |             |
|             |             |             | Contract    |             |
|             |             |             | page is     |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.5         | Summary of  | -   The     |             |
|             |             | Charges     |     base    |             |
|             |             |             |     rate is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     number  |             |
|             |             |             |     of      |             |
|             |             |             |     days/we |             |
|             |             |             | eks         |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Extra   |             |
|             |             |             |     day     |             |
|             |             |             |     rate is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |     when    |             |
|             |             |             |     returne |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     Taxes   |             |
|             |             |             |     and     |             |
|             |             |             |     Fees is |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             |     -   Not |             |
|             |             |             |         dis |             |
|             |             |             | played      |             |
|             |             |             |         for |             |
|             |             |             |         pre |             |
|             |             |             | paid        |             |
|             |             |             |         rat |             |
|             |             |             | es,         |             |
|             |             |             |         lum |             |
|             |             |             | ped         |             |
|             |             |             |         int |             |
|             |             |             | o           |             |
|             |             |             |         tot |             |
|             |             |             | al          |             |
|             |             |             |             |             |
|             |             |             |     -   \"T |             |
|             |             |             | axes        |             |
|             |             |             |         and |             |
|             |             |             |         Fee |             |
|             |             |             | s\"         |             |
|             |             |             |         is  |             |
|             |             |             |         hyp |             |
|             |             |             | erlinked    |             |
|             |             |             |         to  |             |
|             |             |             |         a   |             |
|             |             |             |         lig |             |
|             |             |             | ht          |             |
|             |             |             |         box |             |
|             |             |             |         tha |             |
|             |             |             | t           |             |
|             |             |             |         dis |             |
|             |             |             | plays       |             |
|             |             |             |         add |             |
|             |             |             | itional     |             |
|             |             |             |         ver |             |
|             |             |             | biage       |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     total   |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             |     -   Pos |             |
|             |             |             | t           |             |
|             |             |             |         pai |             |
|             |             |             | d           |             |
|             |             |             |         rat |             |
|             |             |             | es          |             |
|             |             |             |         dis |             |
|             |             |             | play        |             |
|             |             |             |         the |             |
|             |             |             |         amo |             |
|             |             |             | unt         |             |
|             |             |             |         due |             |
|             |             |             |         at  |             |
|             |             |             |         cou |             |
|             |             |             | nter        |             |
|             |             |             |             |             |
|             |             |             |     -   Pre |             |
|             |             |             | paid        |             |
|             |             |             |         rat |             |
|             |             |             | es          |             |
|             |             |             |         dis |             |
|             |             |             | play        |             |
|             |             |             |         the |             |
|             |             |             |         amo |             |
|             |             |             | unt         |             |
|             |             |             |         due |             |
|             |             |             |         now |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     price   |             |
|             |             |             |     disclai |             |
|             |             |             | mer         |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.6         | Rental      | The rental  |             |
|             |             | company     | company     |             |
|             |             |             | name/logo   |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.7         | Car type    | The car     |             |
|             |             |             | type is     |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.8         | Car         | The         |             |
|             |             | amenities   | amenities   |             |
|             |             |             | are         |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.9         | Pickup      | -   The     |             |
|             |             | location    |     selecte |             |
|             |             |             | d           |             |
|             |             |             |     pickup  |             |
|             |             |             |     locatio |             |
|             |             |             | n           |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Day of  |             |
|             |             |             |     the     |             |
|             |             |             |     week    |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   Time of |             |
|             |             |             |     day     |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     full    |             |
|             |             |             |     address |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.0       | Dropoff     | -   The     |             |
|             |             | location    |     selecte |             |
|             |             | (if         | d           |             |
|             |             | different   |     dropoff |             |
|             |             | from        |     locatio |             |
|             |             | pickup)     | n           |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Day of  |             |
|             |             |             |     the     |             |
|             |             |             |     week    |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   Time of |             |
|             |             |             |     day     |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     full    |             |
|             |             |             |     address |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.1       | Counter     | The data    |             |
|             |             | directions/ | returned is |             |
|             |             | airport     | displayed   |             |
|             |             | terminal    |             |             |
|             |             | information |             |             |
+-------------+-------------+-------------+-------------+-------------+
| Conf. Email | 4.1.2       | Customer    | -   The     |             |
|             |             | Service     |     correct |             |
|             |             | phone       |     Custome |             |
|             |             | number      | r           |             |
|             |             |             |     Service |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     rental  |             |
|             |             |             |     company |             |
|             |             |             | \'s         |             |
|             |             |             |     phone   |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.1         | Booking     | The status  |             |
| Email       |             | status      | of the      |             |
|             |             |             | reservation |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.2         | Trip Id     | The Trip Id |             |
| Email       |             |             | that is     |             |
|             |             |             | returned is |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.3         | Driver name | The driver  |             |
| Email       |             |             | name        |             |
|             |             |             | entered on  |             |
|             |             |             | the         |             |
|             |             |             | Contract    |             |
|             |             |             | page is     |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.4         | Rental      | The rental  |             |
| Email       |             | company     | company     |             |
|             |             |             | name/logo   |             |
|             |             |             | is          |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.5         | Car type    | The         |             |
| Email       |             |             | amenities   |             |
|             |             |             | are         |             |
|             |             |             | displayed   |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.6         | Pickup      | -   The     |             |
| Email       |             | location    |     selecte |             |
|             |             |             | d           |             |
|             |             |             |     pickup  |             |
|             |             |             |     locatio |             |
|             |             |             | n           |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Day of  |             |
|             |             |             |     the     |             |
|             |             |             |     week    |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   Time of |             |
|             |             |             |     day     |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     full    |             |
|             |             |             |     address |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.7         | Dropoff     | -   The     |             |
| Email       |             | location    |     selecte |             |
|             |             | (if         | d           |             |
|             |             | different   |     dropoff |             |
|             |             | from        |     locatio |             |
|             |             | pickup)     | n           |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   Day of  |             |
|             |             |             |     the     |             |
|             |             |             |     week    |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   Time of |             |
|             |             |             |     day     |             |
|             |             |             |     must be |             |
|             |             |             |     include |             |
|             |             |             | d           |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     full    |             |
|             |             |             |     address |             |
|             |             |             |     must be |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
| Cancel      | 5.8         | Customer    | -   The     |             |
| Email       |             | Service     |     correct |             |
|             |             | phone       |     Custome |             |
|             |             | number      | r           |             |
|             |             |             |     Service |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
|             |             |             |             |             |
|             |             |             | -   The     |             |
|             |             |             |     rental  |             |
|             |             |             |     company |             |
|             |             |             | \'s         |             |
|             |             |             |     phone   |             |
|             |             |             |     number  |             |
|             |             |             |     is      |             |
|             |             |             |     display |             |
|             |             |             | ed          |             |
+-------------+-------------+-------------+-------------+-------------+
