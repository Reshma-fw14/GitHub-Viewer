
var newcount=1;


app.controller('newStoriesCtrl', function($scope, $http) {
    $http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    .then(function(response) {
    //   console.log(response.data)
        return response.data;
    })
    .then((data) => {
    //   console.log(data)
        let result=data.map((id) => {
            return $http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?`)
            .then(function(response){
               console.log("new:",response.data)
            $scope.fetchData = response.data;
            let tr= document.createElement("tr");
            let br=document.createElement('br');
            let td1=document.createElement("td");
            let td2=document.createElement("td");
            let td3=document.createElement('button');

            td1.innerText=newcount++;
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

// app.config(function($routeProvider){
//     $routeProvider
//     .when("/", { 
//       templateUrl : "index.html"
//     })
//     .when("/topStories", {
//         templateUrl : "topStories.html"
//     })
// })
