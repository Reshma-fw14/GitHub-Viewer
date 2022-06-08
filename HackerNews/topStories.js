
var topcount=1;
app.controller('topStoriesCtrl', function fetchData($scope, $http) {
    // console.log(data)
    $http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(function(response) {
    //   console.log(response.data)
        return response.data;
    })
    .then((data) => {
        let result=data.map((id) => {
            return $http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?`)
            .then(function(response){
            //    console.log("response.data:",response.data)
            $scope.fetchData = response.data;
            let tr= document.createElement("tr");
            let br=document.createElement('br');
            let td1=document.createElement("td");
            let td2=document.createElement("td");
            let td3=document.createElement('button');

            td1.innerText=topcount++;
            td2.innerText=response.data.title;
            td3.textContent='Details';

            td3.addEventListener('click', ()=>{
                localStorage.setItem('newsId', id);
                window.location.href='./details.html';
            })

            tr.append(td1,td2,td3);

            document.getElementById("headLines").append(tr,br)
            });
        });
    });
});

window.addEventListener('scroll',()=>{
    // console.log('load')
    
})