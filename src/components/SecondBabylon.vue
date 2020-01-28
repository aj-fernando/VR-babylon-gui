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

export default {
  /* eslint-disable */
  components: { BABYLON, Scene },
  name: "SecondBabylon",
  data: () => ({
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
      this.testButton = BABYLON.GUI.MeshButton3D(this.testBox, "name");
    },
    onScene(scene) {
      this.vrHelper = scene.createDefaultVRExperience({
        createDeviceOrientationCamera: false
      });
      /* eslint-disable */
      console.log(this.vrHelper);
      this.testMethod(scene);
    }
  }
};
</script>

<style scoped>
</style>
