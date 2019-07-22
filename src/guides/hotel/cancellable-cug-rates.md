# Guide for Cancellable Private Rates

### Introduction
PPN has Private rates that are cancellable. This guide will outline how to identify, display, and cancel these rates.

### Displaying Rates
When displaying rates to the customer, the API returns information to communicate cancel policies.

### Rate Policy Data

The new `policy_data` node lists one or more paragraphs of important information about the rate.

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

**Note:** This is different from the `output_version=1` structure that had `policy_data` once at the `results` level, and `important_information`, which no longer applies to all rates, has been removed in `output_version=3`.

### Rate Cancellation Policies

The new `cancellation_details` node provides machine-readable cancellation policy information for the rate.

Since new inventory that **does** support cancellation will now appear in the Unified Express Path, you are strongly encouraged to begin parsing and displaying this information to the customer.
  
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

## Cancellation
#### Recognizing a Cancellable Rate from `Express.Contract` and `Express.MultiContract`
The `cancellation_details` node provides machine-readable cancellation policy information for the rate.

```json 
{
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
}
```

Since new inventory that **does** support cancellation will now appear in the Unified Express Path, you are strongly encouraged to update your implementation to support cancellation when available.

### Recognizing a Cancellable Rate from `Express.Contract` and `Express.MultiContract` 

The new `cancellation_details` node provides machine-readable cancellation policy information for the rate.

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

The call `Express.LookUp` has been updated to include cancellation support.  

The new element can be found at `results` → `result` → `actions` → `cancel`:

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



