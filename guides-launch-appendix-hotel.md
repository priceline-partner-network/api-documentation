API Hotel Requirements Appendix
===============================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:

-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement
<table>
    <tbody>
        <tr>
            <td>
                <p>
                    <strong>Page</strong>
                </p>
            </td>
            <td>
                <p>
                    <strong>Requirement #</strong>
                </p>
            </td>
            <td>
                <p>
                    <strong>Requirement</strong>
                </p>
            </td>
            <td>
                <p>
                    <strong>Expected Result</strong>
                </p>
            </td>
            <td>
                <p>
                    <strong>Additional Information</strong>
                </p>
            </td>
            <td>
                <p>
                    <strong>Reasoning for Requirements</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Results
                </p>
            </td>
            <td>
                <p>
                    1.1
                </p>
            </td>
            <td>
                <p>
                    Average Nightly Rate
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The Avg. Nightly Rate is displayed for each properly
                    </li>
                    <li>
                        The rate is not multiplied by the number of nights or
                        rooms
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Results
                    </li>
                    <li>
                        Returned under the "source_night_price" node within the
                        "night_price_data" cluster for each property
                    </li>
                    <li>
                        If a value is returned that has truncated a trailing
                        zero, that must be displayed in the proper monetary
                        format (two decimal places or whole dollar)
                    </li>
                    <li>
                        If using a different currency than the source currency,
                        the "display_night_price" node can be used
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Results
                </p>
            </td>
            <td>
                <p>
                    1.2
                </p>
            </td>
            <td>
                <p>
                    Currency
                </p>
            </td>
            <td>
                <p>
                    The correct currency, currency code, &amp; currency symbol
                    are displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Results
                    </li>
                    <li>
                        Returned under the "source_currency" &amp;
                        "source_symbol" nodes within the "price_details"
                        cluster for each property
                    </li>
                    <li>
                        If using a different currency than the source currency,
                        the "display_currency" &amp; "display_symbol" nodes can
                        be used
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Results
                </p>
            </td>
            <td>
                <p>
                    1.3
                </p>
            </td>
            <td>
                <p>
                    Full property name
                </p>
            </td>
            <td>
                <p>
                    The full property name must be displayed for each property
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Results
                    </li>
                    <li>
                        Returned under the "name" node within the "rate_data"
                        cluster for each property
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Results
                </p>
            </td>
            <td>
                <p>
                    1.4
                </p>
            </td>
            <td>
                <p>
                    Full property address
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For US/CA properties, the Province/State code are
                        required
                    </li>
                    <li>
                        For properties anywhere else in the world, the Country
                        code is required
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Results
                    </li>
                    <li>
                        Returned under the "address" cluster within the
                        "rate_data" node for each property
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Results
                </p>
            </td>
            <td>
                <p>
                    1.5
                </p>
            </td>
            <td>
                <p>
                    Star rating
                </p>
            </td>
            <td>
                <p>
                    The correct star rating must be displayed for each property
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Results
                    </li>
                    <li>
                        Returned under the "star_rating" node within the
                        "rate_data" node for each property
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Results
                </p>
            </td>
            <td>
                <p>
                    1.6
                </p>
            </td>
            <td>
                <p>
                    Search box
                </p>
            </td>
            <td>
                <p>
                    A search box must be accessible on the Results page
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Can be a slimmed down version of the Hotel search box
                    </li>
                    <li>
                        getAutoSuggestV2
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.1
                </p>
            </td>
            <td>
                <p>
                    Full property name
                </p>
            </td>
            <td>
                <p>
                    The full property name must be displayed for the selected
                    property
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelDetails
                    </li>
                    <li>
                        Download option available
                    </li>
                    <li>
                        Returned under the "name" node within the "hotel_data"
                        cluster for each property
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.2
                </p>
            </td>
            <td>
                <p>
                    Full property address
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For US/CA properties, the Province/State code are
                        required
                    </li>
                    <li>
                        For properties anywhere else in the world, the Country
                        code is required
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelDetails
                    </li>
                    <li>
                        Download option available
                    </li>
                    <li>
                        Returned under the "address" node within the
                        "hotel_data" cluster for each property
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.3
                </p>
            </td>
            <td>
                <p>
                    Star rating
                </p>
            </td>
            <td>
                <p>
                    The correct star rating must be displayed for each property
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelDetails
                    </li>
                    <li>
                        Download option available
                    </li>
                    <li>
                        Returned under the "star_rating" node within the
                        "hotel_data" cluster for each property returned
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.4
                </p>
            </td>
            <td>
                <p>
                    Hotel description
                </p>
            </td>
            <td>
                <p>
                    The hotel description must be displayed, it can be
                    partially collapsed, but must be visible and accessible
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelDetails
                    </li>
                    <li>
                        Download option available
                    </li>
                    <li>
                        Returned under the "hotel_description" node
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.5
                </p>
            </td>
            <td>
                <p>
                    Amenities
                </p>
            </td>
            <td>
                <p>
                    The amenities that are returned for the property must be
                    displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelDetails
                    </li>
                    <li>
                        Download option available
                    </li>
                    <li>
                        Returned under the "amenity_data" nodes
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.6
                </p>
            </td>
            <td>
                <p>
                    Reviews
                </p>
            </td>
            <td>
                <p>
                    The review data returned must be displayed; they can be
                    hidden behind a click
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelReviews
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.7
                </p>
            </td>
            <td>
                <p>
                    Average Nightly Rate
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The Avg. Nightly Rate is displayed for each properly
                    </li>
                    <li>
                        The correct currency, currency code, &amp; currency
                        symbol are displayed
                    </li>
                    <li>
                        The rate is not multiplied by the number of nights or
                        rooms
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelDetails
                    </li>
                    <li>
                        Download option available
                    </li>
                    <li>
                        Returned under the "source_price" node within the
                        "static_low_rate" cluster for each property returned
                    </li>
                    <li>
                        If a value is returned that has truncated a trailing
                        zero, that must be displayed in the proper monetary
                        format
                    </li>
                    <li>
                        If using a different currency than the source currency,
                        the "display_price" node can be used
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.8
                </p>
            </td>
            <td>
                <p>
                    Currency
                </p>
            </td>
            <td>
                <p>
                    The correct currency, currency code, &amp; currency symbol
                    are displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getHotelDetails
                    </li>
                    <li>
                        Download option available
                    </li>
                    <li>
                        Returned under the "source_currency" &amp;
                        "source_symbol" nodes within the "static_low_rate"
                        cluster for each property returned
                    </li>
                    <li>
                        If using a different currency than the source currency,
                        the "display_currency" &amp; "display_symbol" nodes can
                        be used
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.9
                </p>
            </td>
            <td>
                <p>
                    Room/Rate description
                </p>
            </td>
            <td>
                <p>
                    The description that is returned for each rate must be
                    displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.MultiContract
                    </li>
                    <li>
                        Returned under the "title" &amp; "description" nodes
                    </li>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.1.1
                </p>
            </td>
            <td>
                <p>
                    Cancellation policy
                </p>
            </td>
            <td>
                <p>
                    The cancellation policy must be displayed for each rate
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.MultiContract
                    </li>
                    <li>
                        Returned under the "is_cancellable" &amp;
                        "free_cancellation" nodes.
                    </li>
                    <ul type="circle">
                        <li>
                            0 = cancellable, free
                        </li>
                        <li>
                            1 = not cancellable, not free
                        </li>
                    </ul>
                </ul>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Details
                </p>
            </td>
            <td>
                <p>
                    2.1.2
                </p>
            </td>
            <td>
                <p>
                    Promo data
                </p>
            </td>
            <td>
                <p>
                    Promo data must be displayed for each rate, if returned
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.MultiContract
                    </li>
                    <li>
                        Returned under the "promo" node within the
                        "details_summary" cluster for each rate returned
                    </li>
                </ul>
            </td>
            <td>
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
                    3.1
                </p>
            </td>
            <td>
                <p>
                    Full property name
                </p>
            </td>
            <td>
                <p>
                    The full property name must be displayed for the selected
                    property
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Returned under the "hotel_name" node
                    </li>
                </ul>
            </td>
            <td>
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
                    3.2
                </p>
            </td>
            <td>
                <p>
                    Full property address
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For US/CA properties, the Province/State code are
                        required
                    </li>
                    <li>
                        For properties anywhere else in the world, the Country
                        code is required
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Returned under the "address" node
                    </li>
                </ul>
            </td>
            <td>
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
                    3.3
                </p>
            </td>
            <td>
                <p>
                    Room/Rate description
                </p>
            </td>
            <td>
                <p>
                    The description that is returned for the selected rate must
                    be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Returned under the "title" &amp; "description" nodes
                    </li>
                </ul>
            </td>
            <td>
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
                    3.4
                </p>
            </td>
            <td>
                <p>
                    Promo data
                </p>
            </td>
            <td>
                <p>
                    Promo data must be displayed for the selected rate, if
                    returned
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Returned under the "promo" node
                    </li>
                </ul>
            </td>
            <td>
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
                    3.5
                </p>
            </td>
            <td>
                <p>
                    Check-In date
                </p>
            </td>
            <td>
                <p>
                    The selected check-in date must be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Returned under the "check_in" node
                    </li>
                    <li>
                        Day of the week is recommended, but not required
                    </li>
                </ul>
            </td>
            <td>
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
                    3.6
                </p>
            </td>
            <td>
                <p>
                    Check-Out date
                </p>
            </td>
            <td>
                <p>
                    The selected check-out date must be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Returned under the "check_out" node
                    </li>
                    <li>
                        Day of the week is recommended, but not required
                    </li>
                </ul>
            </td>
            <td>
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
                    3.7
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
                        The avg. nightly rate is displayed for the selected
                        rate
                    </li>
                    <li>
                        The number of nights is displayed
                    </li>
                    <li>
                        The number of rooms is displayed
                    </li>
                    <li>
                        The Taxes and Fees are displayed
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes and Fees" is hyperlinked to a light box that
                            displays additional verbiage
                        </li>
                    </ul>
                    <li>
                        The Resort Fee is displayed, if applicable
                    </li>
                    <li>
                        The room subtotal is displayed
                    </li>
                    <li>
                        The total price is displayed
                    </li>
                    <li>
                        The correct currency, currency code, &amp; currency
                        symbol are displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Avg. nightly rate is returned under the "display_price"
                        node
                    </li>
                    <li>
                        Number of nights is returned under the "num_nights"
                        node
                    </li>
                    <li>
                        Number of rooms is displayed under the "num_rooms" node
                    </li>
                    <li>
                        Taxes &amp; Fees are displayed under the
                        "display_taxes" node
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes &amp; Fees" must be a link to display
                            additional verbiage that is returned under the
                            "taxes_and_fees_policy" node
                        </li>
                    </ul>
                    <li>
                        Resort Fee is displayed under the
                        "display_property_fee" node
                    </li>
                    <li>
                        Room subtotal is displayed under the "display_subtotal"
                        node
                    </li>
                    <li>
                        Total price is displayed under the "display_total" node
                    </li>
                    <li>
                        The currency information is returned under the
                        "display_currency" &amp; "display_symbol" nodes
                    </li>
                    <li>
                        If a value is returned that has truncated a trailing
                        zero, that must be displayed in the proper monetary
                        format
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The Resort Fee is required by law, as per Legal.
                    </li>
                    <li>
                        Taxes &amp; Fees legalese is required by law, as per
                        Legal.
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
                    3.8
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
                    <li>
                        Each inventory type has a different set of verbiage
                    </li>
                    <li>
                        Verbiage also differs by cancellation policy
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getContractRequest
                    </li>
                    <li>
                        Returned under the "important_information" node
                    </li>
                    <li>
                        All titles &amp; paragraphs must be displayed as
                        received
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed as is if Priceline is MOR, as per
                        Legal/CS.
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
                    3.9
                </p>
            </td>
            <td>
                <p>
                    Terms and Conditions
                </p>
            </td>
            <td>
                <p>
                    The Terms and Conditions must be displayed; they can be
                    hidden behind a click
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getPolicy.Hotel
                    </li>
                </ul>
            </td>
            <td>
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
                    3.1.1
                </p>
            </td>
            <td>
                <p>
                    Privacy Policy
                </p>
            </td>
            <td>
                <p>
                    The Privacy Policy must be displayed; it can be hidden
                    behind a click
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getPolicy.Hotel
                    </li>
                </ul>
            </td>
            <td>
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
                    3.1.2
                </p>
            </td>
            <td>
                <p>
                    Customer agreement
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The customer must agree to the price and all terms in
                        order to book, this can be:
                    </li>
                    <ul type="circle">
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
                </ul>
            </td>
            <td>
                <p>
                    Front end change for the partner
                </p>
            </td>
            <td>
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
                    4.1
                </p>
            </td>
            <td>
                <p>
                    Full property name
                </p>
            </td>
            <td>
                <p>
                    The full property name must be displayed for the selected
                    property
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "hotel_name" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.2
                </p>
            </td>
            <td>
                <p>
                    Full property address
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For US/CA properties, the Province/State code are
                        required
                    </li>
                    <li>
                        For properties anywhere else in the world, the Country
                        code is required
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "address" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.3
                </p>
            </td>
            <td>
                <p>
                    Room/Rate description
                </p>
            </td>
            <td>
                <p>
                    The description that is returned for the selected rate must
                    be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "room_type" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.4
                </p>
            </td>
            <td>
                <p>
                    Promo data
                </p>
            </td>
            <td>
                <p>
                    Promo data must be displayed for the selected rate, if
                    returned
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "promo_data" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.5
                </p>
            </td>
            <td>
                <p>
                    Check-In date
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The selected check-in date must be displayed
                    </li>
                    <li>
                        Day of the week must be included
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "check_in" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.6
                </p>
            </td>
            <td>
                <p>
                    Check-Out date
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The selected check-out date must be displayed
                    </li>
                    <li>
                        Day of the week must be included
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "check_out" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.7
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
                        The avg. nightly rate is displayed for the selected
                        rate
                    </li>
                    <li>
                        The number of nights is displayed
                    </li>
                    <li>
                        The number of rooms is displayed
                    </li>
                    <li>
                        The Taxes and Fees are displayed
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes and Fees" is hyperlinked to a light box that
                            displays additional verbiage
                        </li>
                    </ul>
                    <li>
                        The Resort Fee is displayed, if applicable
                    </li>
                    <li>
                        The room subtotal is displayed
                    </li>
                    <li>
                        The total price is displayed
                    </li>
                    <li>
                        The correct currency, currency code, &amp; currency
                        symbol are displayed
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Avg. nightly rate is returned under the "display_price"
                        node
                    </li>
                    <li>
                        Number of nights is returned under the "num_nights"
                        node
                    </li>
                    <li>
                        Number of rooms is displayed under the "num_rooms" node
                    </li>
                    <li>
                        Taxes &amp; Fees are displayed under the
                        "display_taxes" node
                    </li>
                    <ul type="circle">
                        <li>
                            "Taxes &amp; Fees" must be a link to display
                            additional verbiage that is returned under the
                            "taxes_and_fees_policy" node
                        </li>
                    </ul>
                    <li>
                        Resort Fee is displayed under the
                        "display_property_fee" node
                    </li>
                    <li>
                        Room subtotal is displayed under the "display_subtotal"
                        node
                    </li>
                    <li>
                        Total price is displayed under the "display_total" node
                    </li>
                    <li>
                        The currency information is returned under the
                        "display_currency" &amp; "display_symbol" nodes
                    </li>
                    <li>
                        If a value is returned that has truncated a trailing
                        zero, that must be displayed in the proper monetary
                        format
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The Resort Fee is required by law, as per Legal.
                    </li>
                    <li>
                        Taxes &amp; Fees legalese is required by law, as per
                        Legal.
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
                    4.8
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
                    <li>
                        Each inventory type has a different set of verbiage
                    </li>
                    <li>
                        Verbiage also differs by cancellation policy
                    </li>
                    <li>
                        The "Customer Service" bullet must be displayed
                    </li>
                    <ul type="circle">
                        <li>
                            The correct phone number is displayed
                        </li>
                    </ul>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "important_information" node
                    </li>
                    <li>
                        All titles &amp; paragraphs must be displayed as
                        received
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed as is if Priceline is MOR, as per
                        Legal/CS.
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
                    4.9
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
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "id" node
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed as this is the number the customer
                        will require to look up their reservation.
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
                    4.1.1
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
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "status" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.1.2
                </p>
            </td>
            <td>
                <p>
                    Hotel confirmation number
                </p>
            </td>
            <td>
                <p>
                    The hotel confirmation number that is returned must be
                    displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "confirmation_code" node
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed as this is the number the customer
                        will require to check into their room(s).
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
                    4.1.3
                </p>
            </td>
            <td>
                <p>
                    Hotel phone number
                </p>
            </td>
            <td>
                <p>
                    The hotel phone number must be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "phone" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.1.4
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
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "Policy 0" node within the
                        "Important Information" node
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed clearly for the user, as per CS.
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
                    4.1.5
                </p>
            </td>
            <td>
                <p>
                    Billing name
                </p>
            </td>
            <td>
                <p>
                    The billing name entered on the Contract page must be
                    displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "name" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.1.6
                </p>
            </td>
            <td>
                <p>
                    Credit card type
                </p>
            </td>
            <td>
                <p>
                    The credit card type must be displayed
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        getExpress.Lookup
                    </li>
                    <li>
                        Returned under the "card_type" node
                    </li>
                </ul>
            </td>
            <td>
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
                    4.1.7
                </p>
            </td>
            <td>
                <p>
                    Cancellation link
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For cancellable rates, a link must be displayed to
                        cancel the booking directly or to look up the
                        reservation details and cancel it on this review page.
                    </li>
                    <li>
                        For non-cancellable rates, it must be made clear to the
                        user that the booking cannot be cancelled
                    </li>
                </ul>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For non-cancellable rates, the Important Information
                        states the cancellation policy and will suffice.
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
                    5.1
                </p>
            </td>
            <td>
                <p>
                    Full property name
                </p>
            </td>
            <td>
                <p>
                    The full property name is displayed for the selected
                    property
                </p>
            </td>
            <td>
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
                    5.2
                </p>
            </td>
            <td>
                <p>
                    Full property address
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For US/CA properties, the Province/State code are
                        required
                    </li>
                    <li>
                        For properties anywhere else in the world, the Country
                        code is required
                    </li>
                </ul>
            </td>
            <td>
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
                    5.3
                </p>
            </td>
            <td>
                <p>
                    Room/Rate description
                </p>
            </td>
            <td>
                <p>
                    The description that is returned for the selected rate is
                    displayed
                </p>
            </td>
            <td>
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
                    5.4
                </p>
            </td>
            <td>
                <p>
                    Check-In date
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The selected check-in date must be displayed
                    </li>
                    <li>
                        Day of the week must be included
                    </li>
                </ul>
            </td>
            <td>
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
                    5.5
                </p>
            </td>
            <td>
                <p>
                    Check-Out date
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The selected check-out date must be displayed
                    </li>
                    <li>
                        Day of the week must be included
                    </li>
                </ul>
            </td>
            <td>
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
                    5.6
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
                        The avg. nightly rate is displayed for the selected
                        rate
                    </li>
                    <li>
                        The number of nights is displayed
                    </li>
                    <li>
                        The number of rooms is displayed
                    </li>
                    <li>
                        The Taxes and Fees are displayed
                    </li>
                    <li>
                        The Resort Fee is displayed, if applicable
                    </li>
                    <li>
                        The room subtotal is displayed
                    </li>
                    <li>
                        The total price is displayed
                    </li>
                    <li>
                        The correct currency, currency code, &amp; currency
                        symbol are displayed
                    </li>
                </ul>
            </td>
            <td>
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
                    5.7
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
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed as this is the number the customer
                        will require to look up their reservation.
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
                    5.8
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
                    5.9
                </p>
            </td>
            <td>
                <p>
                    Hotel confirmation number
                </p>
            </td>
            <td>
                <p>
                    The hotel confirmation number that is returned must be
                    displayed
                </p>
            </td>
            <td>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed as this is the number the customer
                        will require to check into their room(s).
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
                    5.1.1
                </p>
            </td>
            <td>
                <p>
                    Hotel phone number
                </p>
            </td>
            <td>
                <p>
                    The hotel phone number must be displayed
                </p>
            </td>
            <td>
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
                    5.1.2
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
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed clearly for the user, as per CS.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.1
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
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.2
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
            </td>
            <td>
                <ul type="disc">
                    <li>
                        Must be displayed as this is the number the customer
                        will require to look up their reservation.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.3
                </p>
            </td>
            <td>
                <p>
                    Full property name
                </p>
            </td>
            <td>
                <p>
                    The full property name is displayed for the selected
                    property
                </p>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.4
                </p>
            </td>
            <td>
                <p>
                    Full property address
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        For US/CA properties, the Province/State code are
                        required
                    </li>
                    <li>
                        For properties anywhere else in the world, the Country
                        code is required
                    </li>
                </ul>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.5
                </p>
            </td>
            <td>
                <p>
                    Hotel phone number
                </p>
            </td>
            <td>
                <p>
                    The hotel phone number must be displayed
                </p>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.6
                </p>
            </td>
            <td>
                <p>
                    Room/Rate description
                </p>
            </td>
            <td>
                <p>
                    The description that is returned for the selected rate is
                    displayed
                </p>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.7
                </p>
            </td>
            <td>
                <p>
                    Check-In date
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The selected check-in date must be displayed
                    </li>
                    <li>
                        Day of the week must be included
                    </li>
                </ul>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cancel. Email
                </p>
            </td>
            <td>
                <p>
                    6.8
                </p>
            </td>
            <td>
                <p>
                    Check-Out date
                </p>
            </td>
            <td>
                <ul type="disc">
                    <li>
                        The selected check-out date must be displayed
                    </li>
                    <li>
                        Day of the week must be included
                    </li>
                </ul>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>