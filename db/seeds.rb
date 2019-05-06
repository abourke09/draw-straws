# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.create!([
  { name: "Annie" },
  { name: "Grace" },
  { name: "Lindsay" },
  { name: "Lokesh" },
  { name: "Juan" },
  { name: "Greg" },
  { name: "Chris" }
])

Game.create!([
  { name: "AirBnB Room Assignments" },
  { name: "Pie Day Party" },
  { name: "House Chores" }
])

Option.create!([
  {
    description: "Master Bedroom",
    draw: 1,
    player_id: 1,
    game_id: 1
  },
  {
    description: "Guest Bedroom",
    draw: 2,
    player_id: 3,
    game_id: 1
  },
  {
    description: "Sofa Bed",
    draw: 3,
    player_id: 2,
    game_id: 1
  },
  {
    description: "Biggest piece of pie",
    player_id: 5,
    draw: 1,
    game_id: 2
  },
  {
    description: "Medium piece of pie",
    draw: 2,
    player_id: 6,
    game_id: 2
  },
  {
    description: "Small piece of pie",
    draw: 3,
    player_id: 4,
    game_id: 2
  },
  {
    description: "No pie at all!",
    draw: 4,
    player_id: 7,
    game_id: 2
  },
  {
    description: "Wash the dishes",
    draw: 2,
    player_id: 1,
    game_id: 3
  },
  {
    description: "Do the laundry",
    draw: 1,
    player_id: 4,
    game_id: 3
  }
])
