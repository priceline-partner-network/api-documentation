import appendix from './appendix.md';
import checklist from './checklist.md';
import flow from './flow.md';
import launch from './launch.md';
import home from './index.md';
import hero from 'assets/guides/air-guides-hero.png';

const COMMON_TAGS = [
    "guides",
    "air"
];

export default {
    id: "GuidesAir",
    content: {
        0: {
            title: "Air Guides",
            subtitle: "Everything you need to know",
            image: hero,
            content: home,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS
            ]
        },
        1: {
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
        2: {
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
        3: {
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
        4: {
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
        }
    }
};