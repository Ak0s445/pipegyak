import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { EmpfilterPipe } from '../shared/pipe/empfilter.pipe';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, EmpfilterPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  empList = [
    {id: 1, name: "Erős Pityesz", city:"Borsod", salary: 50},
    {id: 2, name: "Papp Emese", city:"Nagyatád", salary: 100},
    {id: 3, name: "Nagy Elek", city:"Miskolc", salary: 120},
    {id: 4, name: "Lakatos Rafael", city:"Komárom", salary: 150},
    {id: 5, name: "Boss Béla", city:"Sarkad", salary: 600},
    {id: 6, name: "Armandó Raffael", city:"Rontód", salary: 800},
    {id: 7, name: "Váradi Tájszon", city:"Miskolc", salary: 12000},
    {id: 8, name: "Farkas Ferike", city:"Budapest Keleti pu.", salary: 350000}
  ]
  filteredCity = new FormControl('');
  filteredName = new FormControl('');
  filteredEmpList = this.empList;
  showFilters = false;

  toggleFilter(){
    this.showFilters = !this.showFilters
  }

  showAlert(){
    Swal.fire({
      title: 'Működik',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
    })
  }
}
