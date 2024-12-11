let pictureTemplate = document.querySelector('#picture').content.querySelector(".picture");
let picturesList = document.querySelector('.pictures');

export function picturesSetup( data ){

  Array.from(data, function(item){
    let picture = pictureTemplate.cloneNode(true);
    let pictureImg = picture.querySelector('.picture__img');
    pictureImg.setAttribute('src', item.url);
    pictureImg.setAttribute('alt', item.description);
    picture.querySelector('.picture__likes').textContent = item.likes;
    picture.querySelector('.picture__comments').textContent = item.comments.length;
    picturesList.appendChild(picture);
  })

}
