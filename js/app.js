class CalorieTracker {
  constructor() {
    this._calorieLimit = 2200;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesTotal();
    this._displayCaloriesLimit();
    this._displayCaloriesConsumed();
  }

  // public methods/api
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;

    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;

    this._render();
  }

  // private methods
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById("calories-total");
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const calorieLimitEl = document.getElementById("calories-limit");
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById("calories-consumed");
    const consumed = this._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );

    caloriesConsumedEl.innerHTML = consumed;
  }

  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker();

const breakfast = new Meal("Breakfast", 400);
const lunch = new Meal("Lunch", 350);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);

const run = new Workout("Morning Run", 300);
tracker.addWorkout(run);
