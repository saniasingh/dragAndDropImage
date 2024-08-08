const dropArea = document.getElementById("dropArea");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("image-view");
const contentImage = document.getElementById("content-img");

function uploadFile() {
  let imageURL = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imageURL})`;
  imageView.textContent = "";
  imageView.style.border = "none";
  // contentImage.style.maxWidth = "20px";
  // contentImage.style.maxHeight = "5px";
}

inputFile.addEventListener("change", uploadFile);

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files; // important
    uploadFile();
  });

  