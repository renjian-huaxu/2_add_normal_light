import Vector3 from "./Vector3";

export default class Vertex {

    __visible = true;

    constructor(position, normal) {
        this.position = position || new Vector3();
        this.normal = normal || new Vector3();
        this.screen = new Vector3();
    }

    toString() {
        return 'MTHREE.Vertex ( position: ' + this.position + ', normal: ' + this.normal + ' )';
    }
}