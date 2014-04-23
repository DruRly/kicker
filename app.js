function KickerController($scope) {
  $scope.colors = [
    {name:100, value: 100},
    {name:1000, value: 1000},
    {name:5000, value: 5000},
    {name:15000, value: 15000},
    {name:20000, value: 20000}
  ];

  $scope.setFrequency = function() {
    var context = new webkitAudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = 0;
    console.log($scope.frequency.value);
    oscillator.frequency.value = $scope.frequency.value;
    oscillator.connect(context.destination);
    oscillator.noteOn(0);
  }
}
