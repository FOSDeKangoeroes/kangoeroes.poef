import { Leiding } from './leiding.model';
import { Drank } from './drank.model';

export class CartItem {
    leader: Leiding;
    drink: Drank;
    quantity: number;
}
