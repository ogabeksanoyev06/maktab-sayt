<template>
    <div
      ref="dropdown"
      class="relative"
      data-dropdown="0"
      tabindex="0"
    >
      <div :class="headClass" @click="toggleShow">
        <slot name="head"></slot>
      </div>
      <transition name="dropdown" mode="out-in">
        <div
          v-show="showBody"
          :class="[bodyClass, fullWidth ? 'fixed left-0 right-0' : 'absolute right-0 w-max min-w-full translate-y-full -bottom-1 shadow-lg rounded-xl']"
          :style="fullWidth ? { top: headerHeight } : {}"
          data-dropdown-body
          class="overflow-hidden z-[11]"
        >
          <slot name="body" />
        </div>
      </transition>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core'
  import { useTemplateRef } from 'vue'
  import { useWindowScroll } from '@vueuse/core'
  const { y } = useWindowScroll()
  watch(y, (newVal) => {
    if (showBody.value) {
      close()
    }
  })

  const dropdown = useTemplateRef<HTMLElement>('dropdown')
  onClickOutside(dropdown, () => {
    close()
  })

  interface Props {
    headClass?: string
    bodyClass?: string
    show?: boolean | undefined
    withTrigger?: boolean
    fullWidth?: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    show: undefined,
    headClass: '',
    bodyClass: '',
    fullWidth: false,
  })
  
  interface Emits {
    (e: 'toggle', v: boolean): void
  }
  const emit = defineEmits<Emits>()
  
  const showBody = ref(props.show ?? false)
  const headerHeight = computed(() => y.value > 100 ? '72px' : '100px')
  
  function toggleShow() {
    if (!props.withTrigger) {
      if (props.show === undefined) {
        showBody.value = !showBody.value
      } else {
        emit('toggle', !props.show)
      }
    }
  }
  
  function handleFocusOut(e: FocusEvent) {
    const target = e?.target as HTMLElement
    if (target?.dataset?.dropdown) {
      if (props.show === undefined) {
        showBody.value = false
      } else {
        emit('toggle', false)
      }
    }
  }
  function close() {
    if (props.show === undefined) {
      showBody.value = false
    } else {
      emit('toggle', false)
    }
  }
  
  watch(
    () => props.show,
    (v) => {
      showBody.value = v ?? false
    }
  )
  </script>
  
  <style scoped>
  @keyframes dropdown {
    0% {
      opacity: 0;
      bottom: -12px;
    }
    100% {
      opacity: 1;
      bottom: -4px;
    }
  }
  
  .dropdown-enter-active {
    animation: dropdown 0.3s ease-in-out;
  }
  .dropdown-leave-active {
    animation: dropdown 0.3s ease-in-out reverse;
  }
  </style>
  