API Hotel Requirements Appendix
===============================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:

-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement

![Hotel Depart](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Hotel%20Appendix%20-%20Results.png)


### 1.1 - 	Average Nightly Rate 

####  Expected Result:

- The Avg. Nightly Rate is displayed for each properly
- The rate is not multiplied by the number of nights or rooms

####  Additional Information:  

- getExpress.Results
- Returned under the "source_night_price" node within the "night_price_data" cluster for each property 
- If a value is returned that has truncated a trailing zero, that must be displayed in the proper monetary format (two decimal places or whole dollar)
- If using a different currency than the source currency, the "display_night_price" node can be used

### 1.2 - Currency	

####  Expected Result:

The correct currency, currency code, & currency symbol are displayed

####  Additional Information: 

- getExpress.Results
 - Returned under the "source_currency" & "source_symbol" nodes within the "price_details" cluster for each property
 - If using a different currency than the source currency, the "display_currency" & "display_symbol" nodes can be used

### 1.3 - Full property name	

####  Expected Result:

The full property name must be displayed for each property

####  Additional Information: 

- getExpress.Results
 - Returned under the "name" node within the "rate_data" cluster for each property  

### 1.4 - Full property address	

####  Expected Result:

- For US/CA properties, the Province/State code are required
 - For properties anywhere else in the world, the Country code is required
 
####  Additional Information: 

- getExpress.Results
 - Returned under the "address" cluster within the "rate_data" node for each property

### 1.5 - Star rating	

####  Expected Result:

The correct star rating must be displayed for each property

####  Additional Information: 

- getExpress.Results
- Returned under the "star_rating" node within the "rate_data" node for each property

### 1.6 - Search box	

####  Expected Result:

A search box must be accessible on the Results page

####  Additional Information: 

- Can be a slimmed down version of the Hotel search box
- getAutoSuggestV2

![Hotel Details](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Hotel%20Appendix%20-%20Details.png)


### 2.1 - Full property name

####  Expected Result:

The full property name must be displayed for the selected property

####  Additional Information: 

- getHotelDetails
 - Download option available
 - Returned under the "name" node within the "hotel_data" cluster for each property 

### 2.2 - Full property address	

####  Expected Result:

- For US/CA properties, the Province/State code are required
 - For properties anywhere else in the world, the Country code is required
 
####  Additional Information: 

- getHotelDetails
- Download option available
- Returned under the "address" node within the "hotel_data" cluster for each prope

### 2.3 - Star rating	

####  Expected Result:

The correct star rating must be displayed for each property

####  Additional Information: 

- getHotelDetails
- Download option available
- Returned under the "star_rating" node within the "hotel_data" cluster for each property returned

### 2.4 - Hotel description	

####  Expected Result:

The hotel description must be displayed, it can be partially collapsed, but must be visible and accessible

####  Additional Information: 

- getHotelDetails
 - Download option available
 - Returned under the "hotel_description" node

### 2.5 - Amenities	

####  Expected Result:

The amenities that are returned for the property must be displayed

####  Additional Information: 

- getHotelDetails
- Download option available
-   Returned under the "amenity_data" nodes

### 2.6 - Reviews	

####  Expected Result:

The review data returned must be displayed; they can be hidden behind a click

####  Additional Information: 

- getHotelReviews

### 2.7 - Average Nightly Rate	

####  Expected Result:

- The Avg. Nightly Rate is displayed for each properly
 - The correct currency, currency code, & currency symbol are displayed
 - The rate is not multiplied by the number of nights or rooms
 
####  Additional Information: 

- getHotelDetails
-  Download option available
-  Returned under the "source_price" node within the "static_low_rate" cluster for each property returned
-  If a value is returned that has truncated a trailing zero, that must be displayed in the proper monetary format
-  If using a different currency than the source currency, the "display_price" node can be used

### 2.8 - Currency

####  Expected Result:

The correct currency, currency code, & currency symbol are displayed

####  Additional Information: 

- getHotelDetails
- Download option available
- Returned under the "source_currency" & "source_symbol" nodes within the "static_low_rate" cluster for each property returned
- If using a different currency than the source currency, the "display_currency" & "display_symbol" nodes can be used

### 2.9 - Room/Rate description

####  Expected Result:

The description that is returned for each rate must be displayed

####  Additional Information: 

- getExpress.MultiContract
-  Returned under the "title" & "description" nodes

### 2.1.1 -	Cancellation policy

####  Expected Result:

The cancellation policy must be displayed for each rate

####  Additional Information: 

- getExpress.MultiContract
- Returned under the "is_cancellable" & "free_cancellation" nodes.
    - 0 = cancellable, free
    - 1 = not cancellable, not free

### 2.1.2 -	Promo data

####  Expected Result:

Promo data must be displayed for each rate, if returned

####  Additional Information: 

- getExpress.MultiContract
- Returned under the "promo" node within the "details_summary" cluster for each rate returned

![Hotel Contract](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Hotel%20Appendix%20-%20Contract1.png)


### 3.1 - Full property name

####  Expected Result:

The full property name must be displayed for the selected property

####  Additional Information: 

- getContractRequest
- Returned under the "hotel_name" node

### 3.2 - Full property address	

####  Expected Result:

- For US/CA properties, the Province/State code are required
- For properties anywhere else in the world, the Country code is required

####  Additional Information: 

- getContractRequest
 - Returned under the "address" node

### 3.3 - Room/Rate description

####  Expected Result:

The description that is returned for the selected rate must be displayed

####  Additional Information: 

- getContractRequest
 - Returned under the "title" & "description" nodes

### 3.4 -	Promo data

####  Expected Result:

Promo data must be displayed for the selected rate, if returned

####  Additional Information: 

- getContractRequest
-  Returned under the "promo" node

### 3.5 - Check-In date	

####  Expected Result:

The selected check-in date must be displayed

####  Additional Information: 

- getContractRequest
 - Returned under the "check_in" node
-  Day of the week is recommended, but not required

### 3.6 - Check-Out date	

####  Expected Result:

The selected check-out date must be displayed

####  Additional Information: 

- getContractRequest
- Returned under the "check_out" node
- Day of the week is recommended, but not required


### 3.7 - Summary of Charges

####  Expected Result:

- The avg. nightly rate is displayed for the selected rate
 - The number of nights is displayed
 - The number of rooms is displayed
 - The Taxes and Fees are displayed
    - "Taxes and Fees" is hyperlinked to a light box that displays additional verbiage 
 - The Resort Fee is displayed, if applicable
 - The room subtotal is displayed
 - The total price is displayed
 - The correct currency, currency code, & currency symbol are displayed
 
####  Additional Information: 

- getContractRequest
- Avg. nightly rate is returned under the "display_price" node
- Number of nights is returned under the "num_nights" node
- Number of rooms is displayed under the "num_rooms" node
- Taxes & Fees are displayed under the "display_taxes" node
    - "Taxes & Fees" must be a link to display additional verbiage that is returned under the "taxes_and_fees_policy" node
- Resort Fee is displayed under the "display_property_fee" node
- Room subtotal is displayed under the "display_subtotal" node
- Total price is displayed under the "display_total" node
- The currency information is returned under the "display_currency" & "display_symbol" nodes
- If a value is returned that has truncated a trailing zero, that must be displayed in the proper monetary format

####   Reasoning for Requirements

- The Resort Fee is required by law, as per Legal.
 - Taxes & Fees legalese is required by law, as per Legal.

### 3.8 -	Important Information

####  Expected Result:

- The Important Information must be displayed for the selected rate
- Each inventory type has a different set of verbiage
- Verbiage also differs by cancellation policy

####  Additional Information: 

- getContractRequest
- Returned under the "important_information" node
- All titles & paragraphs must be displayed as received

####   Reasoning for Requirements

- Must be displayed as is if Priceline is MOR, as per Legal/CS.

![Hotel Contract2](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Hotel%20Appendix%20-%20Contract2.png)


### 3.9 - Terms and Conditions	

####  Expected Result:

The Terms and Conditions must be displayed; they can be hidden behind a click

####  Additional Information: 

- getPolicy.Hotel

### 3.1.1 -	Privacy Policy

####  Expected Result: 

The Privacy Policy must be displayed; it can be hidden behind a click

####  Additional Information: 

- getPolicy.Hotel

### 3.1.2 -	Customer agreement

####  Expected Result:

- The customer must agree to the price and all terms in order to book, this can be:
    - Initials input box
    - Check box
    - etc. 
    
####  Additional Information: 

Front end change for the partner

![Hotel Success](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Hotel%20Appendix%20-%20Success.png)


### 4.1 - Full property name	

####  Expected Result:

The full property name must be displayed for the selected property

####  Additional Information: 

- getExpress.Lookup
 - Returned under the "hotel_name" node

### 4.2 -Full property address

####  Expected Result:

- For US/CA properties, the Province/State code are required
- For properties anywhere else in the world, the Country code is required

####  Additional Information: 

- getExpress.Lookup
 - Returned under the "address" node

### 4.3 -	Room/Rate description

####  Expected Result:

The description that is returned for the selected rate must be displayed

####  Additional Information: 

- getExpress.Lookup
-  Returned under the "room_type" node

### 4.4 - Promo data	

####  Expected Result:

Promo data must be displayed for the selected rate, if returned

####  Additional Information: 

- getExpress.Lookup
-  Returned under the "promo_data" node

### 4.5 -	Check-In date

####  Expected Result:

- The selected check-in date must be displayed
- Day of the week must be included

####  Additional Information: 

- getExpress.Lookup
- Returned under the "check_in" node

### 4.6 - Check-Out date	

####  Expected Result:

- The selected check-out date must be displayed
-  Day of the week must be included

####  Additional Information: 

- getExpress.Lookup
- Returned under the "check_out" node

### 4.7 - Summary of Charges	

####  Expected Result:

- The avg. nightly rate is displayed for the selected rate
- The number of nights is displayed
- The number of rooms is displayed
- The Taxes and Fees are displayed
    - "Taxes and Fees" is hyperlinked to a light box that displays additional verbiage 
- The Resort Fee is displayed, if applicable
- The room subtotal is displayed
- The total price is displayed
- The correct currency, currency code, & currency symbol are displayed

####  Additional Information: 

- getExpress.Lookup
- Avg. nightly rate is returned under the "display_price" node
- Number of nights is returned under the "num_nights" node
- Number of rooms is displayed under the "num_rooms" node
- Taxes & Fees are displayed under the "display_taxes" node
    - "Taxes & Fees" must be a link to display additional verbiage that is returned under the "taxes_and_fees_policy" node
- Resort Fee is displayed under the "display_property_fee" node
- Room subtotal is displayed under the "display_subtotal" node
- Total price is displayed under the "display_total" node
- The currency information is returned under the "display_currency" & "display_symbol" nodes
- If a value is returned that has truncated a trailing zero, that must be displayed in the proper monetary format

####   Reasoning for Requirements

- The Resort Fee is required by law, as per Legal.
 - Taxes & Fees legalese is required by law, as per Legal.

### 4.8 - Important Information	

####  Expected Result:

- The Important Information must be displayed for the selected rate
- Each inventory type has a different set of verbiage
- Verbiage also differs by cancellation policy
- The "Customer Service" bullet must be displayed
    - The correct phone number is displayed
    
####  Additional Information: 

- getExpress.Lookup
- Returned under the "important_information" node
- All titles & paragraphs must be displayed as received

####   Reasoning for Requirements

- Must be displayed as is if Priceline is MOR, as per Legal/CS.

### 4.9 -	Trip Id

####  Expected Result:

The Trip Id that is returned must be displayed

####  Additional Information: 

- getExpress.Lookup
-  Returned under the "id" node

####   Reasoning for Requirements

- Must be displayed as this is the number the customer will require to look up their reservation.

### 4.1.1 -	Booking status

####  Expected Result:

The status of the reservation is displayed

####  Additional Information: 

- getExpress.Lookup
 - Returned under the "status" node

### 4.1.2 -	Hotel confirmation number

####  Expected Result:

The hotel confirmation number that is returned must be displayed

####  Additional Information: 

- getExpress.Lookup
 - Returned under the "confirmation_code" node
 
####   Reasoning for Requirements

- Must be displayed as this is the number the customer will require to check into their room(s).

### 4.1.3 -	Hotel phone number

####  Expected Result:

The hotel phone number must be displayed

####  Additional Information: 

- getExpress.Lookup
- Returned under the "phone" node

### 4.1.4 - Customer Service phone number	

####  Expected Result:

The correct Customer Service number is displayed

####  Additional Information: 

- getExpress.Lookup
 - Returned under the "Policy 0" node within the "Important Information" node
 
####   Reasoning for Requirements

Must be displayed clearly for the user, as per CS.

### 4.1.5 -	Billing name

####  Expected Result:

The billing name entered on the Contract page must be displayed

####  Additional Information: 

- getExpress.Lookup
- Returned under the "name" node

### 4.1.6 -	Credit card type

####  Expected Result:

The credit card type must be displayed

####  Additional Information: 

- getExpress.Lookup
-  Returned under the "card_type" node

### 4.1.7 -	Cancellation link

####  Expected Result:

- For cancellable rates, a link must be displayed to cancel the booking directly or to look up the reservation details and cancel it on this review page.
- For non-cancellable rates, it must be made clear to the user that the booking cannot be cancelled

####  Additional Information: 

- For non-cancellable rates, the Important Information states the cancellation policy and will suffice.

![Hotel ConfEmail](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Hotel%20Appendix%20-%20ConfEmail.png)

### 5.1 -	Full property name

####  Expected Result:

The full property name is displayed for the selected property

### 5.2 -	Full property address

####  Expected Result:

- For US/CA properties, the Province/State code are required
 - For properties anywhere else in the world, the Country code is required

### 5.3 -	Room/Rate description

####  Expected Result:

The description that is returned for the selected rate is displayed

### 5.4 -	Check-In date

####  Expected Result:

- The selected check-in date must be displayed
- Day of the week must be included

### 5.5 -	Check-Out date

####  Expected Result:

- The selected check-out date must be displayed
- Day of the week must be included

### 5.6 -	Summary of Charges

####  Expected Result:

- The avg. nightly rate is displayed for the selected rate
 - The number of nights is displayed
 - The number of rooms is displayed
 - The Taxes and Fees are displayed 
 - The Resort Fee is displayed, if applicable
 - The room subtotal is displayed
 - The total price is displayed
 - The correct currency, currency code, & currency symbol are displayed

### 5.7 -	Trip Id

####  Expected Result:

The Trip Id that is returned must be displayed

####   Reasoning for Requirements

- Must be displayed as this is the number the customer will require to look up their reservation.

### 5.8 -	Booking status

####  Expected Result:

The status of the reservation is displayed

### 5.9 -	Hotel confirmation number

####  Expected Result:

The hotel confirmation number that is returned must be displayed

####   Reasoning for Requirements

- Must be displayed as this is the number the customer will require to check into their room(s).

### 5.1.1 - Hotel phone number

####  Expected Result:

The hotel phone number must be displayed

### 5.1.2 -	Customer Service phone number

####  Expected Result:

The correct Customer Service number is displayed

####   Reasoning for Requirements

Must be displayed clearly for the user, as per CS.  

![Hotel Details](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Hotel%20Appendix%20-%20Details.png)


### 6.1 -	Booking status

####  Expected Result:

The status of the reservation is displayed

### 6.2 -	Trip Id

####  Expected Result:

The Trip Id that is returned must be displayed

####   Reasoning for Requirements

- Must be displayed as this is the number the customer will require to look up their reservation.

### 6.3 -	Full property name

####  Expected Result:

The full property name is displayed for the selected property

### 6.4 -	Full property address

####  Expected Result:

- For US/CA properties, the Province/State code are required
 - For properties anywhere else in the world, the Country code is required

### 6.5 -	Hotel phone number

####  Expected Result:

The hotel phone number must be displayed

### 6.6 -	Room/Rate description

####  Expected Result:

The description that is returned for the selected rate is displayed

### 6.7 -	Check-In date

####  Expected Result:

- The selected check-in date must be displayed
- Day of the week must be included

### 6.8 -	Check-Out date

####  Expected Result:

- The selected check-out date must be displayed
 - Day of the week must be included