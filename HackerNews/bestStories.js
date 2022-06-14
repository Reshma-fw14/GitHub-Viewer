let bestcount=1;
app.controller('bestStoriesCtrl', function ($scope, $http) {
    // console.log(data)
    let array=[]
    function getData(arr){
        // console.log("arr",arr)
        $http.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty')
        .then(function(response) {
        //   console.log(response.data)
            return response.data;
        })
        .then((data) => {
            let result=arr.map((id) => {
                return $http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?`)
                .then(function(response){
                  $scope.fetchData=response.data;
                // console.log("data:",$scope.fetchData)
                array.push($scope.fetchData);
                $scope.data=array;
                $scope.id=id;
                // console.log("array:",$scope.data);

                $scope.handleClick=function(id){
                  // console.log('id',id)
                  localStorage.setItem('id:', id)
                }
                });
            });
        });
    }
    
    async function getDataaa(l,h){
      try{
        //   console.log(l,h)
          let data =await fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
          const x = await data.json();
          getData(x.slice(l,x.length<h?x.length:h))
        }catch(e){
          console.log(e)
        }
      }
      getDataaa(0,50)
      window.addEventListener('scroll', ()=>{
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
          getDataaa(60,100)
          }
      })
});