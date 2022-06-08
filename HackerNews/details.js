const id = localStorage.getItem('newsId')
// console.log(id)

async function getDetail(id){
    try{
        // console.log(id)
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((response)=>{
            response.json().then((res)=>{
              console.log(res)
              
              let title=document.createElement('h3');
              title.textContent=`Title : ${res.title}`;
              let by=document.createElement('p');
              by.textContent=`By : ${res.by}`;
              let score=document.createElement('p');
              score.textContent=`Score : ${res.score}`;
              // let description=document.createElement('p');
              // description.textContent=`Description : ${res.text}`;
              document.getElementById('link').href=`${res.url}`;

              document.getElementById('details').append(title, by, score)
            })
          });
    }catch(e){
      console.log(e)
    }
  }
  
  getDetail(id);

