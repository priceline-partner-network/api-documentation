# FlightRoundTrip
FlightRoundTrip endpoint provides a fast and efficient output for the flight round trip searches. This endpoint can be used to replace FlightCombined.
However, the output is slightly different from whatever is in FlightCombined, with some newly introduced nodes, that come very handy when trying to find out the cheapest rate, shortest layover available etc.

## Airport
Provides list of airports returned in the response, including layover airports. It provides an array of arrays with detailed information about each airport - name, code, city, state, country, time-zone etc.

## Airline
Provides list of all the airlines returned in the response. It is an array of arrays providing detailed information about the airline - code, name etc.

## Cabin Restriction
A json string explaining restrictions for cabins on specific airlines.

## Priced Itinerary
Provides a list of itineraries returned from the source, including detailed information about each itinerary. Returns pricing info, bundles to make further contract calls, bundle to make a seat map request and bundles to filter the rates by departing contents (dates, sliceInfo, carriers) or returning contents of each itinerary.
It also returns the slice array for each itinerary with a unique slice id for each slice to map with the slice array returned later in the response.

## Slice
Provides a list of all the slices (legs of the trip) returned in the response with detailed segments (flights included in each leg) including a unique segment id for each segment to map to segment array later in the response for more details about the flights.

## Segment
Provides a list of all the flights included in the response. Shows the detailed information about each flight - dates/times, flight number, duration, airline, stops etc.

## Filtered Trip Summary
Provides a summary of itineraries returned. Number of itineraries, minimum/maximum fare, stops, layover, duration etc. Returns minimum/maximum fare per carrier, stop, airline, airport, layover airports etc.

## Express Deal
Provides a list of all the express deal candidates. Each itinerary has pricing information, slice information and bundle to make further contract call.

## Brand Reference
Provides a list of brand names for each cabin and the attributes included in each cabin.

## Itinerary Count
An array that provides count of undiscounted and opaque itineraries returned in the response.
