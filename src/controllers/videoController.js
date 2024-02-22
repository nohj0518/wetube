let videos = [
  {
    title: "First Video",
    rating: 5,
    comment: 2,
    createdAt: "2 min ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comment: 2,
    createdAt: "2 min ago",
    views: 60,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comment: 2,
    createdAt: "2 min ago",
    views: 60,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watch ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Watch");
export const upload = (req, res) => res.send("Edit");
export const deleteVideo = (req, res) => res.send("deleteVideo");
