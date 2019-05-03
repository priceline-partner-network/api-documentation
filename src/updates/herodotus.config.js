import updates from './updates.md';
import sandbox from './sandbox.md';

module.exports = {
    title: "",
    component: "",
    pagination: {
        limit: 10,
        orderBy: "latest-created"
    },
    content: {
        0: {
            title: "Launch Documentation Version 2",
            created: "",
            updated: "",
            markdown: updates,
            author: "",
            tags: [
                "documentation"
            ],
        },
        1: {
            title: "API Sandbox Launch",
            created: "",
            updated: "",
            markdown: sandbox,
            tags: [
                "sandbox"
            ]
        },
        2: {
            title: "Hardcoded document new",
            created: "",
            updated: "",
            markdown: "asdfasdfasdf",
            tags: [
                "asdfasdfasdf",
                "asdfasdfasdf"
            ]
        },
        3: {
            title: "",

        }
    }
};