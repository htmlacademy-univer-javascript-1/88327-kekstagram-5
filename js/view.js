
var picture_template = document.querySelector('#picture').content.querySelector(".picture");
var pictures_list = document.querySelector('.pictures');

export function picturesSetup( data ){

  Array.from(data, function(item){
    let picture = picture_template.cloneNode(true);
    let picture_img = picture.querySelector(".picture__img");
    picture_img.setAttribute('src', item.url);
    picture_img.setAttribute('alt', item.description);
    picture.querySelector(".picture__likes").textContent = item.likes;
    picture.querySelector(".picture__comments").textContent = item.comments.length;
    pictures_list.appendChild(picture);
    // console.log(item, picture)
  })

}
