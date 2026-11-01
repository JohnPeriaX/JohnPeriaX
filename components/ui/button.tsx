import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      outline: 'border-border bg-background hover:bg-muted',
      secondary: 'bg-secondary text-secondary-foreground',
      ghost: 'hover:bg-muted hover:text-foreground',
      destructive: 'bg-destructive/10 text-destructive',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: { default: 'h-8 gap-1.5 px-2.5', sm: 'h-7 gap-1 px-2.5', lg: 'h-9 gap-1.5 px-2.5', icon: 'size-8' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})

function Button({ className, variant = 'default', size = 'default', ...props }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return <ButtonPrimitive data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
