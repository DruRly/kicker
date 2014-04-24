var kicker = angular.module("kicker", ['rzModule'])

function KickerController($scope) {
  $scope.frequency = 200;

  $scope.$watch('frequency', function(){
    $scope.setFrequency();
  });

  $scope.setFrequency = function() {
    Audio.getInstance().frequency.value = $scope.frequency;
  }
};

var Audio = (function () {

  var instance;

  function createInstance() {
    var context = new webkitAudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = 0;
    oscillator.frequency = 0;
    oscillator.connect(context.destination);
    oscillator.noteOn(0);
    return oscillator;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();
