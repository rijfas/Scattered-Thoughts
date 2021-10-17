const loadPosts = async () => {
  let data = await fetch(
    "https://script.google.com/macros/s/AKfycbxV213JywCfgcxnvMikBENg3bfQp__XQIDh9k-hYMd2ROaZCrj7IjyB8zUUr3EWOtQl/exec"
  );
  let dataAsJson = await data.json();
  posts.innerHTML = "";
  if (dataAsJson.status && dataAsJson.status == "error") {
    posts.innerHTML = emptyCard;
  } else {
    dataAsJson.forEach((post) => {
      posts.innerHTML += postCard(post);
    });
  }
};

const decodeMessage = (message) => {
  let decodedMessage = decodeURI(message);
  return decodedMessage.replace(/\+/g, " ");
};
const setUserAvatar = () => {
  const imageDisplay = document.querySelector("#avatar-image");
  const user = localStorage.getItem("user");
  imageDisplay.src = `https://api.multiavatar.com/${user}.png`;
};

const checkUserLogin = () => {
  let user = localStorage.getItem("user");
  if (!user) {
    posts.innerHTML = loginPrompt;
  } else {
    userMenu.classList.remove("hidden");
    userMenu.classList.add("flex");
    setUserAvatar();
    loadPosts();
  }
};

const login = () => {
  const userName = document.querySelector("#username").value;
  if (userName) {
    localStorage.setItem("user", userName);
    userMenu.classList.remove("hidden");
    userMenu.classList.add("flex");
    posts.innerHTML = loadingSpinner;
    setUserAvatar();
    loadPosts();
  }
};

const logout = () => {
  localStorage.removeItem("user");
  userMenu.classList.remove("flex");
  userMenu.classList.add("hidden");
  posts.innerHTML = loginPrompt;
};
