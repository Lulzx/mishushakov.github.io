app.controller("Home", function($scope, $mdDialog, $window, $timeout, $mdToast) {

$scope.loaded = false;

$scope.load = () => {
  $timeout(() => {
    $scope.loaded = true;

  }, 1000);
}

$scope.load();

$scope.announce = {
  title: 'TAP2',
  source: '../../Static/Images/Announce/latest.png'
}

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

$scope.socials = [
  {
    link: $scope.urls.vk,
    icon: 'vk'
  },
  {
    link: $scope.urls.yt,
    icon: 'youtube'
  },
  {
    link: $scope.urls.github,
    icon: 'github'
  },
  {
    link: $scope.urls.codepen,
    icon: 'codepen'
  },
  {
    link: $scope.urls.angel,
    icon: 'angellist'
  },
  {
    link: $scope.urls.soundcloud,
    icon: 'soundcloud'
  }
]

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
  color: '#f1c40f',
  description: 'i use it for backend systems and many web apps, this web app is written in JS too!'
},
{
  name: 'Backend',
  icon: 'cloud',
  color: '#ff80ab',
  description: 'i have large experience in RESTful development'
},
{
  name: 'Web Apps',
  icon: 'apps',
  color: '#8c9eff',
  description: 'im using Angular and Angular 2 to create progressive Web Apps, this website is a Web App too!'
},
{
  name: 'React Native',
  icon: 'smartphone',
  color: '#009688',
  description: 'im creating mobile applications that are using React Native as core'
}]

$scope.projects = [{
  name: 'MUlti',
  icon: 'M',
  color: '#2ecc71',
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

$scope.showAlert = data => {
   $mdDialog.show(
     $mdDialog.alert()
       .clickOutsideToClose(true)
       .title(data.name)
       .textContent(data.description)
       .ariaLabel('Alert Dialog Demo')
       .ok('Got it!')
   );
 };

 $scope.openlink = link => {
   $window.open(link, '_blank');
 }

 $scope.send = () => {
   let mail = `mailto:i@mish.io?subject=${$scope.subject}&body=${$scope.body}`;
   $window.open(mail);
 }

 $scope.scroll = () => {
   $window.scrollTo(0, 600);
 }

 $scope.where = () => {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title("Where are my old Projects?")
        .textContent("Hello, dear visitor, this is my new website, so only the latest projects are displayed. I removed the old deprecated and offline Projects, but you have to wait little bit, there is still much place for new projects :)")
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
    );
  }


});
