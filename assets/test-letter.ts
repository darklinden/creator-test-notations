
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;
import Decimal from "./notations/break_infinity"
import { ScientificNotation } from "./notations/scientific";
import { default as bigInt } from 'big-integer';
import { LettersNotation } from './notations/letters';


@ccclass('testletter')
export class testletter extends Component {

    private d: bigInt.BigInteger = bigInt('1');

    private letter = new LettersNotation();

    private _label: Label = null;

    private inc: boolean = true;
    update(deltaTime: number) {

        this._label = this._label || this.getComponent(Label);

        if (this.inc) {
            let old = this.d;
            this.d = this.d.add(this.d);
            if (Decimal.fromString(this.d.toString()).isInfinity()) {
                this.inc = false;
                this.d = old;
            }
        }
        else {
            this.d = this.d.divide(2);
            if (this.d.equals(0)) {
                this.inc = true;
                this.d = bigInt(1)
            }
        }
        this._label.string = this.letter.format(Decimal.fromString(this.d.toString()), 0, 0);
    }
}