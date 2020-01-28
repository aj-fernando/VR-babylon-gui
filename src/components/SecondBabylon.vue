<template>
  <div>
    <Scene @scene="onScene">
      <Camera @camera="onCamera"></Camera>
      <HemisphericLight diffuse="#FFFFFF"></HemisphericLight>
    </Scene>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import * as GUI from "babylonjs-gui";

export default {
  name: "SecondBabylon",
  data: () => ({
    gui3DManager: null,
    anchorMesh: null,
    testBox: null,
    testButton: null,
    vrHelper: null
  }),
  mounted() {},
  methods: {
    onCamera(camera) {
      console.log("Camera:", camera);
    },
    testMethod(scene) {
      console.log("Scene:", scene);
      this.testBox = new BABYLON.Mesh.CreateBox("b1", 1.0, scene);
      console.log("TestBox:", this.testBox);
      this.testBox.name = "test1";

      // add a 3d button
      this.testButton = new GUI.MeshButton3D(this.testBox, "name");
      // Now you can start adding controls to the GUI manager rootContainer
      this.gui3DManager.addControl(this.testButton);
      //  attach a control to a mesh or tranform node from your scene
      this.testButton.linkToTransformNode(this.anchorMesh);
    },
    onScene(scene) {
      this.vrHelper = scene.createDefaultVRExperience({
        createDeviceOrientationCamera: false
      });
      console.log("VR Helper:", this.vrHelper);

      // create anchorMesh : https://www.babylonjs-playground.com/#2YZFA0#2
      this.anchorMesh = new BABYLON.AbstractMesh("anchorMesh", scene); // new BABYLON.TransformNode("");
      // create the 3D GUI manager
      this.gui3DManager = new GUI.GUI3DManager(scene);

      this.testMethod(scene);
    }
  }
};
</script>

<style scoped>
</style>
