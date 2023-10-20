
export default class Scene {

    objects = [];
    lights = [];

    constructor() {

    }

    addObject(object) {
        this.objects.push(object);
    }

    removeObject(object) {

        this.objects.forEach((o, index) => {
            if (object == o) {

                this.objects.splice(index, 1);
                return;

            }
        })
    }

    addLight(light) {
        this.lights.push(light);
    }

    removeLight(light) {
        this.lights.forEach((l, index) => {
            if (light == l) {

                this.lights.splice(index, 1);
                return;

            }
        })
    }

    add(object) {
        this.addObject(object);
    }

    toString() {
        return 'MTHREE.Scene ( ' + this.objects + ' )';
    }
}