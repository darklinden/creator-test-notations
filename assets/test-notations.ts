
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;
import Decimal from "./notations/break_infinity"
import { ScientificNotation } from "./notations/scientific";


@ccclass('test_notations')
export class test_notations extends Component {

    private d: Decimal = new Decimal(9999999999999999999999);

    private scientific = new ScientificNotation();

    private _label: Label = null;

    update(deltaTime: number) {

        this._label = this._label || this.getComponent(Label);

        this.d = this.d.add(1);
        this._label.string = this.scientific.format(this.d, 0, 0);
    }
}