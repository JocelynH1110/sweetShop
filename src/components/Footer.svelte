<script lang="ts">
  import Counter from "./Counter.svelte";

  interface Props {
    baseURL: string;
  }

  const { baseURL }: Props = $props();
</script>

<footer>
  <section>
    <img class="label" src="{baseURL}/images/logo-light.svg" alt="logo" />
    <p>訂閱你我的甜蜜郵件</p>
    <div class="input-container">
      <img class="email-icon" src="{baseURL}/images/mail-24px.png" alt="mail" />
      <input type="email" class="email-input" />
      <button class="submit-btn">➔</button>
    </div>
  </section>
  <my-container>
    <div class="box">
      <img class="icon" src="{baseURL}/images/logotype-lg-dark.svg" alt="" />
      <img
        class="slang"
        src="{baseURL}/images/sm-今天是個吃甜點的好日子.svg"
        alt=""
      />
      <div class="contact">
        <p>07-1234-5678</p>
        <p>sweetaste@email.com</p>
        <p>800 高雄市新興區幸福路 520 號</p>
      </div>
      <div class="social">
        <img src="{baseURL}/images/ic-line@.svg" alt="line" />
        <img src="{baseURL}/images/ic-facebook.svg" alt="facebook" />
      </div>
      <p class="copyright">© 2018 Sweetaste* All Rights Reserved</p>
    </div>
  </my-container>
</footer>

<style>
  footer {
    background: var(--footer-bg);
  }
  section {
    background: var(--footer-fg);
    color: var(--footer-bg);
    display: grid;
    grid-template-columns: auto 0.5fr 1fr;
    .label {
      margin-left: 7.625rem;
      margin-right: 1.25rem;
      align-self: center;
    }
    p {
      align-self: center;
      font-size: 1.5rem;
    }
    .input-container {
      display: flex;
      grid-template-columns: 40px 1fr 3.5rem; /*icon input button*/
      width: 23.75rem;
      height: 3.5rem;
      margin: 1.875rem 0;
      overflow: hidden;
      position: relative;
    }
    .email-icon {
      position: bottom;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      width: 20px;
    }
    .email-input {
      width: 100%;
      border: none;
      font-size: 1rem;
      font-family: inherit;
    }
    .submit-btn {
      background: #ffe180;
      border: none;
      width: 4rem;
      font-size: 1.5rem;
      color: #3f5d45;
      cursor: pointer;
      font-family: inherit;
    }
  }
  img {
    width: 2.5rem;
  }
  .box {
    margin: 1.875rem 7.625rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--footer-fg);
    align-content: end;
  }
  .icon {
    width: 10.7rem;
    margin-bottom: 7.25rem;
  }
  .contact {
    align-self: end;
    p {
      margin: 0;
      font-size: 1rem;
    }
  }
  .slang {
    grid-row: span 2;
    justify-self: end;
    width: 3.7rem;
  }
  .social {
    margin-top: 1.875rem;
    justify-self: start;
    img {
      width: 2rem;
    }
  }
  .copyright {
    justify-self: end;
    align-self: end;
    margin: 0;
  }
</style>
