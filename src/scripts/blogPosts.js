const posts = [
  {
    title: "The Sun is Going To EXPLODE!?",
    href: "/posts/post-one.md",
    date: "2023-11-01",
    thumbnail: "/sun-exploding-2.webp",
  },
  {
    title: "Blackholes: ",
    href: "/posts/post-two.md",
    date: "2023-11-02",
    thumbnail: "/blackhole.jpg",
  },
  {
    title: "Gravity: Force or Field?",
    href: "/posts/post-three.md",
    date: "2023-11-01",
    thumbnail: "/earth-gravity.webp",
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
      anchor.classList.add("blog-title");
      thumbnail.src = post.thumbnail;
      thumbnail.classList.add("post-thumbnail");
      title.textContent = post.title;
      title.classList.add("blog-title");
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
