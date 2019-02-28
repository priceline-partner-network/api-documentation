API Hotel Requirements Appendix
===============================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:

-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement

+-----------+-----------+-----------+-----------+-----------+-----------+
| **Page**  | **Require | **Require | **Expecte | **Additio | **Reasoni |
|           | ment      | ment**    | d         | nal       | ng        |
|           | \#**      |           | Result**  | Informati | for       |
|           |           |           |           | on**      | Requireme |
|           |           |           |           |           | nts**     |
+===========+===========+===========+===========+===========+===========+
| Results   | 1.1       | Average   | -   The   | -   getEx |           |
|           |           | Nightly   |     Avg.  | press.Res |           |
|           |           | Rate      |     Night | ults      |           |
|           |           |           | ly        |           |           |
|           |           |           |     Rate  | -   Retur |           |
|           |           |           |     is    | ned       |           |
|           |           |           |     displ |     under |           |
|           |           |           | ayed      |     the   |           |
|           |           |           |     for   |     \"sou |           |
|           |           |           |     each  | rce\_nigh |           |
|           |           |           |     prope | t\_price\ |           |
|           |           |           | rly       | "         |           |
|           |           |           |           |     node  |           |
|           |           |           | -   The   |     withi |           |
|           |           |           |     rate  | n         |           |
|           |           |           |     is    |     the   |           |
|           |           |           |     not   |     \"nig |           |
|           |           |           |     multi | ht\_price |           |
|           |           |           | plied     | \_data\"  |           |
|           |           |           |     by    |     clust |           |
|           |           |           |     the   | er        |           |
|           |           |           |     numbe |     for   |           |
|           |           |           | r         |     each  |           |
|           |           |           |     of    |     prope |           |
|           |           |           |     night | rty       |           |
|           |           |           | s         |           |           |
|           |           |           |     or    | -   If a  |           |
|           |           |           |     rooms |     value |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     that  |           |
|           |           |           |           |     has   |           |
|           |           |           |           |     trunc |           |
|           |           |           |           | ated      |           |
|           |           |           |           |     a     |           |
|           |           |           |           |     trail |           |
|           |           |           |           | ing       |           |
|           |           |           |           |     zero, |           |
|           |           |           |           |     that  |           |
|           |           |           |           |     must  |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     in    |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     prope |           |
|           |           |           |           | r         |           |
|           |           |           |           |     monet |           |
|           |           |           |           | ary       |           |
|           |           |           |           |     forma |           |
|           |           |           |           | t         |           |
|           |           |           |           |     (two  |           |
|           |           |           |           |     decim |           |
|           |           |           |           | al        |           |
|           |           |           |           |     place |           |
|           |           |           |           | s         |           |
|           |           |           |           |     or    |           |
|           |           |           |           |     whole |           |
|           |           |           |           |     dolla |           |
|           |           |           |           | r)        |           |
|           |           |           |           |           |           |
|           |           |           |           | -   If    |           |
|           |           |           |           |     using |           |
|           |           |           |           |     a     |           |
|           |           |           |           |     diffe |           |
|           |           |           |           | rent      |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy       |           |
|           |           |           |           |     than  |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     sourc |           |
|           |           |           |           | e         |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy,      |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_nig |           |
|           |           |           |           | ht\_price |           |
|           |           |           |           | \"        |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     can   |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     used  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Results   | 1.2       | Currency  | The corre | -   getEx |           |
|           |           |           | ct        | press.Res |           |
|           |           |           | currency, | ults      |           |
|           |           |           | currency  |           |           |
|           |           |           | code, &   | -   Retur |           |
|           |           |           | currency  | ned       |           |
|           |           |           | symbol    |     under |           |
|           |           |           | are       |     the   |           |
|           |           |           | displayed |     \"sou |           |
|           |           |           |           | rce\_curr |           |
|           |           |           |           | ency\"    |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"sou |           |
|           |           |           |           | rce\_symb |           |
|           |           |           |           | ol\"      |           |
|           |           |           |           |     nodes |           |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"pri |           |
|           |           |           |           | ce\_detai |           |
|           |           |           |           | ls\"      |           |
|           |           |           |           |     clust |           |
|           |           |           |           | er        |           |
|           |           |           |           |     for   |           |
|           |           |           |           |     each  |           |
|           |           |           |           |     prope |           |
|           |           |           |           | rty       |           |
|           |           |           |           |           |           |
|           |           |           |           | -   If    |           |
|           |           |           |           |     using |           |
|           |           |           |           |     a     |           |
|           |           |           |           |     diffe |           |
|           |           |           |           | rent      |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy       |           |
|           |           |           |           |     than  |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     sourc |           |
|           |           |           |           | e         |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy,      |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_cur |           |
|           |           |           |           | rency\"   |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_sym |           |
|           |           |           |           | bol\"     |           |
|           |           |           |           |     nodes |           |
|           |           |           |           |     can   |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     used  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Results   | 1.3       | Full      | The full  | -   getEx |           |
|           |           | property  | property  | press.Res |           |
|           |           | name      | name must | ults      |           |
|           |           |           | be        |           |           |
|           |           |           | displayed | -   Retur |           |
|           |           |           | for each  | ned       |           |
|           |           |           | property  |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"nam |           |
|           |           |           |           | e\"       |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"rat |           |
|           |           |           |           | e\_data\" |           |
|           |           |           |           |     clust |           |
|           |           |           |           | er        |           |
|           |           |           |           |     for   |           |
|           |           |           |           |     each  |           |
|           |           |           |           |     prope |           |
|           |           |           |           | rty       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Results   | 1.4       | Full      | -   For   | -   getEx |           |
|           |           | property  |     US/CA | press.Res |           |
|           |           | address   |     prope | ults      |           |
|           |           |           | rties,    |           |           |
|           |           |           |     the   | -   Retur |           |
|           |           |           |     Provi | ned       |           |
|           |           |           | nce/State |     under |           |
|           |           |           |     code  |     the   |           |
|           |           |           |     are   |     \"add |           |
|           |           |           |     requi | ress\"    |           |
|           |           |           | red       |     clust |           |
|           |           |           |           | er        |           |
|           |           |           | -   For   |     withi |           |
|           |           |           |     prope | n         |           |
|           |           |           | rties     |     the   |           |
|           |           |           |     anywh |     \"rat |           |
|           |           |           | ere       | e\_data\" |           |
|           |           |           |     else  |     node  |           |
|           |           |           |     in    |     for   |           |
|           |           |           |     the   |     each  |           |
|           |           |           |     world |     prope |           |
|           |           |           | ,         | rty       |           |
|           |           |           |     the   |           |           |
|           |           |           |     Count |           |           |
|           |           |           | ry        |           |           |
|           |           |           |     code  |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     requi |           |           |
|           |           |           | red       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Results   | 1.5       | Star      | The       | -   getEx |           |
|           |           | rating    | correct   | press.Res |           |
|           |           |           | star      | ults      |           |
|           |           |           | rating    |           |           |
|           |           |           | must be   | -   Retur |           |
|           |           |           | displayed | ned       |           |
|           |           |           | for each  |     under |           |
|           |           |           | property  |     the   |           |
|           |           |           |           |     \"sta |           |
|           |           |           |           | r\_rating |           |
|           |           |           |           | \"        |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"rat |           |
|           |           |           |           | e\_data\" |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     for   |           |
|           |           |           |           |     each  |           |
|           |           |           |           |     prope |           |
|           |           |           |           | rty       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Results   | 1.6       | Search    | A search  | -   Can   |           |
|           |           | box       | box must  |     be a  |           |
|           |           |           | be        |     slimm |           |
|           |           |           | accessibl | ed        |           |
|           |           |           | e         |     down  |           |
|           |           |           | on the    |     versi |           |
|           |           |           | Results   | on        |           |
|           |           |           | page      |     of    |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     Hotel |           |
|           |           |           |           |     searc |           |
|           |           |           |           | h         |           |
|           |           |           |           |     box   |           |
|           |           |           |           |           |           |
|           |           |           |           | -   getAu |           |
|           |           |           |           | toSuggest |           |
|           |           |           |           | V2        |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.1       | Full      | The full  | -   getHo |           |
|           |           | property  | property  | telDetail |           |
|           |           | name      | name must | s         |           |
|           |           |           | be        |           |           |
|           |           |           | displayed | -   Downl |           |
|           |           |           | for the   | oad       |           |
|           |           |           | selected  |     optio |           |
|           |           |           | property  | n         |           |
|           |           |           |           |     avail |           |
|           |           |           |           | able      |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"nam |           |
|           |           |           |           | e\"       |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"hot |           |
|           |           |           |           | el\_data\ |           |
|           |           |           |           | "         |           |
|           |           |           |           |     clust |           |
|           |           |           |           | er        |           |
|           |           |           |           |     for   |           |
|           |           |           |           |     each  |           |
|           |           |           |           |     prope |           |
|           |           |           |           | rty       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.2       | Full      | -   For   | -   getHo |           |
|           |           | property  |     US/CA | telDetail |           |
|           |           | address   |     prope | s         |           |
|           |           |           | rties,    |           |           |
|           |           |           |     the   | -   Downl |           |
|           |           |           |     Provi | oad       |           |
|           |           |           | nce/State |     optio |           |
|           |           |           |     code  | n         |           |
|           |           |           |     are   |     avail |           |
|           |           |           |     requi | able      |           |
|           |           |           | red       |           |           |
|           |           |           |           | -   Retur |           |
|           |           |           | -   For   | ned       |           |
|           |           |           |     prope |     under |           |
|           |           |           | rties     |     the   |           |
|           |           |           |     anywh |     \"add |           |
|           |           |           | ere       | ress\"    |           |
|           |           |           |     else  |     node  |           |
|           |           |           |     in    |     withi |           |
|           |           |           |     the   | n         |           |
|           |           |           |     world |     the   |           |
|           |           |           | ,         |     \"hot |           |
|           |           |           |     the   | el\_data\ |           |
|           |           |           |     Count | "         |           |
|           |           |           | ry        |     clust |           |
|           |           |           |     code  | er        |           |
|           |           |           |     is    |     for   |           |
|           |           |           |     requi |     each  |           |
|           |           |           | red       |     prope |           |
|           |           |           |           | rty       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.3       | Star      | The       | -   getHo |           |
|           |           | rating    | correct   | telDetail |           |
|           |           |           | star      | s         |           |
|           |           |           | rating    |           |           |
|           |           |           | must be   | -   Downl |           |
|           |           |           | displayed | oad       |           |
|           |           |           | for each  |     optio |           |
|           |           |           | property  | n         |           |
|           |           |           |           |     avail |           |
|           |           |           |           | able      |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"sta |           |
|           |           |           |           | r\_rating |           |
|           |           |           |           | \"        |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"hot |           |
|           |           |           |           | el\_data\ |           |
|           |           |           |           | "         |           |
|           |           |           |           |     clust |           |
|           |           |           |           | er        |           |
|           |           |           |           |     for   |           |
|           |           |           |           |     each  |           |
|           |           |           |           |     prope |           |
|           |           |           |           | rty       |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.4       | Hotel     | The hotel | -   getHo |           |
|           |           | descripti | descripti | telDetail |           |
|           |           | on        | on        | s         |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed | -   Downl |           |
|           |           |           | ,         | oad       |           |
|           |           |           | it can be |     optio |           |
|           |           |           | partially | n         |           |
|           |           |           | collapsed |     avail |           |
|           |           |           | ,         | able      |           |
|           |           |           | but must  |           |           |
|           |           |           | be        | -   Retur |           |
|           |           |           | visible   | ned       |           |
|           |           |           | and       |     under |           |
|           |           |           | accessibl |     the   |           |
|           |           |           | e         |     \"hot |           |
|           |           |           |           | el\_descr |           |
|           |           |           |           | iption\"  |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.5       | Amenities | The       | -   getHo |           |
|           |           |           | amenities | telDetail |           |
|           |           |           | that are  | s         |           |
|           |           |           | returned  |           |           |
|           |           |           | for the   | -   Downl |           |
|           |           |           | property  | oad       |           |
|           |           |           | must be   |     optio |           |
|           |           |           | displayed | n         |           |
|           |           |           |           |     avail |           |
|           |           |           |           | able      |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"ame |           |
|           |           |           |           | nity\_dat |           |
|           |           |           |           | a\"       |           |
|           |           |           |           |     nodes |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.6       | Reviews   | The       | -   getHo |           |
|           |           |           | review    | telReview |           |
|           |           |           | data      | s         |           |
|           |           |           | returned  |           |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed |           |           |
|           |           |           | ;         |           |           |
|           |           |           | they can  |           |           |
|           |           |           | be hidden |           |           |
|           |           |           | behind a  |           |           |
|           |           |           | click     |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.7       | Average   | -   The   | -   getHo |           |
|           |           | Nightly   |     Avg.  | telDetail |           |
|           |           | Rate      |     Night | s         |           |
|           |           |           | ly        |           |           |
|           |           |           |     Rate  | -   Downl |           |
|           |           |           |     is    | oad       |           |
|           |           |           |     displ |     optio |           |
|           |           |           | ayed      | n         |           |
|           |           |           |     for   |     avail |           |
|           |           |           |     each  | able      |           |
|           |           |           |     prope |           |           |
|           |           |           | rly       | -   Retur |           |
|           |           |           |           | ned       |           |
|           |           |           | -   The   |     under |           |
|           |           |           |     corre |     the   |           |
|           |           |           | ct        |     \"sou |           |
|           |           |           |     curre | rce\_pric |           |
|           |           |           | ncy,      | e\"       |           |
|           |           |           |     curre |     node  |           |
|           |           |           | ncy       |     withi |           |
|           |           |           |     code, | n         |           |
|           |           |           |     &     |     the   |           |
|           |           |           |     curre |     \"sta |           |
|           |           |           | ncy       | tic\_low\ |           |
|           |           |           |     symbo | _rate\"   |           |
|           |           |           | l         |     clust |           |
|           |           |           |     are   | er        |           |
|           |           |           |     displ |     for   |           |
|           |           |           | ayed      |     each  |           |
|           |           |           |           |     prope |           |
|           |           |           | -   The   | rty       |           |
|           |           |           |     rate  |     retur |           |
|           |           |           |     is    | ned       |           |
|           |           |           |     not   |           |           |
|           |           |           |     multi | -   If a  |           |
|           |           |           | plied     |     value |           |
|           |           |           |     by    |     is    |           |
|           |           |           |     the   |     retur |           |
|           |           |           |     numbe | ned       |           |
|           |           |           | r         |     that  |           |
|           |           |           |     of    |     has   |           |
|           |           |           |     night |     trunc |           |
|           |           |           | s         | ated      |           |
|           |           |           |     or    |     a     |           |
|           |           |           |     rooms |     trail |           |
|           |           |           |           | ing       |           |
|           |           |           |           |     zero, |           |
|           |           |           |           |     that  |           |
|           |           |           |           |     must  |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     in    |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     prope |           |
|           |           |           |           | r         |           |
|           |           |           |           |     monet |           |
|           |           |           |           | ary       |           |
|           |           |           |           |     forma |           |
|           |           |           |           | t         |           |
|           |           |           |           |           |           |
|           |           |           |           | -   If    |           |
|           |           |           |           |     using |           |
|           |           |           |           |     a     |           |
|           |           |           |           |     diffe |           |
|           |           |           |           | rent      |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy       |           |
|           |           |           |           |     than  |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     sourc |           |
|           |           |           |           | e         |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy,      |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_pri |           |
|           |           |           |           | ce\"      |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     can   |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     used  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.8       | Currency  | The corre | -   getHo |           |
|           |           |           | ct        | telDetail |           |
|           |           |           | currency, | s         |           |
|           |           |           | currency  |           |           |
|           |           |           | code, &   | -   Downl |           |
|           |           |           | currency  | oad       |           |
|           |           |           | symbol    |     optio |           |
|           |           |           | are       | n         |           |
|           |           |           | displayed |     avail |           |
|           |           |           |           | able      |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"sou |           |
|           |           |           |           | rce\_curr |           |
|           |           |           |           | ency\"    |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"sou |           |
|           |           |           |           | rce\_symb |           |
|           |           |           |           | ol\"      |           |
|           |           |           |           |     nodes |           |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"sta |           |
|           |           |           |           | tic\_low\ |           |
|           |           |           |           | _rate\"   |           |
|           |           |           |           |     clust |           |
|           |           |           |           | er        |           |
|           |           |           |           |     for   |           |
|           |           |           |           |     each  |           |
|           |           |           |           |     prope |           |
|           |           |           |           | rty       |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |           |           |
|           |           |           |           | -   If    |           |
|           |           |           |           |     using |           |
|           |           |           |           |     a     |           |
|           |           |           |           |     diffe |           |
|           |           |           |           | rent      |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy       |           |
|           |           |           |           |     than  |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     sourc |           |
|           |           |           |           | e         |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy,      |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_cur |           |
|           |           |           |           | rency\"   |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_sym |           |
|           |           |           |           | bol\"     |           |
|           |           |           |           |     nodes |           |
|           |           |           |           |     can   |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     used  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.9       | Room/Rate | The       | -   getEx |           |
|           |           | descripti | descripti | press.Mul |           |
|           |           | on        | on        | tiContrac |           |
|           |           |           | that is   | t         |           |
|           |           |           | returned  |           |           |
|           |           |           | for each  | -   Retur |           |
|           |           |           | rate must | ned       |           |
|           |           |           | be        |     under |           |
|           |           |           | displayed |     the   |           |
|           |           |           |           |     \"tit |           |
|           |           |           |           | le\"      |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"des |           |
|           |           |           |           | cription\ |           |
|           |           |           |           | "         |           |
|           |           |           |           |     nodes |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.1.1     | Cancellat | The       | -   getEx |           |
|           |           | ion       | cancellat | press.Mul |           |
|           |           | policy    | ion       | tiContrac |           |
|           |           |           | policy    | t         |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed | -   Retur |           |
|           |           |           | for each  | ned       |           |
|           |           |           | rate      |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"is\ |           |
|           |           |           |           | _cancella |           |
|           |           |           |           | ble\"     |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"fre |           |
|           |           |           |           | e\_cancel |           |
|           |           |           |           | lation\"  |           |
|           |           |           |           |     nodes |           |
|           |           |           |           | .         |           |
|           |           |           |           |           |           |
|           |           |           |           |     -   0 |           |
|           |           |           |           |         = |           |
|           |           |           |           |         c |           |
|           |           |           |           | ancellabl |           |
|           |           |           |           | e,        |           |
|           |           |           |           |         f |           |
|           |           |           |           | ree       |           |
|           |           |           |           |           |           |
|           |           |           |           |     -   1 |           |
|           |           |           |           |         = |           |
|           |           |           |           |         n |           |
|           |           |           |           | ot        |           |
|           |           |           |           |         c |           |
|           |           |           |           | ancellabl |           |
|           |           |           |           | e,        |           |
|           |           |           |           |         n |           |
|           |           |           |           | ot        |           |
|           |           |           |           |         f |           |
|           |           |           |           | ree       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Details   | 2.1.2     | Promo     | Promo     | -   getEx |           |
|           |           | data      | data must | press.Mul |           |
|           |           |           | be        | tiContrac |           |
|           |           |           | displayed | t         |           |
|           |           |           | for each  |           |           |
|           |           |           | rate, if  | -   Retur |           |
|           |           |           | returned  | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"pro |           |
|           |           |           |           | mo\"      |           |
|           |           |           |           |     node  |           |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"det |           |
|           |           |           |           | ails\_sum |           |
|           |           |           |           | mary\"    |           |
|           |           |           |           |     clust |           |
|           |           |           |           | er        |           |
|           |           |           |           |     for   |           |
|           |           |           |           |     each  |           |
|           |           |           |           |     rate  |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.1       | Full      | The full  | -   getCo |           |
|           |           | property  | property  | ntractReq |           |
|           |           | name      | name must | uest      |           |
|           |           |           | be        |           |           |
|           |           |           | displayed | -   Retur |           |
|           |           |           | for the   | ned       |           |
|           |           |           | selected  |     under |           |
|           |           |           | property  |     the   |           |
|           |           |           |           |     \"hot |           |
|           |           |           |           | el\_name\ |           |
|           |           |           |           | "         |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.2       | Full      | -   For   | -   getCo |           |
|           |           | property  |     US/CA | ntractReq |           |
|           |           | address   |     prope | uest      |           |
|           |           |           | rties,    |           |           |
|           |           |           |     the   | -   Retur |           |
|           |           |           |     Provi | ned       |           |
|           |           |           | nce/State |     under |           |
|           |           |           |     code  |     the   |           |
|           |           |           |     are   |     \"add |           |
|           |           |           |     requi | ress\"    |           |
|           |           |           | red       |     node  |           |
|           |           |           |           |           |           |
|           |           |           | -   For   |           |           |
|           |           |           |     prope |           |           |
|           |           |           | rties     |           |           |
|           |           |           |     anywh |           |           |
|           |           |           | ere       |           |           |
|           |           |           |     else  |           |           |
|           |           |           |     in    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     world |           |           |
|           |           |           | ,         |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     Count |           |           |
|           |           |           | ry        |           |           |
|           |           |           |     code  |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     requi |           |           |
|           |           |           | red       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.3       | Room/Rate | The       | -   getCo |           |
|           |           | descripti | descripti | ntractReq |           |
|           |           | on        | on        | uest      |           |
|           |           |           | that is   |           |           |
|           |           |           | returned  | -   Retur |           |
|           |           |           | for the   | ned       |           |
|           |           |           | selected  |     under |           |
|           |           |           | rate must |     the   |           |
|           |           |           | be        |     \"tit |           |
|           |           |           | displayed | le\"      |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"des |           |
|           |           |           |           | cription\ |           |
|           |           |           |           | "         |           |
|           |           |           |           |     nodes |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.4       | Promo     | Promo     | -   getCo |           |
|           |           | data      | data must | ntractReq |           |
|           |           |           | be        | uest      |           |
|           |           |           | displayed |           |           |
|           |           |           | for the   | -   Retur |           |
|           |           |           | selected  | ned       |           |
|           |           |           | rate, if  |     under |           |
|           |           |           | returned  |     the   |           |
|           |           |           |           |     \"pro |           |
|           |           |           |           | mo\"      |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.5       | Check-In  | The       | -   getCo |           |
|           |           | date      | selected  | ntractReq |           |
|           |           |           | check-in  | uest      |           |
|           |           |           | date must |           |           |
|           |           |           | be        | -   Retur |           |
|           |           |           | displayed | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"che |           |
|           |           |           |           | ck\_in\"  |           |
|           |           |           |           |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Day   |           |
|           |           |           |           |     of    |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     week  |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     recom |           |
|           |           |           |           | mended,   |           |
|           |           |           |           |     but   |           |
|           |           |           |           |     not   |           |
|           |           |           |           |     requi |           |
|           |           |           |           | red       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.6       | Check-Out | The       | -   getCo |           |
|           |           | date      | selected  | ntractReq |           |
|           |           |           | check-out | uest      |           |
|           |           |           | date must |           |           |
|           |           |           | be        | -   Retur |           |
|           |           |           | displayed | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"che |           |
|           |           |           |           | ck\_out\" |           |
|           |           |           |           |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Day   |           |
|           |           |           |           |     of    |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     week  |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     recom |           |
|           |           |           |           | mended,   |           |
|           |           |           |           |     but   |           |
|           |           |           |           |     not   |           |
|           |           |           |           |     requi |           |
|           |           |           |           | red       |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.7       | Summary   | -   The   | -   getCo | -   The   |
|           |           | of        |     avg.  | ntractReq |     Resor |
|           |           | Charges   |     night | uest      | t         |
|           |           |           | ly        |           |     Fee   |
|           |           |           |     rate  | -   Avg.  |     is    |
|           |           |           |     is    |     night |     requi |
|           |           |           |     displ | ly        | red       |
|           |           |           | ayed      |     rate  |     by    |
|           |           |           |     for   |     is    |     law,  |
|           |           |           |     the   |     retur |     as    |
|           |           |           |     selec | ned       |     per   |
|           |           |           | ted       |     under |     Legal |
|           |           |           |     rate  |     the   | .         |
|           |           |           |           |     \"dis |           |
|           |           |           | -   The   | play\_pri | -   Taxes |
|           |           |           |     numbe | ce\"      |     &     |
|           |           |           | r         |     node  |     Fees  |
|           |           |           |     of    |           |     legal |
|           |           |           |     night | -   Numbe | ese       |
|           |           |           | s         | r         |     is    |
|           |           |           |     is    |     of    |     requi |
|           |           |           |     displ |     night | red       |
|           |           |           | ayed      | s         |     by    |
|           |           |           |           |     is    |     law,  |
|           |           |           | -   The   |     retur |     as    |
|           |           |           |     numbe | ned       |     per   |
|           |           |           | r         |     under |     Legal |
|           |           |           |     of    |     the   | .         |
|           |           |           |     rooms |     \"num |           |
|           |           |           |     is    | \_nights\ |           |
|           |           |           |     displ | "         |           |
|           |           |           | ayed      |     node  |           |
|           |           |           |           |           |           |
|           |           |           | -   The   | -   Numbe |           |
|           |           |           |     Taxes | r         |           |
|           |           |           |     and   |     of    |           |
|           |           |           |     Fees  |     rooms |           |
|           |           |           |     are   |     is    |           |
|           |           |           |     displ |     displ |           |
|           |           |           | ayed      | ayed      |           |
|           |           |           |           |     under |           |
|           |           |           |     -   \ |     the   |           |
|           |           |           | "Taxes    |     \"num |           |
|           |           |           |         a | \_rooms\" |           |
|           |           |           | nd        |     node  |           |
|           |           |           |         F |           |           |
|           |           |           | ees\"     | -   Taxes |           |
|           |           |           |         i |     &     |           |
|           |           |           | s         |     Fees  |           |
|           |           |           |         h |     are   |           |
|           |           |           | yperlinke |     displ |           |
|           |           |           | d         | ayed      |           |
|           |           |           |         t |     under |           |
|           |           |           | o         |     the   |           |
|           |           |           |         a |     \"dis |           |
|           |           |           |         l | play\_tax |           |
|           |           |           | ight      | es\"      |           |
|           |           |           |         b |     node  |           |
|           |           |           | ox        |           |           |
|           |           |           |         t |     -   \ |           |
|           |           |           | hat       | "Taxes    |           |
|           |           |           |         d |         & |           |
|           |           |           | isplays   |         F |           |
|           |           |           |         a | ees\"     |           |
|           |           |           | dditional |         m |           |
|           |           |           |         v | ust       |           |
|           |           |           | erbiage   |         b |           |
|           |           |           |           | e         |           |
|           |           |           | -   The   |         a |           |
|           |           |           |     Resor |         l |           |
|           |           |           | t         | ink       |           |
|           |           |           |     Fee   |         t |           |
|           |           |           |     is    | o         |           |
|           |           |           |     displ |         d |           |
|           |           |           | ayed,     | isplay    |           |
|           |           |           |     if    |         a |           |
|           |           |           |     appli | dditional |           |
|           |           |           | cable     |         v |           |
|           |           |           |           | erbiage   |           |
|           |           |           | -   The   |         t |           |
|           |           |           |     room  | hat       |           |
|           |           |           |     subto |         i |           |
|           |           |           | tal       | s         |           |
|           |           |           |     is    |         r |           |
|           |           |           |     displ | eturned   |           |
|           |           |           | ayed      |         u |           |
|           |           |           |           | nder      |           |
|           |           |           | -   The   |         t |           |
|           |           |           |     total | he        |           |
|           |           |           |     price |         \ |           |
|           |           |           |     is    | "taxes\_a |           |
|           |           |           |     displ | nd\_fees\ |           |
|           |           |           | ayed      | _policy\" |           |
|           |           |           |           |         n |           |
|           |           |           | -   The c | ode       |           |
|           |           |           | orrect    |           |           |
|           |           |           |     curre | -   Resor |           |
|           |           |           | ncy,      | t         |           |
|           |           |           |     curre |     Fee   |           |
|           |           |           | ncy       |     is    |           |
|           |           |           |     code, |     displ |           |
|           |           |           |     &     | ayed      |           |
|           |           |           |     curre |     under |           |
|           |           |           | ncy       |     the   |           |
|           |           |           |     symbo |     \"dis |           |
|           |           |           | l         | play\_pro |           |
|           |           |           |     are   | perty\_fe |           |
|           |           |           |     displ | e\"       |           |
|           |           |           | ayed      |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Room  |           |
|           |           |           |           |     subto |           |
|           |           |           |           | tal       |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_sub |           |
|           |           |           |           | total\"   |           |
|           |           |           |           |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Total |           |
|           |           |           |           |     price |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_tot |           |
|           |           |           |           | al\"      |           |
|           |           |           |           |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   The   |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy       |           |
|           |           |           |           |     infor |           |
|           |           |           |           | mation    |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_cur |           |
|           |           |           |           | rency\"   |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_sym |           |
|           |           |           |           | bol\"     |           |
|           |           |           |           |     nodes |           |
|           |           |           |           |           |           |
|           |           |           |           | -   If a  |           |
|           |           |           |           |     value |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     that  |           |
|           |           |           |           |     has   |           |
|           |           |           |           |     trunc |           |
|           |           |           |           | ated      |           |
|           |           |           |           |     a     |           |
|           |           |           |           |     trail |           |
|           |           |           |           | ing       |           |
|           |           |           |           |     zero, |           |
|           |           |           |           |     that  |           |
|           |           |           |           |     must  |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     in    |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     prope |           |
|           |           |           |           | r         |           |
|           |           |           |           |     monet |           |
|           |           |           |           | ary       |           |
|           |           |           |           |     forma |           |
|           |           |           |           | t         |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.8       | Important | -   The   | -   getCo | -   Must  |
|           |           | Informati |     Impor | ntractReq |     be    |
|           |           | on        | tant      | uest      |     displ |
|           |           |           |     Infor |           | ayed      |
|           |           |           | mation    | -   Retur |     as is |
|           |           |           |     must  | ned       |     if    |
|           |           |           |     be    |     under |     Price |
|           |           |           |     displ |     the   | line      |
|           |           |           | ayed      |     \"imp |     is    |
|           |           |           |     for   | ortant\_i |     MOR,  |
|           |           |           |     the   | nformatio |     as    |
|           |           |           |     selec | n\"       |     per   |
|           |           |           | ted       |     node  |     Legal |
|           |           |           |     rate  |           | /CS.      |
|           |           |           |           | -   All   |           |
|           |           |           | -   Each  |     title |           |
|           |           |           |     inven | s         |           |
|           |           |           | tory      |     &     |           |
|           |           |           |     type  |     parag |           |
|           |           |           |     has a | raphs     |           |
|           |           |           |     diffe |     must  |           |
|           |           |           | rent      |     be    |           |
|           |           |           |     set   |     displ |           |
|           |           |           |     of    | ayed      |           |
|           |           |           |     verbi |     as    |           |
|           |           |           | age       |     recei |           |
|           |           |           |           | ved       |           |
|           |           |           | -   Verbi |           |           |
|           |           |           | age       |           |           |
|           |           |           |     also  |           |           |
|           |           |           |     diffe |           |           |
|           |           |           | rs        |           |           |
|           |           |           |     by    |           |           |
|           |           |           |     cance |           |           |
|           |           |           | llation   |           |           |
|           |           |           |     polic |           |           |
|           |           |           | y         |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.9       | Terms and | The Terms | -   getPo |           |
|           |           | Condition | and       | licy.Hote |           |
|           |           | s         | Condition | l         |           |
|           |           |           | s         |           |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed |           |           |
|           |           |           | ;         |           |           |
|           |           |           | they can  |           |           |
|           |           |           | be hidden |           |           |
|           |           |           | behind a  |           |           |
|           |           |           | click     |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.1.1     | Privacy   | The       | -   getPo |           |
|           |           | Policy    | Privacy   | licy.Hote |           |
|           |           |           | Policy    | l         |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed |           |           |
|           |           |           | ;         |           |           |
|           |           |           | it can be |           |           |
|           |           |           | hidden    |           |           |
|           |           |           | behind a  |           |           |
|           |           |           | click     |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Contract  | 3.1.2     | Customer  | -   The   | Front end |           |
|           |           | agreement |     custo | change    |           |
|           |           |           | mer       | for the   |           |
|           |           |           |     must  | partner   |           |
|           |           |           |     agree |           |           |
|           |           |           |     to    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     price |           |           |
|           |           |           |     and   |           |           |
|           |           |           |     all   |           |           |
|           |           |           |     terms |           |           |
|           |           |           |     in    |           |           |
|           |           |           |     order |           |           |
|           |           |           |     to    |           |           |
|           |           |           |     book, |           |           |
|           |           |           |     this  |           |           |
|           |           |           |     can   |           |           |
|           |           |           |     be:   |           |           |
|           |           |           |           |           |           |
|           |           |           |     -   I |           |           |
|           |           |           | nitials   |           |           |
|           |           |           |         i |           |           |
|           |           |           | nput      |           |           |
|           |           |           |         b |           |           |
|           |           |           | ox        |           |           |
|           |           |           |           |           |           |
|           |           |           |     -   C |           |           |
|           |           |           | heck      |           |           |
|           |           |           |         b |           |           |
|           |           |           | ox        |           |           |
|           |           |           |           |           |           |
|           |           |           |     -   e |           |           |
|           |           |           | tc.       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1       | Full      | The full  | -   getEx |           |
|           |           | property  | property  | press.Loo |           |
|           |           | name      | name must | kup       |           |
|           |           |           | be        |           |           |
|           |           |           | displayed | -   Retur |           |
|           |           |           | for the   | ned       |           |
|           |           |           | selected  |     under |           |
|           |           |           | property  |     the   |           |
|           |           |           |           |     \"hot |           |
|           |           |           |           | el\_name\ |           |
|           |           |           |           | "         |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.2       | Full      | -   For   | -   getEx |           |
|           |           | property  |     US/CA | press.Loo |           |
|           |           | address   |     prope | kup       |           |
|           |           |           | rties,    |           |           |
|           |           |           |     the   | -   Retur |           |
|           |           |           |     Provi | ned       |           |
|           |           |           | nce/State |     under |           |
|           |           |           |     code  |     the   |           |
|           |           |           |     are   |     \"add |           |
|           |           |           |     requi | ress\"    |           |
|           |           |           | red       |     node  |           |
|           |           |           |           |           |           |
|           |           |           | -   For   |           |           |
|           |           |           |     prope |           |           |
|           |           |           | rties     |           |           |
|           |           |           |     anywh |           |           |
|           |           |           | ere       |           |           |
|           |           |           |     else  |           |           |
|           |           |           |     in    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     world |           |           |
|           |           |           | ,         |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     Count |           |           |
|           |           |           | ry        |           |           |
|           |           |           |     code  |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     requi |           |           |
|           |           |           | red       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.3       | Room/Rate | The       | -   getEx |           |
|           |           | descripti | descripti | press.Loo |           |
|           |           | on        | on        | kup       |           |
|           |           |           | that is   |           |           |
|           |           |           | returned  | -   Retur |           |
|           |           |           | for the   | ned       |           |
|           |           |           | selected  |     under |           |
|           |           |           | rate must |     the   |           |
|           |           |           | be        |     \"roo |           |
|           |           |           | displayed | m\_type\" |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.4       | Promo     | Promo     | -   getEx |           |
|           |           | data      | data must | press.Loo |           |
|           |           |           | be        | kup       |           |
|           |           |           | displayed |           |           |
|           |           |           | for the   | -   Retur |           |
|           |           |           | selected  | ned       |           |
|           |           |           | rate, if  |     under |           |
|           |           |           | returned  |     the   |           |
|           |           |           |           |     \"pro |           |
|           |           |           |           | mo\_data\ |           |
|           |           |           |           | "         |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.5       | Check-In  | -   The   | -   getEx |           |
|           |           | date      |     selec | press.Loo |           |
|           |           |           | ted       | kup       |           |
|           |           |           |     check |           |           |
|           |           |           | -in       | -   Retur |           |
|           |           |           |     date  | ned       |           |
|           |           |           |     must  |     under |           |
|           |           |           |     be    |     the   |           |
|           |           |           |     displ |     \"che |           |
|           |           |           | ayed      | ck\_in\"  |           |
|           |           |           |           |     node  |           |
|           |           |           | -   Day   |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     week  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     inclu |           |           |
|           |           |           | ded       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.6       | Check-Out | -   The   | -   getEx |           |
|           |           | date      |     selec | press.Loo |           |
|           |           |           | ted       | kup       |           |
|           |           |           |     check |           |           |
|           |           |           | -out      | -   Retur |           |
|           |           |           |     date  | ned       |           |
|           |           |           |     must  |     under |           |
|           |           |           |     be    |     the   |           |
|           |           |           |     displ |     \"che |           |
|           |           |           | ayed      | ck\_out\" |           |
|           |           |           |           |     node  |           |
|           |           |           | -   Day   |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     week  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     inclu |           |           |
|           |           |           | ded       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.7       | Summary   | -   The   | -   getEx | -   The   |
|           |           | of        |     avg.  | press.Loo |     Resor |
|           |           | Charges   |     night | kup       | t         |
|           |           |           | ly        |           |     Fee   |
|           |           |           |     rate  | -   Avg.  |     is    |
|           |           |           |     is    |     night |     requi |
|           |           |           |     displ | ly        | red       |
|           |           |           | ayed      |     rate  |     by    |
|           |           |           |     for   |     is    |     law,  |
|           |           |           |     the   |     retur |     as    |
|           |           |           |     selec | ned       |     per   |
|           |           |           | ted       |     under |     Legal |
|           |           |           |     rate  |     the   | .         |
|           |           |           |           |     \"dis |           |
|           |           |           | -   The   | play\_pri | -   Taxes |
|           |           |           |     numbe | ce\"      |     &     |
|           |           |           | r         |     node  |     Fees  |
|           |           |           |     of    |           |     legal |
|           |           |           |     night | -   Numbe | ese       |
|           |           |           | s         | r         |     is    |
|           |           |           |     is    |     of    |     requi |
|           |           |           |     displ |     night | red       |
|           |           |           | ayed      | s         |     by    |
|           |           |           |           |     is    |     law,  |
|           |           |           | -   The   |     retur |     as    |
|           |           |           |     numbe | ned       |     per   |
|           |           |           | r         |     under |     Legal |
|           |           |           |     of    |     the   | .         |
|           |           |           |     rooms |     \"num |           |
|           |           |           |     is    | \_nights\ |           |
|           |           |           |     displ | "         |           |
|           |           |           | ayed      |     node  |           |
|           |           |           |           |           |           |
|           |           |           | -   The   | -   Numbe |           |
|           |           |           |     Taxes | r         |           |
|           |           |           |     and   |     of    |           |
|           |           |           |     Fees  |     rooms |           |
|           |           |           |     are   |     is    |           |
|           |           |           |     displ |     displ |           |
|           |           |           | ayed      | ayed      |           |
|           |           |           |           |     under |           |
|           |           |           |     -   \ |     the   |           |
|           |           |           | "Taxes    |     \"num |           |
|           |           |           |         a | \_rooms\" |           |
|           |           |           | nd        |     node  |           |
|           |           |           |         F |           |           |
|           |           |           | ees\"     | -   Taxes |           |
|           |           |           |         i |     &     |           |
|           |           |           | s         |     Fees  |           |
|           |           |           |         h |     are   |           |
|           |           |           | yperlinke |     displ |           |
|           |           |           | d         | ayed      |           |
|           |           |           |         t |     under |           |
|           |           |           | o         |     the   |           |
|           |           |           |         a |     \"dis |           |
|           |           |           |         l | play\_tax |           |
|           |           |           | ight      | es\"      |           |
|           |           |           |         b |     node  |           |
|           |           |           | ox        |           |           |
|           |           |           |         t |     -   \ |           |
|           |           |           | hat       | "Taxes    |           |
|           |           |           |         d |         & |           |
|           |           |           | isplays   |         F |           |
|           |           |           |         a | ees\"     |           |
|           |           |           | dditional |         m |           |
|           |           |           |         v | ust       |           |
|           |           |           | erbiage   |         b |           |
|           |           |           |           | e         |           |
|           |           |           | -   The   |         a |           |
|           |           |           |     Resor |         l |           |
|           |           |           | t         | ink       |           |
|           |           |           |     Fee   |         t |           |
|           |           |           |     is    | o         |           |
|           |           |           |     displ |         d |           |
|           |           |           | ayed,     | isplay    |           |
|           |           |           |     if    |         a |           |
|           |           |           |     appli | dditional |           |
|           |           |           | cable     |         v |           |
|           |           |           |           | erbiage   |           |
|           |           |           | -   The   |         t |           |
|           |           |           |     room  | hat       |           |
|           |           |           |     subto |         i |           |
|           |           |           | tal       | s         |           |
|           |           |           |     is    |         r |           |
|           |           |           |     displ | eturned   |           |
|           |           |           | ayed      |         u |           |
|           |           |           |           | nder      |           |
|           |           |           | -   The   |         t |           |
|           |           |           |     total | he        |           |
|           |           |           |     price |         \ |           |
|           |           |           |     is    | "taxes\_a |           |
|           |           |           |     displ | nd\_fees\ |           |
|           |           |           | ayed      | _policy\" |           |
|           |           |           |           |         n |           |
|           |           |           | -   The c | ode       |           |
|           |           |           | orrect    |           |           |
|           |           |           |     curre | -   Resor |           |
|           |           |           | ncy,      | t         |           |
|           |           |           |     curre |     Fee   |           |
|           |           |           | ncy       |     is    |           |
|           |           |           |     code, |     displ |           |
|           |           |           |     &     | ayed      |           |
|           |           |           |     curre |     under |           |
|           |           |           | ncy       |     the   |           |
|           |           |           |     symbo |     \"dis |           |
|           |           |           | l         | play\_pro |           |
|           |           |           |     are   | perty\_fe |           |
|           |           |           |     displ | e\"       |           |
|           |           |           | ayed      |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Room  |           |
|           |           |           |           |     subto |           |
|           |           |           |           | tal       |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_sub |           |
|           |           |           |           | total\"   |           |
|           |           |           |           |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   Total |           |
|           |           |           |           |     price |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_tot |           |
|           |           |           |           | al\"      |           |
|           |           |           |           |     node  |           |
|           |           |           |           |           |           |
|           |           |           |           | -   The   |           |
|           |           |           |           |     curre |           |
|           |           |           |           | ncy       |           |
|           |           |           |           |     infor |           |
|           |           |           |           | mation    |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_cur |           |
|           |           |           |           | rency\"   |           |
|           |           |           |           |     &     |           |
|           |           |           |           |     \"dis |           |
|           |           |           |           | play\_sym |           |
|           |           |           |           | bol\"     |           |
|           |           |           |           |     nodes |           |
|           |           |           |           |           |           |
|           |           |           |           | -   If a  |           |
|           |           |           |           |     value |           |
|           |           |           |           |     is    |           |
|           |           |           |           |     retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     that  |           |
|           |           |           |           |     has   |           |
|           |           |           |           |     trunc |           |
|           |           |           |           | ated      |           |
|           |           |           |           |     a     |           |
|           |           |           |           |     trail |           |
|           |           |           |           | ing       |           |
|           |           |           |           |     zero, |           |
|           |           |           |           |     that  |           |
|           |           |           |           |     must  |           |
|           |           |           |           |     be    |           |
|           |           |           |           |     displ |           |
|           |           |           |           | ayed      |           |
|           |           |           |           |     in    |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     prope |           |
|           |           |           |           | r         |           |
|           |           |           |           |     monet |           |
|           |           |           |           | ary       |           |
|           |           |           |           |     forma |           |
|           |           |           |           | t         |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.8       | Important | -   The   | -   getEx | -   Must  |
|           |           | Informati |     Impor | press.Loo |     be    |
|           |           | on        | tant      | kup       |     displ |
|           |           |           |     Infor |           | ayed      |
|           |           |           | mation    | -   Retur |     as is |
|           |           |           |     must  | ned       |     if    |
|           |           |           |     be    |     under |     Price |
|           |           |           |     displ |     the   | line      |
|           |           |           | ayed      |     \"imp |     is    |
|           |           |           |     for   | ortant\_i |     MOR,  |
|           |           |           |     the   | nformatio |     as    |
|           |           |           |     selec | n\"       |     per   |
|           |           |           | ted       |     node  |     Legal |
|           |           |           |     rate  |           | /CS.      |
|           |           |           |           | -   All   |           |
|           |           |           | -   Each  |     title |           |
|           |           |           |     inven | s         |           |
|           |           |           | tory      |     &     |           |
|           |           |           |     type  |     parag |           |
|           |           |           |     has a | raphs     |           |
|           |           |           |     diffe |     must  |           |
|           |           |           | rent      |     be    |           |
|           |           |           |     set   |     displ |           |
|           |           |           |     of    | ayed      |           |
|           |           |           |     verbi |     as    |           |
|           |           |           | age       |     recei |           |
|           |           |           |           | ved       |           |
|           |           |           | -   Verbi |           |           |
|           |           |           | age       |           |           |
|           |           |           |     also  |           |           |
|           |           |           |     diffe |           |           |
|           |           |           | rs        |           |           |
|           |           |           |     by    |           |           |
|           |           |           |     cance |           |           |
|           |           |           | llation   |           |           |
|           |           |           |     polic |           |           |
|           |           |           | y         |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The   |           |           |
|           |           |           |     \"Cus |           |           |
|           |           |           | tomer     |           |           |
|           |           |           |     Servi |           |           |
|           |           |           | ce\"      |           |           |
|           |           |           |     bulle |           |           |
|           |           |           | t         |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           |     -   T |           |           |
|           |           |           | he        |           |           |
|           |           |           |         c |           |           |
|           |           |           | orrect    |           |           |
|           |           |           |         p |           |           |
|           |           |           | hone      |           |           |
|           |           |           |         n |           |           |
|           |           |           | umber     |           |           |
|           |           |           |         i |           |           |
|           |           |           | s         |           |           |
|           |           |           |         d |           |           |
|           |           |           | isplayed  |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.9       | Trip Id   | The Trip  | -   getEx | -   Must  |
|           |           |           | Id that   | press.Loo |     be    |
|           |           |           | is        | kup       |     displ |
|           |           |           | returned  |           | ayed      |
|           |           |           | must be   | -   Retur |     as    |
|           |           |           | displayed | ned       |     this  |
|           |           |           |           |     under |     is    |
|           |           |           |           |     the   |     the   |
|           |           |           |           |     \"id\ |     numbe |
|           |           |           |           | "         | r         |
|           |           |           |           |     node  |     the   |
|           |           |           |           |           |     custo |
|           |           |           |           |           | mer       |
|           |           |           |           |           |     will  |
|           |           |           |           |           |     requi |
|           |           |           |           |           | re        |
|           |           |           |           |           |     to    |
|           |           |           |           |           |     look  |
|           |           |           |           |           |     up    |
|           |           |           |           |           |     their |
|           |           |           |           |           |     reser |
|           |           |           |           |           | vation.   |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1.1     | Booking   | The       | -   getEx |           |
|           |           | status    | status of | press.Loo |           |
|           |           |           | the       | kup       |           |
|           |           |           | reservati |           |           |
|           |           |           | on        | -   Retur |           |
|           |           |           | is        | ned       |           |
|           |           |           | displayed |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"sta |           |
|           |           |           |           | tus\"     |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1.2     | Hotel     | The hotel | -   getEx | -   Must  |
|           |           | confirmat | confirmat | press.Loo |     be    |
|           |           | ion       | ion       | kup       |     displ |
|           |           | number    | number    |           | ayed      |
|           |           |           | that is   | -   Retur |     as    |
|           |           |           | returned  | ned       |     this  |
|           |           |           | must be   |     under |     is    |
|           |           |           | displayed |     the   |     the   |
|           |           |           |           |     \"con |     numbe |
|           |           |           |           | firmation | r         |
|           |           |           |           | \_code\"  |     the   |
|           |           |           |           |     node  |     custo |
|           |           |           |           |           | mer       |
|           |           |           |           |           |     will  |
|           |           |           |           |           |     requi |
|           |           |           |           |           | re        |
|           |           |           |           |           |     to    |
|           |           |           |           |           |     check |
|           |           |           |           |           |     into  |
|           |           |           |           |           |     their |
|           |           |           |           |           |     room( |
|           |           |           |           |           | s).       |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1.3     | Hotel     | The hotel | -   getEx |           |
|           |           | phone     | phone     | press.Loo |           |
|           |           | number    | number    | kup       |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed | -   Retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"pho |           |
|           |           |           |           | ne\"      |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1.4     | Customer  | The       | -   getEx | -   Must  |
|           |           | Service   | correct   | press.Loo |     be    |
|           |           | phone     | Customer  | kup       |     displ |
|           |           | number    | Service   |           | ayed      |
|           |           |           | number is | -   Retur |     clear |
|           |           |           | displayed | ned       | ly        |
|           |           |           |           |     under |     for   |
|           |           |           |           |     the   |     the   |
|           |           |           |           |     \"Pol |     user, |
|           |           |           |           | icy       |     as    |
|           |           |           |           |     0\"   |     per   |
|           |           |           |           |     node  |     CS.   |
|           |           |           |           |     withi |           |
|           |           |           |           | n         |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"Imp |           |
|           |           |           |           | ortant    |           |
|           |           |           |           |     Infor |           |
|           |           |           |           | mation\"  |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1.5     | Billing   | The       | -   getEx |           |
|           |           | name      | billing   | press.Loo |           |
|           |           |           | name      | kup       |           |
|           |           |           | entered   |           |           |
|           |           |           | on the    | -   Retur |           |
|           |           |           | Contract  | ned       |           |
|           |           |           | page must |     under |           |
|           |           |           | be        |     the   |           |
|           |           |           | displayed |     \"nam |           |
|           |           |           |           | e\"       |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1.6     | Credit    | The       | -   getEx |           |
|           |           | card type | credit    | press.Loo |           |
|           |           |           | card type | kup       |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed | -   Retur |           |
|           |           |           |           | ned       |           |
|           |           |           |           |     under |           |
|           |           |           |           |     the   |           |
|           |           |           |           |     \"car |           |
|           |           |           |           | d\_type\" |           |
|           |           |           |           |     node  |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Success   | 4.1.7     | Cancellat | -   For   | -   For   |           |
|           |           | ion       |     cance |     non-c |           |
|           |           | link      | llable    | ancellabl |           |
|           |           |           |     rates | e         |           |
|           |           |           | ,         |     rates |           |
|           |           |           |     a     | ,         |           |
|           |           |           |     link  |     the   |           |
|           |           |           |     must  |     Impor |           |
|           |           |           |     be    | tant      |           |
|           |           |           |     displ |     Infor |           |
|           |           |           | ayed      | mation    |           |
|           |           |           |     to    |     state |           |
|           |           |           |     cance | s         |           |
|           |           |           | l         |     the   |           |
|           |           |           |     the   |     cance |           |
|           |           |           |     booki | llation   |           |
|           |           |           | ng        |     polic |           |
|           |           |           |     direc | y         |           |
|           |           |           | tly       |     and   |           |
|           |           |           |     or to |     will  |           |
|           |           |           |     look  |     suffi |           |
|           |           |           |     up    | ce.       |           |
|           |           |           |     the   |           |           |
|           |           |           |     reser |           |           |
|           |           |           | vation    |           |           |
|           |           |           |     detai |           |           |
|           |           |           | ls        |           |           |
|           |           |           |     and   |           |           |
|           |           |           |     cance |           |           |
|           |           |           | l         |           |           |
|           |           |           |     it on |           |           |
|           |           |           |     this  |           |           |
|           |           |           |     revie |           |           |
|           |           |           | w         |           |           |
|           |           |           |     page. |           |           |
|           |           |           |           |           |           |
|           |           |           | -   For   |           |           |
|           |           |           |     non-c |           |           |
|           |           |           | ancellabl |           |           |
|           |           |           | e         |           |           |
|           |           |           |     rates |           |           |
|           |           |           | ,         |           |           |
|           |           |           |     it    |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     made  |           |           |
|           |           |           |     clear |           |           |
|           |           |           |     to    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     user  |           |           |
|           |           |           |     that  |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     booki |           |           |
|           |           |           | ng        |           |           |
|           |           |           |     canno |           |           |
|           |           |           | t         |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     cance |           |           |
|           |           |           | lled      |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.1       | Full      | The full  |           |           |
| Email     |           | property  | property  |           |           |
|           |           | name      | name is   |           |           |
|           |           |           | displayed |           |           |
|           |           |           | for the   |           |           |
|           |           |           | selected  |           |           |
|           |           |           | property  |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.2       | Full      | -   For   |           |           |
| Email     |           | property  |     US/CA |           |           |
|           |           | address   |     prope |           |           |
|           |           |           | rties,    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     Provi |           |           |
|           |           |           | nce/State |           |           |
|           |           |           |     code  |           |           |
|           |           |           |     are   |           |           |
|           |           |           |     requi |           |           |
|           |           |           | red       |           |           |
|           |           |           |           |           |           |
|           |           |           | -   For   |           |           |
|           |           |           |     prope |           |           |
|           |           |           | rties     |           |           |
|           |           |           |     anywh |           |           |
|           |           |           | ere       |           |           |
|           |           |           |     else  |           |           |
|           |           |           |     in    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     world |           |           |
|           |           |           | ,         |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     Count |           |           |
|           |           |           | ry        |           |           |
|           |           |           |     code  |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     requi |           |           |
|           |           |           | red       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.3       | Room/Rate | The       |           |           |
| Email     |           | descripti | descripti |           |           |
|           |           | on        | on        |           |           |
|           |           |           | that is   |           |           |
|           |           |           | returned  |           |           |
|           |           |           | for the   |           |           |
|           |           |           | selected  |           |           |
|           |           |           | rate is   |           |           |
|           |           |           | displayed |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.4       | Check-In  | -   The   |           |           |
| Email     |           | date      |     selec |           |           |
|           |           |           | ted       |           |           |
|           |           |           |     check |           |           |
|           |           |           | -in       |           |           |
|           |           |           |     date  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   Day   |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     week  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     inclu |           |           |
|           |           |           | ded       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.5       | Check-Out | -   The   |           |           |
| Email     |           | date      |     selec |           |           |
|           |           |           | ted       |           |           |
|           |           |           |     check |           |           |
|           |           |           | -out      |           |           |
|           |           |           |     date  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   Day   |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     week  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     inclu |           |           |
|           |           |           | ded       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.6       | Summary   | -   The   |           |           |
| Email     |           | of        |     avg.  |           |           |
|           |           | Charges   |     night |           |           |
|           |           |           | ly        |           |           |
|           |           |           |     rate  |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |     for   |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     selec |           |           |
|           |           |           | ted       |           |           |
|           |           |           |     rate  |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The   |           |           |
|           |           |           |     numbe |           |           |
|           |           |           | r         |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     night |           |           |
|           |           |           | s         |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The   |           |           |
|           |           |           |     numbe |           |           |
|           |           |           | r         |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     rooms |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The   |           |           |
|           |           |           |     Taxes |           |           |
|           |           |           |     and   |           |           |
|           |           |           |     Fees  |           |           |
|           |           |           |     are   |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The   |           |           |
|           |           |           |     Resor |           |           |
|           |           |           | t         |           |           |
|           |           |           |     Fee   |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed,     |           |           |
|           |           |           |     if    |           |           |
|           |           |           |     appli |           |           |
|           |           |           | cable     |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The   |           |           |
|           |           |           |     room  |           |           |
|           |           |           |     subto |           |           |
|           |           |           | tal       |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The   |           |           |
|           |           |           |     total |           |           |
|           |           |           |     price |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   The c |           |           |
|           |           |           | orrect    |           |           |
|           |           |           |     curre |           |           |
|           |           |           | ncy,      |           |           |
|           |           |           |     curre |           |           |
|           |           |           | ncy       |           |           |
|           |           |           |     code, |           |           |
|           |           |           |     &     |           |           |
|           |           |           |     curre |           |           |
|           |           |           | ncy       |           |           |
|           |           |           |     symbo |           |           |
|           |           |           | l         |           |           |
|           |           |           |     are   |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.7       | Trip Id   | The Trip  |           | -   Must  |
| Email     |           |           | Id that   |           |     be    |
|           |           |           | is        |           |     displ |
|           |           |           | returned  |           | ayed      |
|           |           |           | must be   |           |     as    |
|           |           |           | displayed |           |     this  |
|           |           |           |           |           |     is    |
|           |           |           |           |           |     the   |
|           |           |           |           |           |     numbe |
|           |           |           |           |           | r         |
|           |           |           |           |           |     the   |
|           |           |           |           |           |     custo |
|           |           |           |           |           | mer       |
|           |           |           |           |           |     will  |
|           |           |           |           |           |     requi |
|           |           |           |           |           | re        |
|           |           |           |           |           |     to    |
|           |           |           |           |           |     look  |
|           |           |           |           |           |     up    |
|           |           |           |           |           |     their |
|           |           |           |           |           |     reser |
|           |           |           |           |           | vation.   |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.8       | Booking   | The       |           |           |
| Email     |           | status    | status of |           |           |
|           |           |           | the       |           |           |
|           |           |           | reservati |           |           |
|           |           |           | on        |           |           |
|           |           |           | is        |           |           |
|           |           |           | displayed |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.9       | Hotel     | The hotel |           | -   Must  |
| Email     |           | confirmat | confirmat |           |     be    |
|           |           | ion       | ion       |           |     displ |
|           |           | number    | number    |           | ayed      |
|           |           |           | that is   |           |     as    |
|           |           |           | returned  |           |     this  |
|           |           |           | must be   |           |     is    |
|           |           |           | displayed |           |     the   |
|           |           |           |           |           |     numbe |
|           |           |           |           |           | r         |
|           |           |           |           |           |     the   |
|           |           |           |           |           |     custo |
|           |           |           |           |           | mer       |
|           |           |           |           |           |     will  |
|           |           |           |           |           |     requi |
|           |           |           |           |           | re        |
|           |           |           |           |           |     to    |
|           |           |           |           |           |     check |
|           |           |           |           |           |     into  |
|           |           |           |           |           |     their |
|           |           |           |           |           |     room( |
|           |           |           |           |           | s).       |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.1.1     | Hotel     | The hotel |           |           |
| Email     |           | phone     | phone     |           |           |
|           |           | number    | number    |           |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Conf.     | 5.1.2     | Customer  | The       |           | -   Must  |
| Email     |           | Service   | correct   |           |     be    |
|           |           | phone     | Customer  |           |     displ |
|           |           | number    | Service   |           | ayed      |
|           |           |           | number is |           |     clear |
|           |           |           | displayed |           | ly        |
|           |           |           |           |           |     for   |
|           |           |           |           |           |     the   |
|           |           |           |           |           |     user, |
|           |           |           |           |           |     as    |
|           |           |           |           |           |     per   |
|           |           |           |           |           |     CS.   |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.1       | Booking   | The       |           |           |
| Email     |           | status    | status of |           |           |
|           |           |           | the       |           |           |
|           |           |           | reservati |           |           |
|           |           |           | on        |           |           |
|           |           |           | is        |           |           |
|           |           |           | displayed |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.2       | Trip Id   | The Trip  |           | -   Must  |
| Email     |           |           | Id that   |           |     be    |
|           |           |           | is        |           |     displ |
|           |           |           | returned  |           | ayed      |
|           |           |           | must be   |           |     as    |
|           |           |           | displayed |           |     this  |
|           |           |           |           |           |     is    |
|           |           |           |           |           |     the   |
|           |           |           |           |           |     numbe |
|           |           |           |           |           | r         |
|           |           |           |           |           |     the   |
|           |           |           |           |           |     custo |
|           |           |           |           |           | mer       |
|           |           |           |           |           |     will  |
|           |           |           |           |           |     requi |
|           |           |           |           |           | re        |
|           |           |           |           |           |     to    |
|           |           |           |           |           |     look  |
|           |           |           |           |           |     up    |
|           |           |           |           |           |     their |
|           |           |           |           |           |     reser |
|           |           |           |           |           | vation.   |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.3       | Full      | The full  |           |           |
| Email     |           | property  | property  |           |           |
|           |           | name      | name is   |           |           |
|           |           |           | displayed |           |           |
|           |           |           | for the   |           |           |
|           |           |           | selected  |           |           |
|           |           |           | property  |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.4       | Full      | -   For   |           |           |
| Email     |           | property  |     US/CA |           |           |
|           |           | address   |     prope |           |           |
|           |           |           | rties,    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     Provi |           |           |
|           |           |           | nce/State |           |           |
|           |           |           |     code  |           |           |
|           |           |           |     are   |           |           |
|           |           |           |     requi |           |           |
|           |           |           | red       |           |           |
|           |           |           |           |           |           |
|           |           |           | -   For   |           |           |
|           |           |           |     prope |           |           |
|           |           |           | rties     |           |           |
|           |           |           |     anywh |           |           |
|           |           |           | ere       |           |           |
|           |           |           |     else  |           |           |
|           |           |           |     in    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     world |           |           |
|           |           |           | ,         |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     Count |           |           |
|           |           |           | ry        |           |           |
|           |           |           |     code  |           |           |
|           |           |           |     is    |           |           |
|           |           |           |     requi |           |           |
|           |           |           | red       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.5       | Hotel     | The hotel |           |           |
| Email     |           | phone     | phone     |           |           |
|           |           | number    | number    |           |           |
|           |           |           | must be   |           |           |
|           |           |           | displayed |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.6       | Room/Rate | The       |           |           |
| Email     |           | descripti | descripti |           |           |
|           |           | on        | on        |           |           |
|           |           |           | that is   |           |           |
|           |           |           | returned  |           |           |
|           |           |           | for the   |           |           |
|           |           |           | selected  |           |           |
|           |           |           | rate is   |           |           |
|           |           |           | displayed |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.7       | Check-In  | -   The   |           |           |
| Email     |           | date      |     selec |           |           |
|           |           |           | ted       |           |           |
|           |           |           |     check |           |           |
|           |           |           | -in       |           |           |
|           |           |           |     date  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   Day   |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     week  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     inclu |           |           |
|           |           |           | ded       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| Cancel.   | 6.8       | Check-Out | -   The   |           |           |
| Email     |           | date      |     selec |           |           |
|           |           |           | ted       |           |           |
|           |           |           |     check |           |           |
|           |           |           | -out      |           |           |
|           |           |           |     date  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     displ |           |           |
|           |           |           | ayed      |           |           |
|           |           |           |           |           |           |
|           |           |           | -   Day   |           |           |
|           |           |           |     of    |           |           |
|           |           |           |     the   |           |           |
|           |           |           |     week  |           |           |
|           |           |           |     must  |           |           |
|           |           |           |     be    |           |           |
|           |           |           |     inclu |           |           |
|           |           |           | ded       |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
