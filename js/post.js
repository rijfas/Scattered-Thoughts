const postForm = document.querySelector("#post-form");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log();
  fetch(
    "https://script.google.com/macros/s/AKfycbxLbfOQeVPbfPtB19d4HdZTtVRgyKl2HaEag-Qc_LtMhWpRdsidtSy6dwhRo3BUtEcM/exec",
    {
      method: "post",
      body: JSON.stringify({
        user: e.target.user.value,
        category: e.target.category.value,
        title: e.target.title.value,
        content: e.target.content.value,
      }),
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  ).then((e) => {
    window.location.href = "index.html";
  });
});
