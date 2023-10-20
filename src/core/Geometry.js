import Vector3 from "./Vector3";

export default class Geometry {

    vertices = [];
	faces = [];
	uvs = [];

    constructor() {

    }

    computeNormals() {
		
		this.vertices.forEach(vertex => {
			vertex.normal.set( 0, 0, 0 )
		})

		this.faces.forEach(face => {
			const vA = this.vertices[ face.a ];
			const vB = this.vertices[ face.b ];
			const vC = this.vertices[ face.c ];

			const cb = new Vector3();
			const ab = new Vector3();

			cb.sub( vC.position, vB.position );
			ab.sub( vA.position, vB.position );
			cb.crossSelf( ab );

			if ( !cb.isZero() ) {

				cb.normalize();

			}

			face.normal = cb;
		});

    }
}