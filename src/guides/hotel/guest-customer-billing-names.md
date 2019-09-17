## Introduction
The purpose of this guide is to outline how names are to be passed into the Hotel API when making a reservation.

## Descriptions
|    Parameter Name 	|       Required    	|       Type    	|       Description                                      |
|:--------------------- |:---------------------:|:-----------------:|:-------------------------------------------------------|
| card_holder	        |   Yes                 |   string          |	The billing name on as it appears on the credit card.|
| name_first	        |   Yes                 |	string          |	The first name of the customer.                      |
| name_middle	        |   No                  |	string          |	The middle name of the customer.                     |
| name_last	            |   Yes                 |	string          |	The last name of the customer.                       |
| guest_name_first	    |   No                  |	array	        |   The first name of the rest of the guests.            |
| guest_name_middle	    |   No                  |	array	        |   The middle name of the rest of the guests.           |
| guest_name_last	    |   No                  |	array           |	The last name of the rest of the guests.             |

## Getting Started
When booking one room, the `name` of the customer will be considered the first `guest`. 
When multiple rooms are being booked, the customer name will be used for `all` of the rooms.
To assign specific guest names to each room, use the optional `guest_name` arrays as follows:

`name_first = Peter`

`name_last = Bishop`

`guest_name_first[0] = Olivia`

`guest_name_last[0] = Dunham`

`guest_name_first[1] = Walter`

`guest_name_last[1] = Bishop`



