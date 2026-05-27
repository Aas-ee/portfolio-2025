<script setup lang="ts">
import { ref } from "vue";
import Github from "./icons/Github.vue";
import Linkedin from "./icons/Linkedin.vue";
import Instagram from "./icons/Instagram.vue";
import Mail from "./icons/Mail.vue";
import X from "./icons/X.vue";
import Wechat from "./icons/Wechat.vue";
import Link from "./Link.vue";
import { t } from "../i18n/utils/translate";
import ButtonRound from "./ButtonRound.vue";
import wechatQr from "../assets/images/wechat-official-account.png";

import { social } from "../content/social";

const props = defineProps<{
  variant?: "theme" | "background";
}>();

const wechatOpen = ref(false);

// map icon names to components
const icons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  x: X,
  instagram: Instagram,
  wechat: Wechat,
} as const;

const getAriaLabel = (name: string) => `${t("go-to")} ${name.charAt(0).toUpperCase() + name.slice(1)}`;

const openWechat = () => {
  wechatOpen.value = true;
};

const closeWechat = () => {
  wechatOpen.value = false;
};
</script>

<template>
  <div class="social">
    <template v-for="item in social" :key="item.name">
      <ButtonRound
        v-if="item.name === 'wechat'"
        :aria-label="t('wechat-official-account')"
        :variant="props.variant ?? 'theme'"
        class="social-link social-link-button children-unclickable"
        data-cursor="circle-white"
        data-hoversound="hover"
        @click="openWechat"
      >
        <Wechat :aria-label="t('wechat-official-account')" />
      </ButtonRound>

      <Link
        v-else
        external
        :href="item.url"
        :aria-label="getAriaLabel(item.name)"
        class="social-link"
        data-cursor="circle-white"
      >
        <ButtonRound
          renderAs="div"
          :variant="props.variant ?? 'theme'"
          class="children-unclickable"
          data-hoversound="hover"
        >
          <component :is="icons[item.name]" :aria-label="getAriaLabel(item.name)" external />
        </ButtonRound>
      </Link>
    </template>
  </div>

  <Teleport to="body">
    <div v-if="wechatOpen" class="wechat-modal" @click="closeWechat">
      <div
        class="wechat-modal-panel"
        role="dialog"
        aria-modal="true"
        :aria-label="t('wechat-official-account')"
        @click.stop
      >
        <button class="wechat-modal-close" type="button" :aria-label="t('close')" @click="closeWechat">×</button>
        <img class="wechat-modal-image" :src="wechatQr" :alt="t('wechat-official-account')" />
        <div class="wechat-modal-copy">
          <h2>{{ t("wechat-official-account") }}</h2>
          <p>{{ t("wechat-official-account-copy") }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.social {
  display: flex;
  gap: var(--space-md);

  &-link-button {
    cursor: pointer;
  }
}

.wechat-modal {
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-index-preloader) + 10);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-outer);
  background-color: rgba(5, 10, 18, 0.72);
  backdrop-filter: blur(10px);

  &-panel {
    width: min(420px, calc(var(--svw) * 100 - var(--space-outer) * 2));
    position: relative;
    border-radius: var(--radius-lg);
    background-color: var(--color-background-400);
    color: var(--color-text-400);
    padding: var(--space-lg);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  }

  &-close {
    position: absolute;
    top: var(--space-sm);
    right: var(--space-sm);
    width: 36px;
    height: 36px;
    border: 0;
    border-radius: 50%;
    background-color: var(--color-black-400);
    color: var(--color-white-400);
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
  }

  &-image {
    width: 100%;
    display: block;
    border-radius: var(--radius-md);
    background-color: var(--color-white-400);
  }

  &-copy {
    margin-top: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    h2 {
      font-size: var(--font-size-title-xs);
      line-height: var(--line-height-title);
    }

    p {
      color: var(--color-text-300);
      line-height: var(--line-height-copy);
    }
  }
}
</style>
