"use client";

import { motion, useSpring, useScroll } from "motion/react";

type ScrollLinkedProps = {
  withContent?: boolean;
};

export default function ScrollLinked({ withContent = true }: ScrollLinkedProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="fixed inset-x-0 top-0 h-[3px] bg-accent origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
        aria-hidden
      />
      {withContent && <Content />}
    </>
  );
}

function Content() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-40 space-y-4 text-sm text-muted">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </p>
      <p>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
        blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
        ipsum tellus, eu tincidunt neque tincidunt a.
      </p>
      <h2 className="mt-8 text-lg font-heading text-foreground">Sub-header</h2>
      <p>
        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
        tincidunt odio, sit amet laoreet massa fringilla eu.
      </p>
      <p>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
        Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
        Proin sit amet lacus mollis, semper massa ut, rutrum mi.
      </p>
      <p>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
        leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </p>
      <h2 className="mt-8 text-lg font-heading text-foreground">Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
        sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
        metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
        enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </p>
      <p>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </p>
      <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
      <p>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
        Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
        Proin sit amet lacus mollis, semper massa ut, rutrum mi.
      </p>
      <p>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
        leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </p>
      <h2 className="mt-8 text-lg font-heading text-foreground">Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
        sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
        metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
        enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </p>
      <p>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </p>
      <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </p>
      <p>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
        blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
        ipsum tellus, eu tincidunt neque tincidunt a.
      </p>
      <h2 className="mt-8 text-lg font-heading text-foreground">Sub-header</h2>
      <p>
        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
        tincidunt odio, sit amet laoreet massa fringilla eu.
      </p>
      <p>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
        Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
        Proin sit amet lacus mollis, semper massa ut, rutrum mi.
      </p>
      <p>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
        leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </p>
      <h2 className="mt-8 text-lg font-heading text-foreground">Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
        sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
        metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
        enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </p>
      <p>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </p>
      <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
    </article>
  );
}

