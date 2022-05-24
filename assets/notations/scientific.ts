import type Decimal from "./break_infinity";
import { Notation } from "./notation";
import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

export class ScientificNotation extends Notation {
  public get name(): string {
    return "Scientific";
  }

  public get canHandleNegativePlaces(): boolean {
    return true;
  }

  public formatDecimal(value: Decimal, places: number): string {
    return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
    10, 1, false)(value, places);
  }
}
