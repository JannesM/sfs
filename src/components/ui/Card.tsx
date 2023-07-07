import { component$, Slot } from '@builder.io/qwik';

type Props = {
  class?: string
}

export const Card = component$<Props>((props) => {
  return (
    <div class={"p-5 bg-white rounded-xl shadow-lg " + props.class}>
      <Slot />
    </div>
  )
});
