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


<table border="1" cellspacing="0" cellpadding="0" width="100%">
    <tbody>
        <tr>
            <td>
                <p align="center">
                    <strong>Requirement #</strong>
                </p>
            </td>
            <td>
                <p align="center">
                    <strong>Requirement</strong>
                </p>
            </td>
            <td>
                <p align="center">
                    <strong>Expected Result</strong>
                </p>
            </td>
            <td>
                <p align="center">
                    <strong>Additional Information</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1
                </p>
            </td>
            <td>
                <p>
                    Total price per traveler
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The total price per traveler is displayed
                    </li>
                    <li>
                        The rate is not multiple by the number of travelers
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "source_total_fare_per_ticket" node
                        within the "itinerary_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.2
                </p>
            </td>
            <td>
                <p>
                    Baggage Fees
                </p>
            </td>
            <td>
                <p>
                    A link to the baggage fees is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "popup_url" node within the
                        "baggage_carrier" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.3
                </p>
            </td>
            <td>
                <p>
                    Origin city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The origin city is displayed
                    </li>
                    <li>
                        The origin airport is displayed
                    </li>
                    <li>
                        The origin airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "city", "name", &amp; "code" nodes
                        within the "departure" node of the "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.4
                </p>
            </td>
            <td>
                <p>
                    Destination city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The destination city is displayed
                    </li>
                    <li>
                        The destination airport is displayed
                    </li>
                    <li>
                        The destination airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "city", "name", &amp; "code" nodes
                        within the "arrival" node of the "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.5
                </p>
            </td>
            <td>
                <p>
                    Flight number(s)
                </p>
            </td>
            <td>
                <p>
                    All flight numbers are displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "flight_number" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.6
                </p>
            </td>
            <td>
                <p>
                    Number of stops
                </p>
            </td>
            <td>
                <p>
                    The amount of stops is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "stop_count" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.7
                </p>
            </td>
            <td>
                <p>
                    Departure date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All departure dates and times are displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "datetime" nodes within the
                        "departure" node of the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.8
                </p>
            </td>
            <td>
                <p>
                    Arrival date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All arrival dates and times are displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "datetime" nodes within the
                        "arrival" node of the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.9
                </p>
            </td>
            <td>
                <p>
                    Trip duration
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The total trip duration is displayed
                    </li>
                    <li>
                        The duration for each slice is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Total trip duration is returned under the "duration"
                        node within the "slice_data" cluster
                    </li>
                    <li>
                        Slice duration is returned under the "duration" node
                        within the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.0
                </p>
            </td>
            <td>
                <p>
                    Layover information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Layover duration is displayed
                    </li>
                    <li>
                        The airport name(s) is displayed
                    </li>
                    <li>
                        The airport code(s) is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Layover duration is returned under the "duration" node
                        within the "notes" node of the "flight_data" clusters
                    </li>
                    <li>
                        Airport name &amp; code are returned under the "value"
                        node within the "notes" node of the "flight_data"
                        clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.1
                </p>
            </td>
            <td>
                <p>
                    Carrier(s)
                </p>
            </td>
            <td>
                <p>
                    The name/logo for the carrier(s) is displayed for each
                    slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "name" &amp; "logo" nodes within the
                        "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.2
                </p>
            </td>
            <td>
                <p>
                    Codeshare (if applicable)
                </p>
            </td>
            <td>
                <p>
                    The codeshare verbiage is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "operating_airline" node within the
                        "flight" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.3
                </p>
            </td>
            <td>
                <p>
                    Aircraft type
                </p>
            </td>
            <td>
                <p>
                    The aircraft type(s) &amp; model(s) are displayed for each
                    slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "aircraft" &amp; "aircraft_type"
                        nodes within the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.4
                </p>
            </td>
            <td>
                <p>
                    Cabin class
                </p>
            </td>
            <td>
                <p>
                    The cabin class is displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "cabin_name" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.5
                </p>
            </td>
            <td>
                <p>
                    24hr free cancellation banner
                </p>
            </td>
            <td>
                <p>
                    The banner (or verbiage) is displayed on the page
                </p>
            </td>
            <td>
                <p>
                    Front end change for the partner
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.6
                </p>
            </td>
            <td>
                <p>
                    Flight warnings &amp; highlights
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Any flight warnings or highlights are displayed
                    </li>
                    <ul type="circle">
                        <li>
                            Overnight connection
                        </li>
                        <li>
                            Flight arrives the next day
                        </li>
                        <li>
                            Flight arrives 2 days after departure
                        </li>
                        <li>
                            Open jaw
                        </li>
                    </ul>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightDepartures
                    </li>
                    <ul type="circle">
                        <li>
                            getFlightReturns is used for the return leg of a
                            roundtrip search
                        </li>
                    </ul>
                    <li>
                        Returned under the "notes" node(s) within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    1.1.7
                </p>
            </td>
            <td>
                <p>
                    Search box
                </p>
            </td>
            <td>
                <p>
                    A search box is accessible on the Results page
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getAutoComplete
                    </li>
                </ul>
            </td>
        </tr>
        </tbody>
        </table>
        
        ![Flight Depart](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/FlightPathDeparting.png)

        
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1
                </p>
            </td>
            <td>
                <p>
                    Summary of Charges
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Ticket price is displayed
                    </li>
                    <ul type="circle">
                        <li>
                            Not multiplied by the amount of travelers/tickets
                        </li>
                    </ul>
                    <li>
                        Taxes and Fees are displayed
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes and Fees" is hyperlinked to a light box that
                            displays additional verbiage
                        </li>
                    </ul>
                    <li>
                        Processing Fees are displayed, if applicable
                    </li>
                    <ul type="circle">
                        <li>
                            "Processing Fees" is hyperlinked to a light box
                            that displays additional verbiage
                        </li>
                    </ul>
                    <li>
                        Total per ticket is displayed
                    </li>
                    <li>
                        Number of tickets is displayed
                    </li>
                    <li>
                        The total price is displayed
                    </li>
                    <li>
                        The price disclaimer is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Ticket prices is returned under the "source_base_fare"
                        node within the "price_details" cluster.
                    </li>
                    <li>
                        Taxes and Fees are returned under the "source_taxes"
                        node within the "price_details" cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes and Fees" pulls the "taxes_and_fees" node
                            within the "popup_data" cluster
                        </li>
                    </ul>
                    <li>
                        Processing Fee is returned under the "source_pcln_fees"
                        node within the "price_details" cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Processing Fee" pulls the "taxes_and_fees" node
                            within the "popup_data" cluster
                        </li>
                    </ul>
                    <li>
                        Total per ticket is returned under the
                        "source_total_fare_per_ticket" node within the
                        "price_details" cluster
                    </li>
                    <li>
                        Number of tickets is returned under the
                        "number_of_passengers" within the "itinerary_data"
                        cluster.
                    </li>
                    <li>
                        Total price is returned under the "source_total_fare"
                        node within the "price_details" cluster.
                    </li>
                    <li>
                        The price disclaimer is a front end change for the
                        partner.
                    </li>
                    <ul type="circle">
                        <li>
                            "Baggage Fees" pulls the "baggage_fees" node within
                            the "popup_data" cluster.
                        </li>
                    </ul>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.2
                </p>
            </td>
            <td>
                <p>
                    Baggage Fees
                </p>
            </td>
            <td>
                <p>
                    A link to the baggage fees is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "popup_url" node within the
                        "baggage_carrier" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.3
                </p>
            </td>
            <td>
                <p>
                    Origin city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The origin city is displayed
                    </li>
                    <li>
                        The origin airport is displayed
                    </li>
                    <li>
                        The origin airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "city", "name", &amp; "code" nodes
                        within the "departure" node of the "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.4
                </p>
            </td>
            <td>
                <p>
                    Destination city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The destination city is displayed
                    </li>
                    <li>
                        The destination airport is displayed
                    </li>
                    <li>
                        The destination airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "city", "name", &amp; "code" nodes
                        within the "arrival" node of the "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.5
                </p>
            </td>
            <td>
                <p>
                    Flight number(s)
                </p>
            </td>
            <td>
                <p>
                    All flight numbers are displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "flight_number" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.6
                </p>
            </td>
            <td>
                <p>
                    Number of stops
                </p>
            </td>
            <td>
                <p>
                    The amount of stops is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "stop_count" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.7
                </p>
            </td>
            <td>
                <p>
                    Departure date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All departure dates and times are displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "datetime" nodes within the
                        "departure" node of the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.8
                </p>
            </td>
            <td>
                <p>
                    Arrival date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All arrival dates and times are displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "datetime" nodes within the
                        "arrival" node of the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.9
                </p>
            </td>
            <td>
                <p>
                    Trip duration
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The total trip duration is displayed
                    </li>
                    <li>
                        The duration for each slice is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Total trip duration is returned under the "duration"
                        node within the "slice_data" cluster
                    </li>
                    <li>
                        Slice duration is returned under the "duration" node
                        within the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.0
                </p>
            </td>
            <td>
                <p>
                    Layover information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Layover duration is displayed
                    </li>
                    <li>
                        The airport name(s) is displayed
                    </li>
                    <li>
                        The airport code(s) is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "duration" node within the "notes"
                        node of the "flight_data" clusters
                    </li>
                    <li>
                        Airport name &amp; code are returned under the "value"
                        node within the "notes" node of the "flight_data"
                        clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.1
                </p>
            </td>
            <td>
                <p>
                    Carrier(s)
                </p>
            </td>
            <td>
                <p>
                    The name/logo for the carrier(s) is displayed for each
                    slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "name" &amp; "logo" nodes within the
                        "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.2
                </p>
            </td>
            <td>
                <p>
                    Codeshare (if applicable)
                </p>
            </td>
            <td>
                <p>
                    The codeshare verbiage is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "operating_airline" node within the
                        "flight" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.3
                </p>
            </td>
            <td>
                <p>
                    Aircraft type
                </p>
            </td>
            <td>
                <p>
                    The aircraft type(s) is displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "aircraft" &amp; "aircraft_type"
                        nodes within the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.4
                </p>
            </td>
            <td>
                <p>
                    Cabin class
                </p>
            </td>
            <td>
                <p>
                    The cabin class is displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "cabin_name" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.5
                </p>
            </td>
            <td>
                <p>
                    Flight warnings &amp; highlights
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Any flight warnings or highlights are displayed
                    </li>
                    <ul type="circle">
                        <li>
                            Overnight connection
                        </li>
                        <li>
                            Flight arrives the next day
                        </li>
                        <li>
                            Flight arrives 2 days after departure
                        </li>
                        <li>
                            Open jaw
                        </li>
                    </ul>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "notes" node(s) within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.6
                </p>
            </td>
            <td>
                <p>
                    Important Information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The Important Information must be displayed for the
                        selected rate
                    </li>
                    <ul type="circle">
                        <li>
                            The "Disinsection" node is displayed when
                            applicable
                        </li>
                    </ul>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightContract
                    </li>
                    <li>
                        Returned under the "important_info_data" node.
                    </li>
                    <li>
                        #fare_rules_START#full fare rules#full_rules_END pulls
                        the "fare_rules_data" node.
                    </li>
                    <ul type="circle">
                        <li>
                            "full fare rules" is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #valid_passport_START#valid
                        passport#valid_passport_END# pulls the "valid_passport"
                        node within the "popup_data" cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "valid passport" is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #disinsection_START#disinsection.#disinsection_END#
                        pulls the "disinsection" node within the "popup_data"
                        cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "disinsection" is a hyperlink
                        </li>
                    </ul>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.7
                </p>
            </td>
            <td>
                <p>
                    Terms &amp; Conditions
                </p>
            </td>
            <td>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getPolicy.Flight
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.8
                </p>
            </td>
            <td>
                <p>
                    Privacy Policy
                </p>
            </td>
            <td>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getPolicy.Flight
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Contract
                </p>
            </td>
            <td>
                <p>
                    2.1.9
                </p>
            </td>
            <td>
                <p>
                    Customer agreement
                </p>
            </td>
            <td>
                <p>
                    The customer must agree to the price and all terms in order
                    to book, this can be:
                </p>
                <ul type="disc">
                    <li>
                        Initials input box
                    </li>
                    <li>
                        Check box
                    </li>
                    <li>
                        etc.
                    </li>
                </ul>
            </td>
            <td>
                <p>
                    Front end change for the partner
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1
                </p>
            </td>
            <td>
                <p>
                    Trip Id
                </p>
            </td>
            <td>
                <p>
                    The Trip Id that is returned must be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "booking_id" node within the
                        "results" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.2
                </p>
            </td>
            <td>
                <p>
                    Airline confirmation number
                </p>
            </td>
            <td>
                <p>
                    The airline confirmation number that is returned must be
                    displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "CarrierLocator" node(s) within the
                        "airline_data" cluster(s).
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.3
                </p>
            </td>
            <td>
                <p>
                    Booking status
                </p>
            </td>
            <td>
                <p>
                    The status of the reservation is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "book_status" node within the
                        "results" cluster.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.4
                </p>
            </td>
            <td>
                <p>
                    Summary of Charges
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Ticket price is displayed
                    </li>
                    <ul type="circle">
                        <li>
                            Not multiplied by the amount of travelers/tickets
                        </li>
                    </ul>
                    <li>
                        Taxes and Fees are displayed
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes and Fees" is hyperlinked to a light box that
                            displays additional verbiage
                        </li>
                    </ul>
                    <li>
                        Total per ticket is displayed
                    </li>
                    <li>
                        Number of tickets is displayed
                    </li>
                    <li>
                        The total price is displayed
                    </li>
                    <li>
                        The price disclaimer is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Ticket prices is returned under the "source_base_fare"
                        node within the "price_details" cluster.
                    </li>
                    <li>
                        Taxes and Fees are returned under the
                        "source_taxes_and_fees" node within the "price_details"
                        cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes and Fees" pulls the "taxes_and_fees" node
                            within the "popup_data" cluster
                        </li>
                    </ul>
                    <li>
                        Total per ticket is returned under the
                        "source_total_fare_per_ticket" node within the
                        "price_details" cluster
                    </li>
                    <li>
                        Number of tickets is returned under the
                        "number_of_passengers" within the "itinerary_data"
                        cluster.
                    </li>
                    <li>
                        Total price is returned under the "source_total_fare"
                        node within the "price_details" cluster.
                    </li>
                    <li>
                        The price disclaimer is a front end change for the
                        partner.
                    </li>
                    <ul type="circle">
                        <li>
                            "Baggage Fees" pulls the "baggage_fees" node within
                            the "popup_data" cluster.
                        </li>
                    </ul>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.5
                </p>
            </td>
            <td>
                <p>
                    Ticket number(s)
                </p>
            </td>
            <td>
                <p>
                    All ticket numbers are displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "ticket_number" node(s) within the
                        "passengers" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.6
                </p>
            </td>
            <td>
                <p>
                    Baggage fees
                </p>
            </td>
            <td>
                <p>
                    A link to the baggage fees is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "popup_url" node within the
                        "baggage_carrier" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.7
                </p>
            </td>
            <td>
                <p>
                    Origin city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The origin city is displayed
                    </li>
                    <li>
                        The origin airport is displayed
                    </li>
                    <li>
                        The origin airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "city", "name", &amp; "code" nodes
                        within the "departure" node of the "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.8
                </p>
            </td>
            <td>
                <p>
                    Destination city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The destination city is displayed
                    </li>
                    <li>
                        The destination airport is displayed
                    </li>
                    <li>
                        The destination airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "city", "name", &amp; "code" nodes
                        within the "arrival" node of the "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.9
                </p>
            </td>
            <td>
                <p>
                    Flight number(s)
                </p>
            </td>
            <td>
                <p>
                    All flight numbers are displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "flight_number" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.0
                </p>
            </td>
            <td>
                <p>
                    Number of stops
                </p>
            </td>
            <td>
                <p>
                    The amount of stops is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "stop_count" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.1
                </p>
            </td>
            <td>
                <p>
                    Departure date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All departure dates and times are displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "datetime" nodes within the
                        "departure" node of the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.2
                </p>
            </td>
            <td>
                <p>
                    Arrival date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All arrival dates and times are displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "datetime" nodes within the
                        "arrival" node of the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.3
                </p>
            </td>
            <td>
                <p>
                    Trip duration
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The total trip duration is displayed
                    </li>
                    <li>
                        The duration for each slice is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Total trip duration is returned under the "duration"
                        node within the "slice_data" cluster
                    </li>
                    <li>
                        Slice duration is returned under the "duration" node
                        within the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.4
                </p>
            </td>
            <td>
                <p>
                    Layover information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Layover duration is displayed
                    </li>
                    <li>
                        The airport name(s) is displayed
                    </li>
                    <li>
                        The airport code(s) is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "duration" node within the "notes"
                        node of the "flight_data" clusters
                    </li>
                    <li>
                        Airport name &amp; code are returned under the "value"
                        node within the "notes" node of the "flight_data"
                        clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.5
                </p>
            </td>
            <td>
                <p>
                    Carrier(s)
                </p>
            </td>
            <td>
                <p>
                    The name/logo for the carrier(s) is displayed for each
                    slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "name" &amp; "logo" nodes within the
                        "slice_data" cluster
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.6
                </p>
            </td>
            <td>
                <p>
                    Codeshare (if applicable)
                </p>
            </td>
            <td>
                <p>
                    The codeshare verbiage is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "operating_airline" node within the
                        "flight" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.7
                </p>
            </td>
            <td>
                <p>
                    Aircraft type
                </p>
            </td>
            <td>
                <p>
                    The aircraft type(s) is displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "aircraft" &amp; "aircraft_type"
                        nodes within the "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.8
                </p>
            </td>
            <td>
                <p>
                    Cabin class
                </p>
            </td>
            <td>
                <p>
                    The cabin class is displayed for each slice
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "cabin_name" node within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.1.9
                </p>
            </td>
            <td>
                <p>
                    Flight warnings &amp; highlights
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Any flight warnings or highlights are displayed
                    </li>
                    <ul type="circle">
                        <li>
                            Overnight connection
                        </li>
                        <li>
                            Flight arrives the next day
                        </li>
                        <li>
                            Flight arrives 2 days after departure
                        </li>
                        <li>
                            Open jaw
                        </li>
                    </ul>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "notes" node(s) within the
                        "flight_data" clusters
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.2.0
                </p>
            </td>
            <td>
                <p>
                    Important Information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The Important Information must be displayed for the
                        selected rate
                    </li>
                    <ul type="circle">
                        <li>
                            The "Disinsection" node is displayed when
                            applicable
                        </li>
                    </ul>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "important_info_data" node.
                    </li>
                    <li>
                        #flight_schedule_START#Flight
                        Schedule#flight_schedule_END# pulls the
                        "flight_schedule" node within the "popup_data" cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Flight Schedule" is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #bag_spec_requirements_START#Baggage/Special
                        requirements#bag_spec_requirements_END# pulls the
                        "bag_spec_requirements" node within the "popup_data"
                        cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Baggage/Special requirements" is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #notice_of_incorp_START#Notice of Incorporated
                        Terms#notice_of_incorp_END# pulls the
                        "notice_of_incorp" node within the "popup_data"
                        cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Notice of Incorporated Terms" is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #frequent_flyer_START#Frequent Flyer and Loyalty
                        Programs#frequent_flyer_END# pulls the "frequent_flyer"
                        node within the "popup_data" cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Frequent Flyer and Loyalty Programs" is a
                            hyperlink
                        </li>
                    </ul>
                    <li>
                        #check_in_START#Airport Check-In and
                        Security#check_in_END# pulls the "check_in" node within
                        the "popup_data" cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "Airport Check-In and Security" is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #internation_travel_START#International
                        Travel#internation_travel_END# pulls the
                        "international_travel" node within the "popup_data"
                        cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            International Travel is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #seat_assignments_START#Seat
                        Assignments#seat_assignments_END# pulls the
                    </li>
                    <ul type="circle">
                        <li>
                            Seat Assignments is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #valid_passport_START#valid
                        passport#valid_passport_END# pulls the "valid_passport"
                        node within the "popup_data" cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "valid passport" is a hyperlink
                        </li>
                    </ul>
                    <li>
                        #disinsection_START#disinsection.#disinsection_END#
                        pulls the "disinsection" node within the "popup_data"
                        cluster.
                    </li>
                    <ul type="circle">
                        <li>
                            "disinsection" is a hyperlink
                        </li>
                    </ul>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.2.1
                </p>
            </td>
            <td>
                <p>
                    Airline(s) contact information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The airline(s) is displayed
                    </li>
                    <li>
                        The airline(s) phone number is displayed
                    </li>
                    <li>
                        The airline(s) website is displayed
                    </li>
                    <li>
                        The airline(s) confirmation number is displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "airline" nodes within the
                        "airline_data" cluster(s).
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.2.2
                </p>
            </td>
            <td>
                <p>
                    Customer Service phone number
                </p>
            </td>
            <td>
                <p>
                    The correct Customer Service number is displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightLookUp
                    </li>
                    <li>
                        Returned under the "customer_service" node
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Success
                </p>
            </td>
            <td>
                <p>
                    3.2.3
                </p>
            </td>
            <td>
                <p>
                    Link to cancel reservation
                </p>
            </td>
            <td>
                <p>
                    A link to cancel or to look up the reservation (and cancel
                    there) must be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getFlightVoidRequest
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1
                </p>
            </td>
            <td>
                <p>
                    Trip Id
                </p>
            </td>
            <td>
                <p>
                    The Trip Id is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.2
                </p>
            </td>
            <td>
                <p>
                    Airline confirmation number
                </p>
            </td>
            <td>
                <p>
                    The airline confirmation number(s) is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.3
                </p>
            </td>
            <td>
                <p>
                    Booking status
                </p>
            </td>
            <td>
                <p>
                    The booking status is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.4
                </p>
            </td>
            <td>
                <p>
                    Summary of Charges
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Ticket price is displayed
                    </li>
                    <ul type="circle">
                        <li>
                            Not multiplied by the amount of travelers/tickets
                        </li>
                    </ul>
                    <li>
                        Taxes and Fees are displayed
                    </li>
                    <li>
                        Processing Fees are displayed, if applicable
                    </li>
                    <li>
                        Total per ticket is displayed
                    </li>
                    <li>
                        Number of tickets is displayed
                    </li>
                    <li>
                        The total price is displayed
                    </li>
                    <li>
                        The price disclaimer is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.5
                </p>
            </td>
            <td>
                <p>
                    Ticket number(s)
                </p>
            </td>
            <td>
                <p>
                    The ticket number(s) is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.6
                </p>
            </td>
            <td>
                <p>
                    Origin city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The origin city is displayed
                    </li>
                    <li>
                        The origin airport is displayed
                    </li>
                    <li>
                        The origin airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.7
                </p>
            </td>
            <td>
                <p>
                    Destination city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The destination city is displayed
                    </li>
                    <li>
                        The destination airport is displayed
                    </li>
                    <li>
                        The destination airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.8
                </p>
            </td>
            <td>
                <p>
                    Flight number(s)
                </p>
            </td>
            <td>
                <p>
                    The flight number(s) is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.9
                </p>
            </td>
            <td>
                <p>
                    Number of stops
                </p>
            </td>
            <td>
                <p>
                    The number of stops is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.0
                </p>
            </td>
            <td>
                <p>
                    Departure date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All departure dates and times are displayed for each slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.1
                </p>
            </td>
            <td>
                <p>
                    Arrival date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All arrival dates and times are displayed for each slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.2
                </p>
            </td>
            <td>
                <p>
                    Trip duration
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The total trip duration is displayed
                    </li>
                    <li>
                        The duration for each slice is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.3
                </p>
            </td>
            <td>
                <p>
                    Layover information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Layover duration is displayed
                    </li>
                    <li>
                        The airport name(s) is displayed
                    </li>
                    <li>
                        The airport code(s) is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.4
                </p>
            </td>
            <td>
                <p>
                    Carrier(s)
                </p>
            </td>
            <td>
                <p>
                    The name/logo for the carrier(s) is displayed for each
                    slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.5
                </p>
            </td>
            <td>
                <p>
                    Codeshare, if applicable
                </p>
            </td>
            <td>
                <p>
                    The codeshare verbiage is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.6
                </p>
            </td>
            <td>
                <p>
                    Aircraft type
                </p>
            </td>
            <td>
                <p>
                    The aircraft type(s) is displayed for each slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.7
                </p>
            </td>
            <td>
                <p>
                    Cabin class
                </p>
            </td>
            <td>
                <p>
                    The cabin class is displayed for each slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.8
                </p>
            </td>
            <td>
                <p>
                    Airline(s) contact information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The airline(s) is displayed
                    </li>
                    <li>
                        The airline(s) phone number is displayed
                    </li>
                    <li>
                        The airline(s) website is displayed
                    </li>
                    <li>
                        The airline(s) confirmation number is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Conf. Email
                </p>
            </td>
            <td>
                <p>
                    4.1.9
                </p>
            </td>
            <td>
                <p>
                    Customer Service phone number
                </p>
            </td>
            <td>
                <p>
                    The correct Customer Service number is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.1
                </p>
            </td>
            <td>
                <p>
                    Trip Id
                </p>
            </td>
            <td>
                <p>
                    The Trip Id is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.2
                </p>
            </td>
            <td>
                <p>
                    Booking status
                </p>
            </td>
            <td>
                <p>
                    The booking status is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.3
                </p>
            </td>
            <td>
                <p>
                    Summary of Charges
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Ticket price is displayed
                    </li>
                    <ul type="circle">
                        <li>
                            Not multiplied by the amount of travelers/tickets
                        </li>
                    </ul>
                    <li>
                        Taxes and Fees are displayed
                    </li>
                    <li>
                        Processing Fees are displayed, if applicable
                    </li>
                    <li>
                        Total per ticket is displayed
                    </li>
                    <li>
                        Number of tickets is displayed
                    </li>
                    <li>
                        The total price is displayed
                    </li>
                    <li>
                        The price disclaimer is displayed
                    </li>
                    <li>
                        All values show zero
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.4
                </p>
            </td>
            <td>
                <p>
                    Ticket number(s)
                </p>
            </td>
            <td>
                <p>
                    The ticket number(s) is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.5
                </p>
            </td>
            <td>
                <p>
                    Origin city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The origin city is displayed
                    </li>
                    <li>
                        The origin airport is displayed
                    </li>
                    <li>
                        The origin airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.6
                </p>
            </td>
            <td>
                <p>
                    Destination city &amp; airport
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The destination city is displayed
                    </li>
                    <li>
                        The destination airport is displayed
                    </li>
                    <li>
                        The destination airport code is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.7
                </p>
            </td>
            <td>
                <p>
                    Departure date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All departure dates and times are displayed for each slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.8
                </p>
            </td>
            <td>
                <p>
                    Arrival date(s) &amp; time(s)
                </p>
            </td>
            <td>
                <p>
                    All arrival dates and times are displayed for each slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.9
                </p>
            </td>
            <td>
                <p>
                    Flight number(s)
                </p>
            </td>
            <td>
                <p>
                    The flight number(s) is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.1.0
                </p>
            </td>
            <td>
                <p>
                    Carrier(s)
                </p>
            </td>
            <td>
                <p>
                    The name/logo for the carrier(s) is displayed for each
                    slice
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.1.1
                </p>
            </td>
            <td>
                <p>
                    Codeshare, if applicable
                </p>
            </td>
            <td>
                <p>
                    The codeshare verbiage is displayed
                </p>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancellation Email
                </p>
            </td>
            <td>
                <p>
                    5.1.2
                </p>
            </td>
            <td>
                <p>
                    Airline(s) contact information
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The airline(s) is displayed
                    </li>
                    <li>
                        The airline(s) phone number is displayed
                    </li>
                    <li>
                        The airline(s) website is displayed
                    </li>
                    <li>
                        The airline(s) confirmation number is displayed
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>