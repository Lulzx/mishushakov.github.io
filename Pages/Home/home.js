app.controller("Home", function ($scope, $mdDialog, $window, $timeout, $mdToast) {

  $scope.loaded = true;

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
    store: 'https://mish.io/store',
    new: 'https://mish.io/new'
  }

  $scope.socials = [{
      link: $scope.urls.vk,
      icon: 'vk',
      color: '#45668e'
    },
    {
      link: $scope.urls.yt,
      icon: 'youtube',
      color: '#bb0000'
    },
    {
      link: $scope.urls.github,
      icon: 'github',
      color: '#000'
    },
    {
      link: $scope.urls.codepen,
      icon: 'codepen',
      color: '#191919'
    },
    {
      link: $scope.urls.angel,
      icon: 'angellist',
      color: '#3f81c7'
    },
    {
      link: $scope.urls.soundcloud,
      icon: 'soundcloud',
      color: '#ff7700'
    }
  ]

  $scope.skills = ['HTML', 'CSS', 'SASS', 'JS', 'Python', 'Node', 'Angular', 'React Native', 'Jquery', 'socket.io']

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
    }
  ]

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
  
  let toast = $mdToast.simple()
      .textContent('Check out our new Website')
      .action('GO')
      .highlightAction(true)
      .position('bottom');

    $mdToast.show(toast).then(function(response) {
      if (response == 'ok') {
        $scope.openlink($scope.urls.new)
      }
    })

});