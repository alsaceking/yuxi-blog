<script setup></script>

<template>
  <div>
    <input id="checkbox" type="checkbox" />
    <label class="switch" for="checkbox">Meteor</label>
  </div>
</template>

<style scoped lang="less">
#checkbox {
  display: none;
}

.switch {
  position: relative;
  width: 90px;
  height: 90px;
  background-color: rgb(99, 99, 99);
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 0.9em;
  font-weight: 700;
  color: rgb(37, 37, 37);
  border: 2px solid rgb(126, 126, 126);
  box-shadow: 0px 0px 3px rgb(2, 2, 2) inset;
}

.svg {
  position: relative;
  width: 30%;
  height: 30%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg path {
  fill: rgb(37, 37, 37);
}

#checkbox:checked + .switch .svg {
  filter: drop-shadow(0px 0px 3px rgb(222, 151, 255));
}

#checkbox:checked + .switch .svg path {
  fill: rgb(255, 255, 255);
}

#checkbox:checked + .switch {
  box-shadow: 0px 0px 1px rgb(222, 151, 255) inset,
    0px 0px 2px rgb(222, 151, 255) inset, 0px 0px 10px rgb(222, 151, 255) inset,
    0px 0px 40px rgb(222, 151, 255), 0px 0px 100px rgb(222, 151, 255),
    0px 0px 5px rgb(222, 151, 255);
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(152, 107, 172);
  color: rgb(255, 255, 255);
}
</style>
