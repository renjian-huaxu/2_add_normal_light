import Vector3 from "./Vector3";

export default class Geometry {

    vertices = [];
	faces = [];
	uvs = [];

    constructor() {

    }

    computeNormals() {
		var v, f, vA, vB, vC, cb, ab;

		for ( v = 0; v < this.vertices.length; v++ ) {

			this.vertices[ v ].normal.set( 0, 0, 0 );

		}

		for ( f = 0; f < this.faces.length; f++ ) {

			vA = this.vertices[ this.faces[ f ].a ];
			vB = this.vertices[ this.faces[ f ].b ];
			vC = this.vertices[ this.faces[ f ].c ];

			cb = new Vector3();
			ab = new Vector3();

			cb.sub( vC.position, vB.position );
			ab.sub( vA.position, vB.position );
			cb.crossSelf( ab );

			if ( !cb.isZero() ) {

				cb.normalize();

			}

			this.faces[ f ].normal = cb;

		}

    }
}