<template>
  <div>
    <Scene @scene="onScene">
      <Camera @camera="onCamera"></Camera>
      <HemisphericLight diffuse="#FFFFFF"></HemisphericLight>
    </Scene>
  </div>
</template>

<script>
import { BABYLON, Scene } from "vue-babylonjs";
import * as GUI from "babylonjs-gui";

export default {
  /* eslint-disable */
  components: { BABYLON, Scene },
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
    onCamera(camera) {},
    testMethod(scene) {
      console.log(scene);
      this.testBox = BABYLON.Mesh.CreateBox("b1", 1.0, scene);
      this.testBox.name = "test1";
      this.testButton = GUI.MeshButton3D(this.testBox, "name");
    },
    onScene(scene) {
      this.vrHelper = scene.createDefaultVRExperience({
        createDeviceOrientationCamera: false
      });
      /* eslint-disable */
      console.log(this.vrHelper);

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
