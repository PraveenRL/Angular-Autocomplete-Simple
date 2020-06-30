import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public jsonData: any = [];

  constructor() {
    this.initializeJsonData();
  }

  private initializeJsonData() {
    return (this.jsonData = [
      {
        firstName: "Praveen",
        lastName: "RL"
      },
      {
        firstName: "Naveen",
        lastName: "Kumar"
      },
      {
        firstName: "Shathik",
        lastName: "Basha"
      },
      {
        firstName: "Asker",
        lastName: "Ali"
      },
      {
        firstName: "Arafath",
        lastName: "Ali"
      },
      {
        firstName: "Irshath",
        lastName: "Ali"
      },
    ]);
  }

  public filterJson(event: KeyboardEvent) {
    this.initializeJsonData();

    let value = (event.target as HTMLInputElement).value;
    if (value && value.trim() != "") {
      this.jsonData = this.jsonData.filter(item => {
        return (item.firstName.toLowerCase().indexOf(value.toLowerCase())> -1 );
      });
    }
  }
}
