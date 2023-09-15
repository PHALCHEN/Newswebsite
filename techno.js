/**Techno */
console.log("connected");

function postNews(event) {
  event.preventDefault(); // prevent reload page
  let storage = JSON.parse(localStorage.getItem("techno"));
  let form = event.target;
  let data = {
    title: form.title.value,
    cover: form.cover.value,
    websiteUrl: form.websiteUrl.value,
    postedAt: form.postedAt.value,
    description: form.description.value,
  };
  console.log(data);
  if (!storage) {
    localStorage.setItem("techno", JSON.stringify([data]));
  } else {
    storage.push(data);
    localStorage.setItem("techno", JSON.stringify(storage));
  }
  document.getElementById("closePost").click();
  displayUi();
}

function displayUi() {
  let postUi = document.getElementById("postsTechno");
  let storage = JSON.parse(localStorage.getItem("techno"));
  if (!storage) {
    postUi.innerHTML = "No post, please a news";
  } else {
    let tmpContent = "";
    for (let i = 0; i < storage.length; i++) {
      tmpContent += `
    <div class="col-3">    
    <div class="newsBox">
    <div class="newsCard" style="width: 18rem;">
      <div class="img">
          <img src="${storage[i].cover}" alt="cover">
      </div>
      <div class="text"> ${storage[i].title}
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
    </div>
  </div> </div>
`;
    }
    postUi.innerHTML = tmpContent;
  }
}
displayUi();

/** */
