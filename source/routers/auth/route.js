export const postLogin = (req, res) => {
    try {
        res.setStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const postLogout = (req, res) => {
    try {
        res.setStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
