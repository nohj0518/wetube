export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Watch");
export const upload = (req, res) => res.send("Edit");
export const deleteVideo = (req, res) => res.send("deleteVideo");
