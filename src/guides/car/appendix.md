API Car Requirements Appendix
=============================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:

-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement

![Car Results](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Car%20Appendix%20-%20Results.png)


 ### 1.1 - Base rate	
 
#### Expected Result:
 
The base rate (daily or weekly) is displayed for each rate

#### Additional Information:
 
 - getResultsV3
  - Returned under the "base_rate" & "base_type" nodes under the "price_details" node
 
### 1.2 - Total price	

#### Expected Result:

The total price is displayed for each rate

#### Additional Information:

- getResultsV3
 - Returned under the "total_price" node within the "price_details" node

### 1.3 - Currency

#### Expected Result:

The correct currency, currency code, & currency symbol are displayed

#### Additional Information:

- getResultsV3
- Returned under the "display_currency" & "display_symbol" nodes within the "price_details" node
  
### 1.4 - Rental Company

#### Expected Result:

The rental company name/logo must be displayed for each rate

#### Additional Information:  

- getResultsV3
 - The rental company is returned under the "name" node within the "partner" node
-  The logo is returned under the "logo" node

### 1.5 - Pickup/Dropoff information

#### Additional Information:  

- getResultsV3
 - The pickup location is returned under the "location" node within the "pickup" node
 - The dropoff location is returned under the "location" node within the "dropoff" node

### 1.6 - Car type

#### Expected Result:

The car type must be displayed for each rate

#### Additional Information:  

- getResultsV3
-  Returned under the "description" node under the "car" node

### 1.7 - Car amenities

#### Expected Result:

The amenities must be displayed for each rate

#### Additional Information:  

- getResultsV3
 - The amount of passengers is returned under the "passengers" node within the "car" node
 - The amount of suitcases is returned under the "bags' node within the "car" node
 - The transmission information is returned under the "automatic_transmission" node within the "car" node
    - "yes" = automatic transmission
    - "no" = manual transmission
  - The air-conditioning information is returned under the "air_conditioning" node within the "car" node
    - "yes" = air-conditioning
    - "no" = no air-conditioning
  - The mileage information is returned under the "mileage" node within the "price_details" node
    - "true" = unlimited mileage
    - "false" = limited mileage

### 1.8 - Search box	

#### Expected Result:

A search box is accessible on the Results page

#### Additional Information:  

- getCarAutoComplete

![Car Contract](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Car%20Appendix%20-%20Contract.png)


### 2.1 - Policy information

#### Expected Result:

- Credit card disclaimer
 - Acceptable forms of payment link
 - Under 25? link
 - Terms & Conditions
 - Privacy Policy
 
#### Additional Information:  

- getPolicy.Car
- getContractRequest
    - Returned under the "car_policy_data" node.

### 2.2 - Pickup location

#### Expected Result:

- The selected pickup location must be displayed
-  Day of the week must be included
-  Time of day must be included
 - The full address must be displayed
 
#### Additional Information:  

- getContractRequest
- Returned under the "pickup_airport_name" and subsequent address/location nodes for airport locations
- Returned under the "pickup_address" node and subsequent address/location nodes for off-airport (city) locations

### 2.3 - Dropoff location (if different from pickup)

#### Expected Result:

- The selected dropoff location must be displayed
- Day of the week must be included
- Time of day must be included
- The full address must be displayed

#### Additional Information:  

- getContractRequest
- Returned under the "dropoff_airport_name" and subsequent address/location nodes for airport locations
- Returned under the "dropoff_address" node and subsequent address/location nodes for off-airport (city) locations

### 2.4 - Counter directions/airport terminal information	

#### Expected Result:

The data returned must be displayed; it can be hidden behind a click

#### Additional Information:  

- getContractRequest
-  Returned under the "shuttle_text" node.

### 2.5 - Hours of operation

#### Expected Result:

The rental company's hours of operations are displayed

#### Additional Information:  

- getContractRequest
-  Returned under the "open" & "close" nodes within the "pickup_hours_data" node for pickup locations.
-  Returned under the "open" & "close" nodes within the "dropoff_hours_data" node for dropoff locations (if different than pickup).

### 2.6 - Rental company	

#### Expected Result:

The rental company name/logo is displayed

#### Additional Information: 

- getContractRequest
- The rental company is returned under the "partner_name" node 
- The logo is returned under the "partner_logo" node 

### 2.7 - Car type

#### Expected Result:

The car type is displayed

#### Additional Information:  

- getContractRequest
- Returned under the "description" node within the "car_info" node

### 2.8 - Car amenities

#### Expected Result:

The amenities are displayed

#### Additional Information:  

- getContractRequest
- The amount of passengers is returned under the "passengers" node within the "car_info" node
- The amount of suitcases is returned under the "bags' node within the "car" node
- The transmission information is returned under the "automatic_transmission" node within the "car" node
    - "yes" = automatic transmission
    - "no" = manual transmission
- The air-conditioning information is returned under the "air_conditioning" node within the "car" node
    - "yes" = air-conditioning
    - "no" = no air-conditioning

### 2.9 - Mileage	

#### Expected Result:

The mileage is displayed

#### Additional Information:  

- getContractRequest
- The mileage information is returned under the "mileage" node within the "price_details" node
    - "unlimited" = unlimited mileage
    - "limited" = limited mileage

### 2.1.0 - Free cancellation verbiage for post-paid rates	

#### Expected Result:

Verbiage or banner is displayed for post paid rates

#### Additional Information:  

Front end change for the partner

### 2.1.1 - Summary of Charges	

#### Expected Result:

- The base rate is displayed
- The number of days/weeks is displayed
- Extra day rate is displayed when returned
- The Taxes and Fees is displayed
    - Not displayed for prepaid rates, lumped into total
    - "Taxes and Fees" is hyperlinked to a light box that displays additional verbiage
- The total is displayed
    - Post paid rates display the amount due at counter
    - Prepaid rates display the amount due now
- The price disclaimer is displayed

#### Additional Information:  

- getContractRequest
-  The base rate is returned under the "display_price" node within the "pricing" node.
-  The correct label as well as number of days/weeks are returned under the "type" & "factor" nodes within the "pricing" node.
    -   Extra day rate is returned under the "type" & "factor" nodes within the 2nd "breakdown" cluster
    - type = "Extra Day"
    - factor = amount of extra days
  - The Taxes and Fees are returned under the "source_total" node within the "taxes_and_fees" node.
    - "Taxes and Fees" must be a hyperlink that displays additional verbiage that is returned under the "breakdown_data" node within the "taxes_and_fees" node.
  - The correct label and total are returned under the "total_label".
    - The total will returned under the "prepaid_at_counter" for post paid bookings
    - The total will returned under the "prepaid_at_booking" node for prepaid bookings.
  - If wanting to display a different currency other than the source (currency used to book), use the "display" nodes instead of the "source" nodes.
  - The Price Disclaimer is a front end change for the partner

### 2.1.2 - Important Information	

#### Expected Result:

- The Important Information must be displayed for the selected rate
 - Each inventory type has a different set of verbiage
 
#### Additional Information:  

- getContractRequest
- Returned under the "important_information" node, each cluster that returns "mandatory" within the "display" node must be displayed
- \#START_ANCHOR_PARTNERPAYMENTOPTIONS#partner payment options#END_ANCHOR_PARTNERPAYMENTOPTIONS# pulls the "car_policy_data" node.
    - "partner payment options" is a hyperlink
- \#START_ANCHOR_RENTALPOLICYANDRULES#rental policy and rules information#END_ANCHOR_RENTALPOLICYANDRULES# pulls the "car_policy_data" node. 
    - "rental policy and rules information" is a hyperlink
- \#START_ANCHOR_TERMSANDCONDITIONS#terms and conditions#END_ANCHOR_TERMSANDCONDITIONS# pulls the 
    - "terms and conditions" is a hyperlink
- \#START_ANCHOR_PRIVACYPOLICY#privacy policy#END_ANCHOR_PRIVACYPOLICY# pulls the 
    - "privacy policy" is a hyperlink
- \#START_ANCHOR_PREPAID#Pay Now#END_ANCHOR_PREPAID# pulls the 
    = "Pay Now" is a hyperlink
- \#START_ANCHOR_PREPAID#Cancellation fees#END_ANCHOR_PREPAID# pulls the 
    - "Cancellation fees" is a hyperlink
    
![Car Success](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Car%20Appendix%20-%20Success.png)


### 3.1 - Booking status

#### Expected Result:

The status of the reservation is displayed

#### Additional Information:  

- getCarLookUp
-  Returned under the "status" node

### 3.2 - Trip Id

#### Expected Result:

The Trip Id that is returned is displayed

#### Additional Information:  

- getCarLookUp
- Returned under the "booking_id" node

### 3.3 - Rental company confirmation number	

#### Expected Result:

The rental company confirmation number that is returned is displayed

#### Additional Information:  

- getCarLookUp
- Returned under the "partner_confirmation_number" node

### 3.4 - Map to pickup location	

#### Expected Result:

Link to map showing the pickup location is displayed

#### Additional Information:  

- getCarLookUp

### 3.5 - Link to change/cancel reservation	

#### Expected Result:

The link can perform the look up or it can lead to a page where the user can look up and make amendments to their reservation

#### Additional Information: 
 
- getCancelRequest

### 3.6 - Links to print or email itinerary	

#### Expected Result:

The links are displayed clearly

#### Additional Information:  

- getResendItinerary

### 3.7 - Pickup location	

#### Expected Result:

- The selected pickup location must be displayed
- Day of the week must be included
- Time of day must be included
- The full address must be displayed

#### Additional Information: 

- getCarLookUp
- Returned under the "pickup_name" and subsequent address/location nodes 

### 3.8 - Dropoff location (if different from pickup)	

#### Expected Result:

- The selected dropoff location must be displayed
- Day of the week must be included
- Time of day must be included
- The full address must be displayed

#### Additional Information:  

- getCarLookUp
-  Returned under the "dropoff_name" and subsequent address/location nodes

### 3.9 - Counter directions/airport terminal information

#### Expected Result:

The data returned is displayed; it can be hidden behind a click

#### Additional Information:  

- getCarLookUp
 - Returned under the "shuttle_text" node.

### 3.1.0 - Hours of operation

#### Expected Result:

The rental company's hours of operations are displayed

#### Additional Information:  

- getCarLookUp
-  Returned under the "open" & "close" nodes within the "pickup_hours_data" node for pickup locations.
-  Returned under the "open" & "close" nodes within the "dropoff_hours_data" node for dropoff locations (if different than pickup).

### 3.1.1 - Rental company

#### Expected Result:

The rental company name/logo is displayed

#### Additional Information:  

- getCarLookUp
-  The rental company is returned under the "partner_name" node 
 - The logo is returned under the "partner_logo" node

### 3.1.2 - Car type	

#### Expected Result:

The car type is displayed

#### Additional Information:  

- getCarLookUp
 - Returned under the "description" node within the "car_info" node

### 3.1.3 - Summary of Charges	

#### Expected Result:

- The base rate is displayed
- The number of days/weeks is displayed
- Extra day rate is displayed when returned
- The Taxes and Fees is displayed
    - Not displayed for prepaid rates, lumped into total
    - "Taxes and Fees" is hyperlinked to a light box that displays additional verbiage
- The total is displayed
    - Post paid rates display the amount due at counter
    - Prepaid rates display the amount due now
- The price disclaimer is displayed

#### Additional Information:  

- getCarLookUp
 - The base rate is returned under the "display_price" node within the "pricing" node.
-   The correct label as well as number of days/weeks are returned under the "type" & "factor" nodes within the "pricing" node.
    -  Extra day rate is returned under the "type" & "factor" nodes within the 2nd "breakdown" cluster
    - type = "Extra Day"
    - factor = amount of extra days
  - The Taxes and Fees are returned under the "source_total" node within the "taxes_and_fees" node.
    - "Taxes and Fees" must be a hyperlink that displays additional verbiage that is returned under the "breakdown_data" node within the "taxes_and_fees" node.
  - The correct label and total are returned under the "total_label".
    - The total will returned under the "prepaid_at_counter" for post paid bookings
    - The total will returned under the "prepaid_at_booking" node for prepaid bookings.
  - If wanting to display a different currency other than the source (currency used to book), use the "display" nodes instead of the "source" nodes.
  - The Price Disclaimer is a front end change for the partner

### 3.1.4 - Important Information
	
#### Expected Result:

- The Important Information must be displayed for the selected rate
 - Each inventory type has a different set of verbiage
 
 #### Additional Information:  
 
-  getCarLookUp
- Returned under the "important_information" node, each cluster that returns "mandatory" within the "display" node must be displayed
- \#START_ANCHOR_PARTNERPAYMENTOPTIONS#partner payment options#END_ANCHOR_PARTNERPAYMENTOPTIONS# pulls the "car_policy_data" node.
    - "partner payment options" is a hyperlink
- \#START_ANCHOR_RENTALPOLICYANDRULES#rental policy and rules information#END_ANCHOR_RENTALPOLICYANDRULES# pulls the "car_policy_data" node. 
    - "rental policy and rules information" is a hyperlink
 - \#START_ANCHOR_TERMSANDCONDITIONS#terms and conditions#END_ANCHOR_TERMSANDCONDITIONS# pulls the 
    - "terms and conditions" is a hyperlink
 - \#START_ANCHOR_PRIVACYPOLICY#privacy policy#END_ANCHOR_PRIVACYPOLICY# pulls the 
    - "privacy policy" is a hyperlink
 - \#START_ANCHOR_PREPAID#Pay Now#END_ANCHOR_PREPAID# pulls the 
    - "Pay Now" is a hyperlink
 - \#START_ANCHOR_PREPAID#Cancellation fees#END_ANCHOR_PREPAID# pulls the 
    - "Cancellation fees" is a hyperlink

### 3.1.5 - Customer Service phone number 	

#### Expected Result:

- The correct Customer Service number is displayed
-  The rental company's phone number is displayed

#### Additional Information:  

- getCarLookUp

### 3.1.6 - Driver name

#### Expected Result:

The driver name entered on the Contract page is displayed

#### Additional Information:  

- getCarLookUp 

![Car Confirmation Email](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Car%20Appendix%20-%20ConfEmail.png)

### 4.1 - Booking status

#### Expected Result:

The status of the reservation is displayed

### 4.2 - Trip Id

#### Expected Result:

The Trip Id that is returned is displayed

### 4.3 - Rental company confirmation number

#### Expected Result:

The rental company confirmation number that is returned is displayed

### 4.4 - 	Driver name

#### Expected Result:

The driver name entered on the Contract page is displayed

### 4.5 - Summary of Charges

#### Expected Result:

- The base rate is displayed
- The number of days/weeks is displayed
- Extra day rate is displayed when returned
- The Taxes and Fees is displayed
    - Not displayed for prepaid rates, lumped into total
    - "Taxes and Fees" is hyperlinked to a light box that displays additional verbiage
- The total is displayed
    - Post paid rates display the amount due at counter
    - Prepaid rates display the amount due now
- The price disclaimer is displayed
    
### 4.6 - Rental company	

#### Expected Result:

The rental company name/logo is displayed

### 4.7 - 	Car type

#### Expected Result:

The car type is displayed

### 4.8 - 	Car amenities

#### Expected Result:

The amenities are displayed

### 4.9 - Pickup location	

#### Expected Result:

- The selected pickup location must be displayed
- Day of the week must be included
- Time of day must be included
- The full address must be displayed

### 4.1.0 - Dropoff location (if different from pickup) 
	
#### Expected Result:

- The selected dropoff location must be displayed
- Day of the week must be included
- Time of day must be included
- The full address must be displayed

### 4.1.1 - Counter directions/airport terminal information	

#### Expected Result:

The data returned is displayed

### 4.1.2 - Customer Service phone number	

#### Expected Result:

- The correct Customer Service number is displayed
 - The rental company's phone number is displayed
 
 
### 5.1 - 	Booking status

#### Expected Result:

The status of the reservation is displayed

### 5.2 - Trip Id 	

#### Expected Result:

The Trip Id that is returned is displayed

### 5.3 - Driver name	

#### Expected Result:

The driver name entered on the Contract page is displayed

### 5.4 - Rental company
	
#### Expected Result:

The rental company name/logo is displayed

### 5.5 - Car type	

#### Expected Result:

The amenities are displayed

### 5.6 - Pickup location	

#### Expected Result:

- The selected pickup location must be displayed
-  Day of the week must be included
-  Time of day must be included
-  The full address must be displayed

### 5.7 - Dropoff location (if different from pickup)	

#### Expected Result:

- The selected dropoff location must be displayed
 - Day of the week must be included
 - Time of day must be included
 - The full address must be displayed
 
### 5.8 - Customer Service phone number	

#### Expected Result:

- The correct Customer Service number is displayed
 - The rental company's phone number is displayed