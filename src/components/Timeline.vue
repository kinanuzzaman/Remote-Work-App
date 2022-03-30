<template>
  <div id="timeline-wrap">
    <div id="timeline"></div>

    <!-- This is the individual marker-->
    <div class="marker mfirst timeline-icon one">
      <p>1</p>
    </div>
    <!-- / marker -->

    <!-- This is the individual marker-->
    <div class="marker m2 timeline-icon two">
      <p>2</p>
    </div>
    <!-- / marker -->

    <!-- This is the individual marker-->
    <div class="marker m3 timeline-icon three">
      <p>3</p>
    </div>
    <!-- / marker -->
    <!-- This is the individual marker-->
    <div class="marker m4 timeline-icon four">
      <p>4</p>
    </div>
    <!-- / marker -->

    <!-- This is the individual marker-->
    <div class="marker mlast timeline-icon four">
      <p>5</p>
    </div>
    <!-- / marker -->
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TimeLine",
});
</script>
<style>
#timeline-wrap {
  margin: 20%% 20%;
  top: 100;
  position: relative;
}

#timeline {
  height: 4px;
  width: 100%;
  background-color: #008080;
  position: relative;
}

.marker {
  z-index: 1000;
  color: #fff;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  margin-left: -25px;
  background-color: #008080;
  border-radius: 50%;
}

.timeline-icon.one {
  background-color: #008080 !important;
}

.timeline-icon.two {
  background-color: #008080 !important;
}

.timeline-icon.three {
  background-color: #008080 !important;
}

.timeline-icon.four {
  background-color: #008080 !important;
}

.mfirst {
  top: -16px;
}

.m2 {
  top: -16px;
  left: 25%;
}

.m3 {
  top: -16px;
  left: 50%;
}

.m4 {
  top: -16px;
  left: 75%;
}
.mlast {
  top: -16px;
  left: 100%;
}
</style>
