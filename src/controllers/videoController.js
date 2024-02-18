export const trending = (req, res) => {
  const videos = [];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Watch");
export const upload = (req, res) => res.send("Edit");
export const deleteVideo = (req, res) => res.send("deleteVideo");
