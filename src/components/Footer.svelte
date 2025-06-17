<script lang="ts">
  import Counter from "./Counter.svelte";

  interface Props {
    baseURL: string;
  }

  const { baseURL }: Props = $props();
</script>

<footer>
  <my-container>
    <Counter />
    <section>
      <img src="{baseURL}/images/logo-light.svg" alt="logo" />
      <p>訂閱你我的甜蜜郵件</p>
      <input type="email" />
    </section>
    <div>
      <img src="{baseURL}/images/logotype-lg-dark.svg" alt="" />
      <img src="{baseURL}/images/sm-今天是個吃甜點的好日子.svg" alt="" />
      <p>07-1234-5678 sweetaste@email.com 800 高雄市新興區幸福路 520 號</p>
      <img src="{baseURL}/images/ic-line@.svg" alt="line" />
      <img src="{baseURL}/images/ic-facebook.svg" alt="facebook" />
      <p>© 2018 Sweetaste* All Rights Reserved</p>
    </div>
  </my-container>
</footer>

<style>
  section {
    background: var(--header-fg);
    color: var(--footer-bg);
  }
  img {
    width: 2.5rem;
  }
  div {
    background: var(--footer-bg);
  }
</style>
