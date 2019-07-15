import updates from './updates.md';
import sandbox from './sandbox.md';

const baseTags = [

];

export default {
    id: "Updates",
    content: {
        0: {
            title: "Launch Documentation Version 2",
            created: "",
            updated: "",
            summary: "",
            content: updates,
            author: "Ryan Kim",
            tags: [
                ...baseTags,
                "documentation",
                "launch"
            ],
        },
        1: {
            title: "API Sandbox Launch",
            created: "",
            updated: "",
            summary: "",
            content: sandbox,
            author: "Ryan Kim",
            tags: [
                ...baseTags,
                "sandbox"
            ]
        }
    }
};