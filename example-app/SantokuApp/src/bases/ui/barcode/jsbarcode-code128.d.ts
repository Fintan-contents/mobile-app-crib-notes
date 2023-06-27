declare module 'jsbarcode/src/barcodes/CODE128/CODE128' {
  import {Code128Options} from 'jsbarcode';
  import {Barcode} from 'jsbarcode/src/barcodes/Barcode';
  class CODE128 extends Barcode {
    constructor(value: string, options?: Code128Options): this;
    valid(): boolean;
    encode(): {text?: string; data: string};
    shouldEncodeAsEan128(): boolean;
    static getBar(index: number): string;
    static correctIndex(bytes: number[], set: number): number;
    static next(bytes: number[], pos: number, set: number): {result: string; checksum: number};
  }
  export default CODE128;
}

declare module 'jsbarcode/src/barcodes/CODE128/CODE128_AUTO' {
  import CODE128 from 'jsbarcode/src/barcodes/CODE128/CODE128';
  class CODE128AUTO extends CODE128 {}
  export default CODE128AUTO;
}
