const { addNoteHandler, getAllNodeHandler, getNodeHandler, updateNodeHandler, deleteNodeHandler, getPostsHandler } = require("./handler");

const routes = [
    {
        method: "POST",
        path: "/notes",
        handler: addNoteHandler,
    },
    {
        method: "GET",
        path: "/notes",
        handler: getAllNodeHandler,
    },
    {
        method: "GET",
        path: "/notes/{id}",
        handler: getNodeHandler,
    },
    {
        method: "PUT",
        path: "/notes/{id}",
        handler: updateNodeHandler,
    },
    {
        method: "DELETE",
        path: "/notes/{id}",
        handler: deleteNodeHandler,
    },
    {
        method: 'GET',
        path: '/posts',
        handler: getPostsHandler,
    }
];

module.exports = routes;
