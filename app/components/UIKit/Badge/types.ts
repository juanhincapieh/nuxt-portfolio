export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'default' | 'outline';

export interface BadgeProps {
    size?: BadgeSize;
    variant?: BadgeVariant;
    hue?: number;
    class?: string;
}