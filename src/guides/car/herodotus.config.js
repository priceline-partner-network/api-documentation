import appendix from './appendix.md';
import checklist from './checklist.md';
import flow from './flow.md';
import launch from './launch.md';
import home from './index.md';
import hero from 'assets/guides/car-guides-hero.png';

const COMMON_TAGS = [
    "guides",
    "car"
];

export default {
    id: "GuidesCar",
    content: {
        home: {
            title: "Home",
            subtitle: "",
            image: hero,
            content: home,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS
            ]
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
        disclosure: {
            title: "Merchant Disclosure Rates",
            subtitle: "",
            image: hero,
            author: "Lovepreet Brar",
            tags: [
                ...COMMON_TAGS
            ]
        },
        international: {
            title: "International Car Rates",
            subtitle: "",
            image: hero,
            author: "Lovepreet Brar",
            tags: [
                ...COMMON_TAGS
            ]
        }
    }
};