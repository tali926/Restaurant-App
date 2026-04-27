import { NgIf } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentColor'
})
export class DepartmentColorPipe implements PipeTransform {

  transform(department: string | undefined): string {
    if (!department) {
      return 'black';
    }

switch (department.toUpperCase()) {
  case "STARTERS":
    return "#150533ffff"; 
  case "ITALIANO":
    return "#160228ff"; 
  case "SIDES":
    return "#06020cff"; 
  case "FISH":
    return "#f92c2cff"; 
  case "DRINKS":
    return "#990000"; 
  case "DESERTS":
    return "#660000"; 
  default:
    return "#330000"; 
}

  }
}



