const chain = async (...urls) => {
  for(let url of urls) {
    await fetch(url)
      .then(response => response.json())
      .then(json => { console.log(
        `Post #${json.id}\ntitle: ${json.title}\nbody: ${json.body}`
      ); });
  }  		
};

chain('http://jsonplaceholder.typicode.com/posts/3', 
  'http://jsonplaceholder.typicode.com/posts/2',
  'http://jsonplaceholder.typicode.com/posts/1',
  'http://jsonplaceholder.typicode.com/posts/6',
  'http://jsonplaceholder.typicode.com/posts/5',
  'http://jsonplaceholder.typicode.com/posts/4',
  'http://jsonplaceholder.typicode.com/posts/9',
  'http://jsonplaceholder.typicode.com/posts/8',
  'http://jsonplaceholder.typicode.com/posts/7',
  'http://jsonplaceholder.typicode.com/posts/11',
  'http://jsonplaceholder.typicode.com/posts/10');