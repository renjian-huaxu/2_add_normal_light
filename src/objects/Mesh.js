import Object3D from "./Object3D";

export default class Mesh extends Object3D {

    constructor(geometry, material) {
        super(material)

        this.geometry = geometry;

        this.flipSided = false;
        this.doubleSided = false;
    
        this.overdraw = false;
    }

}