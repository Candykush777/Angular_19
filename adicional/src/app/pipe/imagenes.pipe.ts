import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../model/post';

@Pipe({
  name: 'imagenes',
  standalone: false,
})
export class ImagenesPipe implements PipeTransform {
  transform(value: string[], ...args: number[]): string {
    if (value.includes('french')) {
      return 'https://frenchmoments.eu/wp-content/uploads/2016/06/Paris-France-%C2%A9-French-Moments.jpg';
    } else if (value.includes('fiction')) {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTgiyI-TDbLpcJPGK0GWLFgSbZ_BIEeRRhQ&s';
    } else if (value.includes('history')) {
      return 'https://img.freepik.com/premium-vector/history-textbook-symbols-icons-school-board_53500-1897.jpg?semt=ais_hybrid';
    } else if (value.includes('english')) {
      return 'https://t3.ftcdn.net/jpg/01/96/96/64/360_F_196966424_ZSgCNTeoew0jI5ztTR0KQS9LUTQCs2ZI.jpg';
    }

    return 'https://elpais.com/';
  }
}
