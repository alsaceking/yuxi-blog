<script setup>
const catList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
</script>

<template>
  <div class="cat-wrapper cat--style">
    <!-- cat line -->
    <div class="cat-line">
      <div class="cat" v-for="cat in catList" :key="cat.id">
        <div class="heart"></div>
        <div class="cat-face"></div>
      </div>
    </div>
    <!-- blank -->
    <div class="blank"></div>
  </div>
</template>

<style scoped>
  .cat--style {
    --cat-color1: #B3B3B3;
    --cat-color2: #FCB47E;
    --cat-color3: #FCDAC9;
    --cat-color4: #5E5E5E;
  }
  .cat-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 95px;
    /* height: 20vh; */
    background-color: #dedede;
    border-radius: 5px;
    box-shadow: 3px 3px 10px #ddd,-3px -3px 10px #ddd;
  }
  .cat-line {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    height: 95px;
  }
  .blank {
    height: 55px;
    width: 100%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  }
  .cat {
    /* clip-path : path('M108.0690308,59.8454437c0.4884949-13.741478-2.944664-42.9283447-7.824295-54.7815857 c-1.2200699-3.8865795-6.1605606-6.1623039-9.497673-3.5111153l-0.0000381,0.000037 c-6.3918457,3.6962204-14.2641602,9.6724939-20.5303192,15.4488993 c-4.8372269-1.3831635-9.9633408-2.1468201-15.2732277-2.1468201c-5.2785492,0-10.375473,0.7548504-15.1875801,2.1225491 c-6.2619019-5.768858-14.1213436-11.7336245-20.5041962-15.4246283v-0.000037 c-3.3371105-2.6511884-8.2776012-0.3754642-9.4977121,3.5111153c-4.85532,11.7941914-8.277194,40.7445602-7.8300261,54.5699883 c-0.0044398,0.0956802-0.0100267,0.1913567-0.0136526,0.2870369l0.2430454,5.4813385 c0.1697876,1.2737579,0.4207506,2.5011978,0.7440834,3.685936l1.977181,5.090004 c0.6899538,1.3389511,1.4912009,2.6082687,2.3978572,3.8081818l3.6963687,4.0227356 c9.5384836,8.6259766,25.6744537,12.583519,43.9746323,12.583519c17.9594154,0,33.8327675-3.812767,43.4333-12.1077194 l3.8032913-3.9344177c1.011734-1.2689514,1.9023743-2.6184082,2.664917-4.0482635l2.0485916-5.0656586 c0.3773499-1.3129425,0.6619415-2.6806793,0.8482666-4.1044617L108.0690308,59.8454437z');
    background-color: #FCB47E; */
    /* #B3B3B3,#FCB47E,#FCDAC9 #5E5E5E */
    /* position: absolute; */
    /* bottom: 30px; */
    /* left: 150px; */
    width: 110px;
    height: 95px;
    display: flex;
    justify-content: center;
    transform: translateY(-30px);
    transition: all .5s;
    animation : rise 10s linear infinite;
    /* animation-direction: reverse; */
  }
  .cat + .cat {
    margin-left: 30px;
  }
  .cat:hover {
    animation : swing 2s linear 0s infinite;
    animation-fill-mode: forwards;
  }
  .cat:nth-child(2):hover , .cat:nth-child(3):hover,.cat:nth-child(4):hover {
    animation-delay: 0s;
  }
  .cat:nth-child(2) {
    animation-delay: 2.4s;
  }
  .cat:nth-child(2)::before {
    background-color: var(--cat-color2);
  }
  .cat:nth-child(3) {
    animation-delay: 3.6s;
  }
  .cat:nth-child(3)::before {
    background-color: var(--cat-color3);
  }
  .cat:nth-child(4) {
    animation-delay: .8s;
  }
  .cat:nth-child(4)::before {
    background-color: var(--cat-color4);
  }
  .cat::before {
    content: '';
    position: absolute;
    width: 110px;
    height: 95px;
    clip-path : path('M108.0690308,59.8454437c0.4884949-13.741478-2.944664-42.9283447-7.824295-54.7815857 c-1.2200699-3.8865795-6.1605606-6.1623039-9.497673-3.5111153l-0.0000381,0.000037 c-6.3918457,3.6962204-14.2641602,9.6724939-20.5303192,15.4488993 c-4.8372269-1.3831635-9.9633408-2.1468201-15.2732277-2.1468201c-5.2785492,0-10.375473,0.7548504-15.1875801,2.1225491 c-6.2619019-5.768858-14.1213436-11.7336245-20.5041962-15.4246283v-0.000037 c-3.3371105-2.6511884-8.2776012-0.3754642-9.4977121,3.5111153c-4.85532,11.7941914-8.277194,40.7445602-7.8300261,54.5699883 c-0.0044398,0.0956802-0.0100267,0.1913567-0.0136526,0.2870369l0.2430454,5.4813385 c0.1697876,1.2737579,0.4207506,2.5011978,0.7440834,3.685936l1.977181,5.090004 c0.6899538,1.3389511,1.4912009,2.6082687,2.3978572,3.8081818l3.6963687,4.0227356 c9.5384836,8.6259766,25.6744537,12.583519,43.9746323,12.583519c17.9594154,0,33.8327675-3.812767,43.4333-12.1077194 l3.8032913-3.9344177c1.011734-1.2689514,1.9023743-2.6184082,2.664917-4.0482635l2.0485916-5.0656586 c0.3773499-1.3129425,0.6619415-2.6806793,0.8482666-4.1044617L108.0690308,59.8454437z');
    background-color: var(--cat-color1);
  }
  .cat-face {
    position: absolute;
    top: 55px;
    width: 12px;
    height: 8px;
    background-color: #1c1b1a;
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
  }
  .cat-face::before , .cat-face::after{
    position: absolute;
    content: '';
    top: -15px;
    height: 12px;
    width: 10px;
    border-radius: 50%;
    transform: scaleY(-1);
    background-color: #1c1b1a;
    animation : eye 5s linear infinite ;
  }
  .cat:nth-child(2) .cat-face::before, .cat:nth-child(2) .cat-face::after {
    animation-delay: 1s;
  }
  .cat:nth-child(3) .cat-face::before, .cat:nth-child(3) .cat-face::after {
    animation-delay: .2s;
  }
  .cat:nth-child(4) .cat-face::before, .cat:nth-child(4) .cat-face::after {
    animation-delay: 1.6s;
  }
  .cat-face::before {
    left: -23px;
  }
  .cat-face::after {
    right: -24px;
  }
  .cat .heart {
    position: absolute;
    top: -30px;
    left: 23px;
    opacity: 0;
    height: 24px;
    width: 24px;
    font-size: 32px;
    background-color: rgb(252, 126, 126);
    clip-path: path('M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
    transition: all 2s;
  }
  .cat:hover .heart {
    opacity: 1;
    animation : heart 3s linear infinite;
    animation-fill-mode: forwards;
    /* animation-direction: alternate; */
  }
  .cat:hover .cat-face::before , .cat:hover .cat-face::after {
    width: 14px;
    height: 6px;
    border-radius: 150px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 2px solid #1c1b1a;
    border-top-color: transparent;
    background-color: transparent;
    animation: none;
  }
@media (max-width: 680px) {
  .cat:nth-child(2) {
    margin-right: 55px;
  }
  .cat + .cat {
    margin-left: 0px;
  }
  .cat:nth-child(3), .cat:nth-child(1)  {
    display: none;
  }
}
@keyframes heart{
  0% {
    top: -30px;
    left: 23px;
  }
  25% {
    top: -35px;
    left: 32px;
  }
  50% {
    top: -42px;
    left: 28px;
  }
  70% {
    top: -36px;
    left: 26px;
  }
  100%{
    top: -30px;
    left: 23px;
  }
}
@keyframes rise{
  0%, 100% {
    /* bottom: 30px; */
    transform: translateY(-30px);
  }
  20% {
    /* bottom: 30px; */
    transform: translateY(-30px);
  }
  22% {
    /* bottom: 0px; */
    transform: translateY(0px);
  }
  45% {
    /* bottom: 0px; */
    transform: translateY(0px);
  }
  47% {
    /* bottom: 30px; */
    transform: translateY(-30px);
  }
  60% {
    /* bottom: 30px; */
    transform: translateY(-30px);
  }
  62% {
    /* bottom: 0px; */
    transform: translateY(0px);
  }
  95% {
    /* bottom: 0px; */
    transform: translateY(0px);
  }
  97% {
    /* bottom: 30px; */
    transform: translateY(-30px);
  }
}
@keyframes swing{
  0%{
    transform: rotate(0deg) translateY(-30px);
  }
  15%{
    transform: rotate(6deg) translateY(-30px);
  }
  25% {
    transform: rotate(6deg) translateY(-30px);
  }
  50% {
    transform: rotate(-5deg) translateY(-30px);
  }
  60% {
    transform: rotate(-5deg) translateY(-30px);
  }
  90% {
    transform: rotate(6deg) translateY(-30px);
  }
  100%{
    transform: rotate(0deg) translateY(-30px);
  }
}
@keyframes eye {
  0%{
    height: 10px;
    width: 12px;
    border-radius: 50%;
    bottom: 0px;
  }
  30%{
    height: 10px;
    width: 12px;
    border-radius: 50%;
  }
  32%{
      height: 2px;
      width: 16px;
      border-radius: 5px;
  }
  38%{
      height: 2px;
      width: 16px;
      border-radius: 5px;
  }
  40%{
    height: 10px;
    width: 12px;
    border-radius: 50%;
  }
  70%{
    height: 10px;
    width: 12px;
    border-radius: 50%;
  }
  72%{
      height: 2px;
      width: 16px;
      border-radius: 5px;
  }
  74%{
    height: 10px;
    width: 12px;
    border-radius: 50%;
  }
  76%{
      height: 2px;
      width: 16px;
      border-radius: 5px;
  }
  78%{
    height: 10px;
    width: 12px;
    border-radius: 50%;
  }
  100%{
    height: 10px;
    width: 12px;
    border-radius: 50%;
  }
}
</style>