import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Projects } from '../../core/models/projects';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Message } from '../../core/models/message';

@Component({
  selector: 'app-single-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './single-page.html',
  styleUrl: './single-page.css',
})
export class SinglePage implements OnInit {

  // 1
  messageForm!: FormGroup;

  projectsData: Projects[] = [];

  constructor(private serv: DataService, private fb: FormBuilder
  ) {
    this.showData();
  }

  ngOnInit(): void {
    // 3
    this.createForm();
  }

  // 4
  get controls() {
    return this.messageForm.controls;
  }

  // 2
  createForm() {
    this.messageForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  //show data
  showData() {
    this.serv.get().subscribe((res: any) => {
      this.projectsData = res;
    });
  }

  submit(messageForm: any) {
    if (this.messageForm.invalid) return;
    this.serv.post(messageForm.value).subscribe((res: any) => {
      this.messageForm.reset();
    });
  }


}
