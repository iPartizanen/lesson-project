export const postExpelByHash = (req, res) => {
    try {
        res.setStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
