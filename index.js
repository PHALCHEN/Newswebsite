console.log("connected");

function postNews(event) {
  event.preventDefault(); // prevent reload page
  let storage = JSON.parse(localStorage.getItem("breakingNew"));
  let form = event.target;
  let data = {
    cover: form.cover.value,
    websiteUrl: form.websiteUrl.value,
    postedAt: form.postedAt.value,
    description: form.description.value,
  };
  console.log(data);
  if (!storage) {
    localStorage.setItem("breakingNew", JSON.stringify([data]));
  } else {
    storage.push(data);
    localStorage.setItem("breakingNew", JSON.stringify(storage));
  }
  document.getElementById("closePost").click();
  displayUi();
}

function displayUi() {
  let postUi = document.getElementById("postBreaking");
  let storage = JSON.parse(localStorage.getItem("breakingNew"));
  if (!storage) {
    postUi.innerHTML = "No post, please a news";
  } else {
    let tmpContent = "";
    for (let i = 0; i < storage.length; i++) {
      tmpContent += `

    <div class="img" id="breakingImg">
    <img src="${storage[i].cover}" alt="cover">
    </div>
    <div class="text" id="breakingNews">
    <div class="description"> ${storage[i].description}
    <div class="title">
        <a href="${storage[i].websiteUrl}" target="_blank" >
        <button type="button" class="btn btn-primary btn-sm">
        See more..
      </button>
        </a>
      </div>
  </div>
    </div>
`;
    }
    postUi.innerHTML = tmpContent;
  }
}
displayUi();
