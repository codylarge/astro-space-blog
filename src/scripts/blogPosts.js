const posts = [
  {
    title: "The Sun is Going To EXPLODE!?",
    href: "/posts/post-1/",
    date: "2023-11-01",
    thumbnail: "/img/sun-exploding-2.webp",
  },
  {
    title: "Blackholes",
    href: "/posts/post-2/",
    date: "2023-11-02",
    thumbnail: "/img/blackhole.jpg",
  },
  {
    title: "Post 3",
    href: "/posts/post-3/",
    date: "2023-11-03",
    thumbnail: "/img/sun-exploding.webp",
  },
];

function generatePostList() {
  const postList = document.getElementById("post-list");

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
      thumbnail.classList.add("post-thumbnail");
      title.textContent = post.title;
      date.textContent = `Date: ${post.date}`;

      anchor.appendChild(title);
      anchor.appendChild(date);
      anchor.appendChild(thumbnail);
      listItem.appendChild(anchor);

      postList.appendChild(listItem);
    });
  }
}
generatePostList();
