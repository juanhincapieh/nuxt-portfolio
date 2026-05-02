export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'outline';

export interface ButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    icon?: object | string | Function | null;
    class?: string;
}