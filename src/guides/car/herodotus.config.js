import appendix from './appendix.md';
import checklist from './checklist.md';
import flow from './flow.md';
import launch from './launch.md';
import home from './index.md';

const COMMON_TAGS = [
    "guides",
    "car"
];

export default {
    id: "GuidesCar",
    content: {
        0: {
            title: "Home",
            subtitle: "",
            content: home,
            author: "Ryan Kim",
            tags: [
                ...COMMON_TAGS
            ]
        },
        1: {
            title: "Appendix",
            subtitle: "",
            created: "",
            updated: "",
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