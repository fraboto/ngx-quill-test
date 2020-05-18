import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "pruebaQuill";
  public editor: any;
  editorForm: FormGroup;

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null),
    });
  }

  submit() {
    console.log(this.editorForm.get("editor").value);
  }
}
