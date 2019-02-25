module.exports = {
    // Used as the main module name
    id: "",

    // Used to format the content files
    pagination: {
        // The limit before a new page is created. If not supplied, only one page will be generated.
        limit: 0,

        // An object used to organize the
        orderBy: {
            key: "",
            method: ""
        }
    },
    // An object with the ID of the content object as the key.
    content: {
        0: {
            // The title
            title: "",

            // Subtitle
            subtitle: "",

            // The path to the module.
            module: "",

            // Tags associated with the file
            tags: [],

            // Author of the content
            author: "",

            // Created date of the content
            created: "",

            // Updated date of the content
            updated: ""
        }
    }
};