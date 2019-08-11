export const getVideoByHash = (req, res) => {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteVideoByHash = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
