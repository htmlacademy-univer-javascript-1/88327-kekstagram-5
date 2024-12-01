function generateData(){

  let res = [];
  for(let i = 1; i <= 25; i++){
    let item = {};
    item.id = i;
    item.url = 'photos/' + i + '.jpg';
    item.description = "Фотография #" + i;
    item.likes = getRndInteger(15, 200);
    item.comments = []
    let commentsCount = getRndInteger(0, 15);
    for(let j = 0; j <= commentsCount; j++){
      let comment = {};
      comment.id = i*100 + j;
      comment.avatar = "img/avatar-" + getRndInteger(1, 6) + ".svg";
      comment.name = getName();
      comment.message = getMessage();
      item.comments.push(comment);
    }
    res.push(item)
  }

  return res;

}

function getMessage(){
  let res = [];
  let messages = [
                  'Всё отлично!',
                  'В целом всё неплохо. Но не всё.',
                  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
                  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
                  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
                  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
                ];
  let messageCount = getRndInteger(0, 1);
  for(let i = 0; i <= messageCount; i++){
    res.push(messages[getRndInteger(0, messages.length)]);
  }
  return res.join('\n');
}

function getName(){
  let names = [
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


function newComment( ){
  let x;
  if (typeof x !== undefined){
    x = 22
  } else {
    x = 2
  }

  console.log(x);
  // let comment.id = 2;

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


x = generateData()
console.log(x)
