const posts = [
  {
    title: "Post 1",
    href: "/posts/post-1/",
    date: "2023-11-01",
    thumbnail: "/img/Logo.png",
  },
  {
    title: "Post 2",
    href: "/posts/post-2/",
    date: "2023-11-02",
    thumbnail: "/img/Logo.png",
  },
  {
    title: "Post 3",
    href: "/posts/post-3/",
    date: "2023-11-03",
    thumbnail: "/img/Logo.png",
  },
];

function generatePostList() {
  const postList = document.getElementById("postList");

  if (postList) {
    // Clear any existing items in the list
    postList.innerHTML = "";

    posts.forEach((post) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      const thumbnail = document.createElement("img");
      const title = document.createElement("h2");
      const date = document.createElement("p");

      anchor.href = post.href;
      thumbnail.src = post.thumbnail;
      title.textContent = post.title;
      date.textContent = `Date: ${post.date}`;

      anchor.appendChild(thumbnail);
      anchor.appendChild(title);
      anchor.appendChild(date);
      listItem.appendChild(anchor);

      postList.appendChild(listItem);
    });
  }
}
generatePostList();
