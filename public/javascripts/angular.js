var app = angular.module("reddit", []);

app.controller("Post", function ($scope) {
  $scope.posts=[];

  $scope.addcomment = function() {
  $scope.posts.push({title:$scope.title, author:$scope.author, description:$scope.description, date:new Date(), image:$scope.image, votes:0, comments:[]});
   console.log($scope.title);
   console.log(($scope.posts));
  $scope.title = '';
  $scope.author='';
  $scope.description='';
  $scope.image='';
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
