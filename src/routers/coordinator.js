export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignup = (history) => {
  history.push("/signup");
};

export const goToCreate = (history) => {
  history.push("/create");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToPost = (history, id) => {
  history.push(`/posts/${id}`);
};