import Divider from '@/components/core/Utils/Divider/Divider';

export default {
  title: 'Components/Utils/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export const Horizontal = {
  args: {},
};

export const Vertical = {
  args: {
    orientation: 'vertical',
  },
};

export function HorizontalWithTextInTheMiddle() {
  return (
    <div className="flew-row flex h-full w-full items-center gap-3">
      <Divider orientation="horizontal" />
      <span className="text-zinc-500 dark:text-zinc-400">or</span>
      <Divider orientation="horizontal" />
    </div>
  );
}

export function VerticalWithTextInTheMiddle() {
  return (
    <div className="flew-row flex h-20 w-full items-center gap-3">
      <Divider orientation="vertical" />
      <span className="text-zinc-500 dark:text-zinc-400">
        Parent container&apos;s height is set to h-20
      </span>
      <Divider orientation="vertical" className="h-5 min-h-0" />
      <span className="text-zinc-500 dark:text-zinc-400">
        the Divider&apos;s style on the left is `h-5 min-h-0 `
      </span>
      <Divider orientation="vertical" />
      <span className="text-zinc-500 dark:text-zinc-400">
        the Divider&apos;s style on the left is default
      </span>
    </div>
  );
}
