API Flight Requirements Appendix
================================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:
-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement

![Flight Depart](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/FlightPathDeparting.png)

 ### 1.1 -  Total price per traveler
  
####  Expected Result:
 - The total price per traveler is displayed,

- The rate is not multiple by the number of travelers
   
 ####  Additional Information: 
 - The rate is not multiple by the number of travelers
                
    -   getFlightReturns is used for the return leg of a roundtrip search
                      
 - Returned under the "source_total_fare_per_ticket" node
                        within the "itinerary_data" cluster
                  

 ### 1.2 -     Baggage Fees
 ####  Expected Result:
 - A link to the baggage fees is displayed
 
 ####  Additional Information: 

 - getFlightDepartures
    - getFlightReturns is used for the return leg of a
                            roundtrip search
                    
 - Returned under the "popup_url" node within the
        "baggage_carrier" cluster
                
### 1.3 - Origin city &amp; airport

####  Expected Result:
   - The origin city is displayed

   - The origin airport is displayed

   - The origin airport code is displayed

 ####   Additional Information: 

  - getFlightDepartures

      -  getFlightReturns is used for the return leg of a
        roundtrip search
  
   - Returned under the "city", "name", &amp; "code" nodes
    within the "departure" node of the "slice_data" cluster
                  
### 1.4 - 	Destination city & airport	

#### Expected Result: 

- The destination city is displayed
- The destination airport is displayed
- The destination airport code is displayed

#### Additional Information:
 
 - getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
 - Returned under the "city", "name", & "code" nodes within the "arrival" node of the "slice_data" cluster
 
 
 ### 1.5  - Flight number(s)
 
 #### Expected Result:
 
 All flight numbers are displayed
 
 #### Additional Information:
 
 - getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
 - Returned under the "flight_number" node within the "flight_data" clusters
 
  ### 1.6 - Number of stops	
  
  #### Expected Result:
  
  The amount of stops is displayed
  
  #### Additional Information:
  
   - getFlightDepartures
        - getFlightReturns is used for the return leg of a roundtrip search
  - Returned under the "stop_count" node within the "flight_data" clusters
  
   ### 1.7 - Departure date(s) & time(s)
   
   #### Expected Result:
   
   All departure dates and times are displayed for each slice
   #### Additional Information:
   
   - getFlightDepartures
        - getFlightReturns is used for the return leg of a roundtrip search
   - Returned under the "datetime" nodes within the "departure" node of the "flight_data" clusters
   
### 1.8 - Arrival date(s) & time(s)

#### Expected Result:

All arrival dates and times are displayed for each slice	

#### Additional Information:

- getFlightDepartures
  - getFlightReturns is used for the return leg of a roundtrip search
 - Returned under the "datetime" nodes within the "arrival" node of the "flight_data" clusters

 ### 1.9 - Trip duration	
 
 #### Expected Result:
 
- The total trip duration is displayed
- The duration for each slice is displayed

 #### Additional Information:
 
- getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
- Total trip duration is returned under the "duration" node within the "slice_data" cluster
- Slice duration is returned under the "duration" node within the "flight_data" clusters

 ### 1.10 - Layover information	
 
 #### Expected Result:
 
- Layover duration is displayed
- The airport name(s) is displayed
- The airport code(s) is displayed

 #### Additional Information:
 
 - getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
 - Layover duration is returned under the "duration" node within the "notes" node of the "flight_data" clusters
 - Airport name & code are returned under the "value" node within the "notes" node of the "flight_data" clusters
 
  ### 1.11 - Carrier(s)	
  
  #### Expected Result:
  
  The name/logo for the carrier(s) is displayed for each slice
  #### Additional Information:
  
  - getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
  - Returned under the "name" & "logo" nodes within the "slice_data" cluster
  
   ### 1.12 - Codeshare (if applicable)
   
   #### Expected Result:
   
   The codeshare verbiage is displayed 
   
   #### Additional Information:
   
   - getFlightDepartures
        - getFlightReturns is used for the return leg of a roundtrip search
   - Returned under the "operating_airline" node within the "flight" clusters
   
### 1.13 - Aircraft type
	
#### Expected Result:

The aircraft type(s) & model(s) are displayed for each slice	
#### Additional Information:

- getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
- Returned under the "aircraft" & "aircraft_type" nodes within the "flight_data" clusters

 ### 1.14 - Cabin class	
 
 #### Expected Result:
 
 The cabin class is displayed for each slice
 
 #### Additional Information:
 
 - getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
 - Returned under the "cabin_name" node within the "flight_data" clusters
 
  ### 1.15 - 24hr free cancellation banner 
  
  #### Expected Result:
  
The banner (or verbiage) is displayed on the page  

  #### Additional Information:
  
  Front end change for the partner

### 1.16 - Flight warnings & highlights

#### Expected Result:

- Any flight warnings or highlights are displayed
    - Overnight connection
    - Flight arrives the next day
    - Flight arrives 2 days after departure
    - Open jaw
    
#### Additional Information:

 - getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
 - Returned under the "notes" node(s) within the "flight_data" clusters
 
 ### 1.17 - Search box
 
 #### Expected Result:
 
 A search box is accessible on the Results page
 
 #### Additional Information:
 
 - getAutoComplete

![Flight Contract](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Flight%20Appendix%20-%Contract.png)


### 2.1 - 	Summary of Charges

#### Expected Result:

- Ticket price is displayed
    - Not multiplied by the amount of travelers/tickets
- Taxes and Fees are displayed
    - "Taxes and Fees" is hyperlinked to a light box that displays additional verbiage
- Processing Fees are displayed, if applicable
    - "Processing Fees" is hyperlinked to a light box that displays additional verbiage
- Total per ticket is displayed
- Number of tickets is displayed
- The total price is displayed
- The price disclaimer is displayed

#### Additional Information:

- getFlightContract
- Ticket prices is returned under the "source_base_fare" node within the "price_details" cluster.
- Taxes and Fees are returned under the "source_taxes" node within the "price_details" cluster.
    - "Taxes and Fees" pulls the "taxes_and_fees" node within the "popup_data" cluster
- Processing Fee is returned under the "source_pcln_fees" node within the "price_details" cluster.
    - "Processing Fee" pulls the "taxes_and_fees" node within the "popup_data" cluster
- Total per ticket is returned under the "source_total_fare_per_ticket" node within the "price_details" cluster
- Number of tickets is returned under the "number_of_passengers" within the "itinerary_data" cluster.
- Total price is returned under the "source_total_fare" node within the "price_details" cluster.
- The price disclaimer is a front end change for the partner.
    - "Baggage Fees" pulls the "baggage_fees" node within the "popup_data" cluster.
    
### 2.2 - Baggage Fees	

#### Expected Result:

A link to the baggage fees is displayed 

#### Additional Information:

- getFlightContract
- Returned under the "popup_url" node within the "baggage_carrier" cluster

### 2.3 - Origin city & airport	

#### Expected Result:

- The origin city is displayed
- The origin airport is displayed
- The origin airport code is displayed

#### Additional Information:

- getFlightContract
 - Returned under the "city", "name", & "code" nodes within the "departure" node of the "slice_data" cluster
 
### 2.4 - Destination city & airport

#### Expected Result:

- The destination city is displayed
- The destination airport is displayed
- The destination airport code is displayed

#### Additional Information:

- getFlightContract
- Returned under the "city", "name", & "code" nodes within the "arrival" node of the "slice_data" cluster

### 2.5 - Flight number(s)	

#### Expected Result:

All flight numbers are displayed
	
#### Additional Information:

- getFlightContract
-  Returned under the "flight_number" node within the "flight_data" clusters

### 2.6 - Number of stops	

#### Expected Result:

The amount of stops is displayed
	
#### Additional Information:

- getFlightContract
 - Returned under the "stop_count" node within the "flight_data" clusters
 
### 2.7 - Departure date(s) & time(s)	

#### Expected Result:

All departure dates and times are displayed for each slice

#### Additional Information:

- getFlightContract
-  Returned under the "datetime" nodes within the "departure" node of the "flight_data" clusters

### 2.8 - Arrival date(s) & time(s)

#### Expected Result:

All arrival dates and times are displayed for each slice

#### Additional Information:

- getFlightContract
 - Returned under the "datetime" nodes within the "arrival" node of the "flight_data" clusters
 
### 2.9 - Trip duration	

#### Expected Result:

 - The total trip duration is displayed
  - The duration for each slice is displayed

#### Additional Information:

- getFlightContract
- Total trip duration is returned under the "duration" node within the "slice_data" cluster
- Slice duration is returned under the "duration" node within the "flight_data" clusters

### 2.1.0 - Layover information

#### Expected Result:

- Layover duration is displayed
- The airport name(s) is displayed
- The airport code(s) is displayed

#### Additional Information:

- getFlightContract
- Returned under the "duration" node within the "notes" node of the "flight_data" clusters
- Airport name & code are returned under the "value" node within the "notes" node of the "flight_data" clusters

### 2.1.1 - Carrier(s)	

#### Expected Result:

The name/logo for the carrier(s) is displayed for each slice

#### Additional Information:

- getFlightContract
-  Returned under the "name" & "logo" nodes within the "slice_data" cluster

### 2.1.2 - Codeshare (if applicable)

#### Expected Result:

The codeshare verbiage is displayed

#### Additional Information:

- getFlightContract
- Returned under the "operating_airline" node within the "flight" clusters     
                                                   
### 2.1.3 - Aircraft type	

#### Expected Result:

The aircraft type(s) is displayed for each slice

#### Additional Information:

- getFlightContract
- Returned under the "aircraft" & "aircraft_type" nodes within the "flight_data" clusters  
                             
### 2.1.4 - Cabin class	

#### Expected Result:

The cabin class is displayed for each slice

#### Additional Information:

- getFlightContract
- Returned under the "cabin_name" node within the "flight_data" clusters       
                        
### 2.1.5 - Flight warnings & highlights

#### Expected Result:

- Any flight warnings or highlights are displayed
    - Overnight connection
    - Flight arrives the next day
    - Flight arrives 2 days after departure
    - Open jaw
    
#### Additional Information:

- getFlightContract
- Returned under the "notes" node(s) within the "flight_data" clusters  
                             
### 2.1.7 - Terms & Conditions	

#### Additional Information:

- getPolicy.Flight

### 2.1.8 - Privacy Policy	

#### Additional Information:

getPolicy.Flight
                               
### 2.1.9 - Customer agreement	

#### Expected Result:

The customer must agree to the price and all terms in order to book, this can be:
- Initials input box
- Check box
- etc.

#### Additional Information:

Front end change for the partner

![Flight Success](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Flight%20Appendix%20-%20Success.png)

### 3.1 - Trip Id	

#### Expected Result:

The Trip Id that is returned must be displayed

#### Additional Information:

- getFlightLookUp
- Returned under the "booking_id" node within the "results" cluster

### 3.2 - Airline confirmation number

#### Expected Result:

The airline confirmation number that is returned must be displayed

#### Additional Information:

- getFlightLookUp
- Returned under the "CarrierLocator" node(s) within the "airline_data" cluster(s).

### 3.3 - Booking status	

#### Expected Result:

The status of the reservation is displayed

#### Additional Information:

- getFlightLookUp
 - Returned under the "book_status" node within the "results" cluster.
 
### 3.4 - 	Summary of Charges

#### Expected Result:

- Ticket price is displayed
    - Not multiplied by the amount of travelers/tickets
- Taxes and Fees are displayed
    - "Taxes and Fees" is hyperlinked to a light box that displays additional verbiage
- Total per ticket is displayed
- Number of tickets is displayed
- The total price is displayed
- The price disclaimer is displayed

#### Additional Information:

- getFlightLookUp
- Ticket prices is returned under the "source_base_fare" node within the "price_details" cluster.
- Taxes and Fees are returned under the "source_taxes_and_fees" node within the "price_details" cluster.
    - "Taxes and Fees" pulls the "taxes_and_fees" node within the "popup_data" cluster
- Total per ticket is returned under the "source_total_fare_per_ticket" node within the "price_details" cluster
- Number of tickets is returned under the "number_of_passengers" within the "itinerary_data" cluster.
- Total price is returned under the "source_total_fare" node within the "price_details" cluster.
- The price disclaimer is a front end change for the partner.
    - "Baggage Fees" pulls the "baggage_fees" node within the "popup_data" cluster.
    
### 3.5 - Ticket number(s)

#### Expected Result:

All ticket numbers are displayed

#### Additional Information:

- getFlightLookUp
- Returned under the "ticket_number" node(s) within the "passengers" cluster

### 3.6 - Baggage fees	

#### Expected Result:

A link to the baggage fees is displayed

#### Additional Information:

- getFlightLookUp
- Returned under the "popup_url" node within the "baggage_carrier" cluster

### 3.7 - Origin city & airport

#### Expected Result:

- The origin city is displayed
- The origin airport is displayed
- The origin airport code is displayed

#### Additional Information:

- getFlightLookUp
- Returned under the "city", "name", & "code" nodes within the "departure" node of the "slice_data" cluster

### 3.8 - Destination city & airport

#### Expected Result:

- The destination city is displayed
- The destination airport is displayed
- The destination airport code is displayed

#### Additional Information:

- getFlightLookUp
- Returned under the "city", "name", & "code" nodes within the "arrival" node of the "slice_data" cluster

### 3.9 - Flight number(s)	

#### Expected Result:

All flight numbers are displayed	

#### Additional Information:

- getFlightLookUp
 - Returned under the "flight_number" node within the "flight_data" clusters
 
### 3.1.0 - Number of stops	

#### Expected Result:

The amount of stops is displayed	

#### Additional Information:

- getFlightLookUp
- Returned under the "stop_count" node within the "flight_data" clusters

### 3.1.1 - Departure date(s) & time(s)

#### Expected Result:

All departure dates and times are displayed for each slice

#### Additional Information:

- getFlightLookUp
- Returned under the "datetime" nodes within the "departure" node of the "flight_data" clusters

### 3.1.2 - Arrival date(s) & time(s)

#### Expected Result:      

All arrival dates and times are displayed for each slice        

#### Additional Information:

- getFlightLookUp
 - Returned under the "datetime" nodes within the "arrival" node of the "flight_data" clusters
 
### 3.1.3 - Trip duration	

#### Expected Result:     

- The total trip duration is displayed
- The duration for each slice is displayed         

#### Additional Information:

- getFlightLookUp
- Total trip duration is returned under the "duration" node within the "slice_data" cluster
- Slice duration is returned under the "duration" node within the "flight_data" clusters

### 3.1.4 - Layover information	

#### Expected Result:    

- Layover duration is displayed
- The airport name(s) is displayed
- The airport code(s) is displayed        
  
#### Additional Information:

- getFlightLookUp
- Returned under the "duration" node within the "notes" node of the "flight_data" clusters
- Airport name & code are returned under the "value" node within the "notes" node of the "flight_data" clusters

### 3.1.5 - Carrier(s)	

#### Expected Result:       
       
The name/logo for the carrier(s) is displayed for each slice	

#### Additional Information:

- getFlightLookUp
- Returned under the "name" & "logo" nodes within the "slice_data" cluster

### 3.1.6 - Codeshare (if applicable)

#### Expected Result:          

The codeshare verbiage is displayed    

#### Additional Information:

- getFlightLookUp
- Returned under the "operating_airline" node within the "flight" clusters

### 3.1.7 - Aircraft type	

#### Expected Result: 

The aircraft type(s) is displayed for each slice  
           
#### Additional Information:

- getFlightLookUp
- Returned under the "aircraft" & "aircraft_type" nodes within the "flight_data" clusters

### 3.1.8 - Cabin class	

#### Expected Result:         
   
The cabin class is displayed for each slice  

#### Additional Information:

- getFlightLookUp
- Returned under the "cabin_name" node within the "flight_data" clusters

### 3.1.9 - 	Flight warnings & highlights	

#### Expected Result: 

- Any flight warnings or highlights are displayed
    -  Overnight connection
    - Flight arrives the next day
    - Flight arrives 2 days after departure
    - Open jaw
             
#### Additional Information:

- getFlightLookUp
- Returned under the "notes" node(s) within the "flight_data" clusters

### 3.2.0 - Important Information

#### Expected Result:        

- The Important Information must be displayed for the selected rate
    - The "Disinsection" node is displayed when applicable    
      
#### Additional Information:

- getFlightLookUp
-   Returned under the "important_info_data" node.
 -  \#flight_schedule_START\#Flight Schedule\#flight_schedule_END\# pulls the "flight_schedule" node within the "popup_data" cluster.
    - "Flight Schedule" is a hyperlink
  - \#bag_spec_requirements_START\#Baggage/Special requirements\#bag_spec_requirements_END\# pulls the "bag_spec_requirements" node within the "popup_data" cluster.
    - "Baggage/Special requirements" is a hyperlink
  - \#notice_of_incorp_START\#Notice of Incorporated Terms\#notice_of_incorp_END\# pulls the "notice_of_incorp" node within the "popup_data" cluster.
    - "Notice of Incorporated Terms" is a hyperlink
  - \#frequent_flyer_START\#Frequent Flyer and Loyalty Programs\#frequent_flyer_END\# pulls the "frequent_flyer" node within the "popup_data" cluster.
    - "Frequent Flyer and Loyalty Programs" is a hyperlink
  - \#check_in_START\#Airport Check-In and Security\#check_in_END\# pulls the "check_in" node within the "popup_data" cluster.
    - "Airport Check-In and Security" is a hyperlink
  - \#internation_travel_START\#International Travel\#internation_travel_END\# pulls the "international_travel" node within the "popup_data" cluster.
    - International Travel is a hyperlink
  - \#seat_assignments_START\#Seat Assignments\#seat_assignments_END\# pulls the 
    - Seat Assignments is a hyperlink
  - \#valid_passport_START\#valid passport\#valid_passport_END\# pulls the "valid_passport" node within the "popup_data" cluster.
    - "valid passport" is a hyperlink
  - \#disinsection_START\#disinsection.\#disinsection_END\# pulls the "disinsection" node within the "popup_data" cluster.
    - "disinsection" is a hyperlink       
      
### 3.2.1 - Airline(s) contact information

#### Expected Result:      
   
- The airline(s) is displayed
- The airline(s) phone number is displayed
- The airline(s) website is displayed
- The airline(s) confirmation number is displayed     

#### Additional Information:

- getFlightLookUp
- Returned under the "airline" nodes within the "airline_data" cluster(s).

### 3.2.2 - Customer Service phone number

#### Expected Result:    

The correct Customer Service number is displayed     
     
#### Additional Information:

- getFlightLookUp
- Returned under the "customer_service" node

### 3.2.3 - Link to cancel reservation

#### Expected Result:    

A link to cancel or to look up the reservation (and cancel there) must be displayed      
    
#### Additional Information:

getFlightVoidRequest 

![Flight Confirmation Email](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Guides%20-%20Flight%20Appendix%20-%20ConfEmail.png)


### 4.1 - Trip Id	

#### Expected Result:   

The Trip Id is displayed	           

### 4.2 - 	Airline confirmation number

#### Expected Result:       

The airline confirmation number(s) is displayed       

### 4.3 - Booking status	

#### Expected Result:     
   
The booking status is displayed	      

### 4.4 - Summary of Charges	

#### Expected Result:    

- Ticket price is displayed
    - Not multiplied by the amount of travelers/tickets
- Taxes and Fees are displayed
- Processing Fees are displayed, if applicable
- Total per ticket is displayed
- Number of tickets is displayed
- The total price is displayed
- The price disclaimer is displayed
          
### 4.5 - Ticket number(s)	

#### Expected Result:          
    
The ticket number(s) is displayed

### 4.6 - Origin city & airport

#### Expected Result:           
   
- The origin city is displayed
 - The origin airport is displayed
 - The origin airport code is displayed
 
### 4.7 - Destination city & airport

#### Expected Result:              

- The destination city is displayed
 - The destination airport is displayed
 - The destination airport code is displayed
 
### 4.8 - Flight number(s)	

#### Expected Result:             
 
The flight number(s) is displayed	

### 4.9 - Number of stops	

#### Expected Result:     
         
The number of stops is displayed	

### 4.1.0 - Departure date(s) & time(s)

#### Expected Result:      

All departure dates and times are displayed for each slice        

### 4.1.1 - Arrival date(s) & time(s)    

#### Expected Result:

All arrival dates and times are displayed for each slice      
    
#### Additional Information:              

### 4.1.2 - Trip duration	

#### Expected Result:       
 
- The total trip duration is displayed
-  The duration for each slice is displayed      
 

### 4.1.3 - Layover information	

#### Expected Result:      
        
- Layover duration is displayed
 - The airport name(s) is displayed
-  The airport code(s) is displayed

### 4.1.4 - Carrier(s)	

#### Expected Result:   
           
The name/logo for the carrier(s) is displayed for each slice	

### 4.1.5 - Codeshare, if applicable	

#### Expected Result:         
     
The codeshare verbiage is displayed	

### 4.1.6 - Aircraft type	

#### Expected Result:         
     
The aircraft type(s) is displayed for each slice	

### 4.1.7 - Cabin class	

#### Expected Result:     
         
The cabin class is displayed for each slice	

### 4.1.8 - Airline(s) contact information	

#### Expected Result:          
    
- The airline(s) is displayed
-  The airline(s) phone number is displayed
 - The airline(s) website is displayed
 - The airline(s) confirmation number is displayed
 
### 4.1.9 - Customer Service phone number	

#### Expected Result:              

The correct Customer Service number is displayed	

### 5.1 - Trip Id	

#### Expected Result:         
     
The Trip Id is displayed	

### 5.2 - Booking status	

#### Expected Result:    
          
The booking status is displayed	

### 5.3 - Summary of Charges	

#### Expected Result:       
       
- Ticket price is displayed
    - Not multiplied by the amount of travelers/tickets
- Taxes and Fees are displayed
- Processing Fees are displayed, if applicable
- Total per ticket is displayed
- Number of tickets is displayed
- The total price is displayed
- The price disclaimer is displayed
- All values show zero

### 5.4 - Ticket number(s)	

#### Expected Result:      
        
The ticket number(s) is displayed	

### 5.5 - Origin city & airport	

#### Expected Result:          
    
- The origin city is displayed
- The origin airport is displayed
- The origin airport code is displayed

### 5.6 - Destination city & airport
	
#### Expected Result:              

- The destination city is displayed
- The destination airport is displayed
- The destination airport code is displayed

### 5.7 - Departure date(s) & time(s)	

#### Expected Result:            
  
All departure dates and times are displayed for each slice	

### 5.8 - Arrival date(s) & time(s)	

#### Expected Result:            
  
All arrival dates and times are displayed for each slice	

### 5.9 - Flight number(s)	

#### Expected Result:         

The flight number(s) is displayed	

### 5.1.0 - Carrier(s)	

#### Expected Result:         
     
The name/logo for the carrier(s) is displayed for each slice	

### 5.1.1 - Codeshare, if applicable	

#### Expected Result:              

The codeshare verbiage is displayed	

### 5.1.2 - Airline(s) contact information
	
#### Expected Result:          
    
- The airline(s) is displayed
- The airline(s) phone number is displayed
- The airline(s) website is displayed
- The airline(s) confirmation number is displayed
