<template>
  <div class="header-eli-container">
    <video
      autoplay
      loop
      muted
      playsinline
      src="~/assets/eli_header_video.mp4"
    ></video>
  </div>
</template>
<style lang="scss" scoped>
.header-eli-container {
  width: 100%;
  height: 100%;
  // height: 1080px;
  // background: gray;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
