let photoId = 1;
let commentId = 1;

function generateData(){

  const res = [];
  for(let i = 1; i <= 25; i++){
    const item = generatePhotoData();
    item.comments = [];
    const commentsCount = getRndInteger(0, 15);
    for(let j = 0; j <= commentsCount; j++){
      item.comments.push( generateCommentData() );
    }
    res.push(item);
  }

  return res;

}

function generatePhotoData(){

  const res = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: `Фотография #${photoId}`,
    likes: getRndInteger(15, 200)
  }

  photoId++;

  return res;
}

function generateCommentData(){

  const res = {
    id: commentId,
    avatar: `img/avatar-${getRndInteger(1, 6)}.svg`,
    name: getName(),
    message: getMessage()
  }
  commentId++;
  return res;

}

function getMessage(){
  const res = [];
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const messageCount = getRndInteger(0, 1);
  for(let i = 0; i <= messageCount; i++){
    res.push(messages[getRndInteger(0, messages.length)]);
  }
  return res.join('\n');
}

function getName(){
  const names = [
    'Петр',
    'Анна',
    'Дмитрий',
    'Соня',
    'Акркадий',
    'Павел Петрович',
    'Степан',
    'Налим',
    'Звонимир'
  ];

  return names[getRndInteger(0, names.length)];

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generateData();
const data = generateData();
console.log( data )
