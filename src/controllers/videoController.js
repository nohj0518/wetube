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
  return res.render("watch", { pageTitle: `Watch : ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  const { title } = req.body;
  video.title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload` });
};

export const postUpload = (req, res) => {
  //  we will add a video to the video array
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comment: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect(`/`);
};
