<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-typescript {
      background-color: #3178c6;
      color: white;
    }

    &-python {
      background-color: #ffd43b;
      color: #1f3b59;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-express {
      background-color: #202833;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-mcp {
      background-color: #00b7c7;
      color: #05272b;
    }

    &-cli {
      background-color: #2d2a24;
      color: white;
    }

    &-daemon {
      background-color: #5f5646;
      color: white;
    }

    &-json-schema {
      background-color: #14213d;
      color: white;
    }

    &-agent-skill {
      background-color: #34bfff;
      color: #001d2b;
    }

    &-markdown {
      background-color: #f5efe6;
      color: #2d2a24;
      border-color: #dfd1bc;
    }

    &-tampermonkey {
      background-color: #111827;
      color: white;
    }

    &-browser-script {
      background-color: #ff923e;
      color: #2d2a24;
    }

    &-svg {
      background-color: #ffb13b;
      color: #3a2200;
    }

    &-canvas {
      background-color: #5967d8;
      color: white;
    }

    &-java {
      background-color: #e76f00;
      color: white;
    }

    &-spring {
      background-color: #6db33f;
      color: #10210a;
    }

    &-ai {
      background-color: #34bfff;
      color: #001d2b;
    }

    &-fastapi {
      background-color: #009688;
      color: white;
    }

    &-sqlite {
      background-color: #0f80cc;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }
  }
}
</style>
