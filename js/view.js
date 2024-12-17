const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

export function picturesSetup(data){
  Array.from(data, pictureAdd);
}

function pictureAdd(item){
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  pictureImg.setAttribute('src', item.url);
  pictureImg.setAttribute('alt', item.description);
  picture.querySelector('.picture__likes').textContent = item.likes;
  picture.querySelector('.picture__comments').textContent = item.comments.length;
  picturesList.appendChild(picture);
}
