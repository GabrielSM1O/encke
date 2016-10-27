angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.inicio', {
    url: '/inicio',
    views: {
      'tab1': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('tabsController.contacto', {
    url: '/contacto',
    views: {
      'tab2': {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl'
      }
    }
  })

  .state('tabsController.ubicacion', {
    url: '/ubicacion',
    views: {
      'tab3': {
        templateUrl: 'templates/ubicacion.html',
        controller: 'ubicacionCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.codigoQR', {
    url: '/QR',
    views: {
      'tab4': {
        templateUrl: 'templates/codigoQR.html',
        controller: 'codigoQRCtrl'
      }
    }
  })



        .state('tabsController2.proyectos', {
    url: '/proyectos',
    views: {
      'tab1': {
        templateUrl: 'templates/proyectos.html',
        controller: 'proyectosCtrl'
      }
    }
  })

  .state('tabsController2.chat', {
    url: '/chat',
    views: {
      'tab2': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController2.pagos', {
    url: '/pagos',
    views: {
      'tab3': {
        templateUrl: 'templates/pagos.html',
        controller: 'pagosCtrl'
      }
    }
  })

  .state('tabsController2', {
    url: '/pagina1',
    templateUrl: 'templates/tabsController2.html',
    abstract:true
  })

  .state('tabsController2.settings', {
    url: '/setting',
    views: {
      'tab4': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController2.proyecto1', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/proyecto1.html',
        controller: 'proyecto1Ctrl'
      }
    }
  })

  .state('tabsController2.editar', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/editar.html',
        controller: 'editarCtrl'
      }
    }
  })



//$urlRouterProvider.otherwise('/pagina1/proyectos')


  


$urlRouterProvider.otherwise('/tabs1/inicio')








});




