var app = angular.module("reddit", ['ngAnimate']);


app.filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  };
});

app.controller("things", function ($scope) {

  $scope.pushComment = function (post) {
    console.log($scope.commentAuthor);
    post.comments.push({
      author:$scope.commentAuthor,
      comment:$scope.commentText
    });
    $scope.commentAuthor="";
    $scope.commentText="";
  };


  $scope.posts=[{
    title:"hi",
    author:"Amanda",
    description:"yo",
    votes:0,
    image:'http://static.tumblr.com/43d3385d37d88fc004032e1cfa3a711d/ev6og57/aixnrg5sx/tumblr_static_5f6889o6y1440g0kw0ko40wsw.jpg',
    comments:[
      {author: 'acc',
      comment: 'piggy'
    }
  ]
}];



$scope.addcomment = function(isValid) {
  if (isValid) {
    $scope.posts.push(
      {
        title: $scope.title,
        author: $scope.author,
        description: $scope.description,
        date: new Date(),
        image: $scope.image,
        votes: 0,
        comments: []
      });
      console.log($scope.title);
      console.log(($scope.posts));
      $scope.title = '';
      $scope.author='';
      $scope.description='';
      $scope.image='';
    }
  };

  $scope.clicked=false;
  $scope.showform=function () {
    if($scope.clicked===false){
      $scope.clicked=true;
    }else{
      $scope.clicked=false;
    }
  };

  $scope.commentbox=false;
  $scope.showcomment=function () {
    if($scope.commentbox===false){
      $scope.commentbox=true;
    }else{
      $scope.commentbox=false;
    }
  };

  $scope.seecomments=false;
  console.log($scope);
  $scope.showseecomments=function () {
    console.log($scope);
    if($scope.seecomments===false){
      $scope.seecomments=true;
    }else{
      $scope.seecomments=false;
    }
  };


  //   $scope.posts = [
  //   {
  //     title: "Lets Go Swimming",
  //     image: "http://www.atlanticainc.net/assets/swimming-pool-night-lighting.jpg",
  //     author: "Amanda Carlton",
  //     description: "marco poolo",
  //     date: new Date(),
  //     comments:[],
  //     votes:0
  //   },
  //
  //   {
  //     title: "River Otters",
  //     image: "http://www.jamesriverassociation.org/img/river-otter.jpg",
  //     author: "Samantha Genduso",
  //     description: "OT OT OT TO TOT ",
  //     date: new Date(),
  //     comments:[],
  //     votes:0
  //   },
  //   {
  //     title: "Lunch Boxes",
  //     image:"https://s-media-cache-ak0.pinimg.com/236x/73/b9/c2/73b9c268163bf0af8e4609b6a3b92469.jpg",
  //     author: "Lisa Frank",
  //     description: "Aliens are from China",
  //     date: new Date(),
  //     comments:[],
  //     votes:0
  //   },
  // ];


  $scope.votecount = function (post) {
    post.votes++;
  };
  $scope.downvote= function (post) {
    post.votes--;
  };




});
