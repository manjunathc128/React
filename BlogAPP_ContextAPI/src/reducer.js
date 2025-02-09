export default function reducer(posts, action) {
  switch (action.type) {
    case "SEARCH":
      return action.payload.length > 0
        ? posts.filter((post) =>
            `${post.title} ${post.body}`
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          )
        : posts;
    case "ADD_POST":
      return [action.payload, ...posts];
    case "CLEAR_POST":
      return [];
    default:
      return posts;
  }
}
