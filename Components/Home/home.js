app.controller("Home", function($scope, $mdDialog, $window) {

$scope.urls = {
  bioURL: 'http://about.me/ushakov',
  angel: 'https://angel.co/ushakov',
  stack: 'https://stackshare.io/MishUshakov',
  vk: 'https://vk.com/mishushakov',
  yt: 'https://www.youtube.com/channel/UCVJLpLXf2GzpzMI7yzgi9aQ',
  soundcloud: 'https://soundcloud.com/ITMU',
  github: 'https://github.com/MishUshakov',
  codepen: 'https://codepen.io/MishUshakov',
  reddit: 'https://reddit.com/u/MishUshakov',
  store: 'https://mish.io/store'
}

$scope.skills = [{
  name: 'HTML, CSS',
  icon: 'web',
  color: '#ff8a80',
  description: 'i use it for websites and mobile apps, this website is using Angular by Google'
},
{
  name: 'Python',
  icon: 'code',
  color: '#448aff',
  description: 'i use it for scripting purposes and for backend development'
},
{
  name: 'JavaScript',
  icon: 'favorite',
  color: '#ffff8d',
  description: 'i use it for backend systems and many web apps, this web app is written in JS too!'
},
{
  name: 'Backend',
  icon: 'cloud',
  color: '#ff80ab',
  description: 'i love it'
},
{
  name: 'Web Apps',
  icon: 'apps',
  color: '#8c9eff',
  description: 'i can do it'
},
{
  name: 'React Native',
  icon: 'smartphone',
  color: '#009688',
  description: 'im creating large mobile applications that are using React Native as core'
}]

$scope.projects = [{
  name: 'MUlti',
  icon: 'M',
  color: '#1DE9B6',
  link: 'https://multi-c7c23.firebaseapp.com'
},
{
  name: 'Traffic Machine',
  icon: 'TM',
  color: '#3F51B5',
  link: 'https://vk.com/market?w=product294418586_584966'
},
{
  name: 'MUbot',
  icon: '4MU',
  color: '#2196F3',
  link: 'http://4pda.ru/forum/index.php?showtopic=693522'
}]

$scope.showAlert = function(data) {
   $mdDialog.show(
     $mdDialog.alert()
       .clickOutsideToClose(true)
       .title(data.name)
       .textContent(data.description)
       .ariaLabel('Alert Dialog Demo')
       .ok('Got it!')
   );
 };

 $scope.openlink = function(link) {
   $window.open(link, '_blank');
 }

 $scope.send = function() {
   let mail = 'mailto:i@mish.io?subject=' + $scope.subject + '&body=' + $scope.body;
   $window.open(mail);
 }

 $scope.scroll = function() {
   $window.scrollTo(0, 600);
 }

 $scope.where = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title("Where are my old Projects?")
        .textContent("Hello, dear visitor, this is my new website, so only the latest projects are displayed. I removed the old deprecated and offline Projects, but you have to wait little bit, there is still much place for new projects :)")
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
    );
  };

});
