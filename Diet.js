var initialWeight = 6000; // Current Weight
var targetWeight = 5000; // Target
var days = 0; // Days for target

while (initialWeight > targetWeight) {
  initialWeight -= (initialWeight * 0.05);
  days++;
}