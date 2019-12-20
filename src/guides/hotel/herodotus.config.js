import appendix from './appendix.md';
import checklist from './checklist.md';
import flow from './flow.md';
import launch from './launch.md';
import home from './index.md';
import unified from './unified.md';
import cancellable from './cancellable-cug-rates.md';
import hero from 'assets/guides/hotel-guides-hero.png';
import guest from './guest-customer-billing-names.md';
import roomID from './room-id-grouping.md';

const COMMON_TAGS = [
    "guides",
    "hotel"
];

export default {
    id: "GuidesHotel",
    content: {
        home: {
            title: "Hotel Guides",
            subtitle: "Everything you need to know",
            image: hero,
            content: home,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS
            ],
        },
        appendix: {
            title: "Appendix",
            subtitle: "",
            created: "",
            updated: "",
            image: hero,
            content: appendix,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS,
                "appendix"
            ],
        },
        checklist: {
            title: "Checklist",
            subtitle: "",
            created: "",
            updated: "",
            image: hero,
            content: checklist,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS,
                "checklist"
            ],
        },
        flow: {
            title: "Flow",
            subtitle: "",
            image: hero,
            content: flow,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS,
                "flow"
            ],
        },
        launch: {
            title: "Launch Requirements",
            subtitle: "",
            image: hero,
            content: launch,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS,
                "launch",
                "requirements"
            ],
        },
        unified: {
            title: "Unified Flow",
            subtitle: "A new approach to booking",
            image: hero,
            content: unified,
            author: "Dan Major",
            tags: [
                ...COMMON_TAGS,
                "unified",
                "launch"
            ],
        },
        "cancellable-cug-rates": {
            title: "Cancellable Private Rates",
            image: hero,
            content: cancellable,
            author: "Wes Sayas",
            tags: [
                ...COMMON_TAGS,
                "cancellable",
                "rates"
            ]
        },
        "guest-customer-billing-names": {
            title: "Guest Customer/Billing Names",
            image: hero,
            content: guest,
            author: "Wes Sayas",
            tags: [
                ...COMMON_TAGS
            ]
        },
        "room-id-grouping": {
            title: "Room ID Grouping",
            image: hero,
            content: roomID,
            author: "Wes Sayas",
            tags: [
                ...COMMON_TAGS
            ]
        }
    }
};