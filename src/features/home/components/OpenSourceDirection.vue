<script setup lang="ts">
import { computed } from "vue";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";

const directions = computed(() => {
  if (locale.value === "zh") {
    return [
      {
        title: "Agent 工具基础设施",
        body: "面向 MCP Server、CLI、Daemon 与 Skill 工作流，沉淀 Agent 可稳定调用的外部工具能力。",
      },
      {
        title: "本地优先 AI Agent",
        body: "关注本地运行时、动态记忆、Human-in-the-loop 安全确认和可部署的 Agent 产品形态。",
      },
      {
        title: "Web3 DID / ANP 协议实践",
        body: "探索身份、协议互操作和 Agent 网络场景下的工程落地方式。",
      },
    ];
  }

  return [
    {
      title: "Agent Tool Infrastructure",
      body: "Building external tool capabilities that agents can reliably call through MCP servers, CLIs, daemons, and skill workflows.",
    },
    {
      title: "Local-first AI Agents",
      body: "Focusing on local runtimes, dynamic memory, human-in-the-loop safety, and deployable agent product surfaces.",
    },
    {
      title: "Web3 DID / ANP Practice",
      body: "Exploring identity, protocol interoperability, and practical engineering paths for agent network scenarios.",
    },
  ];
});
</script>

<template>
  <section class="open-source-direction">
    <div class="grid">
      <div class="open-source-direction-heading">
        <p class="open-source-direction-eyebrow">{{ t("selected") }}</p>
        <h2 class="open-source-direction-title">{{ t("open-source-directions") }}</h2>
      </div>
      <p class="open-source-direction-copy">{{ t("open-source-directions-copy") }}</p>
    </div>
    <div class="grid open-source-direction-grid">
      <article v-for="direction in directions" :key="direction.title" class="open-source-direction-item">
        <h3 class="open-source-direction-item-title">{{ direction.title }}</h3>
        <p class="open-source-direction-item-body">{{ direction.body }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.open-source-direction {
  background-color: var(--color-dark-blue-500);
  color: var(--color-white-400);
  padding: 84px var(--space-outer);
  position: relative;
  overflow: hidden;

  @include mixins.mq("md") {
    padding-top: 112px;
    padding-bottom: 112px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(52, 191, 255, 0.16) 1px, transparent 1px),
      linear-gradient(90deg, rgba(52, 191, 255, 0.16) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
    pointer-events: none;
  }

  &-heading {
    grid-column: 1 / 13;
    position: relative;
    z-index: 1;

    @include mixins.mq("lg") {
      grid-column: 3 / 7;
    }
  }

  &-eyebrow {
    color: var(--color-cyan-400);
    font-family: "ProFontWindows";
    font-size: var(--font-size-md);
    margin-bottom: var(--space-xs);
  }

  &-title {
    font-size: var(--font-size-title-md);
    line-height: var(--line-height-title);
    font-weight: 900;

    @include mixins.mq("md") {
      font-size: var(--font-size-title-lg);
    }
  }

  &-copy {
    grid-column: 1 / 13;
    color: var(--color-text-cyan-300);
    line-height: var(--line-height-copy);
    position: relative;
    z-index: 1;

    @include mixins.mq("lg") {
      grid-column: 7 / 11;
      align-self: end;
    }
  }

  &-grid {
    margin-top: var(--space-xl);
    row-gap: var(--space-md);
    position: relative;
    z-index: 1;

    @include mixins.mq("md") {
      margin-top: var(--space-xxl);
    }
  }

  &-item {
    grid-column: 1 / 13;
    border: var(--stroke-sm) solid rgba(52, 191, 255, 0.45);
    background-color: rgba(0, 19, 65, 0.44);
    border-radius: var(--radius-md);
    padding: var(--space-lg);
    min-height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include mixins.mq("md") {
      grid-column: span 4;
    }

    &-title {
      font-size: var(--font-size-title-xs);
      line-height: var(--line-height-title);
      color: var(--color-text-cyan-400);
    }

    &-body {
      color: var(--color-text-cyan-300);
      line-height: var(--line-height-copy);
      margin-top: var(--space-md);
    }
  }
}
</style>
