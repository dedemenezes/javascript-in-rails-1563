import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="datepicker"
export default class extends Controller {
  connect() {
    // this.element Returns the element that contains the DATA-CONTROLLER attribute
    // console.log(this.element)
    flatpickr(this.element, {});
  }
}
