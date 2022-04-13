import $ from "jquery";
export class Skill {
  technologie = null
  rating = null
  category = null
  constructor(technologie, rating, category) {
    this.technologie = technologie
    this.rating = rating
    this.category = category
  }
}