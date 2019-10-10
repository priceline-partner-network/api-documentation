import appendix from './appendix.md';
import checklist from './checklist.md';
import flow from './flow.md';
import launch from './launch.md';
import home from './index.md';
import hero from 'assets/guides/air-guides-hero.png';
import flightsRoundTrip from './flights-round-trip.md';

const COMMON_TAGS = [
    "guides",
    "air"
];

export default {
    id: "GuidesAir",
    content: {
        home: {
            title: "Air Guides",
            subtitle: "Everything you need to know",
            image: hero,
            content: home,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS
            ]
        },
        appendix: {
            title: "Air Appendix",
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
            ]
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
            ]
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
            ]
        },
        "flights-round-trip": {
            title: "Flights Round Trip",
            subtitle: "",
            image: hero,
            author: "Lovepreet Brar",
            content: flightsRoundTrip,
            tags: [
                ...COMMON_TAGS,
                "flights",
                "round",
                "trip"
            ]
        }
    }
};