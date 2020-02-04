<template>
  <div>
    <Scene @scene="onScene">
      <!-- <Camera @camera="onCamera"></Camera> -->
      <HemisphericLight diffuse="#FFFFFF"></HemisphericLight>
    </Scene>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
//import * as GUI from "babylonjs-gui";
import "babylonjs-loaders";

export default {
  name: "SecondBabylon",
  data: () => ({
    gui3DManager: null,
    anchorMesh: null,
    testBox: null,
    testButton: null,
    testMesh: null,
    vrHelper: null,
    publicPath: `${process.env.BASE_URL}`,
    meshPath: null
  }),
  mounted() {},
  methods: {
    onCamera(camera) {
      console.log("Camera:", camera);
    },
    testMethod(scene) {
      console.log("Scene:", scene);

      //Adding an Arc Rotate Camera
      var camera = new BABYLON.ArcRotateCamera(
        "Camera",
        0,
        0.8,
        100,
        BABYLON.Vector3.Zero(),
        scene
      );
      camera.attachControl(scene.getEngine().getRenderingCanvas(), false);

      this.testBox = new BABYLON.Mesh.CreateBox("b1", 1.0, scene);
      console.log("TestBox:", this.testBox);
      this.testBox.name = "test1";

      // The first parameter can be used to specify which mesh to import. Here we import all meshes
      console.log(this.publicPath);
      this.meshPath = this.publicPath + "skull.babylon";
      console.log(this.meshPath);

      BABYLON.SceneLoader.ImportMesh("", this.meshPath, "", scene, function(
        newMeshes
      ) {
        // Set the target of the camera to the first imported mesh
        camera.target = newMeshes[0];
      });

      // // add a 3d button
      // this.testButton = new GUI.MeshButton3D(this.testBox, "name");
      // // Now you can start adding controls to the GUI manager rootContainer
      // this.gui3DManager.addControl(this.testButton);
      // //  attach a control to a mesh or tranform node from your scene
      // this.testButton.linkToTransformNode(this.anchorMesh);
    },
    onScene(scene) {
      // this.vrHelper = scene.createDefaultVRExperience({
      //   createDeviceOrientationCamera: false
      // });
      // console.log("VR Helper:", this.vrHelper);

      // // create anchorMesh : https://www.babylonjs-playground.com/#2YZFA0#2
      // this.anchorMesh = new BABYLON.AbstractMesh("anchorMesh", scene); // new BABYLON.TransformNode("");
      // // create the 3D GUI manager
      // this.gui3DManager = new GUI.GUI3DManager(scene);

      this.testMethod(scene);
    }
  }
};
</script>

<style scoped>
</style>
