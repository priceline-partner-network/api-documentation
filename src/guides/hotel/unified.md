# Unified Express Path Guide

Our Unified Express Path offers all of our world class hotel inventories from a single API request.

Several features improve usability and enhance the variety and detail of the data supplied by our API endpoints.

While some of this functionality is optional, other elements are required in order to recognize and effectively market these amalgamated inventory types.

## `json2` Format Style

To create a more typical JSON output syntax, the `format=json2` parameter may be sent along with any request.

This differs from our `format=json` syntax by encoding arrays of elements as proper JSON arrays, not as hashmaps.

This is an optional migration, and would be a breaking change that you would need to develop against. We will continue to support the existing `format=json` for the foreseeable future.

For example, something under `format=json`:

```json
{
  "foo": {
    "foo_0": {
      "title": "BAR"
    },
    "foo_1": {
      "title": "ZIM"
    },
    "foo_2": {
      "title": "ZAM"
    }
  }
}
```

would appear as an array in `format=json2`:

```json
{
  "foo": [
    {
      "title": "BAR"
    },
    {
      "title": "ZIM"
    },
    {
      "title": "ZAM"
    }
  ]
}
```

## Rate Information

### Commission, Distribution, Payment, and Inventory Type

Requests that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`, `Express.Book`, and `Express.LookUp`) indicate the `commission_type`, `distribution_type`, `payment_type`, and the `inventory_type` to inform you of the style of commission, the distribution gating rules, when payment is due, and the underlying inventory, respectively.

#### `commission_type`

| Value        | Explanation                                                                       |
|--------------|-----------------------------------------------------------------------------------|
| `NET`        | Rate is provided without markup, no commission will be paid on sale of this rate. |
| `COMMISSION` | Rate is provided with a markup, commission will be paid as per your agreement.    |

#### `distribution_type`

| Value                | Explanation                                                                                                                                                                                                                                                                                                                                 |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PUBLIC`             | The rate can be sold to the public, in any channel                                                                                                                                                                                                                                                                                         |
| `PRIVATE`            | The rate can only be sold privately, to a channel of a closed group of users                                                                                                                                                                                                                                                               |
| `FLEXIBLE_BENCHMARK` | The rate can be sold to anyone, but if it is sold publicly, it must be sold at minimum, at the value represented in the `benckmark_price` node. If sold privately, the markup is your choice |

#### `payment_type`

| Value      | Explanation                                                                                 |
|------------|---------------------------------------------------------------------------------------------|
| `PREPAID`  | Payment is due at the time of making the reservation.                                       |
| `POSTPAID` | Payment is due at the hotel. Note that a deposit or hold on the card may still be required. |

#### `inventory_type`

Current inventories supported, along with the related types you would _expect_ to see for those inventories.

This is provided as reference only, implementations should always respect the `distribution_type`, `commission_type`, and `payment_type` returned for the rate.

| `inventory_type` | Explanation                             | `distribution_type`                           | `commission_type`      | `payment_type`           |
|------------------|-----------------------------------------|-----------------------------------------------|------------------------|--------------------------|
| `AGD`            | Agoda.com supplied rates                | `PUBLIC`                                      | `COMMISSION`           | `PREPAID`                |
| `BKG`            | Booking.com supplied rates              | `PUBLIC`                                      | `COMMISSION`           | `PREPAID` and `POSTPAID` |
| `RCUG`           | Refundable Private rates                    | `PRIVATE`                                     | `COMMISSION`           | `PREPAID`                |
| `GCUG`           | Refundable and non-refundable Private rates | `PRIVATE`                                     | `COMMISSION`           | `PREPAID` and `POSTPAID` |
| `GMER`           | Additional retail rates                 | `PUBLIC`                                      | `COMMISSION`           | `PREPAID` and `POSTPAID` |
| `PCLN`           | Priceline rates                         | `PUBLIC`, `PRIVATE`, and `FLEXBILE_BENCHMARK` | `COMMISSION` and `NET` | `PREPAID` and `POSTPAID` |

### Board Type

Calls that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`, `Express.Book`, and `Express.LookUp`) indicate the `board_type` for the rate.

| Value           | Explanation                                                |
|-----------------|------------------------------------------------------------|
| `NONE`          | Rate is provided with no additional board/meal options     |
| `BREAKFAST`     | Rate is provided with free breakfast                       |
| `ALL_INCLUSIVE` | Rate is provided as all-inclusive, with all meals provided |

### Program Types

Calls that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`, `Express.Book`, and `Express.LookUp`) indicate the `program_types` for the rate.

This info may be useful in marketing the rate.

`program_types` is a list of zero or more of the below, indicating:

| Value              | Explanation                                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| `MOBILE_EXCLUSIVE` | Rate is provided at a discount for customers on a mobile device                                                 |
| `MEMBER_DEALS`     | Rate is provided for customers logged in as members                                                             |
| `GENIUS`           | Rate is provided for customers as a part of [Booking.com's Genius Program](https://www.booking.com/genius.html) |

## Features in `Express.Results`

### Retail Priced Rates

For rates with retail pricing, you will notice that there aren’t any savings applied in the node `room_data` → `room` → `benchmark_price_details`.

Here is an example of how a retail priced rate will be returned:

```json
{
  "benchmark_price_details": {
    "savings_percentage": 0,
    "baseline_currency": "USD",
    "baseline_price": 123.45,
    "source_currency": "USD",
    "source_price": 123.45,
    "display_currency": "USD",
    "display_price": 123.45
  }
}
```

Contrast this with now a non-retail discounted rate will be returned:

```json
{
  "benchmark_price_details": {
    "savings_percentage": 20,
    "baseline_currency": "USD",
    "baseline_price": 123.45,
    "source_currency": "USD",
    "source_price": 123.45,
    "display_currency": "USD",
    "display_price": 123.45
  }
}
```

Therefore, it will be important to check that:

1. You are not suppressing rates based on `savings_percentage` being above a certain value
2. You are appropriately displaying in cases where `savings_percentage` is 0

### Additional Rate Information

Use of this data can be considered optional, but may be useful in marketing the rate.

| Node              | Description                                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------------------------|
| `occupancy_limit` | A nullable integer, indicates occupancy limit for the room, `null` indicating the information is unavailable  |
| `available_rooms` | A nullable integer, indicates the number of rooms available, `null` indicating the information is unavailable |
| `promo_data`      | An array, containing promotional data available for the rate                                                   |

## Features in `Express.Contract` and `Express.MultiContract`

### Bedding Data

The `bedding_data` node provides machine-readable information on what types and counts of beds are available in the room.

Use of this data can be considered optional, but may be useful in marketing the rate.

```json
"bedding_data": {
  "bedding_0": {
    "bed_count": 1,
    "bed_type": "KING"
  }
}
```

Where the `bed_type` can be one of:

| `bed_type` | Description                |
|------------|----------------------------|
| `KING`     | A King-size bed            |
| `QUEEN`    | A Queen-size bed           |
| `FULL`     | A full-size bed            |
| `TWIN`     | A twin bed                 |
| `SOFABED`  | A pull-out couch-style bed |

### Room Photos

The `photos` node lists one or more photographs of the room.

Use of this data can be considered optional, but may be useful in marketing the rate.

```json
"photos": {
  "hotel_id": 123,
  "photo_data": {
    "photo_0": "//priceline.com/images/hotel123.jpg"
  }
}
```

### Rate Policy Data

The `policy_data` node lists one or more paragraphs of important information about the rate.

Use of this data to display this information to the customer is strongly encouraged and in some cases required. Please refer to the certification process documents provided or ask your Account Manager.

```json
"policy_data": {
  "policy_0": {
    "title": "Cancellation Policy",
    "paragraph_data": {
      "paragraph_0": "This booking is Non-Refundable and cannot be amended or modified. If you fail to arrive or cancel the booking, no refund will be given."
    }
  },
  "policy_1": {
    "title": "Hotel Parking Policy",
    "paragraph_data": {
      "paragraph_0": "Free public parking is possible on site (reservation is needed)."
    }
  }
}
```

### Rate Cancellation Policies

The `cancellation_details` node provides machine-readable cancellation policy information for the rate.

You are strongly encouraged to parse and displaying this information to the customer.
  
However, if you don't require a machine-readable version, a human-readable summary is provided in the `policy_data` node described above.

Please see the section titled [Cancellation](#Cancellation) below for more information on how to process cancellation requests.

```json
"cancellation_details": {
  "cancellation_detail_0": {
    "description": "This booking is Non-Refundable and cannot be amended or modified.",
    "date_after": "2015-09-18T17:00:00-07:00",
    "date_before": "2019-06-06T00:00:00-07:00",
    "penalty_nights": 2,
    "source_currency": "USD",
    "source_amount": 356.28,
    "source_tax": 0,
    "source_processing_fee": 0,
    "source_cancellation_fee": 0,
    "source_refund": 0,
    "source_total_charges": 356.28,
    "display_currency": "USD",
    "display_amount": 356.28,
    "display_tax": 0,
    "display_processing_fee": 0,
    "display_cancellation_fee": 0,
    "display_refund": 0,
    "display_total_charges": 356.28
  }
}
```

## Mandatory Property Fees

Some hotel/resort properties charge guests an additional mandatory fee (or set of fees) that are separate from the total price of the stay. These fees are typically collected when the customer arrives at the hotel to check-in. There are also cases where payment for these fees is collected at the time of booking for specific rates.

In the `Express.Results`, `Express.Contract`, and `Express.MultiContract` responses, a node called `mandatory_fee_details` will provide a breakdown of these fees, if they are applicable to the rate:

```json
{
  "mandatory_fee_details": {
    "source_currency": "USD",
    "source_total": 50.00,
    "display_currency": "USD",
    "display_total": 50.00,
    "breakdown": {
      "prepaid": {
        "source_currency": "USD",
        "source_total": 10.00,
        "display_currency": "USD",
        "display_total": 10.00,
        "breakdown": {
          "fee_0": {
            "type": "City Fee",
            "description": "$5.00 USD per room per night city fee",
            "source_currency": "USD",
            "source_total": 10.00,
            "display_currency": "USD",
            "display_total": 10.00
          }
        }
      },
      "postpaid": {
        "source_currency": "USD",
        "source_total": 40.00,
        "display_currency": "USD",
        "display_total": 40.00,
        "breakdown": {
          "fee_0": {
            "type": "Resort Fee",
            "description": "$15.00 USD per room per night resort fee",
            "source_currency": "USD",
            "source_total": 30.00,
            "display_currency": "USD",
            "display_total": 30.00
          },
          "fee_1": {
            "type": "Cleaning Fee",
            "description": "$5.00 USD per room per night house service fee",
            "source_currency": "USD",
            "source_total": 10.00,
            "display_currency": "USD",
            "display_total": 10.00
          }
        }
      }
    }
  }
}

```

For mandatory fees that are to be paid when the customer checks in (`postpaid`), the total fee value will **not** be included in the total price (in `price_details`), so it would need to be communicated as a separate item outside of the total to inform the customer.

Conversely, for mandatory fees that are to be paid when the customer books (`prepaid`), the total fee value **will** be included in the total price (in `price_details`), so it would need to be communicated as a line item in the summary of charges so as to have the math make sense.

Using the itemized details in `mandatory_fee_details` → `breakdown` → `postpaid`/`prepaid` → `breakdown` can be used to display each individual fee, but is not required.

In the example above, if the `price_details` reflected a subtotal of $210 with $20 taxes, then for a one-room, two-night stay, an example summary of charges could read as:

| Line Item         | Value    |
|-------------------|----------|
| Subtotal          | $210     |
| Taxes             | $20      |
| Property Fees     | $10      |
| **Total Due Now** | **$250** |
| Due At Hotel      | $40      |

Note that, as described above, the `prepaid` fees are calculated as a part of the total due at booking, and the `postpaid` fees are simply communicated that the hotel will collect at check-in.




## Cancellation

### Recognizing a Cancellable Rate from `Express.Contract` and `Express.MultiContract` 

The `cancellation_details` node provides machine-readable cancellation policy information for the rate.

```json
"cancellation_details": {
  "cancellation_detail_0": {
    "description": "This booking is Non-Refundable and cannot be amended or modified.",
    "date_after": "2015-09-18T17:00:00-07:00",
    "date_before": "2019-06-06T00:00:00-07:00",
    "penalty_nights": 2,
    "source_currency": "USD",
    "source_amount": 356.28,
    "source_tax": 0,
    "source_processing_fee": 0,
    "source_cancellation_fee": 0,
    "source_refund": 0,
    "source_total_charges": 356.28,
    "display_currency": "USD",
    "display_amount": 356.28,
    "display_tax": 0,
    "display_processing_fee": 0,
    "display_cancellation_fee": 0,
    "display_refund": 0,
    "display_total_charges": 356.28
  }
}
```

### Recognizing and Processing a Cancellation Request from `Express.Lookup`

The `Express.LookUp` call has data to reference for cancellation support.  

The `cancel` element can be found at `results` → `result` → `actions` → `cancel`:

```json
{
  "getHotelExpress.LookUp": {
    "results": {
      "result": {
        ...
        "actions": {
          "cancel": "ABC123",
          "resend_itinerary": "DEF456"
        }
      }
    }
  }
}
```

When present, this node contains an encoded bundle string that can be used to submit a cancel request for that hotel reservation to the new `Express.Cancel` endpoint.

Sample request:

```bash
curl -X POST \
  https://api.rezserver.com/api/hotel/getExpress.LookUp?refid={refid}&api_key={api_key}&format=json \
  -d 'booking_id=123&email=json@smith.com'
```

### Submitting a Cancellation to `Express.Cancel`

The `Express.Cancel` call is used to submit a cancel request.

Before attempting to cancel, a reference to the `Express.LookUp` response should check to see that this element at `results` → `result` → `actions` → `cancel` is present.

If not present, this reservation is non-cancellable (as should be reflected in the `policy_data` and `cancellation_details` policy text).

If present, this encoded string should be passed into `Express.Cancel` as `ppn_bundle`.

A successful cancellation is determined when the response contains the element `result` → `status` with the value `Cancelled`.

Sample request:

```bash
curl -X POST \
  https://api.rezserver.com/api/hotel/getExpress.Cancel?refid={refid}&api_key={api_key}&format=json \
  -d 'ppn_bundle=ABC123'
```

