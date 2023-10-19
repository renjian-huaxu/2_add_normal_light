import Color from "./Color";
import Vector3 from "./Vector3";

export default class Face3 {

    constructor(a, b, c, normal, color) {
        this.a = a;
        this.b = b;
        this.c = c;

        this.normal = normal || new Vector3();
        this.screen = new Vector3();
    
        this.color = color || new Color( 0xff000000 );
    }

    toString() {
        return 'MTHREE.Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
    }
}