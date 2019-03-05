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

  1.1 -  Total price per traveler
  
Expected Result:
 - The total price per traveler is displayed,

- The rate is not multiple by the number of travelers
   
 Additional Information: 
 - The rate is not multiple by the number of travelers
                
    -   getFlightReturns is used for the return leg of a roundtrip search
                      
 - Returned under the "source_total_fare_per_ticket" node
                        within the "itinerary_data" cluster
                  

 1.2 -     Baggage Fees
 
 Expected Result:

 - A link to the baggage fees is displayed
 
  Additional Information: 

 - getFlightDepartures
    - getFlightReturns is used for the return leg of a
                            roundtrip search
                    
 - Returned under the "popup_url" node within the
        "baggage_carrier" cluster
                
1.3 - Origin city &amp; airport

Expected Result:
   - The origin city is displayed

   - The origin airport is displayed

   - The origin airport code is displayed

  Additional Information: 

  - getFlightDepartures

      -  getFlightReturns is used for the return leg of a
        roundtrip search
  
   - Returned under the "city", "name", &amp; "code" nodes
    within the "departure" node of the "slice_data" cluster
                  
1.4 - 	Destination city & airport	

Expected Result: 
- The destination city is displayed
- The destination airport is displayed
- The destination airport code is displayed

Additional Information: 
 - getFlightDepartures
    - getFlightReturns is used for the return leg of a roundtrip search
 - Returned under the "city", "name", & "code" nodes within the "arrival" node of the "slice_data" cluster
 