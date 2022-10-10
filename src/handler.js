const { nanoid } = require("nanoid");

const notes = require("./notes");

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNode = {
        title: title,
        tags: tags,
        body: body,
        id: id,
        createdAt: createdAt,
        updatedAt: updatedAt,
    };

    notes.push(newNode);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: "success",
            messege: "Catatan berhasil ditambahkan",
            data: {
                noteId: id,
            },
        });

        response.code(201);

        return response;
    }

    const response = h.response({
        status: "fail",
        messege: "Catatan gagal ditambahkan",
    });
    response.code(500);

    return response;
};

const getAllNodeHandler = () => ({
    status: "success",
    data: {
        notes: notes,
    },
});

const getNodeHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((note) => note.id === id);

    if (note.length > 0) {
        const response = h.response({
            status: "success",
            data: {
                note: note[0],
            },
        });

        response.code(200);

        return response;
    } else {
        const response = h.response({
            status: "fail",
            messege: "Catatan tidak ditemukan",
        });

        response.code(404);

        return response;
    }
};

const updateNodeHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((note) => note.id === id);

    if (note.length > 0) {
        const { title, tags, body } = request.payload;

        note[0].title = title;
        note[0].tags = tags;
        note[0].body = body;
        note[0].updatedAt = new Date().toISOString();

        const response = h.response({
            status: "success",
            messege: "Catatan berhasil diubah",
            data: {
                note: note[0],
            },
        });

        response.code(200);

        return response;
    } else {
        const response = h.response({
            status: "fail",
            messege: "Catatan tidak ditemukan",
        });

        response.code(404);

        return response;
    }
};

const deleteNodeHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((note) => note.id === id);

    if (note.length > 0) {
        notes.splice(notes.indexOf(note[0]), 1);

        const response = h.response({
            status: "success",
            messege: "Catatan berhasil dihapus",
        });

        response.code(200);

        return response;
    } else {
        const response = h.response({
            status: "fail",
            messege: "Catatan tidak ditemukan",
        });

        response.code(404);

        return response;
    }
};

const getPostsHandler = (request, h) => {
    const posts = [
        {
            id: 1,
            title: "Post 1",
            body: "Body 1",
        },
        {
            id: 2,
            title: "Post 2",
            body: "Body 2",
        },
        {
            id: 3,
            title: "Post 3",
            body: "Body 3",
        },
    ]

    return response = h.response({
        status: "success",
        data: {
            posts: posts,
        },
    });
}

module.exports = { getPostsHandler, addNoteHandler, getAllNodeHandler, getNodeHandler, updateNodeHandler, deleteNodeHandler };
