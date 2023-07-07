

import { component$ } from '@builder.io/qwik';
import { Header } from '~/components/ui/Header';

export default component$(() => {
    return (
        <>
            <Header q:slot="header" title="Startseite" subtitle="Digitales SFS-Lastenbuch" />
        </>
    )
});