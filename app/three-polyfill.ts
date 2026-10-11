'use client';

// Comprehensive compatibility polyfill for Three.js across globe.gl dependencies
if (typeof window !== 'undefined') {
  // 1. Polyfill matrixWorld.determinantAffine
  if (!('determinantAffine' in Object.prototype)) {
    Object.defineProperty(Object.prototype, 'determinantAffine', {
      value: function () {
        const te = (this as any).elements || this;
        if (!te || typeof te[0] !== 'number' || te.length < 11) {
          if (typeof (this as any).determinant === 'function') {
            return (this as any).determinant();
          }
          return 1;
        }
        const n11 = te[0], n12 = te[4], n13 = te[8];
        const n21 = te[1], n22 = te[5], n23 = te[9];
        const n31 = te[2], n32 = te[6], n33 = te[10];

        return (
          n11 * (n22 * n33 - n23 * n32) -
          n12 * (n21 * n33 - n23 * n31) +
          n13 * (n21 * n32 - n22 * n31)
        );
      },
      configurable: true,
      writable: true,
    });
  }

  // 2. Polyfill object.intersectsFrustum
  if (!('intersectsFrustum' in Object.prototype)) {
    Object.defineProperty(Object.prototype, 'intersectsFrustum', {
      value: function (frustum: any) {
        if (!(this as any).frustumCulled) return true;
        if (frustum && typeof frustum.intersectsObject === 'function') {
          try {
            return frustum.intersectsObject(this);
          } catch {
            return true;
          }
        }
        return true;
      },
      configurable: true,
      writable: true,
    });
  }
}
