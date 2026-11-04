import type { Component } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'outline' | 'accent' | 'ghost';

export interface ButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    /** Lucide (or any) icon component, rendered after the label. */
    icon?: Component | null;
    /** When set, renders a <NuxtLink> instead of a <button>. */
    to?: RouteLocationRaw;
    type?: 'button' | 'submit' | 'reset';
}
