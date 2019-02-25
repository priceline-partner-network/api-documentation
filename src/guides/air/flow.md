Get familiar with the proper booking flow for your site and where to use our API data.

#### Flight Search Flow

1. [Destination AutoComplete](/documentation/air#/paths/~1getAutoComplete/get)  
Provide a list of suggested cities or airports based on the user's search input
2. [Departure Flights](/documentation/air#/paths/~1getFlightDepartures/get) / [Flight Combined](/documentation/air)  
Get a list of departure flights available / combine departure and return flights 
3. [Return Flights](/documentation/air#/paths/~1getFlightReturns/get) / [Flight Combined](/documentation/air)  
Get a list of return flights available / combine departure and return flights

#### Contract and Booking Flow

1. [Flight Contract](/documentation/air#/paths/~1getFlightContract/get)  
Return the selected flight itinerary including price and connection info
2. [Flight Seat Map](/documentation/air#/paths/~1getFlightSeatMap/get) (optional)  
Returns a matrix to render a seat map 
3. [Flight Book](/documentation/air#/paths/~1getFlightBook/post)  
Submits the flight booking reservation

#### Post Sale Functions

- [Flight Lookup](/documentation/air#/paths/~1getFlightLookUp/post)  
Returns the itinerary and price details for the selected flight
- [Flight Seat Update](/documentation/air)  
Sends a request to update a customers seat selection
- [Resend Itinerary Request](/documentation/air)  
Submits a request to resend the itinerary email
- [Flight Void Request](/documentation/air#/paths/~1getFlightVoidRequest/get)  
Submits a request to cancel a flight reservation
- [Flight Lost Offer Request](/documentation/air)  
Returns booking information for an email and date range

