declare module 'react-360-web' {
  import * as THREE from 'three';

  type ShapeType = 'Cylinder' | 'Flat';

  // enum SurfaceShape { Cylinder, Flat }

  // React Native overrides
  export class Surface {
    protected _density: number;
    protected _height: number;
    protected _pitch: number;
    protected _radius: number;
    protected _shape: ShapeType;
    protected _width: number;
    protected _yaw: number;
    // Three.js properties
    protected _camera: THREE.Camera;
    protected _geometry: THREE.Geometry;
    protected _material: THREE.Material;
    protected _mesh: THREE.Mesh;
    protected _renderTarget: THREE.WebGLRenderTarget;
    protected _subScene: THREE.Scene;

    public constructor(width: number, height: number, shape: ShapeType)

    public setDensity(density: number): void;
    public setRadius(radius: number): void;
    public setShape(shape: ShapeType): void;
    public setAngle(yaw: number, pitch: number): void;
    public setOpacity(opacity: number): void;
    public setVisibility(visible: boolean): void;
    public getWidth(): number;
    public getHeight(): number;
    public getScene(): THREE.Scene;
    public getCamera(): THREE.Camera;
    public getRenderTarget(): THREE.WebGLRenderTarget;
    public getNode(): THREE.Object3D;
    public resize(width: number, height: number): void;

    protected _regenerateGeometry(): void;
    protected _recomputeOrientation(): void;

    static SurfaceShape: Record<ShapeType, ShapeType>;
    static createCylinderGeometry(
      width: number,
      height: number,
      density: number,
      radius: number,
    ): THREE.CylinderGeometry;
    static createFlatGeometry(
      width: number,
      height: number,
      density: number,
      radius: number,
    ): THREE.PlaneGeometry;
  }
}
